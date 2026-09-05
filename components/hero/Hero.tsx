import Image from "next/image";
import { site } from "@/content/site";
import { Button } from "@/components/buttons/Button";
import { Magnetic } from "@/components/animations/Magnetic";
import { RotatingWord, type RotatingWordSpec } from "@/components/hero/RotatingWord";

// Short, single-word outcomes — keeps "DIGITAL [WORD]" / "BUILT TO MOVE."
// to two lines at every breakpoint. Pulled from the swatch-card palette
// (Turquoise/Mint/Aqua) instead of Deep Blue, so the hero stays out of
// the one strong dark accent while reading clearly against the dark
// photo overlay behind the heading.
const rotatingWords: RotatingWordSpec[] = [
  { text: "Growth", color: "#72E8EC" },
  { text: "Reach", color: "#72E8EC" },
  { text: "Leads", color: "#72E8EC" },
];

// Server Component: the LCP image and heading render straight from HTML
// with no client JS, hydration, or animation delay gating their first
// paint. No fade-in — the hero must be visible the instant HTML/CSS load.
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pb-24 pt-36 text-cream sm:pb-32 sm:pt-44">
      <Image src="/dbhero.avif" alt="" fill priority sizes="100vw" className="object-cover" />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(63,168,172,0.15) 0%, rgba(63,168,172,0) 20%, rgba(63,168,172,0) 80%, rgba(63,168,172,0.15) 100%), " +
            "linear-gradient(180deg, rgba(11,18,31,0.52) 0%, rgba(11,18,31,0.32) 45%, rgba(11,18,31,0.6) 100%)",
        }}
      />

      <div className="wrap relative flex flex-col items-center text-center">
        <h1
          className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.125rem,8.8vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-tight"
          style={{ textShadow: "0 4px 24px rgba(10,15,28,0.55)" }}
        >
          <span className="block">
            DIGITAL{" "}
            <RotatingWord words={rotatingWords} className="font-accent normal-case tracking-normal text-[1.15em]" />
          </span>
          <span className="block">BUILT TO MOVE.</span>
        </h1>

        <p
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-cream/95 sm:whitespace-nowrap sm:text-lg lg:text-xl"
          style={{ textShadow: "0 2px 12px rgba(10,15,28,0.5)" }}
        >
          Attract attention. Generate leads. Grow your business.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <Button href={site.cta.primary.href} variant="warm">
              {site.cta.primary.label}
            </Button>
          </Magnetic>
          <Magnetic>
            <Button href={site.cta.secondary.href} variant="outline-light">
              {site.cta.secondary.label}
            </Button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
