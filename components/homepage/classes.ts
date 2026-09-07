export const homePage =
  "overflow-clip bg-home-paper font-archivo font-light text-home-ink " +
  "[&_:is(p,a,li,span,button,input,h1,h2,h3,h4,blockquote,em,small,strong)]:font-archivo " +
  "[&_:is(h1,h2,h3,p,figure)]:m-0 " +
  "[&_:is(a,button)]:[-webkit-tap-highlight-color:transparent] " +
  "[&_a]:no-underline " +
  "[&_:is(button,a)]:focus-visible:outline-2 [&_:is(button,a)]:focus-visible:outline-offset-[5px] [&_:is(button,a)]:focus-visible:outline-home-sapphire " +
  "[&_button]:cursor-pointer " +
  "selection:bg-home-bridal-hover selection:text-home-midnight " +
  "motion-reduce:[&_*]:animate-none! motion-reduce:[&_*]:transition-none! " +
  "motion-reduce:[&_*::before]:animate-none! motion-reduce:[&_*::after]:animate-none!";

export const homeContainer =
  "mx-auto w-[min(1200px,calc(100%-112px))] max-[1050px]:w-[calc(100%-72px)] max-[760px]:w-[calc(100%-44px)]";

export const homeSection =
  "py-[140px] max-[1050px]:py-[120px] max-[760px]:py-24";

export const homeSectionHeading =
  "mb-[58px] text-center max-[760px]:mb-10";

export const homeSectionTitle =
  "font-instrument! text-[clamp(36px,3.4vw,48px)] font-normal leading-[1.08] tracking-[-0.025em]";

export const homeCta =
  "inline-flex min-h-11 items-center justify-center gap-1.5 whitespace-nowrap rounded-[7px] border border-home-cta-border bg-home-bridal px-3.5 py-[11px] pl-4 text-[13px] font-normal leading-normal text-home-midnight " +
  "transition-[scale,background-color,border-color,color] duration-150 ease-[cubic-bezier(0.2,0,0,1)] " +
  "hover:border-home-cta-border-hover hover:bg-home-cta-hover hover:text-home-midnight " +
  "active:scale-[0.96] " +
  "[&_svg]:shrink-0 [&_svg]:transition-[translate] [&_svg]:duration-150 [&_svg]:ease-[cubic-bezier(0.2,0,0,1)] " +
  "hover:[&_svg]:translate-x-0.5 " +
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-home-sapphire " +
  "motion-reduce:transition-none motion-reduce:hover:[&_svg]:translate-none motion-reduce:active:scale-none";

export const homeHeader =
  "pointer-events-none fixed top-[25px] right-0 left-0 z-50 flex justify-center max-[760px]:top-4";

export const homeSkipLink =
  "pointer-events-auto absolute top-[-120px] rounded-[10px] bg-white p-[15px] focus:top-[60px]";

export const homeNav =
  "relative flex gap-[3px] rounded-full border border-transparent bg-transparent p-1.5 shadow-none " +
  "pointer-events-auto transition-[background,border-color,box-shadow] duration-[350ms] " +
  "data-[scrolled=true]:border-[#dfe5efb8] data-[scrolled=true]:bg-[#ffffffe6] " +
  "data-[scrolled=true]:shadow-[0_2px_5px_#0b195710,0_12px_30px_#0b195708,inset_0_1px_0_#fff] " +
  "data-[scrolled=true]:backdrop-blur-[20px] " +
  "max-[760px]:gap-0 max-[760px]:p-[5px] " +
  "max-[540px]:rounded-[24px] " +
  "[&_a]:[-webkit-tap-highlight-color:transparent] [&_a]:font-archivo [&_span]:font-archivo " +
  "[&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-[5px] [&_a]:focus-visible:outline-home-sapphire";

export const homeNavLink =
  "relative z-[1] flex items-center gap-1.5 rounded-full px-[19px] py-[13px] text-[12px] leading-[1.5] font-normal text-[#545b61] transition-colors duration-200 " +
  "hover:text-home-sapphire focus-visible:text-home-sapphire aria-[current=location]:text-home-sapphire " +
  "max-[760px]:px-[13px] max-[760px]:py-3 max-[760px]:text-[11px] " +
  "max-[760px]:[&_svg]:w-[13px] " +
  "max-[540px]:min-w-[57px] max-[540px]:flex-col max-[540px]:gap-[5px] max-[540px]:rounded-[18px] max-[540px]:px-3 max-[540px]:py-2.5 max-[540px]:text-[9px] " +
  "max-[540px]:[&_svg]:h-[15px] max-[540px]:[&_svg]:w-[15px] " +
  "max-[360px]:min-w-[52px] max-[360px]:px-[9px] " +
  "[&[href='/playground']]:max-[540px]:min-w-[73px] [&[href='/playground']]:max-[360px]:min-w-[66px]";

export const homeNavArrow = "ml-[3px] max-[760px]:hidden";

export const homeNavHighlight =
  "pointer-events-none absolute top-0 left-0 z-0 h-0 w-0 rounded-full bg-home-bridal opacity-0 " +
  "[transition:opacity_0.25s_ease,top_0.5s_cubic-bezier(0.34,1.02,0.64,1),left_0.45s_cubic-bezier(0.34,1.05,0.64,1),width_0.45s_cubic-bezier(0.34,1.05,0.64,1),height_0.5s_cubic-bezier(0.34,1.02,0.64,1)] " +
  "max-[540px]:rounded-[18px]";

export const homeHero =
  "flex min-h-[510px] flex-col items-center justify-center px-6 pt-[145px] pb-[62px] text-center " +
  "min-[1600px]:min-h-[560px] " +
  "max-[760px]:min-h-0 max-[760px]:px-5 max-[760px]:pt-[137px] max-[760px]:pb-8 " +
  "max-[540px]:px-[18px] max-[540px]:pt-[132px] max-[540px]:pb-5";

export const homeHeroEyebrow =
  "mb-9! animate-arrive font-instrument! text-[21px] font-normal text-home-sapphire " +
  "max-[760px]:text-[18px] max-[540px]:mb-7! max-[540px]:text-[16px]";

export const homeHeroTitle =
  "animate-arrive-80 text-[clamp(45px,4.5vw,65px)] font-light leading-[1.08] tracking-[-0.049em] text-black " +
  "max-[760px]:text-[clamp(32px,6.25vw,47px)] " +
  "max-[540px]:text-[clamp(25px,7.25vw,38px)] max-[540px]:leading-[1.16] max-[540px]:tracking-[-0.045em]";

export const homeAvailability =
  "mt-9 inline-flex items-center gap-1.5 rounded-full bg-home-bridal px-[13px] py-2 text-[11px] font-normal leading-[1.4] text-home-sapphire " +
  "animate-arrive-160 transition-colors duration-200 hover:bg-home-bridal-hover " +
  "max-[540px]:mt-7 " +
  "[&>i]:h-[5px] [&>i]:w-[5px] [&>i]:shrink-0 [&>i]:rounded-full [&>i]:bg-home-sapphire [&>i]:shadow-[0_0_0_3px_#426bc21f]";

export const workSection =
  `${homeSection} pb-[115px] max-[540px]:py-24`;

export const workList = "border-t border-[#d5d8dd]";

export const workRow =
  "group grid min-h-[187px] grid-cols-[38px_minmax(0,1fr)_190px_35px] items-center gap-[25px] border-b border-[#d5d8dd] px-3 py-[35px] " +
  "max-[1050px]:grid-cols-[25px_1fr_170px_30px] max-[1050px]:gap-[18px] " +
  "max-[760px]:min-h-[150px] max-[760px]:grid-cols-[22px_1fr_32px] max-[760px]:gap-[13px] max-[760px]:px-0 max-[760px]:py-[26px] " +
  "max-[540px]:gap-[9px] max-[540px]:py-[26px] " +
  "[@media(hover:none)_and_(min-width:541px)]:grid-cols-[22px_1fr_32px]";

export const workNumber =
  "text-[11px] text-[#91969d] max-[540px]:self-start max-[540px]:pt-1.5";

export const workName =
  "transition-opacity duration-200 group-hover:opacity-[0.72] " +
  "max-[540px]:group-hover:opacity-100 " +
  "[@media(hover:none)_and_(min-width:541px)]:group-hover:opacity-100 " +
  "[&_h3]:text-[30px] [&_h3]:font-light [&_h3]:tracking-[-0.04em] " +
  "max-[760px]:[&_h3]:text-[28px] " +
  "[&_p]:mt-[11px] [&_p]:text-xs [&_p]:leading-[1.6] [&_p]:text-[#7a828b] " +
  "max-[760px]:[&_p]:text-[11px] max-[540px]:[&_p]:mt-[7px] max-[540px]:[&_p]:text-[10px]";

export const workMeta =
  "grid items-center max-[760px]:hidden [@media(hover:none)_and_(min-width:541px)]:hidden";

export const workCategory =
  "col-start-1 row-start-1 text-[13px] italic text-[#737b84] transition-[opacity,transform] duration-[220ms] " +
  "group-hover:-translate-x-2 group-hover:opacity-0";

export const workCallout =
  "col-start-1 row-start-1 translate-x-2 text-[13px] font-normal text-[#3b424a] opacity-0 transition-[opacity,transform] duration-[220ms] " +
  "group-hover:translate-x-0 group-hover:opacity-100";

export const workThumbnail =
  "relative hidden overflow-hidden rounded border-0 [&_img]:object-contain " +
  "max-[540px]:col-span-full max-[540px]:row-start-2 max-[540px]:mt-[15px] max-[540px]:block max-[540px]:aspect-[1.55] max-[540px]:h-auto " +
  "[@media(hover:none)_and_(min-width:541px)]:col-start-2 [@media(hover:none)_and_(min-width:541px)]:mt-3 [@media(hover:none)_and_(min-width:541px)]:block [@media(hover:none)_and_(min-width:541px)]:h-[120px] [@media(hover:none)_and_(min-width:541px)]:w-[200px]";

export const workArrow =
  "grid size-[35px] place-items-center text-[#50565f] transition-[transform,color] duration-[220ms] " +
  "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-home-sapphire " +
  "max-[760px]:size-8 " +
  "max-[540px]:col-start-3 max-[540px]:row-start-1 " +
  "[@media(hover:none)_and_(min-width:541px)]:col-start-3 [@media(hover:none)_and_(min-width:541px)]:row-start-1";

export const cursorPreview =
  "pointer-events-none fixed top-0 left-0 z-[45] aspect-[1.55] w-[min(400px,36vw)] opacity-0 transition-opacity duration-200 will-change-transform " +
  "data-visible:opacity-100 motion-reduce:hidden " +
  "[&>div]:absolute [&>div]:inset-0 [&>div]:overflow-hidden [&>div]:rounded-lg [&>div]:border-0 [&>div]:opacity-0 [&>div]:shadow-[0_20px_60px_#0b195722] [&>div]:transition-opacity [&>div]:duration-200 " +
  "[&_img]:object-cover " +
  "[&>div>span]:absolute [&>div>span]:right-[13px] [&>div>span]:bottom-[13px] [&>div>span]:flex [&>div>span]:items-center [&>div>span]:gap-[18px] [&>div>span]:rounded-[30px] [&>div>span]:bg-[#fffffff0] [&>div>span]:px-3 [&>div>span]:py-[9px] [&>div>span]:text-[10px] [&>div>span]:text-[#303842]";

export const manifesto =
  "relative isolate flex min-h-[500px] items-center overflow-hidden bg-home-bridal py-[110px] " +
  "max-[760px]:min-h-[420px] max-[760px]:py-[88px] max-[540px]:min-h-[440px] max-[540px]:py-20";

export const manifestoText =
  "relative z-[1] mx-auto w-[min(1200px,calc(100%-112px))] text-left max-[760px]:w-[calc(100%-44px)] " +
  "[&_p]:max-w-[855px] [&_p]:text-[clamp(34px,3.5vw,50px)] [&_p]:font-light [&_p]:leading-[1.1] [&_p]:tracking-[-0.035em] [&_p]:text-home-ink " +
  "[&_p+p]:mt-[1.1em] [&_p:first-child]:text-home-sapphire " +
  "max-[760px]:[&_p]:text-[clamp(30px,5.1vw,38px)] max-[760px]:[&_p]:leading-[1.16] " +
  "max-[540px]:[&_p]:text-[28px] max-[540px]:[&_p+p]:mt-[0.9em] " +
  "[&_[data-word]]:opacity-[0.16] [&_[data-word]]:transition-opacity [&_[data-word]]:duration-[220ms] [&_[data-word]]:ease-linear " +
  "motion-reduce:[&_[data-word]]:opacity-100!";

export const manifestoLine =
  "pointer-events-none absolute top-1/2 right-[4.1%] z-[-1] aspect-[588.135/495.262] w-[min(583px,40.5%)] -translate-y-1/2 text-home-sapphire " +
  "max-[760px]:top-[-8%] max-[760px]:right-[-8%] max-[760px]:h-[116%] max-[760px]:w-auto max-[760px]:max-w-none max-[760px]:translate-y-0 max-[760px]:opacity-60 " +
  "max-[760px]:[mask-image:linear-gradient(to_right,transparent,black_18%)] " +
  "[&_path]:[stroke-dashoffset:1] [&_path]:transition-[stroke-dashoffset] [&_path]:duration-300 [&_path]:ease-linear " +
  "motion-reduce:[&_path]:[stroke-dashoffset:0]!";

export const serviceGrid =
  "mx-auto grid max-w-[1060px] grid-cols-2 gap-x-12 gap-y-7 max-[760px]:max-w-[520px] max-[760px]:grid-cols-1 max-[760px]:gap-[22px]";

export const serviceCard =
  "group grid grid-rows-subgrid row-span-5 gap-y-0 rounded-2xl border border-[#e0e5ec] bg-white p-9 shadow-home-card " +
  "[transition:transform_0.35s_cubic-bezier(0.2,0.7,0.3,1),border-color_0.25s,box-shadow_0.35s] " +
  "hover:border-[#b7c8ea] hover:shadow-home-card-hover focus-within:border-[#b7c8ea] focus-within:shadow-home-card-hover " +
  "[@media(hover:hover)_and_(pointer:fine)_and_(prefers-reduced-motion:no-preference)]:hover:-translate-y-1 " +
  "data-[service=partner]:border-[#cbdaf3] data-[service=partner]:bg-[linear-gradient(155deg,#f2f7ff_0%,#ffffff_38%)] " +
  "max-[1050px]:p-7 max-[760px]:flex max-[760px]:flex-col max-[760px]:p-8 max-[540px]:p-7 " +
  "[&_h3]:mb-4 [&_h3]:text-[28px] [&_h3]:font-normal [&_h3]:leading-[1.2] [&_h3]:tracking-[-0.04em] " +
  "motion-reduce:transition-none";

export const serviceTopline =
  "mb-6 flex flex-row-reverse items-center justify-between gap-3 max-[540px]:mb-[25px]";

export const serviceLabel =
  "rounded-[50px] bg-home-bridal px-[11px] py-1.5 text-[12px] leading-[18px] font-normal text-home-midnight";

export const serviceIcon =
  "grid size-[34px] place-items-center rounded-lg border border-[#d8e6fa] bg-home-bridal text-home-sapphire " +
  "[@media(hover:hover)_and_(pointer:fine)_and_(prefers-reduced-motion:no-preference)]:transition-transform " +
  "[@media(hover:hover)_and_(pointer:fine)_and_(prefers-reduced-motion:no-preference)]:duration-[350ms] " +
  "[@media(hover:hover)_and_(pointer:fine)_and_(prefers-reduced-motion:no-preference)]:ease-[cubic-bezier(0.2,0.7,0.3,1)] " +
  "[@media(hover:hover)_and_(pointer:fine)_and_(prefers-reduced-motion:no-preference)]:group-hover:-translate-y-0.5";

export const serviceDescription =
  "text-[15px] font-normal leading-[1.7] text-[#20252b] max-[760px]:max-w-[410px]";

export const serviceFit = "mt-[18px]! text-[13px] leading-[1.6] text-[#536171]";

export const serviceDetails =
  "mt-7 border-t border-[#e7ebf0] pt-7 pb-8 max-[760px]:mt-[25px] max-[760px]:pb-[29px] " +
  "[&_ul]:m-0 [&_ul]:grid [&_ul]:list-none [&_ul]:gap-3.5 [&_ul]:p-0 " +
  "[&_li]:flex [&_li]:items-start [&_li]:gap-[11px] [&_li]:text-sm [&_li]:font-normal [&_li]:leading-[1.55] [&_li]:text-[#303943] " +
  "max-[540px]:[&_li]:text-[13px] " +
  "[&_li_svg]:mt-[3px] [&_li_svg]:shrink-0 [&_li_svg]:text-home-sapphire";

export const serviceCta = `${homeCta} justify-self-start self-end max-[760px]:self-start max-[540px]:text-[12px] max-[540px]:leading-[18px]`;

export const contactSection =
  "bg-[linear-gradient(180deg,var(--color-home-paper),var(--color-home-bridal))] px-6 pt-20 pb-24 text-center " +
  "max-[760px]:px-6 max-[760px]:pt-[55px] max-[760px]:pb-[65px] " +
  "[&>h2]:mb-[25px] [&>h2]:font-instrument! [&>h2]:text-[clamp(42px,4.4vw,60px)] [&>h2]:leading-[1.04] [&>h2]:font-normal [&>h2]:tracking-[-0.025em] " +
  "max-[540px]:[&>h2]:text-[38px] " +
  "[&>h2_em]:font-instrument! [&>h2_em]:text-home-sapphire " +
  "[&>p]:text-[13px] [&>p]:leading-[1.4] [&>p]:text-[#798798] max-[540px]:[&>p]:text-[12px] max-[540px]:[&>p]:leading-[18px]";

export const contactActions = "mt-[26px] flex flex-wrap items-center justify-center gap-3";

export const contactSocials = "flex gap-2";

export const socialButton =
  "inline-flex size-11 items-center justify-center rounded-md border border-[#c6d4e8] bg-transparent text-[#344454] " +
  "transition-[scale,color,background-color,border-color,box-shadow] duration-150 ease-[cubic-bezier(0.2,0,0,1)] " +
  "hover:border-[#426bc266] hover:bg-white hover:text-home-sapphire hover:shadow-[0_2px_8px_#0b195712] " +
  "active:scale-[0.96] " +
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-home-sapphire " +
  "motion-reduce:transition-none motion-reduce:active:scale-none";

export const textLink =
  "inline-flex items-center gap-1.5 border-b border-[#b4c8ee] pb-1.5 text-[12px] leading-[18px] font-normal text-home-sapphire";

export const emailLine =
  "mt-5 flex items-center justify-center gap-1 text-[11px] text-[#74849a] " +
  "[&_button]:grid [&_button]:size-[34px] [&_button]:place-items-center [&_button]:rounded-[5px] [&_button]:border-0 [&_button]:bg-transparent " +
  "[&_button]:hover:bg-home-bridal-hover [&_button]:hover:text-home-sapphire";

export const copyStatus = "mt-[5px] block min-h-4 text-[10px] text-home-sapphire";

export const homeFooter = "bg-home-bridal";

export const homeFooterRow =
  "flex min-h-[105px] items-center justify-between gap-5 border-t border-[#d3e3f7] " +
  "max-[760px]:min-h-[100px] max-[760px]:flex-wrap max-[760px]:py-6 " +
  "max-[540px]:flex-col max-[540px]:justify-center max-[540px]:gap-[18px] max-[540px]:text-center";

export const homeWordmark =
  "font-instrument! text-[26px] leading-[1.5] text-black max-[760px]:text-[24px] [&_span]:font-instrument! [&_span]:text-black";

export const homeFooterCopy = "text-[10px] text-[#70849c]";

export const aboutSection =
  "bg-home-bridal px-6 pt-24 pb-24 max-[640px]:px-[22px] max-[640px]:pt-20 max-[640px]:pb-[72px]";

export const aboutHeading =
  "mb-[30px] text-center max-[640px]:mb-7";

export const aboutTitle = `${homeSectionTitle} italic text-home-midnight`;

export const aboutComposition =
  "relative mx-auto h-[480px] w-[min(900px,100%)] min-[641px]:max-[900px]:h-[450px] max-[640px]:h-[410px] max-[640px]:max-w-[390px]";

export const aboutPhoto =
  "absolute top-[60px] left-[33%] z-[1] aspect-[533/648] w-[34.111%] overflow-hidden rounded-[10px] " +
  "shadow-[0_2px_4px_#0b195710,0_18px_40px_#0b195718,0_36px_72px_#0b19570d] " +
  "[&_img]:origin-[72%_70%] [&_img]:scale-[1.45] [&_img]:object-cover [&_img]:object-[50%_90%] " +
  "max-[640px]:top-[84px] max-[640px]:left-1/2 max-[640px]:w-[210px] max-[640px]:-translate-x-1/2";

export const aboutCard =
  "absolute rounded-[5px] border border-white bg-white " +
  "shadow-[0_1px_2px_#0b195708,0_10px_24px_#0b19570d,0_24px_48px_#0b195708] " +
  "[transform:translate3d(calc(var(--card-travel,0)*var(--from-x)),0,0)] " +
  "[transition:border-color_0.3s,box-shadow_0.35s_cubic-bezier(0.2,0.7,0.3,1),translate_0.35s_cubic-bezier(0.2,0.7,0.3,1)] " +
  "[@media(hover:hover)_and_(pointer:fine)]:hover:border-[#c5d4ee] " +
  "[@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-[3px] " +
  "[@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_2px_4px_#0b19570a,0_16px_32px_#0b195714,0_32px_64px_#0b19570a] " +
  "[&_h3]:text-[20px] [&_h3]:font-light [&_h3]:leading-none [&_h3]:tracking-[-0.035em] [&_h3]:text-[#20252a] " +
  "[&_p]:mt-[25px]! [&_p]:max-w-[176px] [&_p]:text-[20px] [&_p]:leading-none [&_p]:tracking-[-0.03em] [&_p]:text-[#626b74] " +
  "min-[641px]:max-[900px]:[&_h3]:text-[18px] min-[641px]:max-[900px]:[&_p]:text-[17px] min-[641px]:max-[900px]:[&_p]:leading-[1.15] " +
  "max-[640px]:[&_h3]:text-[14px] max-[640px]:[&_p]:mt-[18px]! max-[640px]:[&_p]:max-w-[122px] max-[640px]:[&_p]:text-[14px] max-[640px]:[&_p]:leading-[1.15] " +
  "motion-reduce:[transform:none] motion-reduce:transition-none motion-reduce:hover:translate-none";

export const aboutSketchLeft =
  "top-0 left-[8.111%] h-[143px] w-[21.333%] overflow-hidden [--from-x:-150px] " +
  "[&_img]:object-contain [&_img]:p-0 [&_img]:[transform:scale(2.1)] " +
  "max-[640px]:top-1 max-[640px]:left-[42px] max-[640px]:h-[68px] max-[640px]:w-[108px] max-[640px]:[--from-x:-36px]";

export const aboutPartner =
  "top-[166px] left-[0.778%] min-h-[153px] w-[28.667%] px-[15px] pt-[55px] pb-[13px] [--from-x:-110px] " +
  "min-[641px]:max-[900px]:pt-11 min-[641px]:max-[900px]:pb-[15px] " +
  "max-[640px]:top-[199px] max-[640px]:left-[22px] max-[640px]:z-[2] max-[640px]:min-h-[108px] max-[640px]:w-[146px] max-[640px]:px-2.5 max-[640px]:pt-7 max-[640px]:pb-2 max-[640px]:[--from-x:-32px]";

export const aboutExperience =
  "top-[35px] left-[60.333%] z-[2] min-h-[116px] w-[15.889%] rounded-[5px] px-[15px] pt-3 pb-[13px] [--from-x:105px] " +
  "[&_h3]:leading-none " +
  "min-[641px]:max-[900px]:w-[130px] " +
  "max-[640px]:top-[57px] max-[640px]:right-2 max-[640px]:left-auto max-[640px]:min-h-[68px] max-[640px]:w-[108px] max-[640px]:px-2.5 max-[640px]:pt-2 max-[640px]:pb-2 max-[640px]:[--from-x:36px] " +
  "max-[640px]:[&_h3]:text-[13px]";

export const aboutNumber =
  "mb-4 block text-[45px] leading-[35px] font-light tracking-[-0.04em] max-[640px]:mb-1.5 max-[640px]:text-[28px] max-[640px]:leading-[22px]";

export const aboutSketchRight =
  "top-[211px] left-[69.333%] h-[173px] w-[29.444%] overflow-hidden [--from-x:150px] " +
  "[&_svg]:h-full [&_svg]:w-full [&_svg]:p-0 [&_svg]:[transform:scale(2.1)] " +
  "min-[641px]:max-[900px]:top-[205px] min-[641px]:max-[900px]:h-[150px] " +
  "max-[640px]:top-[239px] max-[640px]:right-2 max-[640px]:left-auto max-[640px]:z-[2] max-[640px]:h-[68px] max-[640px]:w-[108px] max-[640px]:[--from-x:36px]";

export const aboutWorldwide =
  "top-[358px] left-[24.889%] z-[2] min-h-[108px] w-[16.111%] px-[15px] pt-[55px] pb-[13px] [--from-x:-85px] " +
  "min-[641px]:max-[900px]:top-80 min-[641px]:max-[900px]:w-[145px] " +
  "max-[640px]:top-[328px] max-[640px]:left-[calc(50%-64px)] max-[640px]:right-auto max-[640px]:z-[2] max-[640px]:min-h-[68px] max-[640px]:w-[128px] max-[640px]:px-2.5 max-[640px]:pt-7 max-[640px]:pb-2 max-[640px]:[--from-x:0]";

export const showcase =
  "relative mx-auto w-full overflow-hidden bg-home-paper motion-reduce:[&_*]:transition-none!";

export const showcaseCanvas =
  "relative h-[700px] w-full cursor-grab touch-pan-y select-none overflow-hidden active:cursor-grabbing " +
  "max-[1199px]:h-[600px] max-[809px]:h-[500px]";

export const showcaseTrack =
  "flex h-full w-max will-change-transform motion-reduce:will-change-auto";

export const showcaseGroup = "flex h-full shrink-0 gap-8 pr-8";

export const showcaseSlide =
  "relative h-full w-[933px] shrink-0 overflow-hidden max-[1199px]:w-[800px] max-[809px]:w-[666px]";

export const showcaseImage = "pointer-events-none h-full w-full object-cover";

export const showcaseControls =
  "pointer-events-none absolute right-8 bottom-6 z-[4] flex items-center rounded-[50px] bg-[#ffffffeb] px-1.5 py-1 text-[#31353b] opacity-0 shadow-[0_2px_14px_#0000000a] backdrop-blur-[12px] " +
  "focus-within:pointer-events-auto focus-within:opacity-100 " +
  "max-[640px]:right-3.5 max-[640px]:bottom-3 max-[640px]:px-1 max-[640px]:py-0.5 " +
  "[&_button]:grid [&_button]:size-[35px] [&_button]:cursor-pointer [&_button]:place-items-center [&_button]:rounded-full [&_button]:border-0 [&_button]:bg-transparent [&_button]:transition-colors [&_button]:duration-200 " +
  "[&_button]:hover:bg-[#00000008] [&_button]:disabled:cursor-default [&_button]:disabled:opacity-40 " +
  "[&_button]:focus-visible:outline-2 [&_button]:focus-visible:outline-offset-[3px] [&_button]:focus-visible:outline-home-sapphire " +
  "max-[640px]:[&_button]:size-[30px]";

export const showcaseCounter =
  "flex min-w-[47px] items-center justify-center gap-[5px] text-[10px] [font-variant-numeric:tabular-nums] " +
  "[&>span]:text-[#95999e] max-[640px]:min-w-[43px] max-[640px]:text-[9px]";

export const showcasePlayToggle =
  "ml-[7px] w-9 rounded-none border-l border-[#dddddd] pl-[7px] max-[640px]:ml-1 max-[640px]:h-[27px] max-[640px]:w-[31px]";

export const testimonialSection = `${homeSection} pb-[120px] max-[760px]:pb-24`;

export const testimonialTrack =
  "grid cursor-grab grid-flow-col auto-cols-[calc((100%-24px)/2)] gap-6 overflow-x-auto overscroll-x-contain snap-x snap-mandatory [scrollbar-width:none] [scroll-padding-inline:72px] " +
  "pt-10 px-[72px] pb-[112px] -mt-10 -mx-[72px] -mb-[88px] " +
  "[&::-webkit-scrollbar]:hidden " +
  "data-[settling=true]:snap-none data-[dragging=true]:cursor-grabbing data-[dragging=true]:snap-none data-[dragging=true]:select-none " +
  "focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-home-sapphire " +
  "max-[1050px]:px-9 max-[1050px]:-mx-9 max-[1050px]:[scroll-padding-inline:36px] " +
  "max-[760px]:auto-cols-[100%] max-[760px]:gap-[18px] max-[760px]:px-[22px] max-[760px]:-mx-[22px] max-[760px]:[scroll-padding-inline:22px]";

export const testimonialCard =
  "flex min-h-[330px] snap-start flex-col rounded-2xl border border-[#dfe4eb] bg-white p-9 shadow-home-card transition-[border-color,box-shadow] duration-300 " +
  "[@media(hover:hover)]:hover:border-[#b7c8ea] [@media(hover:hover)]:hover:shadow-home-card-hover " +
  "max-[760px]:min-h-[220px] max-[760px]:p-[22px] " +
  "[&_blockquote]:mb-[30px] [&_blockquote]:text-[clamp(18px,1.5vw,20px)] [&_blockquote]:font-normal [&_blockquote]:leading-[1.6] [&_blockquote]:tracking-[-0.022em] [&_blockquote]:text-[#252b32] " +
  "max-[760px]:[&_blockquote]:mb-5 max-[760px]:[&_blockquote]:text-[16px] max-[760px]:[&_blockquote]:leading-[1.5] " +
  "[&_figcaption]:mt-auto [&_figcaption]:flex [&_figcaption]:items-center [&_figcaption]:gap-3.5 " +
  "[&_strong]:block [&_strong]:text-[15px] [&_strong]:leading-[1.35] [&_strong]:font-medium [&_strong]:text-[#333b45] " +
  "max-[760px]:[&_strong]:text-[13px] " +
  "[&_small]:mt-1 [&_small]:block [&_small]:max-w-[310px] [&_small]:text-[13px] [&_small]:leading-[1.45] [&_small]:text-[#616b77] " +
  "max-[760px]:[&_small]:text-[12px] " +
  "motion-reduce:transition-none";

export const testimonialAvatar =
  "grid size-12 shrink-0 place-items-center overflow-hidden rounded-full bg-home-bridal text-[10px] text-home-midnight shadow-[inset_0_0_0_1px_#c5d4ee] " +
  "max-[760px]:size-10 " +
  "[&_img]:h-full [&_img]:w-full [&_img]:object-cover";

export const testimonialNav =
  "mt-3 flex justify-center gap-3 " +
  "[&_button]:grid [&_button]:size-11 [&_button]:cursor-pointer [&_button]:place-items-center [&_button]:rounded-lg [&_button]:border [&_button]:border-[#dce3eb] [&_button]:bg-transparent [&_button]:text-home-ink " +
  "[&_button]:transition-[background,border-color,opacity] [&_button]:duration-[250ms] " +
  "[&_button]:hover:enabled:border-[#b4c8ee] [&_button]:hover:enabled:bg-home-bridal [&_button]:hover:enabled:text-home-sapphire " +
  "[&_button]:disabled:cursor-default [&_button]:disabled:opacity-30 " +
  "[&_button]:focus-visible:outline-2 [&_button]:focus-visible:outline-offset-4 [&_button]:focus-visible:outline-home-sapphire " +
  "motion-reduce:[&_button]:transition-none";

export const playgroundTeaser =
  "px-0 pt-2 pb-16 max-[760px]:pt-[5px] max-[760px]:pb-[45px]";

export const playgroundCanvas =
  "relative isolate block aspect-[1024/419] overflow-hidden rounded-xl bg-home-bridal " +
  "bg-[radial-gradient(#0b195726_0.8px,transparent_0.8px)] bg-size-[18px_18px] " +
  "shadow-[inset_0_0_0_1px_#0b19570d,inset_0_1px_0_#ffffffb3] transition-shadow duration-[400ms] " +
  "hover:shadow-[inset_0_0_0_1px_#0b195714,inset_0_1px_0_#ffffffb3,0_24px_60px_#0b19570d] " +
  "max-[1099px]:aspect-video max-[760px]:aspect-[4/5] max-[760px]:h-auto max-[760px]:min-h-0 max-[760px]:rounded-[10px]";

export const playgroundCopy =
  "absolute top-1/2 left-1/2 z-[3] w-[36%] max-w-[360px] -translate-x-1/2 -translate-y-1/2 text-center " +
  "max-[1099px]:w-[38%] max-[760px]:top-1/2 max-[760px]:w-[78%] " +
  "[&_h2]:mb-5 [&_h2]:font-instrument! [&_h2]:text-[clamp(36px,3.5vw,46px)] [&_h2]:font-normal [&_h2]:leading-[1.08] [&_h2]:tracking-[-0.025em] " +
  "max-[760px]:[&_h2]:text-[clamp(32px,8vw,38px)] " +
  "[&_h2_em]:block [&_h2_em]:font-instrument! [&_h2_em]:text-home-sapphire " +
  "[&_p]:text-[13px] [&_p]:leading-[1.8] [&_p]:text-[#6b7280]";

export const playgroundLink =
  "mt-6 inline-flex items-center gap-1.5 border-b border-[#b4c8ee] pb-1.5 text-[12px] leading-[18px] font-normal text-home-sapphire";

export const playgroundImage =
  "absolute z-[1] cursor-grab touch-none overflow-hidden rounded select-none drop-shadow-[0_10px_18px_#0b195714] " +
  "data-[dragging=true]:z-[4] data-[dragging=true]:cursor-grabbing [&_img]:object-cover";

export const playgroundPrints = {
  "lyra-campaign":
    "top-[6.68%] left-[5.08%] aspect-[160/191] w-[15.63%] max-[1099px]:top-[6%] max-[1099px]:left-[4%] max-[1099px]:w-[17.5%] max-[760px]:top-[4.5%] max-[760px]:left-[4%] max-[760px]:w-[24%]",
  "lyra-packaging":
    "top-[57.28%] left-[19.82%] aspect-[119/140] w-[11.62%] max-[1099px]:top-[56%] max-[1099px]:left-[18%] max-[1099px]:w-[13.5%] max-[760px]:top-auto max-[760px]:bottom-[6%] max-[760px]:left-[8%] max-[760px]:w-[22%]",
  "bloom-identity":
    "top-[6.92%] left-[84.08%] aspect-[119/141] w-[11.62%] max-[1099px]:top-[6%] max-[1099px]:left-[82.5%] max-[1099px]:w-[13.5%] max-[760px]:top-[6%] max-[760px]:left-[72%] max-[760px]:w-[22%]",
  "bloom-menu":
    "top-[44.63%] left-[65.23%] aspect-[170/205] w-[16.6%] max-[1099px]:top-[43%] max-[1099px]:left-[63%] max-[1099px]:w-[18%] max-[760px]:top-auto max-[760px]:bottom-[6%] max-[760px]:left-[68%] max-[760px]:w-[24%]",
} as const;
