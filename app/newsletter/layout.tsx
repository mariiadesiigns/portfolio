import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-8 pt-8">
        <Link
          href="/"
          className="font-serif text-sm font-bold tracking-tight text-[color:var(--ink)] transition-colors hover:text-[color:var(--accent)]"
        >
          {siteConfig.name}
        </Link>
      </header>

      <main className="flex flex-1 items-center">{children}</main>

      <footer className="px-8 py-8">
        <p className="text-xs text-[color:var(--muted)]">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </footer>
    </div>
  );
}
