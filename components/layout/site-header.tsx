"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-[color:var(--line)] bg-[color:var(--paper)]/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          {siteConfig.name}
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-5">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition-colors hover:text-[color:var(--accent)]",
                item.href === "/work"
                  ? pathname.startsWith("/work")
                    ? "text-[color:var(--accent)]"
                    : "text-[color:var(--ink)]"
                  : item.href.startsWith("/details")
                    ? pathname.startsWith("/details")
                      ? "text-[color:var(--accent)]"
                      : "text-[color:var(--ink)]"
                  : item.href === "/"
                    ? pathname === "/"
                      ? "text-[color:var(--accent)]"
                      : "text-[color:var(--ink)]"
                    : "text-[color:var(--ink)]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
