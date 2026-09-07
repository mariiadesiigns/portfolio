import { cn } from "@/lib/utils";

export const heroesPage =
  "box-border min-h-screen bg-[#deded8] tracking-normal text-[#11110f] [&_*]:box-border [&_*]:tracking-normal " +
  "[&_p]:font-[inherit] [&_a]:font-[inherit] [&_span]:font-[inherit] [&_strong]:font-[inherit] " +
  "[&_a]:text-inherit [&_a]:no-underline [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-current " +
  "motion-reduce:[&_*]:duration-[0.01ms]! motion-reduce:[&_*::before]:duration-[0.01ms]! motion-reduce:[&_*::after]:duration-[0.01ms]!";

export const boardHeader =
  "sticky top-0 z-50 grid min-h-[58px] grid-cols-[1fr_auto_1fr] items-center border-b border-[rgba(17,17,15,0.2)] bg-[rgba(245,243,237,0.96)] px-6 text-xs " +
  "max-[760px]:min-h-[54px] max-[760px]:grid-cols-[1fr_auto] max-[760px]:px-4";

export const boardIdentity =
  "flex items-center gap-4 [&_a]:font-bold [&_span]:text-[#62625d] max-[760px]:[&_span]:hidden";

export const studyIndex =
  "flex items-center gap-0.5 max-[760px]:hidden " +
  "[&_a]:grid [&_a]:size-8 [&_a]:place-items-center [&_a]:rounded-full [&_a]:transition-[background-color,color] [&_a]:duration-[180ms] [&_a]:ease-in-out " +
  "[&_a]:hover:bg-[#11110f] [&_a]:hover:text-[#f5f3ed] [&_a]:focus-visible:bg-[#11110f] [&_a]:focus-visible:text-[#f5f3ed] [&_a]:focus-visible:outline-0";

export const exploreLink = "inline-flex items-center justify-self-end gap-2 font-bold";

export const boardIntro =
  "grid min-h-[340px] grid-cols-[0.7fr_1.5fr_0.8fr] items-end border-b border-[rgba(17,17,15,0.2)] bg-[#f5f3ed] px-[4vw] pt-[72px] pb-11 " +
  "max-[760px]:flex max-[760px]:min-h-[310px] max-[760px]:flex-col max-[760px]:items-start max-[760px]:justify-end max-[760px]:gap-5 max-[760px]:px-[18px] max-[760px]:pt-14 max-[760px]:pb-8 " +
  "[&_h1]:m-0 [&_h1]:max-w-[760px] [&_h1]:text-[68px] [&_h1]:font-normal [&_h1]:leading-[0.92] " +
  "max-[760px]:[&_h1]:max-w-[500px] max-[760px]:[&_h1]:text-[52px]";

export const boardKicker = "m-0 text-xs leading-[1.55] font-bold";

export const boardSummary =
  "m-0 max-w-[37ch] justify-self-end text-xs leading-[1.55] text-[#555550] max-[760px]:max-w-[48ch] max-[760px]:justify-self-auto";

export const studies = "px-[2vw] pb-[2vw] max-[760px]:px-2 max-[760px]:pb-2";

export const study = "scroll-mt-[58px] pt-7 max-[760px]:pt-[18px]";

export const studyMeta =
  "grid min-h-[46px] grid-cols-[44px_1fr_auto] items-center text-xs text-[#5b5b56] " +
  "[&_strong]:text-[13px] [&_strong]:text-[#11110f] " +
  "max-[760px]:min-h-[42px] max-[760px]:grid-cols-[36px_1fr] max-[760px]:[&_span:last-child]:hidden";

export const preview =
  "min-h-[720px] overflow-hidden rounded border border-[rgba(17,17,15,0.2)] bg-[#f5f3ed] max-[760px]:min-h-[650px]";

export const heroNav =
  "relative z-[5] grid min-h-[76px] grid-cols-[1fr_auto_1fr] items-center border-b border-current px-7 text-[13px] " +
  "max-[760px]:min-h-16 max-[760px]:px-3.5 max-[760px]:text-[11px]";

export const navLeft =
  "flex items-center gap-5 max-[760px]:gap-0 " +
  "[&_a]:relative [&_a]:after:absolute [&_a]:after:right-0 [&_a]:after:bottom-[-5px] [&_a]:after:left-0 [&_a]:after:h-px [&_a]:after:origin-right [&_a]:after:scale-x-0 [&_a]:after:bg-current [&_a]:after:content-[''] [&_a]:after:transition-transform [&_a]:after:duration-[220ms] [&_a]:after:ease-[cubic-bezier(0.22,1,0.36,1)] " +
  "[&_a]:hover:after:origin-left [&_a]:hover:after:scale-x-100 " +
  "max-[760px]:[&_a]:hidden max-[760px]:[&_a:first-child]:inline";

export const navRight = "flex items-center justify-end gap-5";

export const wordmark = "text-[18px] font-extrabold max-[760px]:text-sm";

export const navAction =
  "inline-flex min-h-10 items-center justify-center rounded-full border border-current bg-[#11110f] px-[18px] font-semibold whitespace-nowrap text-[#f5f3ed]! " +
  "transition-transform duration-[180ms] ease-in-out hover:-translate-y-0.5 " +
  "max-[760px]:min-h-[34px] max-[760px]:px-3";

export const heroCanvas =
  "relative min-h-[644px] overflow-hidden p-10 " +
  "max-[760px]:flex max-[760px]:min-h-[586px] max-[760px]:flex-col max-[760px]:items-start max-[760px]:justify-between max-[760px]:bg-none max-[760px]:px-5 max-[760px]:pt-6 max-[760px]:pb-[26px] max-[760px]:text-left";

export const services =
  "relative z-[3] m-0 text-[11px] leading-[1.45] max-[760px]:max-w-[180px]";

export const headline =
  "relative z-[2] m-0 text-[96px] leading-[0.88] [&_span]:block " +
  "max-[1100px]:text-[76px] " +
  "max-[760px]:my-auto max-[760px]:w-full max-[760px]:self-stretch max-[760px]:text-left max-[760px]:text-[54px] " +
  "max-[760px]:[&_span:last-child]:ml-0";

export const intro =
  "relative z-[3] m-0 max-w-[48ch] text-[15px] leading-normal max-[760px]:max-w-[36ch] max-[760px]:self-start max-[760px]:text-[13px]";

export const heroAction =
  "relative z-[4] inline-flex min-h-11 items-center gap-3 border-b border-current text-[13px] font-bold transition-transform duration-[180ms] ease-in-out hover:-translate-y-0.5 " +
  "max-[760px]:relative max-[760px]:right-auto max-[760px]:bottom-auto max-[760px]:self-start";

export const signature = "relative z-[3] m-0 text-[11px] leading-[1.45] max-[760px]:hidden";

export const motif =
  "pointer-events-none absolute z-[1] [&_span]:absolute [&_span]:block [&_i]:absolute [&_i]:block [&_i]:bg-current " +
  "max-[760px]:inset-[112px_-50px_auto_auto] max-[760px]:h-[180px] max-[760px]:w-[180px] max-[760px]:rotate-8 max-[760px]:opacity-40 " +
  "max-[760px]:[&_span]:hidden max-[760px]:[&_i]:hidden " +
  "max-[760px]:before:hidden max-[760px]:after:hidden";

type HeroVariant = {
  preview?: string;
  nav?: string;
  navAction?: string;
  canvas?: string;
  services?: string;
  headline?: string;
  intro?: string;
  action?: string;
  signature?: string;
  motif?: string;
};

export const heroVariants: Record<number, HeroVariant> = {
  1: {
    preview: "bg-[#f6f1e7]",
    canvas: "grid grid-cols-[1fr_280px] grid-rows-[auto_1fr_auto]",
    headline:
      "col-span-full max-w-[870px] self-center font-normal animate-first-statement [&_span:last-child]:ml-[18%] [&_span:last-child]:italic",
    intro: "self-end",
    action: "self-end justify-self-end",
    signature: "absolute top-9 right-10",
    motif:
      "top-[20%] right-[6%] h-[360px] w-[240px] border border-[#b63a2d] text-[#b63a2d] " +
      "[&_span]:right-3.5 [&_span]:text-[10px] [&_span:nth-child(1)]:top-3.5 [&_span:nth-child(2)]:top-1/2 [&_span:nth-child(3)]:bottom-3.5 " +
      "[&_i]:left-0 [&_i]:h-px [&_i]:w-full [&_i:nth-child(4)]:top-[33%] [&_i:nth-child(5)]:top-[66%] [&_i:nth-child(6)]:hidden",
  },
  2: {
    preview: "bg-[#10110f] text-[#f2f0e8]",
    nav: "border-[rgba(242,240,232,0.38)]",
    navAction: "bg-[#d7ff45] text-[#10110f]!",
    canvas: "grid grid-cols-[1.4fr_0.6fr] grid-rows-[auto_1fr_auto]",
    headline: "col-span-full max-w-[940px] self-center uppercase [&_span:last-child]:text-[#d7ff45]",
    intro: "self-end text-[#d4d2cb]",
    action: "self-end justify-self-end",
    signature: "absolute top-10 right-10 text-[#d4d2cb]",
    motif:
      "right-[-50px] bottom-[-76px] h-[330px] w-[330px] rotate-[16deg] border-[34px] border-[#d7ff45] [&_span]:hidden [&_i]:hidden",
  },
  3: {
    preview: "bg-[#efd8df]",
    canvas: "flex flex-col items-center justify-center text-center",
    services: "absolute top-9",
    headline: "max-w-[980px] text-[92px] max-[1100px]:text-[76px] [&_span:last-child]:italic",
    intro: "mt-11",
    action: "mt-6",
    signature: "absolute bottom-9 left-10",
    motif:
      "inset-[54px_8%] border-y border-current " +
      "before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:font-[Georgia,serif] before:text-[130px] before:leading-none before:content-['('] " +
      "after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:font-[Georgia,serif] after:text-[130px] after:leading-none after:content-[')'] " +
      "[&_span]:hidden [&_i]:hidden",
  },
  4: {
    preview: "bg-[#c9dcff]",
    canvas: "grid grid-cols-2 grid-rows-[auto_1fr_auto]",
    headline: "col-span-full max-w-[930px] self-center [&_span:last-child]:ml-[22%] [&_span:last-child]:text-[#d93428]",
    intro: "self-end",
    action: "self-end justify-self-end",
    signature: "absolute top-10 right-10",
    motif:
      "top-[110px] right-[6%] h-[290px] w-[290px] rotate-8 border border-[#d93428] text-[#d93428] " +
      "after:absolute after:right-[-44px] after:bottom-[18px] after:rotate-90 after:text-[11px] after:content-['MEANING_/_FORM_/_MEMORY'] " +
      "[&_span]:hidden [&_i]:hidden",
  },
  5: {
    preview: "bg-[#eee9dc]",
    canvas: "grid grid-cols-[0.8fr_1.7fr_0.8fr] grid-rows-[auto_1fr_auto] items-center",
    services: "col-span-full",
    headline:
      "col-span-full text-center text-[94px] font-semibold max-[1100px]:text-[76px] [&_span:last-child]:italic [&_span:last-child]:font-semibold",
    intro: "self-end",
    action: "col-start-3 self-end justify-self-end",
    signature: "absolute top-10 right-10",
    motif:
      "top-1/2 left-1/2 h-[240px] w-[72%] -translate-x-1/2 -translate-y-1/2 border-y border-[rgba(17,17,15,0.35)] " +
      "[&_span]:bottom-3 [&_span]:text-[10px] [&_span]:italic " +
      "[&_span:nth-child(1)]:left-0 [&_span:nth-child(2)]:left-1/2 [&_span:nth-child(2)]:-translate-x-1/2 [&_span:nth-child(3)]:right-0 " +
      "[&_i]:hidden",
  },
  6: {
    preview: "bg-[#f5df62]",
    canvas: "grid grid-cols-2 grid-rows-[auto_1fr_auto]",
    headline: "col-span-full max-w-[900px] self-center [&_span:last-child]:ml-[26%] [&_span:last-child]:text-[#a52b2d]",
    intro: "self-end",
    action: "self-end justify-self-end",
    signature: "absolute top-10 right-10",
    motif:
      "right-[8%] bottom-[-34px] h-[360px] w-[220px] text-[#a52b2d] " +
      "before:absolute before:inset-0 before:font-[Georgia,serif] before:text-[330px] before:leading-[0.8] before:content-[';'] " +
      "[&_span]:hidden [&_i]:hidden",
  },
  7: {
    preview: "bg-[#173f38] text-[#f5f0e6]",
    nav: "border-[rgba(245,240,230,0.42)]",
    navAction: "bg-[#ff735c] text-[#173f38]!",
    canvas: "grid grid-cols-[1.25fr_0.75fr] grid-rows-[auto_1fr_auto]",
    headline: "col-span-full max-w-[940px] self-center [&_span:last-child]:text-[#ff735c]",
    intro: "self-end text-[#e0dbd1]",
    action: "self-end justify-self-end",
    signature: "absolute top-10 right-10 text-[#e0dbd1]",
    motif:
      "top-1/2 right-[-5%] h-[310px] w-[310px] -translate-y-1/2 rotate-45 border border-[#ff735c] text-[#ff735c] " +
      "[&_i]:left-1/2 [&_i]:h-full [&_i]:w-px [&_i:nth-child(5)]:top-1/2 [&_i:nth-child(5)]:left-0 [&_i:nth-child(5)]:h-px [&_i:nth-child(5)]:w-full [&_i:nth-child(6)]:hidden [&_span]:hidden",
  },
  8: {
    preview: "bg-[#f7f6f1]",
    canvas: "grid grid-cols-[0.65fr_1.7fr_0.65fr] grid-rows-[auto_1fr_auto]",
    services: "col-start-1",
    headline:
      "col-span-full self-center text-center text-[94px] max-[1100px]:text-[76px] [&_span:last-child]:italic",
    intro: "col-start-2 self-end justify-self-center text-center",
    action: "col-start-3 self-end justify-self-end",
    signature: "absolute top-10 right-10",
    motif:
      "inset-[24px_33%] border-x border-[rgba(17,17,15,0.28)] " +
      "before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:text-[10px] before:whitespace-nowrap before:content-['A_BRAND_IS_A_STORY_MADE_VISIBLE'] " +
      "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:text-[10px] after:whitespace-nowrap after:content-['A_BRAND_IS_A_STORY_MADE_VISIBLE'] " +
      "[&_span]:hidden [&_i]:hidden",
  },
  9: {
    preview: "bg-[#b7dfcf]",
    canvas: "flex flex-col justify-between",
    headline:
      "my-auto max-w-[980px] self-center text-center text-[68px] leading-[1.02] uppercase max-[1100px]:text-[56px] max-[760px]:text-[38px] " +
      "[&_span]:inline [&_span:last-child]:text-[#fff8e9]",
    intro: "max-w-[42ch]",
    action: "absolute right-10 bottom-10",
    signature: "absolute top-10 right-10",
    motif:
      "top-1/2 left-1/2 h-[270px] w-[66%] -translate-x-1/2 -translate-y-1/2 -rotate-3 border border-[rgba(17,17,15,0.65)] [&_span]:hidden [&_i]:hidden",
  },
  10: {
    preview: "bg-[#f1efe9]",
    nav: "border-[rgba(17,17,15,0.45)]",
    canvas:
      "grid grid-cols-2 grid-rows-[auto_1fr_auto] bg-[linear-gradient(to_right,transparent_calc(50%-0.5px),rgba(17,17,15,0.18)_calc(50%-0.5px),rgba(17,17,15,0.18)_calc(50%+0.5px),transparent_calc(50%+0.5px))]",
    headline:
      "col-span-full max-w-[930px] self-center text-[78px] leading-[0.98] uppercase max-[1100px]:text-[64px] [&_span:last-child]:ml-[24%] [&_span:last-child]:text-[#c72d25]",
    intro: "max-w-[44ch] self-end",
    action: "self-end justify-self-end",
    signature: "absolute top-10 right-10",
    motif:
      "inset-5 border border-[rgba(17,17,15,0.26)] text-[#c72d25] " +
      "before:absolute before:bottom-2 before:left-2.5 before:text-[10px] before:content-['X_0040_/_Y_0644'] " +
      "after:absolute after:top-2 after:right-2.5 after:text-[10px] after:content-['TYPE_STUDY_/_10'] " +
      "[&_span]:hidden [&_i]:hidden",
  },
};

export function variantClass(number: number, key: keyof HeroVariant, base: string) {
  return cn(base, heroVariants[number]?.[key]);
}
