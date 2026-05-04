import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="shrink-0 px-8 pt-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-[color:var(--ink)] transition-colors hover:text-[color:var(--muted)]"
        >
          {siteConfig.name}
        </Link>
      </header>

      <main className="relative min-h-0 flex-1">{children}</main>

      <footer className="shrink-0 px-8 py-8">
        <p className="text-xs text-[color:var(--muted)]">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </footer>
    </div>
  );
}
