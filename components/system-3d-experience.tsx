"use client";

import {
  ArrowLeft,
  Focus,
  RotateCcw,
} from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useCallback, useState } from "react";

import type { System3DModel } from "@/lib/system-3d-model";

const System3DScene = dynamic(
  () => import("@/components/system-3d-scene").then((module) => module.System3DScene),
  {
    ssr: false,
    loading: () => <div className="system3d-status">正在构建三维系统视图…</div>,
  },
);

export function System3DExperience({
  model,
  returnHref,
  embedded = false,
}: {
  model: System3DModel;
  returnHref: string;
  embedded?: boolean;
}) {
  const [activeDomainId, setActiveDomainId] = useState<string | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [resetView, setResetView] = useState(0);
  const activeDomain = model.domains.find((domain) => domain.id === activeDomainId);
  const selectedNode = model.nodes.find((node) => node.id === selectedNodeId);
  const relatedNodes = selectedNode
    ? model.edges
        .filter((edge) => edge.sourceId === selectedNode.id || edge.targetId === selectedNode.id)
        .map((edge) => model.nodes.find((node) => node.id === (edge.sourceId === selectedNode.id ? edge.targetId : edge.sourceId)))
        .filter((node): node is System3DModel["nodes"][number] => Boolean(node))
    : [];

  const selectDomain = useCallback((domainId: string | null) => {
    setActiveDomainId(domainId);
    setSelectedNodeId(null);
  }, []);

  const PageRoot = embedded ? "section" : "main";

  return (
    <PageRoot className={`system3d-page${embedded ? " system3d-page--embedded" : ""}`}>
      {!embedded && <header className="system3d-header">
        <Link className="system3d-back" href={returnHref} aria-label="返回架构图集" title="返回架构图集">
          <ArrowLeft size={18} aria-hidden="true" />
        </Link>
        <div className="system3d-brand">
          <strong>GEO Agentic System</strong>
          <span>Interactive System Model</span>
        </div>
        <div className="system3d-header-actions">
          <button type="button" title="显示全部系统域" aria-label="显示全部系统域" onClick={() => selectDomain(null)}>
            <Focus size={17} aria-hidden="true" />
          </button>
          <button type="button" title="重置视角" aria-label="重置视角" onClick={() => setResetView((value) => value + 1)}>
            <RotateCcw size={17} aria-hidden="true" />
          </button>
        </div>
      </header>}

      <section className="system3d-intro">
        <div>
          <p className="system3d-kicker">SYSTEM ARCHITECTURE / 3D</p>
          <h1>GEO 智能体系统</h1>
          <p className="system3d-description">从多源输入到策略实施与效果反馈的可展开系统视图</p>
        </div>
        <p className="system3d-count">{model.domains.length} 个系统域 <span>·</span> {model.nodes.length} 个模块 <span>·</span> {model.edges.length} 条关系</p>
      </section>

      <section className="system3d-stage" aria-label="可交互的 GEO 系统三维场景">
        <System3DScene
          model={model}
          activeDomainId={activeDomainId}
          selectedNodeId={selectedNodeId}
          resetView={resetView}
          onSelectDomain={selectDomain}
          onSelectNode={setSelectedNodeId}
        />
        <div className="system3d-stage-caption">
          <span>{activeDomain ? activeDomain.title : "SYSTEM OVERVIEW"}</span>
          <span>拖动旋转 · 滚轮缩放 · 选择系统域展开</span>
        </div>
      </section>

      <section className="system3d-lower">
        <nav className="system3d-domains" aria-label="系统域">
          <button
            type="button"
            className={activeDomainId === null ? "is-active" : ""}
            onClick={() => selectDomain(null)}
          >
            <span className="domain-swatch" style={{ "--domain-color": "#53616d" } as React.CSSProperties} />
            <span><strong>全局视图</strong><small>{model.nodes.length} 个模块</small></span>
          </button>
          {model.domains.map((domain) => (
            <button
              key={domain.id}
              type="button"
              className={activeDomainId === domain.id ? "is-active" : ""}
              onClick={() => selectDomain(domain.id)}
              aria-pressed={activeDomainId === domain.id}
            >
              <span className="domain-swatch" style={{ "--domain-color": domain.color } as React.CSSProperties} />
              <span><strong>{domain.title}</strong><small>{domain.count} 个模块</small></span>
            </button>
          ))}
        </nav>

        <aside className="system3d-inspector" aria-live="polite">
          {activeDomain && (
            <label className="system3d-module-select">
              <span>查看域内模块</span>
              <select value={selectedNodeId ?? ""} onChange={(event) => setSelectedNodeId(event.target.value || null)}>
                <option value="">选择模块…</option>
                {model.nodes.filter((node) => node.domainId === activeDomain.id).map((node) => (
                  <option key={node.id} value={node.id}>{node.name}</option>
                ))}
              </select>
            </label>
          )}
          {selectedNode ? (
            <>
              <div className="inspector-heading">
                <span className={`node-type-marker node-type-marker--${selectedNode.type}`} />
                <div><small>{activeDomain?.title ?? "系统模块"}</small><h2>{selectedNode.name}</h2></div>
              </div>
              <p>{describeNode(selectedNode.type)}。该模块在当前系统图中与 {relatedNodes.length} 个模块直接连接。</p>
              {relatedNodes.length > 0 && <div className="inspector-relations">{relatedNodes.slice(0, 5).map((node) => <span key={node.id}>{node.name}</span>)}</div>}
            </>
          ) : activeDomain ? (
            <>
              <small>系统域 / {activeDomain.subtitle}</small>
              <h2>{activeDomain.title}</h2>
              <p>{activeDomain.count} 个模块。选择场景中的模块可查看其直接关联。</p>
            </>
          ) : (
            <>
              <small>系统概览 / SYSTEM OVERVIEW</small>
              <h2>从检索到持续优化的闭环</h2>
              <p>选择一个系统域聚焦其内部模块；点击具体模块查看关联关系。</p>
            </>
          )}
        </aside>
      </section>
    </PageRoot>
  );
}

function describeNode(type: string) {
  switch (type) {
    case "agent": return "负责推理、观察或内容生成的智能体环节";
    case "data": return "为系统提供输入、上下文或持久化信息的数据资源";
    case "evaluation": return "对输出质量、可见度或策略反馈进行评估的环节";
    case "decision": return "根据当前状态选择下一步执行路径的决策点";
    default: return "由 Agent 编排调用的检索、处理或策略工具";
  }
}
