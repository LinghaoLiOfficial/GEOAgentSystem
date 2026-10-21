import { diagramWorkflows } from "@/lib/diagram-workflows";

const system = diagramWorkflows["our-geo-agentic-system"];

const domainDefinitions: { id: string; title: string; subtitle: string; color: string; nodeIndexes: number[] }[] = [
  {
    id: "sources",
    title: "输入与知识",
    subtitle: "Query · Content · Knowledge",
    color: "#227c8b",
    nodeIndexes: [0, 12, 13, ...range(18, 27), 35, 69, 71, 74],
  },
  {
    id: "retrieval",
    title: "检索与搜索",
    subtitle: "Retrieval · Web Search",
    color: "#3b7e5a",
    nodeIndexes: [1, 2, 3, 4, 14, 15, 16, 17, 73],
  },
  {
    id: "agent",
    title: "Agent 编排",
    subtitle: "Reasoning · Tool Use · Answer",
    color: "#4568a8",
    nodeIndexes: [5, 6, 7, 8, 9, 10, 11, 28, 30, 47],
  },
  {
    id: "evaluation",
    title: "多维评估",
    subtitle: "Quality · Visibility · Reward",
    color: "#bd7041",
    nodeIndexes: [29, ...range(31, 34), ...range(36, 46), 48, 49, 53, 70],
  },
  {
    id: "strategy",
    title: "策略选择",
    subtitle: "Bandit · Prompt · Policy",
    color: "#93713d",
    nodeIndexes: [...range(50, 52), ...range(54, 56), 66, 67],
  },
  {
    id: "execution",
    title: "内容实施与引擎",
    subtitle: "Optimization · Generative Engines",
    color: "#8c5c7e",
    nodeIndexes: [...range(57, 65), 68, 72],
  },
] as const;

const nodes = system.nodes.map((node, index) => ({
  id: node.id,
  name: node.name,
  type: node.type,
  domainId: domainDefinitions.find((domain) => domain.nodeIndexes.includes(index))?.id ?? "sources",
}));

export const system3DModel = {
  domains: domainDefinitions.map(({ nodeIndexes, ...domain }) => ({ ...domain, count: nodeIndexes.length })),
  nodes,
  edges: system.edges.map((edge) => ({
    id: edge.id,
    sourceId: edge.source_id,
    targetId: edge.target_id,
  })),
};

export type System3DModel = typeof system3DModel;

function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}
