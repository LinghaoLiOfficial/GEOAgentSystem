"use client";

import {
  Check,
  ChevronDown,
  Maximize2,
  X,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { WorkflowEditor } from "@/components/workflow-editor";
import { ComplianceKnowledgeGraph } from "@/components/compliance-knowledge-graph";
import { System3DExperience } from "@/components/system-3d-experience";
import {
  diagramGroups,
  diagrams,
  type DiagramDefinition,
  type DiagramGroup,
  type DiagramId,
} from "@/lib/diagrams";
import { diagramWorkflows } from "@/lib/diagram-workflows";
import { system3DModel } from "@/lib/system-3d-model";

type DiagramExplorerProps = {
  initialDiagramId: DiagramId;
};

const groupAccent: Record<DiagramGroup, string> = {
  foundations: "#2563eb",
  research: "#d97706",
  system: "#059669",
};

export function DiagramExplorer({ initialDiagramId }: DiagramExplorerProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedId, setSelectedId] = useState(initialDiagramId);
  const [activeGroup, setActiveGroup] = useState<DiagramGroup>(
    diagrams.find((diagram) => diagram.id === initialDiagramId)?.group ?? "system",
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fallbackFullscreen, setFallbackFullscreen] = useState(false);
  const [nativeFullscreen, setNativeFullscreen] = useState(false);
  const explorerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const selected = useMemo(
    () => diagrams.find((diagram) => diagram.id === selectedId) ?? diagrams[diagrams.length - 1],
    [selectedId],
  );
  const visibleDiagrams = useMemo(
    () => diagrams.filter((diagram) => diagram.group === activeGroup),
    [activeGroup],
  );

  useEffect(() => {
    const onFullscreenChange = () => {
      setNativeFullscreen(Boolean(document.fullscreenElement));
      if (!document.fullscreenElement) setFallbackFullscreen(false);
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let frame = 0;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => canvas.querySelector<HTMLButtonElement>(".react-flow__controls-fitview")?.click());
      });
    });
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [selected.id]);

  const chooseDiagram = (diagram: DiagramDefinition) => {
    setSelectedId(diagram.id);
    setActiveGroup(diagram.group);
    setMobileMenuOpen(false);
    router.replace(`${pathname}?diagram=${diagram.id}`, { scroll: false });
  };

  const changeGroup = (group: DiagramGroup) => {
    setActiveGroup(group);
    const first = diagrams.find((diagram) => diagram.group === group);
    if (first) chooseDiagram(first);
  };

  const toggleFullscreen = async () => {
    const explorer = explorerRef.current;
    if (!explorer) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    if (explorer.requestFullscreen) {
      let timeout = 0;
      try {
        const entered = await Promise.race([
          explorer.requestFullscreen().then(() => true),
          new Promise<boolean>((resolve) => {
            timeout = window.setTimeout(() => resolve(false), 700);
          }),
        ]);
        window.clearTimeout(timeout);
        if (entered && document.fullscreenElement) return;
      } catch {
        // Fall through to the in-page fullscreen mode.
      } finally {
        window.clearTimeout(timeout);
      }
    }
    setFallbackFullscreen((value) => !value);
  };

  return (
    <div
      ref={explorerRef}
      className={`explorer-shell${fallbackFullscreen ? " explorer-shell--fullscreen" : ""}`}
      style={{ "--group-accent": groupAccent[selected.group] } as React.CSSProperties}
    >
      <header className="app-header">
        <div className="brand-mark" aria-hidden="true">G</div>
        <div className="brand-copy">
          <strong>GEO Agentic System</strong>
          <span>Architecture Atlas</span>
        </div>
      </header>

      <div className="group-tabs" role="tablist" aria-label="图表分组">
        {diagramGroups.map((group) => (
          <button
            key={group.id}
            type="button"
            role="tab"
            aria-selected={activeGroup === group.id}
            className={activeGroup === group.id ? "is-active" : ""}
            onClick={() => changeGroup(group.id)}
          >
            <span className="group-tab-label">{group.label}</span>
            <span className="group-tab-short">{group.shortLabel}</span>
            <span className="group-count">{diagrams.filter((diagram) => diagram.group === group.id).length}</span>
          </button>
        ))}
      </div>

      <div className="mobile-selector">
        <button type="button" onClick={() => setMobileMenuOpen((value) => !value)} aria-expanded={mobileMenuOpen}>
          <span><small>当前图表</small>{selected.titleZh}</span>
          <ChevronDown size={18} aria-hidden="true" />
        </button>
        {mobileMenuOpen && (
          <div className="mobile-selector-menu">
            {visibleDiagrams.map((diagram) => (
              <button key={diagram.id} type="button" onClick={() => chooseDiagram(diagram)}>
                <span>{diagram.titleZh}<small>{diagram.titleEn}</small></span>
                {diagram.id === selected.id && <Check size={16} aria-hidden="true" />}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={`explorer-layout${selected.id === "our-geo-agentic-system" ? " explorer-layout--system3d" : ""}`}>
        <aside className="diagram-sidebar" aria-label="架构图导航">
          <nav>
            <p className="sidebar-label">图表目录</p>
            {visibleDiagrams.map((diagram, index) => (
              <button
                type="button"
                key={diagram.id}
                className={diagram.id === selected.id ? "is-selected" : ""}
                onClick={() => chooseDiagram(diagram)}
                aria-current={diagram.id === selected.id ? "page" : undefined}
              >
                <span className="diagram-index">{String(index + 1).padStart(2, "0")}</span>
                <span><strong>{diagram.titleZh}</strong><small>{diagram.titleEn}</small></span>
              </button>
            ))}
          </nav>

          <section className="diagram-summary" aria-labelledby="summary-title">
            <p className="sidebar-label" id="summary-title">图示摘要</p>
            <p>{selected.summary}</p>
            <ul>
              {selected.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </section>
        </aside>

        <main className="diagram-workspace">
          <div className="diagram-heading">
            <div>
              <p>{diagramGroups.find((group) => group.id === selected.group)?.label}</p>
              <h1>{selected.titleZh}</h1>
              <span>{selected.titleEn}</span>
            </div>
            <div className="diagram-position" aria-label={`第 ${diagrams.indexOf(selected) + 1} 张，共 ${diagrams.length} 张`}>
              <strong>{String(diagrams.indexOf(selected) + 1).padStart(2, "0")}</strong>
              <span>/ {String(diagrams.length).padStart(2, "0")}</span>
            </div>
          </div>

          <section className="canvas-frame" aria-label={`${selected.titleZh} 图表查看器`}>
            <div className="canvas-toolbar" role="toolbar" aria-label="图表控制">
              <ToolbarButton label={nativeFullscreen || fallbackFullscreen ? "退出全屏" : "全屏"} onClick={toggleFullscreen}>
                {nativeFullscreen || fallbackFullscreen ? <X size={17} /> : <Maximize2 size={17} />}
              </ToolbarButton>
            </div>

            <div ref={canvasRef} className="diagram-canvas">
              <WorkflowEditor
                key={`${selected.id}-${nativeFullscreen}-${fallbackFullscreen}`}
                initialDocument={diagramWorkflows[selected.id]}
                className="diagram-flow"
                locale="zh-CN"
                readOnly
                layout={{ direction: diagramWorkflows[selected.id].direction, autoLayout: false }}
                semanticZoom={false}
                routing={{ edgeNodeSpacing: 18, edgeEdgeSpacing: 14, crossingRadius: 8, rerouteOnDrag: false }}
              />
            </div>
          </section>

          <div className="mobile-summary">
            <p>{selected.summary}</p>
            <ul>{selected.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
          </div>
          {selected.id === "our-geo-agentic-system" && (
            <>
              <System3DExperience model={system3DModel} returnHref={`/?diagram=${selected.id}`} embedded />
              <ComplianceKnowledgeGraph />
            </>
          )}
        </main>
      </div>
    </div>
  );
}

function ToolbarButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return <button type="button" className="toolbar-button" onClick={onClick} title={label} aria-label={label}>{children}</button>;
}
