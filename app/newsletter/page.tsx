import type { Metadata } from "next";
import { NewsletterForm } from "@/components/forms/newsletter-form";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Weekly AI tips, prompts, and real talk from a designer learning in public.",
};

export default function NewsletterPage() {
  return (
    <div className="relative flex w-full min-h-[calc(100vh-130px)] items-center justify-center overflow-hidden px-4 py-16">

      {/* ── Floating cards (desktop only) ────────────────────────────── */}

      {/* Card 1 — top left — photo slot */}
      <div
        aria-hidden
        className="absolute left-[2%] top-[6%] hidden -rotate-6 xl:block"
      >
        <div className="w-[148px] overflow-hidden rounded-2xl shadow-md">
          {/* swap this div for <Image> when you have the photo */}
          <div className="flex h-[180px] w-full items-end bg-[#e2ded9] p-3">
            <span className="text-[10px] font-medium uppercase tracking-widest text-[#6b6660]">
              Week 01 · first prompt
            </span>
          </div>
        </div>
      </div>

      {/* Card 2 — top right — prompt snippet */}
      <div
        aria-hidden
        className="absolute right-[3%] top-[4%] hidden rotate-3 xl:block"
      >
        <div className="w-[220px] rounded-2xl border border-[color:var(--line)] bg-white p-4 shadow-md">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
            Prompt of the week
          </p>
          <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink)]">
            "Act as a brand strategist. Give me 5 names for a studio that feels
            minimal, editorial, and slightly mysterious…"
          </p>
          <p className="mt-3 text-[9px] text-[color:var(--muted)]">
            → worked on first try. sharing the full version inside.
          </p>
        </div>
      </div>

      {/* Card 3 — bottom left — photo slot */}
      <div
        aria-hidden
        className="absolute bottom-[8%] left-[4%] hidden rotate-2 xl:block"
      >
        <div className="w-[190px] overflow-hidden rounded-2xl shadow-md">
          {/* swap this div for <Image> when you have the photo */}
          <div className="flex h-[140px] w-full items-end bg-[#dce3e0] p-3">
            <span className="text-[10px] font-medium uppercase tracking-widest text-[#5a6b64]">
              real experiment →
            </span>
          </div>
        </div>
      </div>

      {/* Card 4 — bottom right — "real talk" note */}
      <div
        aria-hidden
        className="absolute bottom-[6%] right-[2%] hidden -rotate-4 xl:block"
      >
        <div className="w-[200px] rounded-2xl bg-[#f5f0e8] p-5 shadow-md">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8a7d6a]">
            Mistake I made
          </p>
          <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink)]">
            I asked the AI to "make it look better." Spent 40 min fixing the
            mess. The prompt you actually need is inside.
          </p>
        </div>
      </div>

      {/* Card 5 — mid left — photo slot */}
      <div
        aria-hidden
        className="absolute left-[1%] top-[44%] hidden -translate-y-1/2 rotate-3 xl:block"
      >
        <div className="w-[130px] overflow-hidden rounded-2xl shadow-md">
          {/* swap this div for <Image> when you have the photo */}
          <div className="flex h-[160px] w-full items-end bg-[#d8dde8] p-3">
            <span className="text-[10px] font-medium uppercase tracking-widest text-[#5a6070]">
              in progress
            </span>
          </div>
        </div>
      </div>

      {/* ── Center content ────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[480px] text-center">

        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)]">
          Weekly newsletter
        </p>

        <h1 className="mt-5 text-[clamp(2.4rem,6vw,3.8rem)] font-bold leading-[1.08] tracking-tight">
          Learning AI<br />
          <em className="font-normal not-italic" style={{ fontStyle: "italic" }}>
            in public.
          </em>
        </h1>

        <p className="mx-auto mt-6 max-w-[360px] text-sm leading-relaxed text-[color:var(--muted)]">
          For creative people who feel like AI is everywhere and don&apos;t know
          where to start. I&apos;m figuring it out as a designer — and sharing
          everything: the prompts, the workflows, the mistakes, the wins.
        </p>

        <p className="mt-3 text-sm font-medium text-[color:var(--ink)]">
          No dev background. No hype. Just real experiments, weekly.
        </p>

        <div className="mt-8">
          <NewsletterForm centered />
        </div>

        <p className="mt-5 text-[11px] text-[color:var(--muted)]">
          Free · weekly · unsubscribe any time
        </p>
      </div>
    </div>
  );
}
