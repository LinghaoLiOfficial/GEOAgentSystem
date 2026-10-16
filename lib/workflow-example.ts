import type { WorkflowDocument } from "kanx-workflow";

export const exampleWorkflow: WorkflowDocument = {
  version: 2,
  nodes: [
    {
      id: "trigger",
      name: "接收请求",
      type: "trigger",
      fields: { description: "工作流入口" },
      position: { x: 80, y: 140 },
    },
    {
      id: "process",
      name: "处理任务",
      type: "process",
      fields: { description: "执行主要处理步骤" },
      position: { x: 340, y: 140 },
    },
    {
      id: "complete",
      name: "返回结果",
      type: "result",
      fields: { description: "输出处理结果" },
      position: { x: 600, y: 140 },
    },
  ],
  edges: [
    {
      id: "trigger-process",
      name: "请求",
      type: "default",
      source_id: "trigger",
      target_id: "process",
      fields: {},
    },
    {
      id: "process-complete",
      name: "结果",
      type: "default",
      source_id: "process",
      target_id: "complete",
      fields: {},
    },
  ],
  nodeRenderers: {
    trigger: { accentColor: "#2563eb", backgroundColor: "#eff6ff", borderColor: "#93c5fd" },
    process: { accentColor: "#d97706", backgroundColor: "#fffbeb", borderColor: "#fcd34d" },
    result: { accentColor: "#059669", backgroundColor: "#ecfdf5", borderColor: "#6ee7b7" },
  },
  edgeRenderers: {
    default: { strokeColor: "#64748b", markerEnd: "arrow" },
  },
};
