export type DiagramGroup = "foundations" | "research" | "system";

export type DiagramId =
  | "rag-workflow"
  | "geo-workflow"
  | "rag-agent"
  | "geo-agent"
  | "geo"
  | "autogeo"
  | "agent2ucb"
  | "agenticgeo"
  | "our-geo-agentic-system";

export interface DiagramDefinition {
  id: DiagramId;
  group: DiagramGroup;
  titleZh: string;
  titleEn: string;
  summary: string;
  highlights: string[];
  asset: string;
  width: number;
  height: number;
  alt: string;
}

export const diagramGroups: { id: DiagramGroup; label: string; shortLabel: string }[] = [
  { id: "foundations", label: "基础范式", shortLabel: "基础" },
  { id: "research", label: "GEO 方法演进", shortLabel: "方法演进" },
  { id: "system", label: "自研系统", shortLabel: "系统" },
];

export const diagrams: DiagramDefinition[] = [
  {
    id: "rag-workflow",
    group: "foundations",
    titleZh: "RAG 工作流沙箱",
    titleEn: "RAG Workflow Sandbox",
    summary: "以线性工作流呈现从查询改写、向量检索到回答评估的标准 RAG 数据路径。",
    highlights: ["查询嵌入与召回", "重排与上下文融合", "回答生成与结果评估"],
    asset: "/diagrams/rag-workflow.svg",
    width: 498,
    height: 962,
    alt: "RAG 工作流沙箱架构图，展示用户查询、向量检索、上下文融合、LLM 回答及结果评估流程。",
  },
  {
    id: "geo-workflow",
    group: "foundations",
    titleZh: "GEO 工作流沙箱",
    titleEn: "GEO Workflow Sandbox",
    summary: "在 RAG 主链路基础上加入搜索、SEO 与 GEO 实施环节，形成面向生成式引擎的内容优化闭环。",
    highlights: ["RAG 与 Web 搜索协同", "SEO 实施", "GEO 实施与验证"],
    asset: "/diagrams/geo-workflow.svg",
    width: 828,
    height: 962,
    alt: "GEO 工作流沙箱架构图，展示检索增强、Web 搜索、SEO 和 GEO 优化链路。",
  },
  {
    id: "rag-agent",
    group: "foundations",
    titleZh: "RAG 智能体沙箱",
    titleEn: "RAG Agent Sandbox",
    summary: "用智能体推理和工具调用决策替代固定编排，使检索、融合和回答过程能够动态循环。",
    highlights: ["LLM 推理", "工具调用决策", "动态 RAG 执行"],
    asset: "/diagrams/rag-agent.svg",
    width: 1008,
    height: 1006,
    alt: "RAG 智能体沙箱架构图，展示 LLM 推理、工具选择、检索执行和反馈循环。",
  },
  {
    id: "geo-agent",
    group: "foundations",
    titleZh: "GEO 智能体沙箱",
    titleEn: "GEO Agent Sandbox",
    summary: "统一 RAG、搜索、SEO 与 GEO 工具，由智能体根据当前状态选择动作并迭代优化结果。",
    highlights: ["多工具智能编排", "搜索与检索融合", "GEO 迭代反馈"],
    asset: "/diagrams/geo-agent.svg",
    width: 1858,
    height: 1213,
    alt: "GEO 智能体沙箱架构图，展示智能体对 RAG、搜索、SEO 与 GEO 工具的协同编排。",
  },
  {
    id: "geo",
    group: "research",
    titleZh: "GEO 基础方法",
    titleEn: "Generative Engine Optimization",
    summary: "归纳 GEO 的内容编辑策略以及位置、可见度等评估维度，构成后续研究方案的共同基础。",
    highlights: ["内容增强策略", "权威性与可读性", "位置加权评估"],
    asset: "/diagrams/geo.svg",
    width: 1638,
    height: 1102,
    alt: "GEO 基础方法架构图，展示内容优化策略和生成式引擎可见度评估体系。",
  },
  {
    id: "autogeo",
    group: "research",
    titleZh: "AutoGEO",
    titleEn: "Automated GEO Preference Learning",
    summary: "通过解释、提取、合并和过滤偏好规则，将生成式引擎反馈转化为可复用的优化提示。",
    highlights: ["偏好规则提取", "规则合并与过滤", "自动化提示生成"],
    asset: "/diagrams/autogeo.svg",
    width: 2478,
    height: 1066,
    alt: "AutoGEO 架构图，展示生成式引擎偏好规则的解释、提取、合并和应用流程。",
  },
  {
    id: "agent2ucb",
    group: "research",
    titleZh: "Agent2UCB",
    titleEn: "Agent-to-UCB Optimization",
    summary: "以双 UCB 控制器在多个编辑维度间进行策略选择，并由评估智能体持续提供奖励反馈。",
    highlights: ["双 UCB 策略选择", "EEAT-R 分析", "评估智能体反馈"],
    asset: "/diagrams/agent2ucb.svg",
    width: 1358,
    height: 1206,
    alt: "Agent2UCB 架构图，展示双 UCB 控制器、内容编辑策略和评估智能体反馈。",
  },
  {
    id: "agenticgeo",
    group: "research",
    titleZh: "AgenticGEO",
    titleEn: "Agentic Generative Engine Optimization",
    summary: "结合离线 Critic 对齐与在线协同演化，用 Critic 引导多轮内容改写和策略进化。",
    highlights: ["离线 Critic 对齐", "MAP-Elites 演化", "多轮改写推理"],
    asset: "/diagrams/agenticgeo.svg",
    width: 1408,
    height: 1207,
    alt: "AgenticGEO 架构图，展示离线 Critic 对齐、在线协同演化和多轮内容改写。",
  },
  {
    id: "our-geo-agentic-system",
    group: "system",
    titleZh: "我们的 GEO 智能体系统",
    titleEn: "Our GEO Agentic System",
    summary: "整合检索、搜索、策略生成、内容实施和多维评估，形成可推理、可调用工具、可持续迭代的 GEO 智能体系统。",
    highlights: ["统一 Agent 编排", "多源检索与策略实施", "评估驱动的优化闭环"],
    asset: "/diagrams/our-geo-agentic-system.svg",
    width: 3198,
    height: 2043,
    alt: "完整 GEO 智能体系统架构图，展示多源检索、智能体推理、策略实施和评估反馈闭环。",
  },
];

export const defaultDiagramId: DiagramId = "our-geo-agentic-system";

export function isDiagramId(value: unknown): value is DiagramId {
  return typeof value === "string" && diagrams.some((diagram) => diagram.id === value);
}
