"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import type { WorkflowChangeDetail, WorkflowDocument } from "kanx-workflow";

import { WorkflowEditor } from "@/components/workflow-editor";
import { exampleWorkflow } from "@/lib/workflow-example";

export function WorkflowDemo() {
  const [lastChange, setLastChange] = useState<string>("尚未修改");
  const initialLayoutPending = useRef(true);

  const handleChange = useCallback((_: WorkflowDocument, detail: WorkflowChangeDetail) => {
    if (detail.source === "layout" && initialLayoutPending.current) {
      initialLayoutPending.current = false;
      return;
    }
    setLastChange(detail.source === "user" ? "有未保存的修改" : `最近操作：${detail.source}`);
  }, []);

  return (
    <main className="workflow-page">
      <header className="workflow-header">
        <Link href="/" className="workflow-back-link">返回架构图集</Link>
        <div>
          <p>通用组件示例</p>
          <h1>工作流构建器</h1>
        </div>
        <span className="workflow-change-status" aria-live="polite">{lastChange}</span>
      </header>
      <section className="workflow-editor-frame" aria-label="工作流编辑画布">
        <WorkflowEditor
          initialDocument={exampleWorkflow}
          className="workflow-editor"
          onChange={handleChange}
          layout={{ direction: "RIGHT" }}
          locale="zh-CN"
        />
      </section>
    </main>
  );
}
