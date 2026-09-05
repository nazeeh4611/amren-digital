import type { CSSProperties } from "react";
import Image from "next/image";
import { trustedBrands } from "@/content/trustedBrands";
import { Eyebrow } from "@/components/typography/Eyebrow";

/**
 * Auto-sliding "trusted by" logo strip. Pure CSS animation (the same
 * .marquee-track loop used by BrandMarquee/Marquee) — no JS ticker, no
 * scroll listener, so it costs nothing on load speed. Logos are lazy by
 * default (no `priority`) since this section sits below the fold.
 *
 * Logo files live in /public/brands (see content/trustedBrands.ts) —
 * updating a brand's logo is just replacing that file or pointing a
 * brand's `logo` field at a different filename, no other code change.
 */
export function TrustedBrands() {
  const items = [...trustedBrands, ...trustedBrands];

  return (
    <section className="section bg-white">
      <div className="wrap">
        <Eyebrow accent="gold">Trusted By</Eyebrow>
        <h2 className="mt-5 max-w-xl font-display text-2xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
          Businesses we&rsquo;ve built for.
        </h2>
      </div>

      <div className="marquee-row mt-10 overflow-hidden py-2" aria-hidden="true">
        <div className="marquee-track" style={{ "--marquee-duration": "36s" } as CSSProperties}>
          {items.map((brand, i) => (
            <a
              key={`${brand.slug}-${i}`}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              className="mx-4 flex shrink-0 flex-col items-center gap-2 sm:mx-6"
            >
              <div className="relative h-20 w-36 overflow-hidden p-3">
                <Image src={`/brands/${brand.logo}`} alt={brand.name} fill sizes="144px" className="object-contain p-1" />
              </div>
              <span className="text-[11px] font-medium uppercase tracking-wide text-ink/40">{brand.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
