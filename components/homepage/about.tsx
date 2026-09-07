"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { homepageAbout } from "@/content/homepage";
import { AboutSketch } from "./about-sketch";
import { cn } from "@/lib/utils";
import {
  aboutCard,
  aboutComposition,
  aboutExperience,
  aboutHeading,
  aboutNumber,
  aboutPartner,
  aboutPhoto,
  aboutSection,
  aboutSketchLeft,
  aboutSketchRight,
  aboutTitle,
  aboutWorldwide,
} from "./classes";

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
    <section className={aboutSection} id="about" ref={sectionRef}>
      <div className={aboutHeading}>
        <h2 className={aboutTitle}>About me</h2>
      </div>
      <div className={aboutComposition} ref={compositionRef}>
        <div className={cn(aboutCard, aboutSketchLeft)} aria-hidden="true">
          <Image src="/homepage/about/sketch-line.svg" alt="" fill sizes="192px" />
        </div>
        <figure className={aboutPhoto}>
          <Image
            src="/homepage/mariia-portrait-new.jpg"
            alt="Mariia working on her laptop at an oceanfront café"
            fill
            sizes="(max-width: 640px) 220px, 307px"
          />
        </figure>
        <div className={cn(aboutCard, aboutPartner)}>
          <h3>{homepageAbout.partner.title}</h3>
          <p>{homepageAbout.partner.text}</p>
        </div>
        <div className={cn(aboutCard, aboutExperience)}>
          <span className={aboutNumber}>{homepageAbout.experience.years}</span>
          <h3>{homepageAbout.experience.label}</h3>
        </div>
        <div className={cn(aboutCard, aboutSketchRight)} aria-hidden="true">
          <AboutSketch />
        </div>
        <div className={cn(aboutCard, aboutWorldwide)}>
          <h3>{homepageAbout.worldwide}</h3>
        </div>
      </div>
    </section>
  );
}
