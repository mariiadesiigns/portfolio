"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { homepageTestimonials } from "@/content/homepage";
import styles from "./homepage.module.css";
import carousel from "./testimonials.module.css";

export function HomeTestimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ index: 0, visible: 2 });
  const total = homepageTestimonials.length;
  const drag = useRef<{ x: number; left: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const animation = useRef(0);
  const requestedIndex = useRef(0);

  useEffect(() => () => cancelAnimationFrame(animation.current), []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    function sync() {
      if (!track?.firstElementChild) return;
      const cardWidth = track.firstElementChild.getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      const index = Math.round(track.scrollLeft / (cardWidth + gap));
      const visible = Math.round((track.clientWidth + gap) / (cardWidth + gap));
      if (!animation.current) requestedIndex.current = index;
      setPosition((current) => current.index === index && current.visible === visible ? current : { index, visible });
    }
    const observer = new ResizeObserver(sync);
    observer.observe(track);
    sync();
    track.addEventListener("scroll", sync, { passive: true });
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", sync);
    };
  }, []);

  function slideTo(index: number) {
    const track = trackRef.current;
    if (!track?.firstElementChild) return;
    cancelAnimationFrame(animation.current);
    const step = track.firstElementChild.getBoundingClientRect().width +
      (parseFloat(getComputedStyle(track).columnGap) || 0);
    const target = Math.max(0, Math.min(total - position.visible, index));
    requestedIndex.current = target;
    const from = track.scrollLeft;
    const to = Math.min(track.scrollWidth - track.clientWidth, target * step);
    track.dataset.settling = "true";
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      track.scrollLeft = to;
      animation.current = 0;
      delete track.dataset.settling;
      return;
    }
    const start = performance.now();
    function tick(now: number) {
      if (!track) return;
      const progress = Math.min(1, (now - start) / 520);
      const eased = 1 - Math.pow(1 - progress, 3);
      track.scrollLeft = from + (to - from) * eased;
      if (progress < 1) animation.current = requestAnimationFrame(tick);
      else { animation.current = 0; delete track.dataset.settling; }
    }
    animation.current = requestAnimationFrame(tick);
  }

  function finishDrag() {
    const track = trackRef.current;
    if (!drag.current || !track?.firstElementChild) return;
    drag.current = null;
    const step = track.firstElementChild.getBoundingClientRect().width +
      (parseFloat(getComputedStyle(track).columnGap) || 0);
    slideTo(Math.round(track.scrollLeft / step));
    setDragging(false);
  }

  return (
    <section
      className={`${styles.section} ${carousel.section}`}
      aria-label="Client testimonials"
    >
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <h2>What people say</h2>
        </div>
        <div
          className={carousel.track}
          data-dragging={dragging}
          onWheel={() => { cancelAnimationFrame(animation.current); animation.current = 0; if (trackRef.current) delete trackRef.current.dataset.settling; }}
          onTouchStart={() => { cancelAnimationFrame(animation.current); animation.current = 0; if (trackRef.current) delete trackRef.current.dataset.settling; }}
          onPointerDown={(event) => {
            if (event.pointerType !== "mouse" || event.button !== 0) return;
            cancelAnimationFrame(animation.current);
            animation.current = 0;
            delete event.currentTarget.dataset.settling;
            drag.current = { x: event.clientX, left: event.currentTarget.scrollLeft };
            setDragging(true);
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => {
            if (drag.current) event.currentTarget.scrollLeft = drag.current.left + drag.current.x - event.clientX;
          }}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
          onLostPointerCapture={finishDrag}
          ref={trackRef}
          id="testimonial-track"
          tabIndex={0}
          aria-label="Browse four testimonials"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
              event.preventDefault();
              slideTo(requestedIndex.current + (event.key === "ArrowRight" ? 1 : -1));
            }
          }}
        >
          {homepageTestimonials.map((item) => (
            <figure className={carousel.card} key={item.name}>
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <span className={carousel.avatar} aria-hidden="true">
                  {item.photo ? <Image src={item.photo} alt="" width={48} height={48} draggable={false} /> : item.initials}
                </span>
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.role}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className={carousel.navigation} aria-label="Testimonial navigation">
          <button aria-label="Previous testimonials" aria-controls="testimonial-track"
            disabled={position.index === 0} onClick={() => slideTo(requestedIndex.current - 1)}>
            <ArrowLeft size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
          <button aria-label="Next testimonials" aria-controls="testimonial-track"
            disabled={position.index >= total - position.visible} onClick={() => slideTo(requestedIndex.current + 1)}>
            <ArrowRight size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
