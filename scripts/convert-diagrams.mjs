import { readFile, writeFile } from "node:fs/promises";
import { DOMParser } from "@xmldom/xmldom";

const sourcePath = new URL("../geo.drawio", import.meta.url);
const outputPath = new URL("../lib/diagram-workflows.ts", import.meta.url);

const categories = [
  { id: "evaluation", pattern: /评估|评价|验证|得分|奖励|频率|位置|Evaluator|Evaluation|Validating|Critic|Reward|Score|EEAT|Dimension|UCB/i, fill: "#FFF7ED", border: "#EA580C", accent: "#C2410C", text: "#7C2D12" },
  { id: "agent", pattern: /LLM|Agent|Controller|Evolver|推理|回答|决策|演化器|控制器/i, fill: "#F5F3FF", border: "#7C3AED", accent: "#6D28D9", text: "#4C1D95" },
  { id: "data", pattern: /用户输入|文档数据|网页数据|营销网页|存储|Data|Input|Storing|Archive|Rules/i, fill: "#EFF6FF", border: "#2563EB", accent: "#1D4ED8", text: "#1E3A8A" },
  { id: "decision", pattern: /^(是|否|Yes|No)(\s|$)/i, fill: "#F8FAFC", border: "#64748B", accent: "#475569", text: "#334155" },
  { id: "tool", pattern: /./, fill: "#ECFDF3", border: "#079455", accent: "#047857", text: "#065F46" },
];

function cleanLabel(value = "") {
  return (value ?? "")
    .replace(/<br\s*\/?\s*>/gi, " ")
    .replace(/<\/(?:div|p|li|h[1-6])\s*>/gi, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/[\s\u00a0]+/g, " ")
    .trim();
}

function geometryOf(cell) {
  const geometry = cell.getElementsByTagName("mxGeometry")[0];
  if (!geometry) throw new Error(`Missing geometry for cell ${cell.getAttribute("id")}`);
  const result = Object.fromEntries(["x", "y", "width", "height"].map((key) => [key, Number(geometry.getAttribute(key) || 0)]));
  if (Object.values(result).some((value) => !Number.isFinite(value))) throw new Error(`Invalid geometry for cell ${cell.getAttribute("id")}`);
  return result;
}

function categoryFor(label) {
  return categories.find((category) => category.pattern.test(label)) ?? categories[categories.length - 1];
}

function toRecord(page) {
  const cells = [...page.getElementsByTagName("mxCell")];
  const vertices = cells.filter((cell) => cell.getAttribute("vertex") === "1");
  const sourceEdges = cells.filter((cell) => cell.getAttribute("edge") === "1");
  const vertexById = new Map(vertices.map((cell) => [cell.getAttribute("id"), cell]));
  const connectedIds = new Set(sourceEdges.flatMap((edge) => [edge.getAttribute("source"), edge.getAttribute("target")]));
  const includedVertices = vertices
    .filter((cell) => connectedIds.has(cell.getAttribute("id")))
    .sort((left, right) => Number(Boolean(cleanLabel(left.getAttribute("value")))) - Number(Boolean(cleanLabel(right.getAttribute("value")))));
  const idMap = new Map(includedVertices.map((cell) => [cell.getAttribute("id"), `${cleanLabel(cell.getAttribute("value")) ? "node" : "region"}-${cell.getAttribute("id")}`]));
  const nodeRenderers = {};

  const nodes = includedVertices.map((cell) => {
    const geometry = geometryOf(cell);
    const label = cleanLabel(cell.getAttribute("value"));
    const region = !label;
    const category = region ? { id: "region", fill: "transparent", border: "transparent", accent: "transparent", text: "transparent" } : categoryFor(label);
    const sourceDimensions = `${geometry.width}x${geometry.height}`;
    const type = region ? `region-${sourceDimensions}` : category.id;
    const [width, height] = region
      ? [geometry.width, geometry.height]
      : category.id === "decision"
        ? [80, 80]
        : sourceDimensions === "200x60"
          ? [200, 60]
          : [170, 40];
    nodeRenderers[type] = {
      width,
      height,
      backgroundColor: category.fill,
      borderColor: category.border,
      borderWidth: region ? 0 : 1,
      borderRadius: 6,
      textColor: category.text,
      accentColor: category.accent,
    };

    return {
      id: idMap.get(cell.getAttribute("id")),
      name: label || "路由分区",
      type,
      fields: {},
      position: { x: geometry.x, y: geometry.y },
    };
  });

  const edges = sourceEdges.map((cell) => {
    const sourceId = cell.getAttribute("source");
    const targetId = cell.getAttribute("target");
    if (!vertexById.has(sourceId) || !vertexById.has(targetId) || !idMap.has(sourceId) || !idMap.has(targetId)) {
      throw new Error(`${page.getAttribute("name")}: edge ${cell.getAttribute("id")} has an unmapped endpoint`);
    }
    return {
      id: cell.getAttribute("id"),
      name: cleanLabel(cell.getAttribute("value")),
      type: "default",
      source_id: idMap.get(sourceId),
      target_id: idMap.get(targetId),
      fields: {},
    };
  });

  const nodesById = new Map(nodes.map((node) => [node.id, node]));
  let horizontal = 0;
  let vertical = 0;
  for (const edge of edges) {
    const source = nodesById.get(edge.source_id);
    const target = nodesById.get(edge.target_id);
    const sourceStyle = nodeRenderers[source.type];
    const targetStyle = nodeRenderers[target.type];
    const dx = target.position.x + targetStyle.width / 2 - source.position.x - sourceStyle.width / 2;
    const dy = target.position.y + targetStyle.height / 2 - source.position.y - sourceStyle.height / 2;
    if (Math.abs(dx) > Math.abs(dy)) horizontal += 1;
    else vertical += 1;
  }

  return {
    version: 2,
    direction: horizontal >= vertical ? "RIGHT" : "DOWN",
    nodes,
    edges,
    nodeRenderers,
    edgeRenderers: {
      default: { strokeColor: "#687785", strokeWidth: 1.6, labelColor: "#465360", labelBackgroundColor: "#FFFFFF", markerEnd: "arrow" },
    },
  };
}

const source = await readFile(sourcePath, "utf8");
const document = new DOMParser().parseFromString(source, "application/xml");
const pages = [...document.getElementsByTagName("diagram")];
const expectedIds = ["rag-workflow", "geo-workflow", "rag-agent", "geo-agent", "geo", "autogeo", "agent2ucb", "agenticgeo", "our-geo-agentic-system"];
const records = Object.fromEntries(pages.map((page) => [page.getAttribute("name"), toRecord(page)]));

if (pages.length !== expectedIds.length || expectedIds.some((id) => !records[id])) {
  throw new Error(`Expected diagram pages: ${expectedIds.join(", ")}; found: ${pages.map((page) => page.getAttribute("name")).join(", ")}`);
}

for (const page of pages) {
  const record = records[page.getAttribute("name")];
  const nodeIds = new Set(record.nodes.map((node) => node.id));
  if (nodeIds.size !== record.nodes.length) throw new Error(`${page.getAttribute("name")}: duplicate workflow node ids`);
  if (new Set(record.edges.map((edge) => edge.id)).size !== record.edges.length) throw new Error(`${page.getAttribute("name")}: duplicate workflow edge ids`);
  for (const node of record.nodes) {
    if (!record.nodeRenderers[node.type]) throw new Error(`${page.getAttribute("name")}: missing renderer for ${node.type}`);
  }
  for (const edge of record.edges) {
    if (!nodeIds.has(edge.source_id) || !nodeIds.has(edge.target_id)) throw new Error(`${page.getAttribute("name")}: unresolved edge ${edge.id}`);
  }
  console.log(`Converted ${page.getAttribute("name")}: ${record.nodes.filter((node) => !node.id.startsWith("region-")).length} labeled nodes, ${record.edges.length} edges`);
}

const output = [
  'import type { WorkflowDocument } from "kanx-workflow";',
  'import type { DiagramId } from "./diagrams";',
  "",
  `export const diagramWorkflows = ${JSON.stringify(records, null, 2)} satisfies Record<DiagramId, WorkflowDocument & { direction: "RIGHT" | "DOWN" }>;`,
  "",
].join("\n");

await writeFile(outputPath, output);
