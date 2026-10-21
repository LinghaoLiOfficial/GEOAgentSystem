"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { CSS2DObject, CSS2DRenderer } from "three/addons/renderers/CSS2DRenderer.js";

import type { System3DModel } from "@/lib/system-3d-model";

type SceneProps = {
  model: System3DModel;
  activeDomainId: string | null;
  selectedNodeId: string | null;
  resetView: number;
  onSelectDomain: (domainId: string | null) => void;
  onSelectNode: (nodeId: string) => void;
};

const domainPositions: Record<string, [number, number, number]> = {
  sources: [-7.1, 0, 3.4],
  retrieval: [-3.25, 0, 3.4],
  agent: [0.6, 0, 1.05],
  evaluation: [4.65, 0, 2.7],
  strategy: [4.0, 0, -2.1],
  execution: [-1.1, 0, -3.35],
};

const overviewCamera = new THREE.Vector3(10, 10, 15);

export function System3DScene(props: SceneProps) {
  const { model, activeDomainId, selectedNodeId, resetView, onSelectDomain, onSelectNode } = props;
  const hostRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "unavailable">("loading");

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let statusFrame = 0;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true, powerPreference: "high-performance" });
    } catch {
      statusFrame = window.requestAnimationFrame(() => setStatus("unavailable"));
      return;
    }

    const width = Math.max(host.clientWidth, 1);
    const height = Math.max(host.clientHeight, 1);
    let narrowViewport = width < 720;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#eef2f3");
    scene.fog = new THREE.Fog("#eef2f3", 23, 44);

    const camera = new THREE.PerspectiveCamera(narrowViewport ? 42 : 34, width / height, 0.1, 100);
    camera.position.copy(overviewCamera).setLength(narrowViewport ? 26 : 14.5);
    const controls = new OrbitControls(camera, renderer.domElement);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    controls.enableDamping = !reducedMotion;
    controls.dampingFactor = 0.07;
    controls.minDistance = 8;
    controls.maxDistance = 34;
    controls.minPolarAngle = Math.PI * 0.12;
    controls.maxPolarAngle = Math.PI * 0.42;
    controls.target.set(0, 0, 0);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.domElement.className = "system3d-webgl";
    renderer.domElement.setAttribute("aria-label", "GEO Agentic System 三维模型");
    host.appendChild(renderer.domElement);

    const labels = new CSS2DRenderer();
    labels.setSize(width, height);
    labels.domElement.className = "system3d-label-layer";
    host.appendChild(labels.domElement);

    scene.add(new THREE.HemisphereLight("#ffffff", "#a4b3bb", 2.05));
    const key = new THREE.DirectionalLight("#ffffff", 2.4);
    key.position.set(-7, 14, 9);
    scene.add(key);
    const rim = new THREE.DirectionalLight("#cae1de", 1.1);
    rim.position.set(8, 7, -10);
    scene.add(rim);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(200, 200),
      new THREE.MeshStandardMaterial({ color: "#eef2f3", roughness: 1 }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.72;
    scene.add(floor);
    const grid = new THREE.GridHelper(60, 50, "#cbd5d9", "#dce3e5");
    grid.position.y = -0.69;
    scene.add(grid);

    const selectable: THREE.Object3D[] = [];
    const nodePositions = new Map<string, THREE.Vector3>();
    const nodeById = new Map(model.nodes.map((node) => [node.id, node]));
    const nodesByDomain = new Map<string, typeof model.nodes>();
    for (const node of model.nodes) {
      const collection = nodesByDomain.get(node.domainId) ?? [];
      collection.push(node);
      nodesByDomain.set(node.domainId, collection);
    }

    const expanded = Boolean(activeDomainId);
    const activePosition = activeDomainId ? domainPositions[activeDomainId] : undefined;
    const layoutPositions = new Map<string, THREE.Vector3>();

    for (const domain of model.domains) {
      const [x, y, z] = domainPositions[domain.id];
      layoutPositions.set(domain.id, new THREE.Vector3(x, y, z));
    }

    if (activeDomainId && activePosition) {
      layoutPositions.set(activeDomainId, new THREE.Vector3(...activePosition));
      controls.target.set(activePosition[0], 0, activePosition[2]);
      camera.position.copy(
        new THREE.Vector3(activePosition[0], 0, activePosition[2]).add(
          new THREE.Vector3(9.5, 9.8, 13).setLength(narrowViewport ? 24 : 18),
        ),
      );
    } else {
      camera.position.copy(overviewCamera);
      controls.target.set(0, 0, 0);
    }

    for (const domain of model.domains) {
      const position = layoutPositions.get(domain.id)!;
      const isActive = activeDomainId === domain.id;
      const faded = expanded && !isActive;
      const group = new THREE.Group();
      group.position.copy(position);
      group.userData = { domainId: domain.id };
      scene.add(group);

      const nodes = nodesByDomain.get(domain.id) ?? [];
      const boxWidth = isActive ? 9.5 : 3.55;
      const boxDepth = isActive ? 6.4 : 2.75;
      const alpha = faded ? 0.25 : 1;
      const shell = new THREE.Mesh(
        new THREE.BoxGeometry(boxWidth, 0.4, boxDepth),
        new THREE.MeshStandardMaterial({
          color: domain.color,
          roughness: 0.48,
          metalness: 0.12,
          transparent: faded,
          opacity: alpha,
        }),
      );
      shell.position.y = 0.12;
      shell.userData = { domainId: domain.id };
      group.add(shell);
      selectable.push(shell);

      const edgeLines = new THREE.LineSegments(
        new THREE.EdgesGeometry(shell.geometry),
        new THREE.LineBasicMaterial({ color: faded ? "#b8c2c6" : domain.color, transparent: true, opacity: faded ? 0.2 : 0.65 }),
      );
      edgeLines.position.copy(shell.position);
      group.add(edgeLines);

      const title = makeLabel(domain.title, "system3d-domain-label", faded);
      title.position.set(0, 0.54, 0);
      group.add(title);

      const count = makeLabel(`${nodes.length} MODULES`, "system3d-domain-count", faded);
      count.position.set(0, 0.3, boxDepth / 2 - 0.28);
      group.add(count);

      if (!isActive) continue;

      const columns = nodes.length <= 12 ? 3 : 4;
      const xSpacing = columns === 3 ? 2.55 : 2.12;
      const zSpacing = columns === 3 ? 1.45 : 1.18;
      nodes.forEach((node, index) => {
        const col = index % columns;
        const row = Math.floor(index / columns);
        const localX = (col - (columns - 1) / 2) * xSpacing;
        const localZ = (row - (Math.ceil(nodes.length / columns) - 1) / 2) * zSpacing;
        const worldPosition = new THREE.Vector3(position.x + localX, 0.84, position.z + localZ);
        nodePositions.set(node.id, worldPosition);

        const nodeGroup = new THREE.Group();
        nodeGroup.position.set(localX, 0.84, localZ);
        nodeGroup.userData = { nodeId: node.id, domainId: domain.id };
        group.add(nodeGroup);
        const picked = selectedNodeId === node.id;
        const mesh = new THREE.Mesh(
          new THREE.BoxGeometry(1.86, 0.46, 0.72),
          new THREE.MeshStandardMaterial({
            color: typeColor(node.type),
            roughness: 0.43,
            metalness: 0.04,
            emissive: picked ? new THREE.Color(domain.color) : new THREE.Color("#000000"),
            emissiveIntensity: picked ? 0.34 : 0,
          }),
        );
        mesh.userData = { nodeId: node.id, domainId: domain.id };
        nodeGroup.add(mesh);
        selectable.push(mesh);

        const outline = new THREE.LineSegments(
          new THREE.EdgesGeometry(mesh.geometry),
          new THREE.LineBasicMaterial({ color: picked ? "#18252e" : "#ffffff", transparent: true, opacity: 0.78 }),
        );
        nodeGroup.add(outline);
        const label = makeLabel(nodeLabel(node.name), "system3d-node-label", false);
        label.position.y = 0.04;
        label.position.z = 0.37;
        nodeGroup.add(label);
      });
    }

    if (!expanded) {
      const totals = new Map<string, number>();
      for (const edge of model.edges) {
        const from = nodeById.get(edge.sourceId)?.domainId;
        const to = nodeById.get(edge.targetId)?.domainId;
        if (!from || !to || from === to) continue;
        const key = `${from}:${to}`;
        totals.set(key, (totals.get(key) ?? 0) + 1);
      }
      for (const [key, count] of totals) {
        const [from, to] = key.split(":");
        const start = layoutPositions.get(from)!.clone().add(new THREE.Vector3(0, 0.24, 0));
        const end = layoutPositions.get(to)!.clone().add(new THREE.Vector3(0, 0.24, 0));
        const midpoint = start.clone().lerp(end, 0.5).add(new THREE.Vector3(0, 1.2 + Math.min(count, 6) * 0.09, 0));
        const curve = new THREE.QuadraticBezierCurve3(start, midpoint, end);
        const line = new THREE.Mesh(
          new THREE.TubeGeometry(curve, 28, 0.026 + Math.min(count, 10) * 0.003, 5, false),
          new THREE.MeshStandardMaterial({ color: "#52656d", roughness: 0.42, metalness: 0.1, transparent: true, opacity: 0.62 }),
        );
        scene.add(line);
        const direction = end.clone().sub(curve.getPoint(0.88)).normalize();
        const arrow = new THREE.Mesh(
          new THREE.ConeGeometry(0.12, 0.3, 8),
          new THREE.MeshStandardMaterial({ color: "#52656d", roughness: 0.45, transparent: true, opacity: 0.72 }),
        );
        arrow.position.copy(curve.getPoint(0.88));
        arrow.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
        scene.add(arrow);
      }
    } else if (activeDomainId) {
      const memberIds = new Set((nodesByDomain.get(activeDomainId) ?? []).map((node) => node.id));
      const seen = new Set<string>();
      for (const edge of model.edges) {
        if (!memberIds.has(edge.sourceId) || !memberIds.has(edge.targetId)) continue;
        const from = nodePositions.get(edge.sourceId);
        const to = nodePositions.get(edge.targetId);
        if (!from || !to) continue;
        const key = [edge.sourceId, edge.targetId].sort().join(":");
        if (seen.has(key)) continue;
        seen.add(key);
        const start = from.clone().add(new THREE.Vector3(0, -0.14, 0));
        const end = to.clone().add(new THREE.Vector3(0, -0.14, 0));
        const line = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints([start, end]),
          new THREE.LineBasicMaterial({ color: "#53656d", transparent: true, opacity: 0.52 }),
        );
        scene.add(line);
      }
    }

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let pointerStart: [number, number] | null = null;
    const onPointerDown = (event: PointerEvent) => { pointerStart = [event.clientX, event.clientY]; };
    const onPointerUp = (event: PointerEvent) => {
      if (!pointerStart || Math.hypot(event.clientX - pointerStart[0], event.clientY - pointerStart[1]) > 5) return;
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(selectable, false)[0]?.object;
      if (!hit) return;
      const { domainId, nodeId } = hit.userData as { domainId?: string; nodeId?: string };
      if (nodeId) onSelectNode(nodeId);
      else if (domainId) onSelectDomain(domainId);
    };
    renderer.domElement.addEventListener("pointerdown", onPointerDown);
    renderer.domElement.addEventListener("pointerup", onPointerUp);

    const resize = () => {
      const nextWidth = Math.max(host.clientWidth, 1);
      const nextHeight = Math.max(host.clientHeight, 1);
      camera.aspect = nextWidth / nextHeight;
      const nextNarrowViewport = nextWidth < 720;
      if (nextNarrowViewport !== narrowViewport) {
        narrowViewport = nextNarrowViewport;
        camera.fov = narrowViewport ? 42 : 34;
        if (activeDomainId && activePosition) {
          camera.position.copy(
            new THREE.Vector3(activePosition[0], 0, activePosition[2]).add(
              new THREE.Vector3(9.5, 9.8, 13).setLength(narrowViewport ? 24 : 18),
            ),
          );
          controls.target.set(activePosition[0], 0, activePosition[2]);
        } else {
          camera.position.copy(overviewCamera).setLength(narrowViewport ? 26 : 14.5);
          controls.target.set(0, 0, 0);
        }
      }
      camera.updateProjectionMatrix();
      renderer.setSize(nextWidth, nextHeight);
      labels.setSize(nextWidth, nextHeight);
      if (reducedMotion) render();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);

    const render = () => {
      controls.update();
      renderer.render(scene, camera);
      labels.render(scene, camera);
    };
    if (reducedMotion) {
      controls.addEventListener("change", render);
      render();
    } else {
      renderer.setAnimationLoop(render);
    }
    statusFrame = window.requestAnimationFrame(() => setStatus("ready"));

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(statusFrame);
      controls.removeEventListener("change", render);
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      renderer.domElement.removeEventListener("pointerup", onPointerUp);
      renderer.setAnimationLoop(null);
      controls.dispose();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.LineSegments || object instanceof THREE.Line) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
      labels.domElement.remove();
    };
  }, [activeDomainId, model, onSelectDomain, onSelectNode, resetView, selectedNodeId]);

  return (
    <div className="system3d-scene-host" ref={hostRef}>
      {status === "loading" && <div className="system3d-status">正在初始化 WebGL 场景…</div>}
      {status === "unavailable" && (
        <div className="system3d-status system3d-status--error">
          <strong>当前环境无法启动 WebGL</strong>
          <span>可使用下方系统域目录查看结构信息。</span>
        </div>
      )}
    </div>
  );
}

function makeLabel(text: string, className: string, faded: boolean) {
  const element = document.createElement("div");
  element.className = className;
  element.textContent = text;
  if (faded) element.classList.add("is-faded");
  const label = new CSS2DObject(element);
  label.center.set(0.5, 0.5);
  return label;
}

function typeColor(type: string) {
  switch (type) {
    case "agent": return "#dbe4f2";
    case "data": return "#d8e9e7";
    case "evaluation": return "#f0e2d4";
    case "decision": return "#e6e8ed";
    default: return "#e5e9e6";
  }
}

function nodeLabel(name: string) {
  return name.replace(/\s+[A-Za-z].*$/, "");
}
