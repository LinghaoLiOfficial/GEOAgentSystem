import type { Metadata } from "next";

import { System3DExperience } from "@/components/system-3d-experience";
import { defaultDiagramId, isDiagramId } from "@/lib/diagrams";
import { system3DModel } from "@/lib/system-3d-model";

export const metadata: Metadata = {
  title: "GEO 系统三维视图 | GEO Architecture Atlas",
  description: "以可交互三维视图探索 GEO Agentic System 的模块分层与数据流。",
};

type System3DPageProps = {
  searchParams: Promise<{ diagram?: string | string[] }>;
};

export default async function System3DPage({ searchParams }: System3DPageProps) {
  const params = await searchParams;
  const requestedDiagram = Array.isArray(params.diagram) ? params.diagram[0] : params.diagram;
  const returnDiagramId = isDiagramId(requestedDiagram) ? requestedDiagram : defaultDiagramId;
  const returnHref = requestedDiagram && isDiagramId(requestedDiagram) ? `/?diagram=${returnDiagramId}` : "/";

  return <System3DExperience model={system3DModel} returnHref={returnHref} />;
}
