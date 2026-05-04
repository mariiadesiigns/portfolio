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
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-16 lg:px-8 lg:py-20">

      {/* ── Card 1 · top-left · portrait photo ───────────────────── */}
      <div className="absolute left-[4%] top-[7%] hidden -rotate-[8deg] lg:block">
        <div
          className="w-[214px] overflow-hidden rounded-[20px]"
          style={{ boxShadow: "0 20px 56px rgba(0,0,0,0.14)" }}
        >
          <div className="relative h-[284px] w-full bg-[#e0dbd6]">
            <Image
              src="/photos/mariia-ai.jpg"
              alt="Mariia — Learning AI"
              fill
              className="object-cover"
              sizes="214px"
            />
          </div>
        </div>
      </div>

      {/* ── Card 2 · top-right · first issue date ────────────────── */}
      <div className="absolute right-[4%] top-[7%] hidden rotate-[4deg] lg:block">
        <div
          className="w-[276px] rounded-[20px] bg-white p-6"
          style={{ boxShadow: "0 20px 56px rgba(0,0,0,0.09)" }}
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[color:var(--muted)]">
            Coming up
          </p>
          <p className="mt-4 text-[1.4rem] font-bold leading-[1.15] tracking-[-0.02em] text-[color:var(--ink)]">
            First issue drops<br />
            <span className="font-normal text-[color:var(--muted)]">Friday, 8.05</span>
          </p>
          <div className="mt-4 h-px w-full bg-[color:var(--line)]" />
          <p className="mt-3 text-[11.5px] leading-[1.65] text-[color:var(--muted)]">
            Subscribe now so you&apos;re in from day one →
          </p>
        </div>
      </div>

      {/* ── Card 3 · bottom-left · mistake note ──────────────────── */}
      <div className="absolute bottom-[7%] left-[4%] hidden -rotate-[3deg] lg:block">
        <div
          className="w-[258px] rounded-[20px] bg-[#f7f3ee] p-6"
          style={{ boxShadow: "0 20px 56px rgba(0,0,0,0.08)" }}
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#9a8c7e]">
            Mistake I made
          </p>
          <p className="mt-3 text-[12.5px] leading-[1.72] text-[color:var(--ink)]">
            I told AI to &ldquo;make it look better.&rdquo; Spent 40&nbsp;min
            fixing the mess. The prompt you actually need is in issue&nbsp;#1.
          </p>
        </div>
      </div>

      {/* ── Card 4 · bottom-right · laptop photo + quote ─────────── */}
      <div className="absolute bottom-[7%] right-[4%] hidden rotate-[5deg] lg:block">
        <div
          className="w-[214px] overflow-hidden rounded-[20px] bg-white"
          style={{ boxShadow: "0 20px 56px rgba(0,0,0,0.14)" }}
        >
          <div className="relative h-[232px] w-full bg-[#dde3e0]">
            <Image
              src="/photos/mariia-working.jpg"
              alt="Mariia working"
              fill
              className="object-cover"
              sizes="214px"
            />
          </div>
          <div className="px-4 py-3.5">
            <p className="text-[10.5px] leading-[1.6] text-[color:var(--muted)]">
              Focus on creativity —<br />leave execution to AI.
            </p>
          </div>
        </div>
      </div>

      {/* ── Centre content ────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto flex w-full max-w-[500px] flex-col items-center text-center">

        <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-[color:var(--muted)]">
          Weekly newsletter
        </p>

        <h1 className="mt-5 leading-[1.0] tracking-[-0.04em]" style={{ fontSize: "clamp(3.4rem, 7vw, 6rem)" }}>
          <span className="block font-bold">Learning AI</span>
          <em
            className="block font-normal"
            style={{
              fontFamily: "var(--font-instrument)",
              fontStyle: "italic",
              fontSize: "1.06em",
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
            }}
          >
            in public.
          </em>
        </h1>

        <p className="mt-8 max-w-[400px] text-[15.5px] leading-[1.85] text-[color:var(--muted)]">
          For creatives who feel like AI is everywhere and don&apos;t know
          where to start. I&apos;m a designer figuring it out in real
          time — every prompt, workflow, and mistake, shared weekly.
        </p>

        <p className="mt-3.5 text-[13px] font-medium tracking-[0.01em] text-[color:var(--muted)]">
          No dev background. No hype. Just real experiments.
        </p>

        <div className="mt-10 w-full">
          <NewsletterForm centered />
        </div>

        <p className="mt-5 text-[11px] tracking-[0.04em] text-[color:var(--muted)]">
          Free · weekly · unsubscribe any time
        </p>
      </div>
    </div>
  );
}
