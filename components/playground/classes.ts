export const playgroundPage =
  "relative min-h-dvh bg-home-bridal font-archivo font-light text-home-ink " +
  "[&_:is(h1,p)]:m-0 " +
  "[&_:is(button,a)]:focus-visible:outline-2 [&_:is(button,a)]:focus-visible:outline-offset-[5px] [&_:is(button,a)]:focus-visible:outline-home-sapphire";

export const playgroundField =
  "fixed inset-0 cursor-grab touch-none select-none overflow-hidden bg-home-bridal " +
  "bg-[radial-gradient(#0b195726_0.8px,transparent_0.8px)] bg-size-[18px_18px] " +
  "data-[dragging=true]:cursor-grabbing";

export const playgroundWorld = "absolute top-0 left-0 size-px will-change-transform";

export const playgroundItem =
  "absolute animate-rise opacity-0 [animation-delay:var(--delay,0ms)] " +
  "motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:[filter:none]";

export const playgroundCenter =
  "pointer-events-none top-0 left-0 w-max max-w-[17em] animate-rise-center text-center " +
  "motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:-translate-x-1/2 motion-reduce:-translate-y-1/2 " +
  "[&_h1]:font-instrument [&_h1]:text-[clamp(48px,5vw,56px)] [&_h1]:font-normal [&_h1]:leading-[1.05] [&_h1]:tracking-[-0.03em] [&_h1]:text-home-ink " +
  "max-[860px]:[&_h1]:text-[42px]";

export const playgroundLede = "mt-7 text-sm leading-[1.45] text-home-muted";

export const playgroundPrint =
  "overflow-hidden rounded bg-white shadow-[0_16px_36px_-26px_#0b195766] " +
  "transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] " +
  "hover:-translate-y-1.5 hover:shadow-[0_28px_50px_-24px_#0b195790] " +
  "motion-reduce:hover:translate-none " +
  "[&_img]:pointer-events-none [&_img]:block [&_img]:h-auto [&_img]:w-full";

export const playgroundHint =
  "pointer-events-none fixed bottom-[22px] left-1/2 z-40 inline-flex min-h-[38px] -translate-x-1/2 items-center gap-2 rounded-full border border-[#dfe5efb8] bg-[#ffffffe6] px-3.5 " +
  "font-archivo text-xs font-normal text-home-ink shadow-[0_2px_5px_#0b195710,0_12px_30px_#0b195708,inset_0_1px_0_#fff] backdrop-blur-[20px] " +
  "max-[540px]:px-3 max-[540px]:[&_span]:hidden";

export const playgroundRecenter =
  "fixed right-5 bottom-[22px] z-40 inline-flex min-h-[38px] cursor-pointer items-center gap-2 rounded-full border border-[#dfe5efb8] bg-[#ffffffe6] px-3.5 " +
  "font-archivo text-xs font-normal text-home-muted shadow-[0_2px_5px_#0b195710,0_12px_30px_#0b195708,inset_0_1px_0_#fff] backdrop-blur-[20px] " +
  "hover:text-home-ink max-[540px]:right-3.5 max-[540px]:bottom-[18px]";

export const playgroundPrints: Record<string, string> = {
  "bvj-welcome":
    "left-[-290px] top-[-430px] w-[168px] max-[1280px]:left-[-230px] max-[1280px]:top-[-340px] max-[1280px]:w-[140px] max-[860px]:left-[-190px] max-[860px]:top-[-250px] max-[860px]:w-[112px]",
  "bvj-cards":
    "left-[-520px] top-[-200px] w-[340px] max-[1280px]:left-[-400px] max-[1280px]:top-[-150px] max-[1280px]:w-[260px] max-[860px]:left-[-250px] max-[860px]:top-[-90px] max-[860px]:w-[168px]",
  "lyra-campaign":
    "left-[175px] top-[-410px] w-[196px] max-[1280px]:left-[140px] max-[1280px]:top-[-330px] max-[1280px]:w-[150px] max-[860px]:left-[100px] max-[860px]:top-[-240px] max-[860px]:w-[108px]",
  "lyra-packaging":
    "left-[210px] top-[-28px] w-[300px] max-[1280px]:left-[165px] max-[1280px]:top-[-16px] max-[1280px]:w-[220px] max-[860px]:left-[130px] max-[860px]:top-[-20px] max-[860px]:w-[148px]",
  "bloom-menu":
    "left-[-175px] top-[175px] w-[196px] max-[1280px]:left-[-130px] max-[1280px]:top-[190px] max-[1280px]:w-[150px] max-[860px]:left-[-150px] max-[860px]:top-[130px] max-[860px]:w-[118px]",
  "bloom-identity":
    "left-[58px] top-[355px] w-[255px] max-[1280px]:left-5 max-[1280px]:top-[270px] max-[1280px]:w-[196px] max-[860px]:left-5 max-[860px]:top-[155px] max-[860px]:w-[150px]",
};
