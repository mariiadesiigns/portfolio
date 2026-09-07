import type { Metadata } from "next";
import Link from "next/link";
import {
  Archivo_Black,
  Bodoni_Moda,
  Bricolage_Grotesque,
  Cormorant_Garamond,
  Fraunces,
  IBM_Plex_Mono,
  Instrument_Serif,
  Manrope,
  Newsreader,
  Syne,
  Unbounded,
} from "next/font/google";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import {
  boardHeader,
  boardIdentity,
  boardIntro,
  boardKicker,
  boardSummary,
  exploreLink,
  headline,
  heroAction,
  heroCanvas,
  heroNav,
  heroesPage,
  intro,
  motif,
  navAction,
  navLeft,
  navRight,
  preview,
  services,
  signature,
  studies,
  study,
  studyIndex,
  studyMeta,
  variantClass,
  wordmark,
} from "./classes";

const body = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });
const archivo = Archivo_Black({ subsets: ["latin"], weight: "400" });
const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["700", "800"] });
const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["600", "700"] });
const fraunces = Fraunces({ subsets: ["latin"], weight: ["700", "900"] });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["700", "800"] });
const newsreader = Newsreader({ subsets: ["latin"], weight: ["600", "700"] });
const unbounded = Unbounded({ subsets: ["latin"], weight: ["700", "800"] });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["500", "700"] });

export const metadata: Metadata = {
  title: "Hero Studies",
  description: "Ten typography-led directions for the Mariia Design portfolio.",
};

const directions = [
  { font: "Instrument Serif", mood: "Poetic restraint", typeface: instrument.className },
  { font: "Archivo Black", mood: "Graphic conviction", typeface: archivo.className },
  { font: "Bodoni Moda", mood: "Editorial elegance", typeface: bodoni.className },
  { font: "Syne", mood: "Cultural energy", typeface: syne.className },
  { font: "Cormorant Garamond", mood: "Literary intimacy", typeface: cormorant.className },
  { font: "Fraunces", mood: "Expressive warmth", typeface: fraunces.className },
  { font: "Bricolage Grotesque", mood: "Modern character", typeface: bricolage.className },
  { font: "Newsreader", mood: "Quiet authority", typeface: newsreader.className },
  { font: "Unbounded", mood: "Experimental clarity", typeface: unbounded.className },
  { font: "IBM Plex Mono", mood: "Measured precision", typeface: plexMono.className },
];

function HeroNavigation({ number }: { number: number }) {
  return (
    <header className={variantClass(number, "nav", heroNav)}>
      <nav className={navLeft} aria-label={`Direction ${number} navigation`}>
        <Link href="/work">Work</Link>
        <Link href="/#services">Services</Link>
        <Link href="/#about">About</Link>
      </nav>

      <Link href="/" className={wordmark} aria-label="Together home">
        TOGETHER
      </Link>

      <div className={navRight}>
        <Link href="/contact" className={variantClass(number, "navAction", navAction)}>
          Start a project
        </Link>
      </div>
    </header>
  );
}

function TypographicMotif({ number }: { number: number }) {
  return (
    <div className={variantClass(number, "motif", motif)} aria-hidden="true">
      <span>
        <b>Idea</b>
        <small>What is true</small>
      </span>
      <span>
        <b>Feeling</b>
        <small>What is felt</small>
      </span>
      <span>
        <b>Memory</b>
        <small>What remains</small>
      </span>
    </div>
  );
}

export default function HeroesPage() {
  return (
    <main className={`${heroesPage} ${body.className}`}>
      <header className={boardHeader}>
        <div className={boardIdentity}>
          <Link href="/">mariia.desiigns</Link>
          <span>Hero direction lab</span>
        </div>

        <nav className={studyIndex} aria-label="Jump to a hero direction">
          {directions.map((direction, index) => (
            <Link key={direction.font} href={`#study-${index + 1}`} aria-label={`Go to ${direction.font} direction`}>
              {String(index + 1).padStart(2, "0")}
            </Link>
          ))}
        </nav>

        <Link href="#study-1" className={exploreLink}>
          See directions <ArrowDown size={15} strokeWidth={1.8} />
        </Link>
      </header>

      <section className={boardIntro} aria-labelledby="board-heading">
        <p className={boardKicker}>One idea. Ten distinct voices.</p>
        <h1 id="board-heading" className={instrument.className}>
          How should the story begin?
        </h1>
        <p className={boardSummary}>
          Ten ways to introduce a practice built around feeling, clarity, and memorable visual worlds.
        </p>
      </section>

      <section className={studies} aria-label="Hero direction studies">
        {directions.map((direction, index) => {
          const number = index + 1;

          return (
            <article className={study} id={`study-${number}`} key={direction.font}>
              <div className={studyMeta}>
                <span>{String(number).padStart(2, "0")}</span>
                <strong>{direction.font}</strong>
                <span>{direction.mood}</span>
              </div>

              <div className={variantClass(number, "preview", preview)}>
                <HeroNavigation number={number} />
                <div className={variantClass(number, "canvas", heroCanvas)}>
                  <p className={variantClass(number, "services", services)}>
                    Brand identity / Art direction / Graphic design
                  </p>
                  <h2 className={`${variantClass(number, "headline", headline)} ${direction.typeface}`}>
                    <span>Design tells</span>
                    <span>stories.</span>
                  </h2>
                  <p className={variantClass(number, "intro", intro)}>
                    I turn what a brand believes into a visual language people can feel, use, and remember.
                  </p>
                  <Link href="/work" className={variantClass(number, "action", heroAction)}>
                    Explore selected work <ArrowUpRight size={17} strokeWidth={1.8} />
                  </Link>
                  <p className={variantClass(number, "signature", signature)}>
                    Mariia / Independent brand designer
                  </p>
                  <TypographicMotif number={number} />
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
