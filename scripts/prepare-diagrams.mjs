import { readFile, writeFile } from "node:fs/promises";
import { DOMParser, XMLSerializer } from "@xmldom/xmldom";

const sourcePath = new URL("../geo.drawio", import.meta.url);

const diagrams = [
  { id: "rag-workflow", title: "RAG（检索增强生成） Workflow Sandbox", bounds: [-1250, -550, -500, 900] },
  { id: "geo-workflow", title: "GEO（生成式引擎优化） Workflow Sandbox", bounds: [600, 2700, -500, 900] },
  { id: "rag-agent", title: "RAG（检索增强生成） Agent Sandbox", bounds: [-1250, 100, 1000, 2700] },
  { id: "geo-agent", title: "GEO（生成式引擎优化） Agent Sandbox", bounds: [600, 2700, 1000, 2800] },
  { id: "geo", title: "GEO", bounds: [3300, 5400, -600, 1000] },
  { id: "autogeo", title: "AutoGEO", bounds: [5800, 8600, -600, 1100] },
  { id: "agent2ucb", title: "Agent2UCB", bounds: [3300, 5400, 1100, 3000] },
  { id: "agenticgeo", title: "AgenticGEO", bounds: [6000, 8300, 1100, 3100] },
  { id: "our-geo-agentic-system", title: "Our GEO Agentic System", bounds: [1700, 5200, 3500, 5900] },
];

const decodeLabel = (value = "") =>
  value
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replace(/<[^>]*>/g, "")
    .replace(/[《》]/g, "")
    .trim();

const styleMap = (style = "") =>
  new Map(
    style
      .split(";")
      .filter(Boolean)
      .map((part) => {
        const separator = part.indexOf("=");
        return separator === -1
          ? [part, ""]
          : [part.slice(0, separator), part.slice(separator + 1)];
      }),
  );

const serializeStyle = (map) =>
  [...map.entries()].map(([key, value]) => `${key}${value ? `=${value}` : ""}`).join(";") + ";";

const setStyles = (cell, additions) => {
  const styles = styleMap(cell.getAttribute("style"));
  for (const [key, value] of Object.entries(additions)) styles.set(key, String(value));
  cell.setAttribute("style", serializeStyle(styles));
};

const classify = (label) => {
  if (/评估|评价|验证|得分|奖励|频率|位置|Evaluator|Evaluation|Validating|Critic|Reward|Score|EEAT|Dimension|UCB/i.test(label)) {
    return { fillColor: "#FFF7ED", strokeColor: "#EA580C", fontColor: "#7C2D12" };
  }
  if (/LLM|Agent|Controller|Evolver|推理|回答|决策|演化器|控制器/i.test(label)) {
    return { fillColor: "#F5F3FF", strokeColor: "#7C3AED", fontColor: "#4C1D95" };
  }
  if (/用户输入|文档数据|网页数据|营销网页|存储|Data|Input|Storing|Archive|Rules/i.test(label)) {
    return { fillColor: "#EFF6FF", strokeColor: "#2563EB", fontColor: "#1E3A8A" };
  }
  if (/^(是|否|Yes|No)$/i.test(label)) {
    return { fillColor: "#F8FAFC", strokeColor: "#64748B", fontColor: "#334155" };
  }
  return { fillColor: "#ECFDF3", strokeColor: "#079455", fontColor: "#065F46" };
};

const normalizeCell = (cell) => {
  if (cell.getAttribute("edge") === "1") {
    setStyles(cell, {
      rounded: 1,
      strokeColor: "#94A3B8",
      strokeWidth: 1.5,
      endArrow: "block",
      endFill: 1,
      fontColor: "#475467",
      fontSize: 11,
      fontFamily: "Arial",
    });
    return;
  }

  if (cell.getAttribute("vertex") !== "1") return;
  const geometry = cell.getElementsByTagName("mxGeometry")[0];
  const width = Number(geometry?.getAttribute("width") || 0);
  const height = Number(geometry?.getAttribute("height") || 0);
  const label = decodeLabel(cell.getAttribute("value"));

  if (!label && (width >= 500 || height >= 150)) {
    setStyles(cell, {
      rounded: 1,
      arcSize: 4,
      fillColor: "#F8FAFC",
      fillOpacity: 65,
      strokeColor: "#CBD5E1",
      strokeWidth: 1.5,
      dashed: 1,
      dashPattern: "6 6",
      shadow: 0,
    });
    return;
  }

  setStyles(cell, {
    rounded: 1,
    arcSize: 8,
    whiteSpace: "wrap",
    html: 1,
    ...classify(label),
    strokeWidth: 1.5,
    fontSize: 13,
    fontFamily: "Arial",
    spacing: 8,
    align: "center",
    verticalAlign: "middle",
    overflow: "hidden",
    shadow: 0,
  });
};

const isInside = (geometry, [minX, maxX, minY, maxY]) => {
  if (!geometry) return false;
  const x = Number(geometry.getAttribute("x"));
  const y = Number(geometry.getAttribute("y"));
  return Number.isFinite(x) && Number.isFinite(y) && x >= minX && x <= maxX && y >= minY && y <= maxY;
};

const xml = await readFile(sourcePath, "utf8");
const document = new DOMParser().parseFromString(xml, "application/xml");
const existingDiagrams = [...document.getElementsByTagName("diagram")];
const expectedIds = diagrams.map((diagram) => diagram.id);
const existingIds = existingDiagrams.map((diagram) => diagram.getAttribute("name"));

if (existingDiagrams.length !== 1) {
  if (existingIds.length === expectedIds.length && expectedIds.every((id) => existingIds.includes(id))) {
    for (const diagram of existingDiagrams) {
      for (const cell of [...diagram.getElementsByTagName("mxCell")]) normalizeCell(cell);
    }
    await writeFile(sourcePath, `${new XMLSerializer().serializeToString(document)}\n`);
    console.log("Normalized the 9 prepared diagram pages in geo.drawio");
    process.exit(0);
  }
  throw new Error(`Expected one source canvas or the 9 prepared pages, found: ${existingIds.join(", ")}`);
}

const sourceDiagram = existingDiagrams[0];
const sourceModel = sourceDiagram?.getElementsByTagName("mxGraphModel")[0];

if (!sourceModel) throw new Error("geo.drawio does not contain an mxGraphModel");

const sourceCells = [...sourceModel.getElementsByTagName("mxCell")];
const cellsById = new Map(sourceCells.map((cell) => [cell.getAttribute("id"), cell]));
const mxfile = document.documentElement;
while (mxfile.firstChild) mxfile.removeChild(mxfile.firstChild);

for (const definition of diagrams) {
  const selectedIds = new Set(["0", "1"]);

  for (const cell of sourceCells) {
    if (cell.getAttribute("vertex") !== "1") continue;
    const geometry = cell.getElementsByTagName("mxGeometry")[0];
    const label = decodeLabel(cell.getAttribute("value"));
    if (isInside(geometry, definition.bounds) && label !== definition.title) {
      selectedIds.add(cell.getAttribute("id"));
    }
  }

  let changed = true;
  while (changed) {
    changed = false;
    for (const cell of sourceCells) {
      if (cell.getAttribute("edge") !== "1") continue;
      const source = cell.getAttribute("source");
      const target = cell.getAttribute("target");
      if (source && target && selectedIds.has(source) && selectedIds.has(target) && !selectedIds.has(cell.getAttribute("id"))) {
        selectedIds.add(cell.getAttribute("id"));
        changed = true;
      }
    }
  }

  for (const id of [...selectedIds]) {
    let parent = cellsById.get(id)?.getAttribute("parent");
    while (parent && !selectedIds.has(parent)) {
      selectedIds.add(parent);
      parent = cellsById.get(parent)?.getAttribute("parent");
    }
  }

  const diagram = document.createElement("diagram");
  diagram.setAttribute("name", definition.id);
  diagram.setAttribute("id", `geo-${definition.id}`);
  const model = sourceModel.cloneNode(false);
  model.setAttribute("page", "0");
  model.setAttribute("background", "#FFFFFF");
  const root = document.createElement("root");

  for (const sourceCell of sourceCells) {
    if (!selectedIds.has(sourceCell.getAttribute("id"))) continue;
    const cell = sourceCell.cloneNode(true);
    normalizeCell(cell);
    root.appendChild(cell);
  }

  model.appendChild(root);
  diagram.appendChild(model);
  mxfile.appendChild(diagram);
}

await writeFile(sourcePath, `${new XMLSerializer().serializeToString(document)}\n`);
console.log(`Prepared ${diagrams.length} diagram pages in geo.drawio`);
