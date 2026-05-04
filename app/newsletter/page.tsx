import type { Metadata } from "next";
import Image from "next/image";
import { NewsletterForm } from "@/components/forms/newsletter-form";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "AI for creative work — figuring it out in public, so you don't have to.",
};

function nextFridayDate(): string {
  const today = new Date();
  const daysUntil = (5 - today.getDay() + 7) % 7;
  const friday = new Date(today);
  friday.setDate(today.getDate() + daysUntil);
  const d = friday.getDate();
  const m = (friday.getMonth() + 1).toString().padStart(2, "0");
  return `${d}.${m}`;
}

export default function NewsletterPage() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-16 lg:px-8 lg:py-20">

      {/* ── TL · portrait photo ──────────────────────────────────── */}
      <div className="absolute left-[7%] top-[10%] hidden -rotate-[9deg] lg:block">
        <div
          className="w-[260px] overflow-hidden rounded-[18px]"
          style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.12)" }}
        >
          <div className="relative h-[326px] w-full bg-[#e0dbd6]">
            <Image
              src="/photos/mariia-ai.jpg"
              alt="Mariia learning AI"
              fill
              className="object-cover"
              sizes="260px"
            />
          </div>
        </div>
      </div>

      {/* ── TR · date card ───────────────────────────────────────── */}
      <div className="absolute right-[7%] top-[12%] hidden rotate-[5deg] lg:block">
        <div
          className="w-[268px] rounded-[18px] bg-white p-6"
          style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.10)" }}
        >
          <p className="text-[12px] font-semibold text-[color:var(--muted)]">
            Coming up
          </p>
          <p className="mt-2 text-[1.5rem] font-bold leading-[1.1] tracking-[-0.03em] text-[color:var(--ink)]">
            First issue drops
          </p>
          <p className="text-[1.5rem] font-light leading-[1.1] tracking-[-0.02em] text-[color:var(--muted)]">
            Friday, {nextFridayDate()}
          </p>
          <div className="mt-3.5 h-px bg-[color:var(--line)]" />
          <p className="mt-3 text-[12px] leading-[1.6] text-[color:var(--muted)]">
            Subscribe now so you&apos;re in from day one →
          </p>
        </div>
      </div>

      {/* ── BL · mistake note · white ────────────────────────────── */}
      <div className="absolute bottom-[10%] left-[7%] hidden -rotate-[4deg] lg:block">
        <div
          className="w-[268px] rounded-[18px] bg-white p-6"
          style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.10)" }}
        >
          <p className="text-[12px] font-semibold text-[color:var(--muted)]">
            Mistake I made
          </p>
          <p className="mt-2 text-[13px] leading-[1.72] text-[color:var(--ink)]">
            I told AI to &ldquo;make it look better.&rdquo; Spent
            40&nbsp;min fixing the mess. The prompt you need is in
            issue&nbsp;#1.
          </p>
        </div>
      </div>

      {/* ── BR · laptop photo ────────────────────────────────────── */}
      <div className="absolute bottom-[6%] right-[7%] hidden rotate-[5deg] lg:block">
        <div
          className="w-[244px] overflow-hidden rounded-[18px] bg-white"
          style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.12)" }}
        >
          <div className="relative h-[272px] w-full bg-[#dde3e0]">
            <Image
              src="/photos/mariia-working.jpg"
              alt="Mariia working"
              fill
              className="object-cover"
              sizes="244px"
            />
          </div>
          <div className="px-5 py-5">
            <p className="text-[14px] font-medium leading-none tracking-[-0.01em] text-[color:var(--ink)]">
              Focus on creativity.
            </p>
            <p className="mt-1.5 text-[13px] leading-none text-[color:var(--muted)]">
              Leave execution to AI.
            </p>
          </div>
        </div>
      </div>

      {/* ── Centre content · centered ─────────────────────────────── */}
      <div className="relative z-10 mx-auto flex w-full max-w-[500px] flex-col items-center text-center">

        <h1 className="leading-none">
          <span className="block" style={{ lineHeight: 0.92 }}>
            <em
              style={{
                fontFamily: "var(--font-instrument)",
                fontStyle: "italic",
                fontSize: "clamp(5rem, 10vw, 9rem)",
                display: "inline",
              }}
            >
              AI
            </em>
            <span
              className="font-light text-[color:var(--ink)]"
              style={{
                fontSize: "clamp(1.8rem, 3.2vw, 3rem)",
                letterSpacing: "-0.02em",
              }}
            >
              {" "}for
            </span>
          </span>
          <span
            className="block font-normal text-[color:var(--ink)]"
            style={{
              fontSize: "clamp(3rem, 5.6vw, 5.1rem)",
              letterSpacing: "-0.035em",
              lineHeight: 1.0,
            }}
          >
            designers
          </span>
        </h1>

        <p className="mt-8 text-[17px] leading-[1.55] text-[color:var(--muted)]">
          I&apos;m figuring it out in public, so you don&apos;t have to
        </p>

        <p className="mt-6 max-w-[420px] text-[14.5px] leading-[1.85] text-[color:var(--muted)]">
          Every week I share what I&apos;m learning as I go: prompts,
          mistakes, tools, and workflows for designers and creatives.
          Follow along
        </p>

        <div className="mt-9 w-full">
          <NewsletterForm centered />
        </div>

        <p className="mt-4 text-[11px] tracking-[0.04em] text-[color:var(--muted)]">
          Free · weekly · unsubscribe any time
        </p>

      </div>
    </div>
  );
}
