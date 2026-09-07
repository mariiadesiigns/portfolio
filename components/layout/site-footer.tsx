"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  const pathname = usePathname();
  if (pathname === "/" || pathname === "/playground") return null;
  return (
    <footer className="border-t border-[color:var(--line)] py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-base font-semibold">{siteConfig.name}</p>
          <p className="mt-2 max-w-md text-sm text-[color:var(--muted)]">
            Visual identities and art direction for brands that want to feel
            more like themselves.
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/work" className="hover:text-[color:var(--accent)]">
            Work
          </Link>
          <Link href="/#services" className="hover:text-[color:var(--accent)]">
            Services
          </Link>
          <Link href="/#about" className="hover:text-[color:var(--accent)]">
            About
          </Link>
          <Link href="/contact" className="hover:text-[color:var(--accent)]">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}
