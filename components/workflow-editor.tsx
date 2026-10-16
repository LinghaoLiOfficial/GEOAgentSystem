"use client";

import {
  WorkflowBuilder,
  type EdgeRendererDictionary,
  type NodeRendererDictionary,
  type WorkflowBuilderProps,
  type WorkflowDocument,
} from "kanx-workflow";

export type WorkflowEditorProps = Omit<
  WorkflowBuilderProps,
  | "defaultEdges"
  | "defaultNodes"
  | "edgeRenderers"
  | "edges"
  | "nodeRenderers"
  | "nodes"
> & {
  initialDocument: WorkflowDocument;
  nodeRenderers?: NodeRendererDictionary;
  edgeRenderers?: EdgeRendererDictionary;
};

export function WorkflowEditor({
  initialDocument,
  nodeRenderers,
  edgeRenderers,
  ...builderProps
}: WorkflowEditorProps) {
  return (
    <WorkflowBuilder
      {...builderProps}
      defaultNodes={initialDocument.nodes}
      defaultEdges={initialDocument.edges}
      nodeRenderers={nodeRenderers ?? initialDocument.nodeRenderers}
      edgeRenderers={edgeRenderers ?? initialDocument.edgeRenderers}
    />
  );
}
