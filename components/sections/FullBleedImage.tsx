import { AssetPlaceholder } from "@/components/assets/AssetPlaceholder";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { SplitReveal } from "@/components/animations/SplitReveal";

/**
 * A single full-viewport-width image moment — breaks out of the site's
 * normal `.wrap` container on purpose, with slow scroll parallax and a
 * large statement line over it. Used once per page, not everywhere.
 */
export function FullBleedImage({
  eyebrow,
  statement,
  tone = 0,
}: {
  eyebrow: string;
  statement: string;
  tone?: number;
}) {
  return (
    <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden sm:h-[85vh]">
      <ParallaxImage speed={40} className="absolute inset-0 h-full w-full">
        <AssetPlaceholder type="background" tone={tone} fillHeight className="h-[calc(100%+80px)] w-full" rounded={false} decorative />
      </ParallaxImage>
      <div aria-hidden="true" className="absolute inset-0 bg-navy/45" />
      <div className="wrap relative flex h-full flex-col justify-end pb-16 sm:pb-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-2">{eyebrow}</p>
        <SplitReveal
          as="h2"
          text={statement}
          className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-cream sm:text-6xl lg:text-7xl"
        />
      </div>
    </section>
  );
}
