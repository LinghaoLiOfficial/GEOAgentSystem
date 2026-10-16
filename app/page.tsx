import { DiagramExplorer } from "@/components/diagram-explorer";
import { defaultDiagramId, isDiagramId } from "@/lib/diagrams";

type HomePageProps = {
  searchParams: Promise<{ diagram?: string | string[] }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const requestedDiagram = Array.isArray(params.diagram) ? params.diagram[0] : params.diagram;
  const initialDiagramId = isDiagramId(requestedDiagram) ? requestedDiagram : defaultDiagramId;

  return <DiagramExplorer initialDiagramId={initialDiagramId} />;
}
