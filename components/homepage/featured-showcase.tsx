"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { featuredSlides } from "@/content/homepage";
import {
  showcase,
  showcaseCanvas,
  showcaseControls,
  showcaseCounter,
  showcaseGroup,
  showcaseImage,
  showcasePlayToggle,
  showcaseSlide,
  showcaseTrack,
} from "./classes";

// Default Studio's ticker settings: a 12px gap and a steady 40px/second.
const SPEED = 40;
const GAP = 12;
const wrap = (value: number, length: number) => ((value % length) + length) % length;

export function FeaturedShowcase() {
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const step = useRef(1);
  const activeRef = useRef(0);
  const drag = useRef<{ x: number; offset: number } | null>(null);
  const ready = loaded.length === featuredSlides.length;

  function paint() {
    const cycle = step.current * featuredSlides.length;
    offset.current = wrap(offset.current, cycle);
    if (trackRef.current) trackRef.current.style.transform = `translate3d(${-offset.current}px, 0, 0)`;
    const index = Math.floor(offset.current / step.current);
    if (index !== activeRef.current) {
      activeRef.current = index;
      setActive(index);
    }
  }

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    if (sectionRef.current) observer.observe(sectionRef.current);
    const resize = new ResizeObserver(() => {
      const progress = offset.current / step.current;
      const slide = trackRef.current?.querySelector<HTMLElement>("[data-slide]");
      step.current = (slide?.getBoundingClientRect().width ?? 933) + GAP;
      offset.current = progress * step.current;
      paint();
    });
    if (canvasRef.current) resize.observe(canvasRef.current);
    return () => {
      observer.disconnect();
      resize.disconnect();
      media.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || !inView || !ready) return;
    let frame = 0;
    let lastTime = 0;
    function animate(time: number) {
      const elapsed = lastTime ? Math.min(time - lastTime, 64) : 0;
      lastTime = time;
      if (!drag.current && !document.hidden) {
        offset.current += SPEED * elapsed / 1000;
        paint();
      }
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [paused, reducedMotion, inView, ready]);

  function navigate(direction: number) {
    setPaused(true);
    offset.current = (Math.floor(offset.current / step.current) + direction) * step.current;
    paint();
  }

  return (
    <section className={showcase} ref={sectionRef} aria-label="Featured design projects" aria-roledescription="carousel"
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          navigate(event.key === "ArrowRight" ? 1 : -1);
        }
      }}>
      <div className={showcaseCanvas} ref={canvasRef}
        onPointerDown={(event) => {
          if (event.button !== 0) return;
          drag.current = { x: event.clientX, offset: offset.current };
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!drag.current) return;
          offset.current = drag.current.offset + drag.current.x - event.clientX;
          paint();
        }}
        onPointerUp={() => { drag.current = null; }}
        onPointerCancel={() => { drag.current = null; }}
        onLostPointerCapture={() => { drag.current = null; }}>
        <div className={showcaseTrack} ref={trackRef}>
          {[0, 1].map((copy) => (
            <div className={showcaseGroup} key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {featuredSlides.map((slide, index) => (
                <div className={showcaseSlide} data-slide key={slide.image} style={{ backgroundColor: slide.background }}>
                  <Image src={slide.image} alt={copy === 0 ? slide.alt : ""} fill draggable={false} unoptimized={slide.image.endsWith("-4k.png")}
                    sizes="(max-width: 809px) 666px, (max-width: 1199px) 800px, 933px"
                    loading="eager" priority={copy === 0 && index === 0} className={showcaseImage}
                    onLoad={() => setLoaded((current) => current.includes(slide.image) ? current : [...current, slide.image])} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={showcaseControls}>
        <button aria-label="Previous project image" onClick={() => navigate(-1)} disabled={!ready}>
          <ArrowLeft size={16} aria-hidden="true" />
        </button>
        <span className={showcaseCounter} aria-live={paused || reducedMotion ? "polite" : "off"}>
          {String(active + 1).padStart(2, "0")} <span>/ {String(featuredSlides.length).padStart(2, "0")}</span>
        </span>
        <button aria-label="Next project image" onClick={() => navigate(1)} disabled={!ready}>
          <ArrowRight size={16} aria-hidden="true" />
        </button>
        {!reducedMotion && <button aria-label={paused ? "Play slideshow" : "Pause slideshow"} onClick={() => setPaused(!paused)} className={showcasePlayToggle}>
          {paused ? <Play size={13} aria-hidden="true" /> : <Pause size={13} aria-hidden="true" />}
        </button>}
      </div>
    </section>
  );
}
