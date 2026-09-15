"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import { resizeImage } from "./image-resize";
import { defaultCanvasZoom, getDefaultView } from "./default-view";
import type { ImageBounds, ResizeCorner } from "./image-resize";

export type Tool = "select" | "draw";
export type ObjectKind = "image" | "drawing" | "note" | "intro";
export type CanvasObject = {
  id: string;
  kind: ObjectKind;
  x: number;
  y: number;
  width?: number;
  height?: number;
  color?: string;
  points?: [number, number][];
  text?: string;
  rotation?: number;
};

export function isResizable(kind: ObjectKind) {
  return kind !== "drawing";
}
type View = { x: number; y: number; zoom: number };
type Rotate = { centerX: number; centerY: number; startAngle: number; base: number };
type Gesture = { pointer: number; startX: number; startY: number; view: View; object?: CanvasObject; action: "pan" | "pending" | "move" | "draw" | "resize" | "rotate"; resize?: { corner: ResizeCorner; bounds: ImageBounds }; rotate?: Rotate; points?: [number, number][]; before: CanvasObject[]; tap?: string | null };
type Pinch = { distance: number; view: View; midX: number; midY: number };

function pointerAngle(rotate: Rotate, clientX: number, clientY: number) {
  return Math.atan2(clientY - rotate.centerY, clientX - rotate.centerX) * 180 / Math.PI;
}
function isTouch(event: PointerEvent<HTMLDivElement>) {
  return event.pointerType === "touch";
}
function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}
const colors = ["#426bc2", "#df8faa", "#efd477"];
export { colors };

export function usePlayground(initial: CanvasObject[]) {
  const fieldRef = useRef<HTMLDivElement>(null);
  const gesture = useRef<Gesture | null>(null);
  const space = useRef(false);
  const lastRingTap = useRef<{ id: string; time: number } | null>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const pinch = useRef<Pinch | null>(null);
  const [coarse, setCoarse] = useState(false);
  const [objects, setObjects] = useState(initial);
  const [history, setHistory] = useState<CanvasObject[][]>([]);
  const [view, setView] = useState<View>({ x: 0, y: 0, zoom: defaultCanvasZoom });
  const [tool, setTool] = useState<Tool>("select");
  const [color, setColor] = useState(colors[0]);
  const [selected, setSelected] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState<ResizeCorner | null>(null);
  const [rotating, setRotating] = useState(false);
  const [resetVersion, setResetVersion] = useState(0);
  const viewRef = useRef(view);
  viewRef.current = view;

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;
    let width = field.clientWidth;
    let height = field.clientHeight;
    setView(getDefaultView(width, height));
    const observer = new ResizeObserver(() => {
      const nextWidth = field.clientWidth;
      const nextHeight = field.clientHeight;
      const previousDefault = getDefaultView(width, height);
      const nextDefault = getDefaultView(nextWidth, nextHeight);
      const dx = nextDefault.x - previousDefault.x;
      const dy = nextDefault.y - previousDefault.y;
      const zoomChanged = previousDefault.zoom !== nextDefault.zoom;
      width = nextWidth;
      height = nextHeight;
      if (dx || dy || zoomChanged) setView(previous => {
        const stillDefaultZoom = Math.abs(previous.zoom - previousDefault.zoom) < 0.001;
        return { zoom: stillDefaultZoom ? nextDefault.zoom : previous.zoom, x: previous.x + dx, y: previous.y + dy };
      });
    });
    observer.observe(field);
    const wheel = (event: WheelEvent) => {
      event.preventDefault();
      if (gesture.current) return;
      setView(previous => {
        if (!event.ctrlKey && !event.metaKey) return { ...previous, x: previous.x - event.deltaX, y: previous.y - event.deltaY };
        const zoom = Math.max(0.35, Math.min(2, previous.zoom * Math.exp(-event.deltaY * 0.008)));
        const ratio = zoom / previous.zoom;
        return { zoom, x: event.clientX - (event.clientX - previous.x) * ratio, y: event.clientY - (event.clientY - previous.y) * ratio };
      });
    };
    const release = () => { space.current = false; };
    const media = window.matchMedia("(pointer: coarse)");
    const syncCoarse = () => {
      const next = media.matches || window.innerWidth <= 600;
      setCoarse(next);
      if (next) setTool("select");
    };
    syncCoarse();
    media.addEventListener("change", syncCoarse);
    window.addEventListener("resize", syncCoarse);
    const blockPageGesture = (event: Event) => event.preventDefault();
    field.addEventListener("wheel", wheel, { passive: false });
    field.addEventListener("touchmove", blockPageGesture, { passive: false });
    field.addEventListener("gesturestart", blockPageGesture);
    field.addEventListener("gesturechange", blockPageGesture);
    window.addEventListener("keyup", release);
    window.addEventListener("blur", release);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", syncCoarse);
      window.removeEventListener("resize", syncCoarse);
      field.removeEventListener("wheel", wheel);
      field.removeEventListener("touchmove", blockPageGesture);
      field.removeEventListener("gesturestart", blockPageGesture);
      field.removeEventListener("gesturechange", blockPageGesture);
      window.removeEventListener("keyup", release);
      window.removeEventListener("blur", release);
    };
  }, []);

  function remember(before = objects) { setHistory(previous => [...previous.slice(-39), before]); }
  function updateObject(object: CanvasObject) { setObjects(previous => previous.map(item => item.id === object.id ? object : item)); }
  function undo() {
    const previous = history.at(-1);
    if (!previous) return;
    setObjects(previous);
    setHistory(history.slice(0, -1));
    setSelected(previous.some(item => item.id === selected) ? selected : null);
  }
  function remove() {
    if (!selected) return;
    remember();
    setObjects(objects.filter(item => item.id !== selected));
    setSelected(null);
  }
  function reset() {
    setResetVersion(previous => previous + 1);
    remember();
    setObjects(initial);
    setSelected(null);
    setTool("select");
    setView(getDefaultView(fieldRef.current?.clientWidth ?? 0, fieldRef.current?.clientHeight ?? 0));
  }
  function zoomBy(factor: number) {
    const centerX = (fieldRef.current?.clientWidth ?? 0) / 2;
    const centerY = (fieldRef.current?.clientHeight ?? 0) / 2;
    setView(previous => {
      const zoom = Math.max(0.35, Math.min(2, previous.zoom * factor));
      return { zoom, x: centerX - (centerX - previous.x) * zoom / previous.zoom, y: centerY - (centerY - previous.y) * zoom / previous.zoom };
    });
  }
  function chooseColor(value: string) {
    setColor(value);
    const object = objects.find(item => item.id === selected && item.kind === "drawing");
    if (object) { remember(); updateObject({ ...object, color: value }); }
  }
  function pointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.button !== 0 && event.button !== 1) return;
    const target = event.target instanceof HTMLElement ? event.target : event.currentTarget;
    if (!target.closest("[data-editable-intro]")) event.preventDefault();
    fieldRef.current?.focus({ preventScroll: true });
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.current.size >= 2) {
      const [a, b] = [...pointers.current.values()];
      pinch.current = { distance: distance(a, b) || 1, view: viewRef.current, midX: (a.x + b.x) / 2, midY: (a.y + b.y) / 2 };
      gesture.current = null;
      setResizing(null);
      setRotating(false);
      setDragging(true);
      return;
    }
    if (gesture.current) return;
    const element = target.closest<HTMLElement>("[data-object]");
    const id = element?.dataset.object;
    const corner = target.closest<HTMLElement>("[data-resize]")?.dataset.resize as ResizeCorner | undefined;
    const rotateHandle = target.closest<HTMLElement>("[data-rotate]");
    let object = objects.find(item => item.id === id);
    let action: Gesture["action"] = "pan";
    let resize: Gesture["resize"];
    let rotate: Gesture["rotate"];
    if (space.current || event.button === 1) object = undefined;
    else if (isTouch(event)) {
      if (object) action = "move";
    }
    else if (tool === "draw") {
      object = { id: crypto.randomUUID(), kind: "drawing", x: (event.clientX - view.x) / view.zoom, y: (event.clientY - view.y) / view.zoom, width: 8, height: 8, color, points: [[4, 4], [4.01, 4.01]] };
      setObjects(previous => [...previous, object!]);
      action = "draw";
    } else if (object && element && rotateHandle && isResizable(object.kind)) {
      const tap = lastRingTap.current;
      lastRingTap.current = { id: object.id, time: event.timeStamp };
      if (tap && tap.id === object.id && event.timeStamp - tap.time < 350) {
        lastRingTap.current = null;
        remember();
        updateObject({ ...object, rotation: 0 });
        return;
      }
      const box = element.getBoundingClientRect();
      rotate = { centerX: box.x + box.width / 2, centerY: box.y + box.height / 2, startAngle: 0, base: object.rotation ?? 0 };
      rotate.startAngle = pointerAngle(rotate, event.clientX, event.clientY);
      action = "rotate";
      setRotating(true);
    } else if (object && element && corner && isResizable(object.kind)) {
      const box = element.getBoundingClientRect();
      resize = { corner, bounds: { x: object.x, y: object.y, width: box.width / view.zoom, height: box.height / view.zoom } };
      action = "resize";
      setResizing(corner);
    } else if (object && target.closest("[data-editable-intro]")) action = "pending";
    else if (object) action = "move";
    if (object) setSelected(object.id);
    else if (!isTouch(event)) setSelected(null);
    gesture.current = { pointer: event.pointerId, startX: event.clientX, startY: event.clientY, view, object, action, resize, rotate, points: [[0, 0]], before: objects, tap: isTouch(event) ? id ?? null : null };
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
  }
  function pointerMove(event: PointerEvent<HTMLDivElement>) {
    if (pointers.current.has(event.pointerId)) pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pinch.current && pointers.current.size >= 2) {
      const [a, b] = [...pointers.current.values()];
      const zoom = Math.max(0.35, Math.min(2, pinch.current.view.zoom * (distance(a, b) / pinch.current.distance)));
      const ratio = zoom / pinch.current.view.zoom;
      const midX = (a.x + b.x) / 2;
      const midY = (a.y + b.y) / 2;
      setView({ zoom, x: midX - (pinch.current.midX - pinch.current.view.x) * ratio, y: midY - (pinch.current.midY - pinch.current.view.y) * ratio });
      return;
    }
    const active = gesture.current;
    if (!active || active.pointer !== event.pointerId) return;
    const dx = event.clientX - active.startX;
    const dy = event.clientY - active.startY;
    if (active.action === "pending") {
      if (Math.hypot(dx, dy) < 6) return;
      active.action = "move";
    }
    if (active.action === "pan") { setView({ ...active.view, x: active.view.x + dx, y: active.view.y + dy }); return; }
    const object = active.object!;
    const x = dx / active.view.zoom;
    const y = dy / active.view.zoom;
    if (active.action === "move") updateObject({ ...object, x: object.x + x, y: object.y + y });
    if (active.action === "rotate" && active.rotate) {
      const delta = pointerAngle(active.rotate, event.clientX, event.clientY) - active.rotate.startAngle;
      const raw = active.rotate.base + delta;
      const rotation = event.shiftKey ? Math.round(raw / 15) * 15 : Math.round(raw * 10) / 10;
      updateObject({ ...object, rotation: ((rotation + 180) % 360 + 360) % 360 - 180 });
    }
    if (active.action === "resize" && active.resize) {
      updateObject({ ...object, ...resizeImage(active.resize.bounds, active.resize.corner, x, y) });
    }
    if (active.action === "draw") {
      const points = [...(active.points ?? []), [x, y] as [number, number]];
      active.points = points;
      const left = Math.min(...points.map(point => point[0])) - 4;
      const top = Math.min(...points.map(point => point[1])) - 4;
      const width = Math.max(...points.map(point => point[0])) - left + 4;
      const height = Math.max(...points.map(point => point[1])) - top + 4;
      updateObject({ ...object, x: object.x + left, y: object.y + top, width, height, points: points.map(([px, py]) => [px - left, py - top]) });
    }
  }
  function pointerUp(event: PointerEvent<HTMLDivElement>) {
    pointers.current.delete(event.pointerId);
    if (pinch.current) {
      if (pointers.current.size < 2) pinch.current = null;
      if (pointers.current.size === 0) setDragging(false);
      return;
    }
    const active = gesture.current;
    if (!active || active.pointer !== event.pointerId) return;
    if (event.type === "pointercancel") setObjects(active.before);
    else if (active.action !== "pan" && active.action !== "pending") remember(active.before);
    else if (active.tap && Math.hypot(event.clientX - active.startX, event.clientY - active.startY) < 10) setSelected(active.tap);
    else if (active.tap && Math.hypot(event.clientX - active.startX, event.clientY - active.startY) >= 10) setSelected(null);
    gesture.current = null;
    setDragging(false);
    setResizing(null);
    setRotating(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  }
  function scaleSelected(factor: number) {
    const object = objects.find(item => item.id === selected && isResizable(item.kind));
    const element = Array.from(fieldRef.current?.querySelectorAll<HTMLElement>("[data-object]") ?? []).find(item => item.dataset.object === selected);
    if (!object || !element) return;
    const box = element.getBoundingClientRect();
    const bounds = { x: object.x, y: object.y, width: box.width / view.zoom, height: box.height / view.zoom };
    remember();
    updateObject({ ...object, ...resizeImage(bounds, "se", bounds.width * (factor - 1), bounds.height * (factor - 1)) });
  }
  function rotateSelected(degrees: number) {
    const object = objects.find(item => item.id === selected && isResizable(item.kind));
    if (!object) return;
    remember();
    updateObject({ ...object, rotation: degrees === 0 ? 0 : (object.rotation ?? 0) + degrees });
  }
  function keyDown(event: KeyboardEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest("button, input, textarea, [contenteditable='plaintext-only'], [contenteditable='true']")) return;
    if (event.code === "Space") { event.preventDefault(); space.current = true; return; }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "z") { event.preventDefault(); undo(); return; }
    if (event.key === "Escape") { setSelected(null); setTool("select"); return; }
    if (event.key === "Delete" || event.key === "Backspace") { event.preventDefault(); remove(); return; }
    if (["+", "=", "-"].includes(event.key)) { event.preventDefault(); scaleSelected(event.key === "-" ? 0.9 : 1.1); return; }
    if (event.key === "[" || event.key === "]") { event.preventDefault(); rotateSelected((event.key === "[" ? -1 : 1) * (event.shiftKey ? 15 : 2)); return; }
    const shortcuts: Record<string, Tool> = { v: "select", p: "draw" };
    if (shortcuts[event.key.toLowerCase()]) setTool(shortcuts[event.key.toLowerCase()]);
    const directions: Record<string, [number, number]> = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };
    const direction = directions[event.key];
    if (!direction) return;
    event.preventDefault();
    const step = event.shiftKey ? 10 : 1;
    const object = objects.find(item => item.id === selected);
    if (object) { if (!event.repeat) remember(); updateObject({ ...object, x: object.x + direction[0] * step, y: object.y + direction[1] * step }); }
    else setView({ ...view, x: view.x + direction[0] * 40, y: view.y + direction[1] * 40 });
  }
  return { fieldRef, objects, view, tool, setTool, color, chooseColor, selected, setSelected, dragging, resizing, rotating, coarse, undo, canUndo: history.length > 0, remove, reset, resetVersion, zoomBy, rotateSelected, pointerDown, pointerMove, pointerUp, keyDown, updateObject, remember };
}
