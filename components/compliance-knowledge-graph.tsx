"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Maximize, Minus, Plus, Search, ShieldCheck } from "lucide-react";
import type { Graph } from "@antv/g6";

type EntityKind = "brand" | "product" | "claim" | "rule" | "evidence" | "channel" | "risk";

type Entity = {
  id: string;
  name: string;
  kind: EntityKind;
  group: string;
  meta: string;
  status?: "verified" | "review" | "risk";
};

const kindLabels: Record<EntityKind, string> = {
  brand: "品牌主体",
  product: "产品品规",
  claim: "事实 / 语义",
  rule: "合规规则",
  evidence: "佐证材料",
  channel: "公开信源",
  risk: "风险信号",
};

const kindColors: Record<EntityKind, string> = {
  brand: "#0f766e",
  product: "#2563eb",
  claim: "#7c3aed",
  rule: "#b45309",
  evidence: "#0891b2",
  channel: "#475569",
  risk: "#dc2626",
};

const entities: Entity[] = [
  { id: "brand-liqun", name: "利群", kind: "brand", group: "品牌资产", meta: "品牌主体 · 项目研究对象 · 演示图谱", status: "verified" },
  { id: "org-zhejiang-tobacco", name: "浙江中烟工业有限责任公司", kind: "brand", group: "品牌资产", meta: "项目申报单位 · 文档信息", status: "verified" },
  { id: "product-spec-a", name: "重点品规 A", kind: "product", group: "品牌资产", meta: "匿名演示占位 · 需以授权产品档案替换", status: "review" },
  { id: "product-spec-b", name: "重点品规 B", kind: "product", group: "品牌资产", meta: "匿名演示占位 · 需以授权产品档案替换", status: "review" },
  { id: "product-spec-c", name: "重点品规 C", kind: "product", group: "品牌资产", meta: "匿名演示占位 · 需以授权产品档案替换", status: "review" },
  { id: "fact-brand-history", name: "品牌发展历程", kind: "claim", group: "品牌事实", meta: "正向传播事实 · 引用品牌文化档案", status: "verified" },
  { id: "fact-brand-culture", name: "品牌文化资料", kind: "claim", group: "品牌事实", meta: "正向传播事实 · 逐条关联原始材料", status: "review" },
  { id: "fact-product-spec", name: "产品基本信息", kind: "claim", group: "品牌事实", meta: "客观参数 · 以有效产品档案为准", status: "verified" },
  { id: "fact-public-responsibility", name: "企业公开责任信息", kind: "claim", group: "品牌事实", meta: "仅使用可公开核验的资料", status: "review" },
  { id: "intent-brand-info", name: "品牌资料查询意图", kind: "claim", group: "研究语义", meta: "模拟问题集 · 询问公开品牌资料", status: "verified" },
  { id: "intent-industry-policy", name: "行业法规查询意图", kind: "claim", group: "研究语义", meta: "模拟问题集 · 询问行业法规信息", status: "verified" },
  { id: "rule-ad22", name: "广告法第二十二条", kind: "rule", group: "合规规则", meta: "项目书列举的烟草广告约束 · 法务复核适用性", status: "review" },
  { id: "rule-tobacco-monopoly", name: "烟草专卖相关法规", kind: "rule", group: "合规规则", meta: "项目书要求纳入知识库 · 需维护现行版本", status: "review" },
  { id: "rule-no-inducement", name: "禁止诱导与怂恿吸烟", kind: "rule", group: "合规规则", meta: "项目书提出的风险语义约束 · 待法务确认规则边界", status: "review" },
  { id: "rule-no-success-link", name: "禁止吸烟与成功 / 放松关联", kind: "rule", group: "合规规则", meta: "隐性因果暗示识别规则 · 高风险", status: "risk" },
  { id: "rule-no-minors", name: "敏感受众指向检查", kind: "rule", group: "合规规则", meta: "未成年人及其他敏感受众风险筛查", status: "verified" },
  { id: "rule-no-extreme-claims", name: "绝对化与无依据表述检查", kind: "rule", group: "合规规则", meta: "规则样例 · 发布前需法规审核", status: "review" },
  { id: "evidence-brand-archive", name: "品牌文化档案", kind: "evidence", group: "依据材料", meta: "项目书所述企业资产 · 演示记录", status: "verified" },
  { id: "evidence-product-record", name: "产品基本信息档案", kind: "evidence", group: "依据材料", meta: "字段及版本均为 mock · 待接入授权数据", status: "review" },
  { id: "evidence-public-record", name: "企业公开信息材料", kind: "evidence", group: "依据材料", meta: "仅收录可公开核验来源 · 演示记录", status: "review" },
  { id: "evidence-law-text", name: "法规原文与版本记录", kind: "evidence", group: "依据材料", meta: "法规库样例 · 需法务确认现行有效性", status: "review" },
  { id: "evidence-monitor-baseline", name: "AI生态诊断基线 M-001", kind: "evidence", group: "监测样本", meta: "120 条问题 × 3 个模型 · 提及率 38% / 引用率 26% (mock)", status: "review" },
  { id: "evidence-trace-baseline", name: "负面信源溯源样本 T-001", kind: "evidence", group: "监测样本", meta: "首发识别 84% · Top-K 命中 91% · 延迟 18 分钟 (mock)", status: "review" },
  { id: "channel-official", name: "企业 / 品牌官网", kind: "channel", group: "公开信源", meta: "候选权威信源 · 内容须经授权审核" },
  { id: "channel-government", name: "政府公开信息", kind: "channel", group: "公开信源", meta: "公开信息监测与法规核验来源" },
  { id: "channel-association", name: "行业协会公开信息", kind: "channel", group: "公开信源", meta: "候选行业信源 · 发布权限需单独确认" },
  { id: "channel-media", name: "公开媒体与讨论平台", kind: "channel", group: "监测触点", meta: "公开信息监测 · 不代表获准发布渠道" },
  { id: "risk-unsupported-claim", name: "无依据品牌 / 产品表述", kind: "risk", group: "风险监测", meta: "缺少可追溯证据 · 应拦截并复核", status: "risk" },
  { id: "risk-inducement", name: "诱导性或情绪化关联", kind: "risk", group: "风险监测", meta: "暗示吸烟带来成功、放松等利益 · 高风险", status: "risk" },
  { id: "risk-stale-source", name: "过期或失效信源", kind: "risk", group: "风险监测", meta: "法规 / 事实版本过期 · 需更新", status: "review" },
  { id: "risk-unapproved-publish", name: "未授权内容分发", kind: "risk", group: "风险监测", meta: "发布前置审批缺失 · 阻断流程", status: "risk" },
  { id: "risk-negative-cascade", name: "负面线索传播级联", kind: "risk", group: "风险监测", meta: "合成演示线索 · 识别首发源与关键扩散节点", status: "review" },
];

const relations: Array<[string, string, string]> = [
  ["org-zhejiang-tobacco", "brand-liqun", "品牌所属单位"],
  ["brand-liqun", "product-spec-a", "包含重点品规"], ["brand-liqun", "product-spec-b", "包含重点品规"], ["brand-liqun", "product-spec-c", "包含重点品规"],
  ["brand-liqun", "fact-brand-history", "关联品牌事实"], ["brand-liqun", "fact-brand-culture", "关联品牌事实"],
  ["product-spec-a", "fact-product-spec", "基本信息依据"], ["product-spec-b", "fact-product-spec", "基本信息依据"], ["product-spec-c", "fact-product-spec", "基本信息依据"],
  ["fact-brand-history", "evidence-brand-archive", "档案佐证"], ["fact-brand-culture", "evidence-brand-archive", "档案佐证"],
  ["fact-product-spec", "evidence-product-record", "产品档案佐证"], ["fact-public-responsibility", "evidence-public-record", "公开材料佐证"],
  ["fact-brand-history", "rule-no-inducement", "表述受约束"], ["fact-brand-culture", "rule-no-success-link", "关联风险规则"],
  ["fact-product-spec", "rule-ad22", "内容适用边界"], ["fact-public-responsibility", "rule-ad22", "内容适用边界"],
  ["rule-ad22", "evidence-law-text", "法规原文"], ["rule-tobacco-monopoly", "evidence-law-text", "法规原文"],
  ["rule-no-inducement", "rule-ad22", "规则依据待法务映射"], ["rule-no-success-link", "rule-ad22", "规则依据待法务映射"],
  ["rule-no-minors", "rule-tobacco-monopoly", "规则依据待法务映射"], ["rule-no-extreme-claims", "rule-ad22", "规则依据待法务映射"],
  ["intent-brand-info", "fact-brand-history", "检索相关事实"], ["intent-brand-info", "fact-product-spec", "检索相关事实"],
  ["intent-industry-policy", "rule-ad22", "定位法规知识"], ["intent-industry-policy", "rule-tobacco-monopoly", "定位法规知识"],
  ["evidence-brand-archive", "channel-official", "公开信息核验入口"], ["evidence-public-record", "channel-government", "公开信息来源"],
  ["evidence-public-record", "channel-association", "候选公开来源"], ["channel-media", "evidence-monitor-baseline", "采集公开回答与讨论"],
  ["evidence-monitor-baseline", "brand-liqun", "形成能见度基线"], ["evidence-monitor-baseline", "intent-brand-info", "覆盖问题集"],
  ["evidence-trace-baseline", "risk-negative-cascade", "验证溯源指标"], ["risk-negative-cascade", "channel-media", "跨平台监测触点"],
  ["risk-unsupported-claim", "evidence-product-record", "证据缺失"], ["risk-unsupported-claim", "fact-product-spec", "阻断未核验事实"],
  ["risk-inducement", "rule-no-inducement", "触发语义规则"], ["risk-inducement", "rule-no-success-link", "触发语义规则"],
  ["risk-stale-source", "evidence-law-text", "版本过期风险"], ["risk-stale-source", "evidence-public-record", "需重新核验"],
  ["risk-unapproved-publish", "channel-official", "发布审批门禁"], ["risk-unapproved-publish", "channel-association", "发布审批门禁"],
];

const graphData = {
  nodes: entities.map((entity) => ({
    id: entity.id,
    kind: entity.kind,
    group: entity.group,
    data: {
      ...entity,
      color: kindColors[entity.kind],
      size: entity.kind === "brand" ? 50 : entity.kind === "product" ? 38 : entity.kind === "risk" ? 32 : 30,
    },
  })),
  edges: relations.map(([source, target, label], index) => ({
    id: `relation-${index}`,
    source,
    target,
    data: { label },
  })),
};

export function ComplianceKnowledgeGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<Graph | null>(null);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Entity>(entities[0]);
  const [graphReady, setGraphReady] = useState(false);
  const filteredEntities = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    return query ? entities.filter((entity) => `${entity.name} ${entity.meta} ${kindLabels[entity.kind]}`.toLocaleLowerCase().includes(query)) : [];
  }, [search]);

  useEffect(() => {
    let disposed = false;
    let resizeObserver: ResizeObserver | undefined;

    async function mountGraph() {
      const container = containerRef.current;
      if (!container) return;
      const { Graph: G6Graph } = await import("@antv/g6");
      if (disposed) return;

      const graph = new G6Graph({
        container,
        data: graphData,
        autoFit: "view",
        padding: 40,
        animation: false,
        node: {
          type: "circle",
          style: {
            size: (datum) => Number(datum.data?.size ?? 30),
            fill: (datum) => String(datum.data?.color ?? "#64748b"),
            fillOpacity: 0.94,
            stroke: "#ffffff",
            lineWidth: 2,
            labelText: (datum) => String(datum.data?.name ?? datum.id),
            labelPlacement: "bottom",
            labelOffsetY: 5,
            labelFill: "#334155",
            labelFontSize: (datum) => datum.id === "brand-liqun" ? 12 : 9,
            labelFontWeight: (datum) => datum.id === "brand-liqun" ? 650 : 450,
          },
        },
        edge: {
          type: "line",
          style: {
            stroke: "#b8c4cf",
            strokeOpacity: 0.62,
            lineWidth: 1,
            endArrow: true,
          },
        },
        layout: {
          type: "radial",
          focusNode: "brand-liqun",
          unitRadius: null,
          linkDistance: 750,
          preventOverlap: true,
          strictRadial: true,
          maxPreventOverlapIteration: 300,
        },
        behaviors: ["drag-canvas", "zoom-canvas", "drag-element", "click-select"],
      });
      graphRef.current = graph;
      graph.on("node:click", (event) => {
        const id = ((event as unknown as { target?: { id?: string } }).target)?.id;
        const entity = entities.find((item) => item.id === id);
        if (entity) setSelected(entity);
      });
      await graph.render();
      if (disposed) {
        graph.destroy();
        return;
      }
      setGraphReady(true);
      resizeObserver = new ResizeObserver(() => { void graph.fitView({ when: "always", direction: "both" }); });
      resizeObserver.observe(container);
    }

    void mountGraph();
    return () => {
      disposed = true;
      resizeObserver?.disconnect();
      graphRef.current?.destroy();
      graphRef.current = null;
    };
  }, []);

  const zoom = (factor: number) => {
    const graph = graphRef.current;
    if (!graph) return;
    const current = graph.getZoom();
    void graph.zoomTo(Math.min(2.2, Math.max(0.35, current * factor)), { duration: 180 });
  };

  const focusEntity = (entity: Entity) => {
    setSelected(entity);
    setSearch("");
    void graphRef.current?.focusElement(entity.id, { duration: 300, easing: "ease-in-out" });
  };

  return (
    <section className="knowledge-graph-section" aria-labelledby="knowledge-graph-title">
      <div className="knowledge-graph-heading">
        <div>
          <p className="knowledge-graph-eyebrow"><ShieldCheck size={14} aria-hidden="true" /> KNOWLEDGE GRAPH / COMPLIANCE</p>
          <h2 id="knowledge-graph-title">合规品牌知识图谱</h2>
          <p className="knowledge-graph-description">以利群项目为例，关联品牌事实、法规边界、公开信源与监测风险，展示可追溯的知识与证据关系。</p>
        </div>
        <div className="knowledge-graph-stats" aria-label="图谱规模">
          <span><strong>{entities.length}</strong>实体</span>
          <span><strong>{relations.length}</strong>关系</span>
          <span className="knowledge-graph-live"><i /> MOCK DATA</span>
        </div>
      </div>

      <div className="knowledge-graph-panel">
        <div className="knowledge-graph-tools">
          <div className="knowledge-graph-search-wrap">
            <Search size={15} aria-hidden="true" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="搜索实体、规则或证据" aria-label="搜索图谱实体" />
            {search && filteredEntities.length > 0 && <div className="knowledge-graph-search-results" role="listbox">{filteredEntities.slice(0, 6).map((entity) => <button key={entity.id} type="button" role="option" aria-selected={selected.id === entity.id} onClick={() => focusEntity(entity)}><i style={{ background: kindColors[entity.kind] }} /><span>{entity.name}<small>{kindLabels[entity.kind]}</small></span></button>)}</div>}
          </div>
          <div className="knowledge-graph-zoom" role="toolbar" aria-label="图谱视图控制">
            <button type="button" title="放大" aria-label="放大" onClick={() => zoom(1.2)}><Plus size={15} /></button>
            <button type="button" title="缩小" aria-label="缩小" onClick={() => zoom(0.83)}><Minus size={15} /></button>
            <button type="button" title="适配画布" aria-label="适配画布" onClick={() => void graphRef.current?.fitView({ when: "always", direction: "both" })}><Maximize size={14} /></button>
          </div>
        </div>

        <div className="knowledge-graph-body">
          <div className="knowledge-graph-canvas" ref={containerRef} aria-label="品牌合规关系网络">
            {!graphReady && <div className="knowledge-graph-loading">正在构建知识网络…</div>}
          </div>
          <aside className="knowledge-graph-inspector" aria-live="polite">
            <div className="knowledge-graph-inspector-type"><i style={{ background: kindColors[selected.kind] }} />{kindLabels[selected.kind]}{selected.status && <span className={`kg-status kg-status--${selected.status}`}>{selected.status === "verified" ? "已核验" : selected.status === "risk" ? "高风险" : "待复核"}</span>}</div>
            <h3>{selected.name}</h3>
            <p>{selected.meta}</p>
            <div className="knowledge-graph-inspector-foot"><span>关系网络</span><strong>{relations.filter(([source, target]) => source === selected.id || target === selected.id).length} 条直接关系</strong></div>
          </aside>
        </div>

        <div className="knowledge-graph-legend" aria-label="实体类型图例">
          {(Object.keys(kindLabels) as EntityKind[]).map((kind) => <span key={kind}><i style={{ background: kindColors[kind] }} />{kindLabels[kind]}</span>)}
        </div>
      </div>
      <p className="knowledge-graph-note">Mock 演示子图 · 重点品规为匿名占位 · 法规适用性与规则映射需法务复核 · 项目书建设目标：500+ 实体、1,000+ 关系</p>
    </section>
  );
}
