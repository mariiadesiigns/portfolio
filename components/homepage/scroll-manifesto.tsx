"use client";

import { useEffect, useRef } from "react";
import { manifesto, manifestoText } from "./classes";
import { ManifestoLine } from "./manifesto-line";

const paragraphs = [
  "Great design is a visual translation of a product, its strategy, and its positioning.",
  "I help brands create the right feeling before anyone reads a word.",
];

export function ScrollManifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const words = text.querySelectorAll<HTMLElement>("[data-word]");
    const line = section.querySelector<SVGPathElement>("[data-manifesto-line]");
    let frame = 0;
    let inView = false;
    function update() {
      frame = 0;
      if (!text) return;
      // Reveal from the text entering the viewport until its last line reaches 35%.
      const bounds = text.getBoundingClientRect();
      const distance = window.innerHeight * 0.55 + bounds.height;
      const progress = Math.max(
        0,
        Math.min(1, (window.innerHeight * 0.9 - bounds.top) / distance),
      );
      if (line) line.style.strokeDashoffset = String(media.matches ? 0 : 1 - progress);
      words.forEach((word, index) => {
        const amount = Math.max(
          0,
          Math.min(1, (progress - (index / words.length) * 0.75) / 0.25),
        );
        word.style.opacity = String(media.matches ? 1 : 0.16 + 0.84 * amount);
      });
    }
    function scheduleUpdate() {
      if (inView && !frame) frame = requestAnimationFrame(update);
    }
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) update();
    });
    observer.observe(section);
    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    media.addEventListener("change", update);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      media.removeEventListener("change", update);
    };
  }, []);

  return (
    <section
      className={manifesto}
      ref={sectionRef}
      aria-label="My design philosophy"
    >
      <ManifestoLine />
      <div className={manifestoText} ref={textRef}>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>
            {paragraph.split(" ").map((word, index) => (
              <span key={`${word}-${index}`} data-word>
                {word}{" "}
              </span>
            ))}
          </p>
        ))}
      </div>
    </section>
  );
}
