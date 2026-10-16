import type { Metadata } from "next";

import { WorkflowDemo } from "./workflow-demo";

export const metadata: Metadata = {
  title: "工作流构建器 | GEO Architecture Atlas",
  description: "基于 Kanx Workflow 的可复用工作流编辑器示例",
};

export default function WorkflowPage() {
  return <WorkflowDemo />;
}
