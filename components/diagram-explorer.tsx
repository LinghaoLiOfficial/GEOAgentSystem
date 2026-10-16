"use client";

import Panzoom, { type PanzoomObject } from "@panzoom/panzoom";
import Link from "next/link";
import {
  Check,
  ChevronDown,
  Expand,
  Focus,
  Maximize2,
  Minus,
  Plus,
  RefreshCw,
  X,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  diagramGroups,
  diagrams,
  type DiagramDefinition,
  type DiagramGroup,
  type DiagramId,
} from "@/lib/diagrams";

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
  const [scale, setScale] = useState(1);
  const [loadState, setLoadState] = useState<"loading" | "ready" | "error">("loading");
  const [assetRevision, setAssetRevision] = useState(0);
  const [fallbackFullscreen, setFallbackFullscreen] = useState(false);
  const [nativeFullscreen, setNativeFullscreen] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const explorerRef = useRef<HTMLDivElement>(null);
  const panzoomRef = useRef<PanzoomObject | null>(null);

  const selected = useMemo(
    () => diagrams.find((diagram) => diagram.id === selectedId) ?? diagrams[diagrams.length - 1],
    [selectedId],
  );
  const visibleDiagrams = useMemo(
    () => diagrams.filter((diagram) => diagram.group === activeGroup),
    [activeGroup],
  );

  useEffect(() => {
    const image = imageRef.current;
    if (!image?.complete) return;
    setLoadState(image.naturalWidth > 0 ? "ready" : "error");
  }, [assetRevision, selected.id]);

  const fitToViewport = useCallback(
    (animate = true) => {
      const viewport = viewportRef.current;
      const panzoom = panzoomRef.current;
      if (!viewport || !panzoom) return;
      const padding = viewport.clientWidth < 640 ? 28 : 72;
      const nextFit = Math.min(
        (viewport.clientWidth - padding) / selected.width,
        (viewport.clientHeight - padding) / selected.height,
      );
      const normalizedFit = Math.max(0.08, nextFit);
      panzoom.setOptions({ minScale: normalizedFit * 0.5, maxScale: 4 });
      panzoom.pan(0, 0, { animate: false, force: true });
      panzoom.zoom(normalizedFit, { animate, force: true });
      setScale(normalizedFit);
    },
    [selected.height, selected.width],
  );

  useEffect(() => {
    const image = imageRef.current;
    const viewport = viewportRef.current;
    if (!image || !viewport || loadState !== "ready") return;

    const panzoom = Panzoom(image, {
      canvas: true,
      cursor: "grab",
      maxScale: 4,
      minScale: 0.08,
      step: 0.2,
      duration: 180,
      overflow: "hidden",
    });
    panzoomRef.current = panzoom;
    const onChange = () => setScale(panzoom.getScale());
    image.addEventListener("panzoomchange", onChange);

    const onWheel = (event: WheelEvent) => {
      if (document.activeElement !== viewport && !event.ctrlKey && !event.metaKey) return;
      event.preventDefault();
      panzoom.zoomWithWheel(event, { animate: false });
    };
    viewport.addEventListener("wheel", onWheel, { passive: false });

    const resizeObserver = new ResizeObserver(() => fitToViewport(false));
    resizeObserver.observe(viewport);
    requestAnimationFrame(() => fitToViewport(false));

    return () => {
      resizeObserver.disconnect();
      viewport.removeEventListener("wheel", onWheel);
      image.removeEventListener("panzoomchange", onChange);
      panzoom.destroy();
      panzoomRef.current = null;
    };
  }, [assetRevision, fitToViewport, loadState, selected.id]);

  useEffect(() => {
    const onFullscreenChange = () => {
      setNativeFullscreen(Boolean(document.fullscreenElement));
      if (!document.fullscreenElement) setFallbackFullscreen(false);
      requestAnimationFrame(() => fitToViewport(false));
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, [fitToViewport]);

  const chooseDiagram = (diagram: DiagramDefinition) => {
    setSelectedId(diagram.id);
    setActiveGroup(diagram.group);
    setLoadState("loading");
    setMobileMenuOpen(false);
    router.replace(`${pathname}?diagram=${diagram.id}`, { scroll: false });
  };

  const changeGroup = (group: DiagramGroup) => {
    setActiveGroup(group);
    const first = diagrams.find((diagram) => diagram.group === group);
    if (first) chooseDiagram(first);
  };

  const zoomIn = () => panzoomRef.current?.zoomIn({ animate: true });
  const zoomOut = () => panzoomRef.current?.zoomOut({ animate: true });
  const zoomActual = () => {
    panzoomRef.current?.pan(0, 0, { animate: false, force: true });
    panzoomRef.current?.zoom(1, { animate: true, force: true });
  };

  const toggleFullscreen = async () => {
    const explorer = explorerRef.current;
    if (!explorer) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    if (explorer.requestFullscreen) {
      try {
        await explorer.requestFullscreen();
        requestAnimationFrame(() => fitToViewport(false));
        return;
      } catch {
        // Fall through to the in-page fullscreen mode.
      }
    }
    setFallbackFullscreen((value) => !value);
    requestAnimationFrame(() => fitToViewport(false));
  };

  const onCanvasKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "+" || event.key === "=") zoomIn();
    else if (event.key === "-") zoomOut();
    else if (event.key === "0") zoomActual();
    else if (event.key.toLowerCase() === "f") fitToViewport();
    else return;
    event.preventDefault();
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
        <Link className="header-workflow-link" href="/workflow">
          工作流构建器
        </Link>
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

      <div className="explorer-layout">
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
              <ToolbarButton label="缩小" onClick={zoomOut}><Minus size={17} /></ToolbarButton>
              <span className="zoom-value" aria-live="polite">{Math.round(scale * 100)}%</span>
              <ToolbarButton label="放大" onClick={zoomIn}><Plus size={17} /></ToolbarButton>
              <span className="toolbar-divider" aria-hidden="true" />
              <ToolbarButton label="适应窗口" onClick={() => fitToViewport()}><Focus size={17} /></ToolbarButton>
              <ToolbarButton label="原始比例" onClick={zoomActual}><Expand size={17} /></ToolbarButton>
              <ToolbarButton label={nativeFullscreen || fallbackFullscreen ? "退出全屏" : "全屏"} onClick={toggleFullscreen}>
                {nativeFullscreen || fallbackFullscreen ? <X size={17} /> : <Maximize2 size={17} />}
              </ToolbarButton>
            </div>

            <div
              ref={viewportRef}
              className="diagram-canvas"
              tabIndex={0}
              onKeyDown={onCanvasKeyDown}
              onDoubleClick={() => fitToViewport()}
            >
              {loadState === "loading" && <div className="canvas-status"><span className="loading-mark" />正在准备图表</div>}
              {loadState === "error" && (
                <div className="canvas-status canvas-status--error">
                  <strong>图表加载失败</strong>
                  <button type="button" onClick={() => { setAssetRevision((value) => value + 1); setLoadState("loading"); }}>
                    <RefreshCw size={15} />重新加载
                  </button>
                </div>
              )}
              {/* The SVG must remain an unoptimized DOM image so Panzoom can transform its intrinsic canvas. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={`${selected.id}-${assetRevision}`}
                ref={imageRef}
                src={`${selected.asset}?v=${assetRevision}`}
                width={selected.width}
                height={selected.height}
                style={{ marginLeft: -selected.width / 2, marginTop: -selected.height / 2 }}
                alt={selected.alt}
                draggable={false}
                className={loadState === "ready" ? "is-ready" : ""}
                onLoad={() => setLoadState("ready")}
                onError={() => setLoadState("error")}
              />
            </div>
          </section>

          <div className="mobile-summary">
            <p>{selected.summary}</p>
            <ul>{selected.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
          </div>
        </main>
      </div>
    </div>
  );
}

function ToolbarButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return <button type="button" className="toolbar-button" onClick={onClick} title={label} aria-label={label}>{children}</button>;
}
