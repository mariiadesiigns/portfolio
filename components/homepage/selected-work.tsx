"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { homepageProjects } from "@/content/homepage";
import type { PointerEvent } from "react";
import {
  cursorPreview,
  homeContainer,
  homeSectionHeading,
  homeSectionTitle,
  workArrow,
  workCallout,
  workCategory,
  workList,
  workMeta,
  workName,
  workNumber,
  workRow,
  workSection,
  workThumbnail,
} from "./classes";

export function HomeSelectedWork() {
  const previewRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef(0);
  const position = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    visible: false,
  });

  function hidePreview() {
    position.current.visible = false;
    previewRef.current?.removeAttribute("data-visible");
    previewRef.current?.removeAttribute("data-project");
    if (previewRef.current) {
      for (const child of previewRef.current.children) {
        delete (child as HTMLElement).dataset.active;
      }
    }
    cancelAnimationFrame(animationRef.current);
  }

  useEffect(() => {
    window.addEventListener("scroll", hidePreview, { passive: true });
    window.addEventListener("blur", hidePreview);
    return () => {
      window.removeEventListener("scroll", hidePreview);
      window.removeEventListener("blur", hidePreview);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  function animatePreview() {
    const point = position.current;
    point.x += (point.targetX - point.x) * 0.12;
    point.y += (point.targetY - point.y) * 0.12;
    if (previewRef.current)
      previewRef.current.style.transform = `translate3d(${point.x}px, ${point.y}px, 0)`;
    if (point.visible)
      animationRef.current = requestAnimationFrame(animatePreview);
  }

  function movePreview(event: PointerEvent<HTMLAnchorElement>, index: number) {
    if (
      event.pointerType === "touch" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const preview = previewRef.current;
    if (!preview) return;
    const width = preview.offsetWidth;
    const height = preview.offsetHeight;
    const point = position.current;
    point.targetX = Math.max(
      16,
      Math.min(event.clientX + 28, window.innerWidth - width - 16),
    );
    point.targetY = Math.max(
      16,
      Math.min(event.clientY - height / 2, window.innerHeight - height - 16),
    );
    preview.dataset.project = String(index);
    for (const child of preview.children) {
      const el = child as HTMLElement;
      if (el.dataset.previewIndex === String(index)) el.dataset.active = "";
      else delete el.dataset.active;
    }
    if (point.visible) return;
    point.x = point.targetX;
    point.y = point.targetY;
    point.visible = true;
    preview.setAttribute("data-visible", "true");
    animatePreview();
  }

  return (
    <section id="work" className={workSection}>
      <div className={homeContainer}>
        <div className={homeSectionHeading}>
          <h2 className={homeSectionTitle}>Selected work</h2>
        </div>
        <div className={workList}>
          {homepageProjects.map((project, index) => (
            <a
              className={workRow}
              draggable={false}
              key={project.title}
              href={project.href}
              {...(project.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              onPointerEnter={(event) => movePreview(event, index)}
              onPointerMove={(event) => movePreview(event, index)}
              onPointerLeave={hidePreview}
              onBlur={hidePreview}
            >
              <span className={workNumber}>0{index + 1}</span>
              <div className={workName}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <span className={workMeta}>
                <span className={workCategory}>
                  ({project.category})
                </span>
                <span className={workCallout}>{project.status}</span>
              </span>
              <div className={workThumbnail}>
                <Image
                  src={project.image}
                  alt={`${project.title} design preview`}
                  fill
                  sizes="(max-width: 640px) 85vw, 240px"
                />
              </div>
              <span className={workArrow}>
                <ArrowUpRight size={24} strokeWidth={1.3} aria-hidden="true" />
                <span className="sr-only">
                  {project.href.startsWith("http")
                    ? `${project.status} (opens in a new tab)`
                    : project.status}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className={cursorPreview} ref={previewRef} aria-hidden="true">
        {homepageProjects.map((project, index) => (
          <div
            key={project.title}
            data-preview-index={index}
            className="data-active:opacity-100"
          >
            <Image src={project.image} alt="" fill sizes="400px" />
            <span>
              {project.status}
              <ArrowUpRight size={15} />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
