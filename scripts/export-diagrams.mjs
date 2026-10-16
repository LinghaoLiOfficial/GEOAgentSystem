import { execFileSync } from "node:child_process";
import { copyFile, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { DOMParser, XMLSerializer } from "@xmldom/xmldom";

const sourcePath = new URL("../geo.drawio", import.meta.url);
const outputDirectory = new URL("../public/diagrams/", import.meta.url);
const xml = await readFile(sourcePath, "utf8");
const source = new DOMParser().parseFromString(xml, "application/xml");
const diagrams = [...source.getElementsByTagName("diagram")];

if (diagrams.length !== 9) throw new Error(`Expected 9 diagrams, found ${diagrams.length}`);

await mkdir(outputDirectory, { recursive: true });

const estimatedWidth = (label, fontSize) =>
  [...label].reduce(
    (width, character) => width + (/[㐀-鿿]/.test(character) ? fontSize : fontSize * 0.58),
    0,
  );

const fittedFontSize = (label, preferredSize, availableWidth) =>
  Math.max(8, Math.min(preferredSize, Math.floor((availableWidth / estimatedWidth(label, 1)) * 10) / 10));

const splitLabel = (rawLabel, availableWidth) => {
  const label = rawLabel
    .replaceAll("&nbsp;", " ")
    .replaceAll("&amp;", "&")
    .replace(/\s+/g, " ")
    .trim();
  const words = label.split(" ");

  for (let index = 1; index < words.length; index += 1) {
    const left = words.slice(0, index).join(" ");
    const right = words.slice(index).join(" ");
    const leftHasChinese = /[㐀-鿿]/.test(left);
    const rightHasChinese = /[㐀-鿿]/.test(right);
    if (leftHasChinese && !rightHasChinese) return { lines: [left, right], bilingual: true };
    if (!leftHasChinese && rightHasChinese) return { lines: [right, left], bilingual: true };
  }

  if (estimatedWidth(label, 12) <= availableWidth) return { lines: [label], bilingual: false };

  if (words.length > 1) {
    let best = null;
    for (let index = 1; index < words.length; index += 1) {
      const lines = [words.slice(0, index).join(" "), words.slice(index).join(" ")];
      const widest = Math.max(...lines.map((line) => estimatedWidth(line, 11)));
      if (!best || widest < best.widest) best = { lines, widest };
    }
    return { lines: best.lines, bilingual: false };
  }

  const characters = [...label];
  const midpoint = Math.ceil(characters.length / 2);
  return { lines: [characters.slice(0, midpoint).join(""), characters.slice(midpoint).join("")], bilingual: false };
};

const centerSvgLabels = (svg) => {
  const document = new DOMParser().parseFromString(svg, "image/svg+xml");
  const textNodes = [...document.getElementsByTagName("text")];

  for (const text of textNodes) {
    let shape = text.previousSibling;
    while (shape && shape.nodeType !== 1) shape = shape.previousSibling;
    if (!shape || shape.nodeName !== "rect") continue;

    const x = Number(shape.getAttribute("x"));
    const y = Number(shape.getAttribute("y"));
    const width = Number(shape.getAttribute("width"));
    const height = Number(shape.getAttribute("height"));
    if (![x, y, width, height].every(Number.isFinite)) continue;

    const label = text.textContent.trim();
    const { lines, bilingual } = splitLabel(label, width - 16);
    const centerX = x + width / 2;
    const centerY = y + height / 2;
    text.setAttribute("x", String(centerX));
    text.setAttribute("y", String(centerY));
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-family", 'Arial, "PingFang SC", "Microsoft YaHei", sans-serif');
    text.setAttribute("font-size", "12");
    text.setAttribute("font-weight", "500");

    while (text.firstChild) text.removeChild(text.firstChild);
    if (lines.length === 1) {
      text.appendChild(document.createTextNode(lines[0]));
      continue;
    }

    const primary = document.createElement("tspan");
    primary.setAttribute("x", String(centerX));
    primary.setAttribute("dy", "-0.55em");
    primary.setAttribute("font-size", String(fittedFontSize(lines[0], bilingual ? 13 : 11, width - 16)));
    primary.setAttribute("font-weight", bilingual ? "600" : "500");
    primary.appendChild(document.createTextNode(lines[0]));
    text.appendChild(primary);

    const secondary = document.createElement("tspan");
    secondary.setAttribute("x", String(centerX));
    secondary.setAttribute("dy", "1.35em");
    secondary.setAttribute("font-size", String(fittedFontSize(lines[1], bilingual ? 10 : 11, width - 16)));
    secondary.setAttribute("font-weight", bilingual ? "400" : "500");
    if (bilingual) secondary.setAttribute("opacity", "0.82");
    secondary.appendChild(document.createTextNode(lines[1]));
    text.appendChild(secondary);
  }

  const svgRoot = document.documentElement;
  const directChildren = [...svgRoot.childNodes].filter((node) => node.nodeType === 1);
  const canvasBackground = directChildren.find((node) => node.nodeName === "rect");
  const definitions = directChildren.filter((node) => node.nodeName === "defs");
  const edges = directChildren.filter((node) => ["line", "path", "polyline", "polygon"].includes(node.nodeName));
  const labels = directChildren.filter((node) => node.nodeName === "text");
  const groupBackgrounds = directChildren.filter((node) => {
    if (node === canvasBackground || node.nodeName !== "rect") return false;
    const width = Number(node.getAttribute("width"));
    const height = Number(node.getAttribute("height"));
    return Number.isFinite(width) && Number.isFinite(height) && (width >= 500 || height >= 150);
  });
  const nodeShapes = directChildren.filter(
    (node) => node.nodeName === "rect" && node !== canvasBackground && !groupBackgrounds.includes(node),
  );

  for (const background of groupBackgrounds) background.setAttribute("fill-opacity", "0.72");
  for (const node of [canvasBackground, ...definitions, ...groupBackgrounds, ...nodeShapes, ...edges, ...labels]) {
    if (node) svgRoot.appendChild(node);
  }

  return new XMLSerializer().serializeToString(document);
};

for (const diagram of diagrams) {
  const id = diagram.getAttribute("name");
  const document = new DOMParser().parseFromString('<mxfile host="app.diagrams.net"/>', "application/xml");
  document.documentElement.appendChild(document.importNode(diagram, true));
  const temporaryInput = join(tmpdir(), `${id}-${process.pid}.drawio`);
  const output = new URL(`${id}.svg`, outputDirectory);

  await writeFile(temporaryInput, new XMLSerializer().serializeToString(document));
  try {
    execFileSync("pnpm", ["exec", "drawio-headless", "render", temporaryInput, output.pathname], {
      stdio: "inherit",
    });
  } finally {
    await rm(temporaryInput, { force: true });
  }

  const rawSvg = await readFile(output, "utf8");
  const svg = centerSvgLabels(rawSvg);
  await writeFile(output, svg);
  if (!/<svg\b[^>]*viewBox="[^"]+"/.test(svg)) throw new Error(`${id}: SVG is missing a viewBox`);
  if (/<script\b/i.test(svg)) throw new Error(`${id}: SVG contains a script`);
  if (/\b(?:href|src)="https?:/i.test(svg)) throw new Error(`${id}: SVG contains an external resource`);
  console.log(`Exported ${id}.svg`);
}

await copyFile(sourcePath, new URL("geo.drawio", outputDirectory));
console.log("Copied geo.drawio source");
