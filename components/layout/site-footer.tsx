import Link from "next/link";
import { Container } from "@/components/layout/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--line)] py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-base font-semibold">Mira Koval Studio</p>
          <p className="mt-2 max-w-md text-sm text-[color:var(--muted)]">
            Story-led brand identities for founders and intentional businesses.
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/work" className="hover:text-[color:var(--accent)]">
            Work
          </Link>
          <Link href="/services" className="hover:text-[color:var(--accent)]">
            Services
          </Link>
          <Link href="/contact" className="hover:text-[color:var(--accent)]">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}
