"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState, type PointerEvent, type ReactNode } from "react";
import styles from "./homepage.module.css";
import playground from "./playground.module.css";

const playgroundImages = [
  { name: "lyra-campaign", position: playground.lyraCampaign, alt: "Lyra jewellery campaign on a station billboard" },
  { name: "lyra-packaging", position: playground.lyraPackaging, alt: "Lyra jewellery packaging in soft blue" },
  { name: "bloom-menu", position: playground.bloomMenu, alt: "Bloom Cafe menu with a floral backdrop" },
  { name: "bloom-identity", position: playground.bloomIdentity, alt: "Bloom Cafe identity over a pink lily" },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function DraggablePrint({
  className,
  children,
  onMoved,
}: {
  className: string;
  children: ReactNode;
  onMoved: () => void;
}) {
  const node = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; y: number; originX: number; originY: number } | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();
    drag.current = { x: event.clientX, y: event.clientY, originX: offset.x, originY: offset.y };
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      /* synthetic / lost pointers */
    }
    setDragging(true);
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const print = node.current;
    const canvas = print?.parentElement;
    if (!drag.current || !print || !canvas) return;
    const dx = drag.current.originX + event.clientX - drag.current.x;
    const dy = drag.current.originY + event.clientY - drag.current.y;
    if (Math.abs(event.clientX - drag.current.x) + Math.abs(event.clientY - drag.current.y) > 3) {
      onMoved();
    }
    setOffset({
      x: clamp(dx, -print.offsetLeft, canvas.clientWidth - print.offsetWidth - print.offsetLeft),
      y: clamp(dy, -print.offsetTop, canvas.clientHeight - print.offsetHeight - print.offsetTop),
    });
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    drag.current = null;
    setDragging(false);
    try {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
    } catch {
      /* synthetic / lost pointers */
    }
  }

  return (
    <div
      ref={node}
      className={className}
      data-dragging={dragging}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {children}
    </div>
  );
}

export function HomePlayground() {
  const moved = useRef(false);

  return (
    <section id="playground" className={playground.section}>
      <Link
        className={`${styles.container} ${playground.canvas}`}
        href="/playground"
        aria-labelledby="playground-title playground-link"
        onClick={(event) => {
          if (!moved.current) return;
          event.preventDefault();
          moved.current = false;
        }}
      >
        {playgroundImages.map(({ name, position, alt }) => (
          <DraggablePrint
            className={`${playground.image} ${position}`}
            key={name}
            onMoved={() => {
              moved.current = true;
            }}
          >
            <Image
              src={`/homepage/playground/${name}.webp`}
              alt={alt}
              fill
              draggable={false}
              sizes="(max-width: 760px) 30vw, (max-width: 1099px) 22vw, 230px"
            />
          </DraggablePrint>
        ))}
        <div className={playground.copy}>
          <h2 id="playground-title">
            Explore the <em>playground.</em>
          </h2>
          <p>More work and collaborations</p>
          <span className={playground.link} id="playground-link">
            Take a look around <ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </section>
  );
}
