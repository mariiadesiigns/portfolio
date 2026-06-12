export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Image from "next/image";
import { NewsletterForm } from "@/components/forms/newsletter-form";

export const metadata: Metadata = {
  title: "Fable 5 Tutorial",
  description:
    "Get the Fable 5 brand reveal workflow, exact prompt, and motion direction notes.",
};

export default function FablePage() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-16 lg:px-8 lg:py-20">
      <div className="absolute left-[7%] top-[10%] hidden -rotate-[9deg] lg:block">
        <div
          className="w-[260px] overflow-hidden rounded-[18px]"
          style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.12)" }}
        >
          <div className="relative h-[326px] w-full bg-[#e0dbd6]">
            <Image
              src="/photos/mariia-ai.jpg"
              alt="Mariia testing AI tools"
              fill
              className="object-cover"
              sizes="260px"
            />
          </div>
        </div>
      </div>

      <div className="absolute right-[7%] top-[12%] hidden rotate-[5deg] lg:block">
        <div
          className="w-[268px] rounded-[18px] bg-white p-6"
          style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.10)" }}
        >
          <p className="text-[12px] font-semibold text-[color:var(--muted)]">
            Inside the resource
          </p>
          <p className="mt-2 text-[1.5rem] font-bold leading-[1.1] tracking-[-0.03em] text-[color:var(--ink)]">
            Exact prompt
          </p>
          <p className="text-[1.5rem] font-light leading-[1.1] tracking-[-0.02em] text-[color:var(--muted)]">
            + workflow notes
          </p>
          <div className="mt-3.5 h-px bg-[color:var(--line)]" />
          <p className="mt-3 text-[12px] leading-[1.6] text-[color:var(--muted)]">
            Upload list, motion structure, direction phrases, and refinement pass.
          </p>
        </div>
      </div>

      <div className="absolute bottom-[10%] left-[7%] hidden -rotate-[4deg] lg:block">
        <div
          className="w-[268px] rounded-[18px] bg-white p-6"
          style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.10)" }}
        >
          <p className="text-[12px] font-semibold text-[color:var(--muted)]">
            Direction I used
          </p>
          <p className="mt-2 text-[13px] leading-[1.72] text-[color:var(--ink)]">
            &ldquo;Slower on the logo.&rdquo; &ldquo;Hold the ending longer.&rdquo;
            &ldquo;One motion per element, nothing busy.&rdquo;
          </p>
        </div>
      </div>

      <div className="absolute bottom-[6%] right-[7%] hidden rotate-[5deg] lg:block">
        <div
          className="w-[244px] overflow-hidden rounded-[18px] bg-white"
          style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.12)" }}
        >
          <div className="relative h-[272px] w-full bg-[#dde3e0]">
            <Image
              src="/photos/mariia-working.jpg"
              alt="Mariia working on a creative AI workflow"
              fill
              className="object-cover"
              sizes="244px"
            />
          </div>
          <div className="px-5 py-5">
            <p className="text-[14px] font-medium leading-none tracking-[-0.01em] text-[color:var(--ink)]">
              Moving first draft.
            </p>
            <p className="mt-1.5 text-[13px] leading-none text-[color:var(--muted)]">
              Directed with taste.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[540px] flex-col items-center text-center">
        <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">
          Fable 5 resource
        </p>

        <h1 className="leading-none">
          <span className="block" style={{ lineHeight: 0.92 }}>
            <em
              style={{
                fontFamily: "var(--font-instrument)",
                fontStyle: "italic",
                fontSize: "clamp(4.8rem, 10vw, 9rem)",
                display: "inline",
              }}
            >
              Fable
            </em>
          </span>
          <span
            className="block font-normal text-[color:var(--ink)]"
            style={{
              fontSize: "clamp(2.8rem, 5.2vw, 4.8rem)",
              letterSpacing: "-0.035em",
              lineHeight: 1.0,
            }}
          >
            motion workflow
          </span>
        </h1>

        <p className="mt-7 text-[18px] leading-[1.4] tracking-[-0.02em] text-[color:var(--ink)]">
          The exact prompt + workflow from my Fable 5 brand reveal test
        </p>

        <p className="mt-3 max-w-[420px] text-[14px] leading-[1.72] text-[color:var(--muted)]">
          I uploaded a logo, mockups, colors, and type direction. Fable built a
          full animated reveal. I wrote down the prompt, structure, and
          direction notes so you can try it faster.
        </p>

        <div className="mt-9 w-full">
          <NewsletterForm
            centered
            source="fable"
            showFirstName
            buttonLabel="Send me the tutorial"
            successTitle="Fable notes reserved."
            successDescription="You are on the Fable list. I will send the prompt and workflow to this email."
          />
        </div>

        <p className="mt-4 text-[11px] tracking-[0.04em] text-[color:var(--muted)]">
          Free resource · unsubscribe any time
        </p>
      </div>
    </div>
  );
}
