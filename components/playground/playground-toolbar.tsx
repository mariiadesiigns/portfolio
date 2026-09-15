import { Minus, MousePointer2, Pencil, Plus, RotateCcw, Trash2, Undo2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { colors } from "./use-playground";
import type { usePlayground } from "./use-playground";
import styles from "./playground.module.css";

const tools = [
  { id: "select", label: "Move (V)", Icon: MousePointer2 },
  { id: "draw", label: "Draw (P)", Icon: Pencil },
] as const;

export function PlaygroundToolbar({ canvas }: { canvas: ReturnType<typeof usePlayground> }) {
  const colorNames = ["Blue", "Pink", "Butter yellow"];
  return <div className={cn(styles.controls, canvas.coarse && styles.simple)}>
    <p className={styles.hint} aria-live="polite">{canvas.coarse ? "Drag to look around · Pinch to zoom" : canvas.tool === "draw" ? "Draw freely. Make your mark." : "Drag anything · Double-click text to edit"}</p>
    <div className={styles.toolbar} role="group" aria-label="Canvas tools">
      {tools.map(({ id, label, Icon }) => <button key={id} type="button" title={label} aria-label={label} aria-pressed={canvas.tool === id} className={styles.deskOnly} onClick={() => canvas.setTool(id)}><Icon size={19} strokeWidth={1.6} /></button>)}
      <span className={cn(styles.divider, styles.deskOnly)} />
      <div className={cn(styles.colors, styles.deskOnly)} role="group" aria-label="Drawing colors">{colors.map((color, index) => <button key={color} type="button" title={colorNames[index]} aria-label={`${colorNames[index]} color`} aria-pressed={canvas.color === color} onClick={() => canvas.chooseColor(color)} style={{ background: color }} />)}</div>
      <span className={cn(styles.divider, styles.deskOnly)} />
      <button type="button" title="Undo (⌘/Ctrl Z)" aria-label="Undo" disabled={!canvas.canUndo} onClick={canvas.undo}><Undo2 size={18} /></button>
      <button type="button" title="Delete selected" aria-label="Delete selected" disabled={!canvas.selected} onClick={canvas.remove}><Trash2 size={18} /></button>
      <button type="button" title="Reset playground" aria-label="Reset playground" onClick={canvas.reset}><RotateCcw size={18} /></button>
    </div>
    <p className={styles.note}>Just for you · resets on refresh</p>
    <div className={styles.zoom} role="group" aria-label="Canvas zoom">
      <button type="button" aria-label="Zoom out" disabled={canvas.view.zoom <= 0.35} onClick={() => canvas.zoomBy(1 / 1.2)}><Minus size={15} /></button>
      <span>{Math.round(canvas.view.zoom * 100)}%</span>
      <button type="button" aria-label="Zoom in" disabled={canvas.view.zoom >= 2} onClick={() => canvas.zoomBy(1.2)}><Plus size={15} /></button>
    </div>
  </div>;
}
