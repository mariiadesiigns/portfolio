"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { playgroundMarks, playgroundPrints } from "@/content/playground";
import { cn } from "@/lib/utils";
import { playgroundField, playgroundPage, playgroundWorld } from "./classes";
import { createInitialObjects } from "./default-objects";
import { EditableIntro } from "./editable-intro";
import { EditableText } from "./editable-text";
import { PlaygroundToolbar } from "./playground-toolbar";
import { isResizable, usePlayground } from "./use-playground";
import type { CanvasObject } from "./use-playground";
import noteStyles from "./project-notes.module.css";
import styles from "./playground.module.css";

const initialObjects = createInitialObjects();
const resizeCorners = ["nw", "ne", "sw", "se"] as const;

/* The intro's base width is 303px × the viewport step set in CSS; resizing
   must scale relative to that, not to a hard-coded number. */
function textFit(field: HTMLElement | null) {
  if (!field) return 1;
  return parseFloat(getComputedStyle(field).getPropertyValue("--text-fit")) || 1;
}

function objectLabel(object: CanvasObject) {
  if (object.kind === "image") return "Corners resize · Ring rotates";
  if (object.kind === "note" || object.kind === "intro") return "Double-click to edit · Ring rotates";
  return object.kind;
}

function ObjectBody({ object, canvas }: { object: CanvasObject; canvas: ReturnType<typeof usePlayground> }) {
  const print = playgroundPrints.find(item => item.id === object.id);
  if (print) {
    return <Image src={print.src} alt={print.alt} width={print.width} height={print.height} sizes={object.width ? `${Math.ceil(object.width * canvas.view.zoom)}px` : "(max-width: 600px) 200px, (min-width: 1800px) 24vw, 300px"} draggable={false} className={styles.print} />;
  }
  if (object.kind === "drawing") {
    return <svg className={styles.drawing} data-kind="drawing" width={object.width} height={object.height} viewBox={`0 0 ${object.width} ${object.height}`} aria-hidden="true"><polyline points={object.points?.map(point => point.join(",")).join(" ")} fill="none" stroke={object.color} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" /></svg>;
  }
  if (object.kind === "note") {
    const mark = playgroundMarks.find(item => item.id === object.id);
    return <EditableText as="div" value={object.text ?? ""} label={`${mark?.id ?? "Project"} note`} className={noteStyles.noteText} onCommit={text => {
      if (text === object.text) return;
      canvas.remember();
      canvas.updateObject({ ...object, text });
    }} />;
  }
  return <EditableIntro key={canvas.resetVersion} />;
}

export function PlaygroundField() {
  const canvas = usePlayground(initialObjects);
  return <div className={playgroundPage} data-playground onKeyDown={canvas.keyDown}>
    <div ref={canvas.fieldRef} className={cn(playgroundField, styles.field)} data-tool={canvas.tool} data-dragging={canvas.dragging} data-resizing={canvas.resizing ?? undefined} data-rotating={canvas.rotating || undefined} data-simple={canvas.coarse || undefined} tabIndex={0} role="region" aria-label="Interactive playground canvas" aria-describedby="canvas-instructions"
      onPointerDown={canvas.pointerDown} onPointerMove={canvas.pointerMove} onPointerUp={canvas.pointerUp} onPointerCancel={canvas.pointerUp} onLostPointerCapture={canvas.pointerUp}
      style={{ backgroundPosition: `${canvas.view.x}px ${canvas.view.y}px`, backgroundSize: `${18 * canvas.view.zoom}px ${18 * canvas.view.zoom}px`, ["--zoom" as string]: canvas.view.zoom } satisfies CSSProperties}>
      <div className={playgroundWorld} style={{ transform: `translate3d(${canvas.view.x}px, ${canvas.view.y}px, 0) scale(${canvas.view.zoom})`, transformOrigin: "0 0" }}>
        {canvas.objects.map(object => {
          const print = playgroundPrints.find(item => item.id === object.id);
          const selected = canvas.selected === object.id;
          const centered = object.kind === "intro";
          return <div key={`${object.id}-${canvas.resetVersion}`} className={cn(styles.object, object.kind === "note" && styles.noteObject, object.kind === "intro" && styles.intro)} data-object={object.id} data-kind={object.kind} data-selected={selected} tabIndex={0} role="button" aria-label={print ? `Move ${print.alt}` : `Move ${object.kind}`} aria-pressed={selected}
            onFocus={() => { if (!canvas.coarse) canvas.setSelected(object.id); }} onKeyDown={event => { if (event.key === "Enter") canvas.setSelected(object.id); }}
            style={{
              transform: `${centered ? "translate(-50%, -50%) " : ""}translate3d(${object.x}px, ${object.y}px, 0) rotate(calc(var(--tilt, 0deg) + ${object.rotation ?? 0}deg))`,
              width: object.width,
              height: object.height,
              zIndex: selected ? 20 : undefined,
              ["--intro-scale" as string]: object.kind === "intro" && object.width ? object.width / (303 * textFit(canvas.fieldRef.current)) : 1,
              ["--note-scale" as string]: object.kind === "note" && object.width ? object.width / 153 : 1,
            } satisfies CSSProperties}>
            <ObjectBody object={object} canvas={canvas} />
            {selected && !canvas.coarse && <>
              <span className={styles.objectLabel}>{objectLabel(object)}</span>
              {isResizable(object.kind) && canvas.tool === "select" && <>
                {resizeCorners.map(corner => <span key={corner} className={styles.resizeHandle} data-resize={corner} aria-hidden="true" style={{ transform: `translate(-50%, -50%) scale(${1 / canvas.view.zoom})` }} />)}
                <span className={styles.rotateHandle} data-rotate title="Drag to rotate · Double-click to straighten" aria-hidden="true" style={{ transform: `translate(-50%, -100%) scale(${1 / canvas.view.zoom})` }} />
              </>}
            </>}
          </div>;
        })}
      </div>
    </div>
    <p id="canvas-instructions" className="sr-only">{canvas.coarse ? "Drag a piece to move it. Drag empty space to look around. Pinch with two fingers to zoom. Everything resets on refresh." : "Double-click text to edit. Drag anything to move it. Select an object and drag a corner to resize, or use plus and minus keys. Drag the ring above a selection to rotate it, or use the bracket keys; double-click the ring to straighten. Click outside to finish editing, or press Escape to cancel. Everything resets on refresh. Drag empty space to pan. Choose the drawing tool or press P, then drag to draw. Press V to move objects. Delete removes the selection. Hold Space to pan. Control or Command and scroll to zoom."}</p>
    <div className={styles.bottomFade} aria-hidden="true" />
    <PlaygroundToolbar canvas={canvas} />
  </div>;
}
