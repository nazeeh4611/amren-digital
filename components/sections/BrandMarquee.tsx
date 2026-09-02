import type { CSSProperties } from "react";

/**
 * Massive brand-name marquee for the pre-footer moment. Pure CSS loop (see
 * .marquee-track in globals.css) — no JS ticker, no ScrollTrigger.
 */
export function BrandMarquee({ text = "AMREN DIGITAL" }: { text?: string }) {
  const items = [text, text, text, text];

  return (
    <section
      aria-hidden="true"
      className="marquee-row overflow-hidden border-y border-cream/10 bg-navy py-6 sm:py-10"
    >
      <div className="marquee-track" style={{ "--marquee-duration": "22s" } as CSSProperties}>
        {items.map((item, i) => (
          <span key={i} className="mx-4 flex shrink-0 items-center gap-4 sm:mx-8">
            <span className="font-display text-6xl font-bold uppercase tracking-tight text-cream sm:text-8xl lg:text-9xl">
              {item}
            </span>
            <span aria-hidden="true" className="text-6xl font-bold text-gold sm:text-8xl lg:text-9xl">
              —
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
