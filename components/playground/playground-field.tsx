"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Move, RotateCcw } from "lucide-react";
import { playgroundIntro, playgroundPrints } from "@/content/playground";
import styles from "./playground.module.css";

const PRINT_CLASS: Record<string, string> = {
  "bvj-cards": styles.bvjCards,
  "bvj-welcome": styles.bvjWelcome,
  "lyra-campaign": styles.lyraCampaign,
  "lyra-packaging": styles.lyraPackaging,
  "bloom-menu": styles.bloomMenu,
  "bloom-identity": styles.bloomIdentity,
};

type Limits = { minX: number; maxX: number; minY: number; maxY: number };

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function PlaygroundField() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0, vx: 0, vy: 0 });
  const drag = useRef<{ pointer: number; x: number; y: number } | null>(null);
  const limits = useRef<Limits>({ minX: 0, maxX: 0, minY: 0, maxY: 0 });
  const raf = useRef<number | null>(null);
  const [dragging, setDragging] = useState(false);

  const apply = useCallback(() => {
    const field = fieldRef.current;
    const world = worldRef.current;
    if (!field || !world) return;
    const { x, y } = pos.current;
    world.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    field.style.backgroundPosition = `${x}px ${y}px`;
  }, []);

  const measure = useCallback(() => {
    const field = fieldRef.current;
    const world = worldRef.current;
    if (!field || !world) return;
    const { x, y } = pos.current;
    const items = world.querySelectorAll<HTMLElement>("[data-item]");
    let minL = Infinity;
    let minT = Infinity;
    let maxR = -Infinity;
    let maxB = -Infinity;
    items.forEach((el) => {
      const box = el.getBoundingClientRect();
      minL = Math.min(minL, box.left - x);
      minT = Math.min(minT, box.top - y);
      maxR = Math.max(maxR, box.right - x);
      maxB = Math.max(maxB, box.bottom - y);
    });
    const w = field.clientWidth;
    const h = field.clientHeight;
    const roam = 220;
    const travel = Math.max(420, Math.round(w * 0.28));
    limits.current = {
      minX: Math.min(w - maxR - roam, w / 2 - travel),
      maxX: Math.max(-minL + roam, w / 2 + travel),
      minY: Math.min(h - maxB - roam, h / 2 - travel),
      maxY: Math.max(-minT + roam, h / 2 + travel),
    };
  }, []);

  const clamp = useCallback(() => {
    const { minX, maxX, minY, maxY } = limits.current;
    const next = pos.current;
    if (next.x < minX) {
      next.x = minX;
      next.vx = 0;
    }
    if (next.x > maxX) {
      next.x = maxX;
      next.vx = 0;
    }
    if (next.y < minY) {
      next.y = minY;
      next.vy = 0;
    }
    if (next.y > maxY) {
      next.y = maxY;
      next.vy = 0;
    }
  }, []);

  const centre = useCallback(
    (animate: boolean) => {
      const field = fieldRef.current;
      const world = worldRef.current;
      if (!field || !world) return;
      measure();
      pos.current.x = field.clientWidth / 2;
      pos.current.y = field.clientHeight / 2;
      pos.current.vx = 0;
      pos.current.vy = 0;
      clamp();
      if (animate && !prefersReducedMotion()) {
        world.style.transition = "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)";
        field.style.transition = "background-position 700ms cubic-bezier(0.22, 1, 0.36, 1)";
        window.setTimeout(() => {
          world.style.transition = "";
          field.style.transition = "";
        }, 720);
      }
      apply();
    },
    [apply, clamp, measure],
  );

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;

    const glide = () => {
      const next = pos.current;
      if (!drag.current) {
        next.x += next.vx;
        next.y += next.vy;
        next.vx *= 0.92;
        next.vy *= 0.92;
        clamp();
        if (Math.abs(next.vx) < 0.05 && Math.abs(next.vy) < 0.05) {
          next.vx = 0;
          next.vy = 0;
        }
      }
      apply();
      raf.current = next.vx || next.vy || drag.current ? requestAnimationFrame(glide) : null;
    };

    const kick = () => {
      if (!raf.current) raf.current = requestAnimationFrame(glide);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      if ((event.target as HTMLElement).closest("button, a")) return;
      drag.current = { pointer: event.pointerId, x: event.clientX, y: event.clientY };
      pos.current.vx = 0;
      pos.current.vy = 0;
      setDragging(true);
      try {
        field.setPointerCapture(event.pointerId);
      } catch {
        /* synthetic / lost pointers */
      }
      kick();
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!drag.current || drag.current.pointer !== event.pointerId) return;
      const dx = event.clientX - drag.current.x;
      const dy = event.clientY - drag.current.y;
      drag.current.x = event.clientX;
      drag.current.y = event.clientY;
      pos.current.x += dx;
      pos.current.y += dy;
      pos.current.vx = dx;
      pos.current.vy = dy;
      clamp();
    };

    const endDrag = (event: PointerEvent) => {
      if (!drag.current || drag.current.pointer !== event.pointerId) return;
      drag.current = null;
      setDragging(false);
      if (field.hasPointerCapture(event.pointerId)) field.releasePointerCapture(event.pointerId);
      if (prefersReducedMotion()) {
        pos.current.vx = 0;
        pos.current.vy = 0;
      }
      kick();
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      pos.current.x -= event.deltaX;
      pos.current.y -= event.deltaY;
      pos.current.vx = 0;
      pos.current.vy = 0;
      clamp();
      apply();
    };

    const onKey = (event: KeyboardEvent) => {
      const step = event.shiftKey ? 220 : 80;
      if (event.key === "ArrowLeft") pos.current.x -= step;
      else if (event.key === "ArrowRight") pos.current.x += step;
      else if (event.key === "ArrowUp") pos.current.y -= step;
      else if (event.key === "ArrowDown") pos.current.y += step;
      else if (event.key === "Home") {
        centre(true);
        return;
      } else return;
      event.preventDefault();
      pos.current.vx = 0;
      pos.current.vy = 0;
      clamp();
      apply();
    };

    const onResize = () => centre(false);

    field.addEventListener("pointerdown", onPointerDown);
    field.addEventListener("pointermove", onPointerMove);
    field.addEventListener("pointerup", endDrag);
    field.addEventListener("pointercancel", endDrag);
    field.addEventListener("wheel", onWheel, { passive: false });
    field.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    centre(false);

    return () => {
      field.removeEventListener("pointerdown", onPointerDown);
      field.removeEventListener("pointermove", onPointerMove);
      field.removeEventListener("pointerup", endDrag);
      field.removeEventListener("pointercancel", endDrag);
      field.removeEventListener("wheel", onWheel);
      field.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [apply, centre, clamp]);

  return (
    <div className={styles.page}>
      <div
        ref={fieldRef}
        className={styles.field}
        data-dragging={dragging}
        tabIndex={0}
        role="application"
        aria-label="Playground canvas. Drag, scroll, or use the arrow keys to explore."
      >
        <div ref={worldRef} className={styles.world}>
          <div
            className={`${styles.item} ${styles.center}`}
            data-item
            style={{ "--delay": "0ms" } as never}
          >
            <h1 id="pg-title">{playgroundIntro.title}</h1>
            <p className={styles.lede}>{playgroundIntro.description}</p>
          </div>

          {playgroundPrints.map((print, index) => (
            <div
              key={print.id}
              className={`${styles.item} ${styles.print} ${PRINT_CLASS[print.id]}`}
              data-item
              style={{ "--delay": `${140 + index * 80}ms` } as never}
            >
              <Image
                src={print.src}
                alt={print.alt}
                width={853}
                height={1024}
                sizes="(max-width: 860px) 42vw, 280px"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <p className={styles.hint}>
        <Move size={14} strokeWidth={1.6} aria-hidden="true" />
        <span>Drag to move around</span>
      </p>
      <button className={styles.recenter} type="button" onClick={() => centre(true)}>
        <RotateCcw size={13} strokeWidth={1.7} aria-hidden="true" />
        Re-centre
      </button>
    </div>
  );
}
