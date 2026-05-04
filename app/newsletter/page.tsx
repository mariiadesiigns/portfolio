import type { Metadata } from "next";
import Image from "next/image";
import { NewsletterForm } from "@/components/forms/newsletter-form";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Weekly AI tips, prompts, and real talk from a designer learning in public.",
};

const SHADOW = "shadow-[0_8px_32px_rgba(0,0,0,0.10)]";

export default function NewsletterPage() {
  return (
    /* Full-bleed container — cards are absolute, content is centered */
    <div className="relative h-full min-h-[calc(100vh-130px)] w-full overflow-hidden">

      {/* ── Card 1 · top-left · portrait photo ─────────────────────── */}
      <div className={`absolute left-[3%] top-[7%] hidden -rotate-[7deg] xl:block ${SHADOW} rounded-2xl`}>
        <div className="w-[148px] overflow-hidden rounded-2xl">
          <div className="relative h-[196px] w-full bg-[#e8e4e0]">
            <Image
              src="/photos/mariia-ai.jpg"
              alt="Mariia — Learn AI with me"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* ── Card 2 · top-right · text — first issue date ────────────── */}
      <div className={`absolute right-[4%] top-[5%] hidden rotate-[3deg] xl:block`}>
        <div className={`w-[216px] rounded-2xl bg-white p-5 ${SHADOW}`}>
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
            Coming up
          </p>
          <p className="mt-3 text-[1.25rem] font-bold leading-snug tracking-tight text-[color:var(--ink)]">
            First issue drops<br />
            <span className="text-[color:var(--muted)]">Friday, 8.05</span>
          </p>
          <p className="mt-3 text-[11px] leading-relaxed text-[color:var(--muted)]">
            Subscribe now so you&apos;re in from day one →
          </p>
        </div>
      </div>

      {/* ── Card 3 · bottom-left · mistake note ─────────────────────── */}
      <div className={`absolute bottom-[8%] left-[4%] hidden -rotate-[3deg] xl:block`}>
        <div className={`w-[210px] rounded-2xl bg-[#f7f3ee] p-5 ${SHADOW}`}>
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9a8c7e]">
            Mistake I made
          </p>
          <p className="mt-2 text-[12px] leading-relaxed text-[color:var(--ink)]">
            I told AI to &ldquo;make it look better.&rdquo; Spent 40&nbsp;min fixing
            the mess. The prompt you actually need is in issue&nbsp;#1.
          </p>
        </div>
      </div>

      {/* ── Card 4 · bottom-right · laptop photo + quote ────────────── */}
      <div className={`absolute bottom-[5%] right-[3%] hidden rotate-[5deg] xl:block ${SHADOW} rounded-2xl`}>
        <div className="w-[148px] overflow-hidden rounded-2xl bg-white">
          <div className="relative h-[160px] w-full bg-[#dde3e0]">
            <Image
              src="/photos/mariia-working.jpg"
              alt="Mariia working"
              fill
              className="object-cover"
            />
          </div>
          <div className="px-3 py-3">
            <p className="text-[10px] leading-relaxed text-[color:var(--muted)]">
              Focus on creativity &amp; learning —<br />
              leave execution to AI.
            </p>
          </div>
        </div>
      </div>

      {/* ── Centre content ───────────────────────────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center px-4 py-16">
        <div className="relative z-10 w-full max-w-[460px] text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)]">
            Weekly newsletter
          </p>

          <h1 className="mt-5 text-[clamp(2.6rem,5vw,3.8rem)] font-bold leading-[1.07] tracking-tight">
            Learning AI<br />
            <em className="font-normal italic">in public.</em>
          </h1>

          <p className="mx-auto mt-6 max-w-[360px] text-sm leading-relaxed text-[color:var(--muted)]">
            For creative people who feel like AI is everywhere and don&apos;t
            know where to start. I&apos;m a designer figuring it out in real
            time — sharing every prompt, workflow, and mistake along the way.
          </p>

          <p className="mt-3 text-sm font-semibold text-[color:var(--ink)]">
            No dev background. No hype. Just real experiments, weekly.
          </p>

          <div className="mt-8">
            <NewsletterForm centered />
          </div>

          <p className="mt-4 text-[11px] text-[color:var(--muted)]">
            Free · weekly · unsubscribe any time
          </p>
        </div>
      </div>
    </div>
  );
}
