"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  PenTool,
  Sparkles,
  UserRound,
  type LucideProps,
} from "lucide-react";
import styles from "./homepage.module.css";

function LightStroke({
  size = 24,
  strokeWidth = 2,
  color = "currentColor",
  absoluteStrokeWidth: _absoluteStrokeWidth,
  ...props
}: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <path d="m6.8 6.8 10.4 10.4" />
      <path d="m17.2 6.8-10.4 10.4" />
    </svg>
  );
}

const links = [
  { id: "work", label: "Work", icon: PenTool },
  { id: "services", label: "Services", icon: LightStroke },
  { id: "about", label: "About", icon: UserRound },
  { id: "playground", label: "Playground", icon: Sparkles },
  { id: "contact", label: "Let’s talk", icon: Mail },
];

function hrefFor(id: string) {
  return id === "playground" ? "/playground" : `/#${id}`;
}

export function HomeNavigation() {
  const pathname = usePathname();
  const onPlayground = pathname === "/playground";
  const [active, setActive] = useState(onPlayground ? "playground" : "work");
  const [scrolled, setScrolled] = useState(onPlayground);
  const navRef = useRef<HTMLElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const activeRef = useRef(active);
  const hoverIdRef = useRef<string | null>(null);
  activeRef.current = active;

  function linkEl(id: string) {
    return (
      navRef.current?.querySelector<HTMLAnchorElement>(
        `a[href="${hrefFor(id)}"]`,
      ) ?? null
    );
  }

  function moveHighlightTo(el: HTMLElement | null) {
    const highlight = highlightRef.current;
    if (!highlight || !el) return;
    highlight.style.top = `${el.offsetTop}px`;
    highlight.style.left = `${el.offsetLeft}px`;
    highlight.style.width = `${el.offsetWidth}px`;
    highlight.style.height = `${el.offsetHeight}px`;
  }

  function syncHighlight() {
    moveHighlightTo(linkEl(hoverIdRef.current ?? activeRef.current));
  }

  useLayoutEffect(() => {
    syncHighlight();
    const highlight = highlightRef.current;
    if (!highlight) return;
    const frame = requestAnimationFrame(() => {
      highlight.classList.add(styles.navHighlightReady);
    });
    return () => cancelAnimationFrame(frame);
  }, [active]);

  useEffect(() => {
    function onResize() {
      syncHighlight();
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (onPlayground) {
      setScrolled(true);
      setActive("playground");
      return;
    }
    function sync() {
      setScrolled(window.scrollY > 8);
    }
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, [onPlayground]);

  useEffect(() => {
    if (onPlayground) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting)
            setActive(entry.target.id === "intro" ? "work" : entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px" },
    );
    for (const { id } of [...links, { id: "intro" }]) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, [onPlayground]);

  return (
    <header className={styles.header}>
      <a className={styles.skipLink} href={onPlayground ? "#pg-title" : "#homepage"}>
        Skip to content
      </a>
      <nav
        ref={navRef}
        className={styles.nav}
        data-scrolled={scrolled}
        aria-label="Main navigation"
        onMouseLeave={() => {
          hoverIdRef.current = null;
          syncHighlight();
        }}
      >
        {links.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={hrefFor(id)}
            className={active === id ? styles.navActive : undefined}
            aria-current={active === id ? "location" : undefined}
            onClick={() => setActive(id)}
            onMouseEnter={() => {
              hoverIdRef.current = id;
              moveHighlightTo(linkEl(id));
            }}
            onFocus={() => {
              hoverIdRef.current = id;
              moveHighlightTo(linkEl(id));
            }}
            onBlur={(event) => {
              if (navRef.current?.contains(event.relatedTarget as Node)) return;
              hoverIdRef.current = null;
              syncHighlight();
            }}
          >
            <Icon size={15} strokeWidth={1.5} aria-hidden="true" />
            <span>{label}</span>
            {id === "contact" && (
              <ArrowUpRight
                size={13}
                strokeWidth={1.5}
                className={styles.navArrow}
                aria-hidden="true"
              />
            )}
          </a>
        ))}
        <span
          ref={highlightRef}
          className={styles.navHighlight}
          aria-hidden="true"
        />
      </nav>
    </header>
  );
}
