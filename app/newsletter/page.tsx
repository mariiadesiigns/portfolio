import type { Metadata } from "next";
import Image from "next/image";
import { NewsletterForm } from "@/components/forms/newsletter-form";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Weekly AI tips, prompts, and real talk from a designer learning in public.",
};

export default function NewsletterPage() {
  return (
    <div className="relative h-full min-h-[calc(100vh-130px)] w-full overflow-hidden">

      {/* ── Card 1 · top-left · portrait photo ───────────────────────────── */}
      <div className="absolute left-[-12px] top-[6%] hidden -rotate-[8deg] xl:block">
        <div
          className="w-[192px] overflow-hidden rounded-[18px]"
          style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.13)" }}
        >
          <div className="relative h-[252px] w-full bg-[#e0dbd6]">
            <Image
              src="/photos/mariia-ai.jpg"
              alt="Mariia — Learning AI"
              fill
              className="object-cover"
              sizes="192px"
            />
          </div>
        </div>
      </div>

      {/* ── Card 2 · top-right · first issue date ────────────────────────── */}
      <div className="absolute right-[-8px] top-[4%] hidden rotate-[4deg] xl:block">
        <div
          className="w-[256px] rounded-[18px] bg-white p-6"
          style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.10)" }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
            Coming up
          </p>
          <p className="mt-4 text-[1.45rem] font-bold leading-[1.2] tracking-tight text-[color:var(--ink)]">
            First issue drops<br />
            <span className="text-[color:var(--muted)]">Friday, 8.05</span>
          </p>
          <div className="mt-4 h-px w-full bg-[color:var(--line)]" />
          <p className="mt-3 text-[12px] leading-relaxed text-[color:var(--muted)]">
            Subscribe now so you&apos;re in from day one →
          </p>
        </div>
      </div>

      {/* ── Card 3 · bottom-left · mistake note ──────────────────────────── */}
      <div className="absolute bottom-[7%] left-[1%] hidden -rotate-[3deg] xl:block">
        <div
          className="w-[248px] rounded-[18px] bg-[#f7f3ee] p-6"
          style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.09)" }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9a8c7e]">
            Mistake I made
          </p>
          <p className="mt-3 text-[13px] leading-relaxed text-[color:var(--ink)]">
            I told AI to &ldquo;make it look better.&rdquo; Spent 40&nbsp;min
            fixing the mess. The prompt you actually need is in issue&nbsp;#1.
          </p>
        </div>
      </div>

      {/* ── Card 4 · bottom-right · laptop photo + quote ─────────────────── */}
      <div className="absolute bottom-[4%] right-[-8px] hidden rotate-[5deg] xl:block">
        <div
          className="w-[192px] overflow-hidden rounded-[18px] bg-white"
          style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.13)" }}
        >
          <div className="relative h-[210px] w-full bg-[#dde3e0]">
            <Image
              src="/photos/mariia-working.jpg"
              alt="Mariia working"
              fill
              className="object-cover"
              sizes="192px"
            />
          </div>
          <div className="px-4 py-3">
            <p className="text-[11px] leading-relaxed text-[color:var(--muted)]">
              Focus on creativity —<br />leave execution to AI.
            </p>
          </div>
        </div>
      </div>

      {/* ── Centre content ────────────────────────────────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center px-6 py-16">
        <div className="relative z-10 flex w-full max-w-[540px] flex-col items-center text-center">

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
            Weekly newsletter
          </p>

          <h1
            className="mt-6 font-bold leading-[1.04] tracking-[-0.03em]"
            style={{ fontSize: "clamp(3.6rem, 7vw, 6.2rem)" }}
          >
            Learning AI<br />
            <em className="font-normal italic">in public.</em>
          </h1>

          <p className="mt-7 max-w-[380px] text-[15px] leading-[1.7] text-[color:var(--muted)]">
            For creatives who feel like AI is everywhere and don&apos;t know
            where to start. I&apos;m a designer figuring it out in real time —
            every prompt, workflow, and mistake, shared weekly.
          </p>

          <p className="mt-4 text-[14px] font-semibold text-[color:var(--ink)]">
            No dev background. No hype. Just real experiments.
          </p>

          <div className="mt-9 w-full">
            <NewsletterForm centered />
          </div>

          <p className="mt-4 text-[11px] tracking-wide text-[color:var(--muted)]">
            Free · weekly · unsubscribe any time
          </p>
        </div>
      </div>
    </div>
  );
}
