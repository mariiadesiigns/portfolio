"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { homepageAbout } from "@/content/homepage";
import { AboutSketch } from "./about-sketch";
import styles from "./homepage.module.css";
import portrait from "./portrait.module.css";

export function HomeAbout() {
  const sectionRef = useRef<HTMLElement>(null);
  const compositionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const composition = compositionRef.current;
    if (!section || !composition) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;
    let frame = 0;
    let previousTime = 0;
    let travel = 1;
    let target = 1;

    function animate(time: number) {
      if (!composition) return;
      const elapsed = previousTime ? Math.min(time - previousTime, 64) : 16;
      previousTime = time;
      travel += (target - travel) * (1 - Math.exp(-elapsed / 220));
      if (Math.abs(target - travel) < 0.001) travel = target;
      composition.style.setProperty("--card-travel", String(travel));
      frame = travel === target ? 0 : requestAnimationFrame(animate);
    }

    function measure() {
      if (!composition) return;
      if (media.matches) {
        cancelAnimationFrame(frame);
        frame = 0;
        travel = target = 0;
        composition.style.setProperty("--card-travel", "0");
        return;
      }
      if (!inView) return;
      // Settle while the heading and complete portrait composition are visible together.
      const top = composition.getBoundingClientRect().top;
      const progress = (window.innerHeight * 0.98 - top) / (window.innerHeight * 0.7);
      target = 1 - Math.max(0, Math.min(1, progress));
      if (!frame) {
        previousTime = 0;
        frame = requestAnimationFrame(animate);
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) measure();
      else {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    });
    observer.observe(section);
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    media.addEventListener("change", measure);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      media.removeEventListener("change", measure);
    };
  }, []);

  return (
    <section className={portrait.about} id="about" ref={sectionRef}>
      <div className={`${styles.sectionHeading} ${portrait.heading}`}>
        <h2>About me</h2>
      </div>
      <div className={portrait.composition} ref={compositionRef}>
        <div className={`${portrait.card} ${portrait.sketchLeft}`} aria-hidden="true">
          <Image src="/homepage/about/sketch-line.svg" alt="" fill sizes="192px" />
        </div>
        <figure className={portrait.photo}>
          <Image
            src="/homepage/mariia-portrait-new.jpg"
            alt="Mariia working on her laptop at an oceanfront café"
            fill
            sizes="(max-width: 640px) 220px, 307px"
          />
        </figure>
        <div className={`${portrait.card} ${portrait.partner}`}>
          <h3>{homepageAbout.partner.title}</h3>
          <p>{homepageAbout.partner.text}</p>
        </div>
        <div className={`${portrait.card} ${portrait.experience}`}>
          <span className={portrait.number}>{homepageAbout.experience.years}</span>
          <h3>{homepageAbout.experience.label}</h3>
        </div>
        <div className={`${portrait.card} ${portrait.sketchRight}`} aria-hidden="true">
          <AboutSketch />
        </div>
        <div className={`${portrait.card} ${portrait.worldwide}`}>
          <h3>{homepageAbout.worldwide}</h3>
        </div>
      </div>
    </section>
  );
}
