import Image from "next/image";
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
}: {
  eyebrow: string;
  statement: string;
  tone?: number;
}) {
  return (
    <section className="relative h-[46vh] min-h-[340px] w-full overflow-hidden sm:h-[54vh]">
      <ParallaxImage speed={40} className="absolute inset-0 h-full w-full">
        <Image
          src="/bghero.avif"
          alt=""
          width={1554}
          height={1012}
          className="h-[calc(100%+80px)] w-full object-cover"
        />
      </ParallaxImage>
      <div aria-hidden="true" className="absolute inset-0 bg-navy/55" />
      <div className="wrap relative flex h-full flex-col justify-end pb-12 sm:pb-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-2">{eyebrow}</p>
        <SplitReveal
          as="h2"
          text={statement}
          className="mt-4 max-w-3xl font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight text-cream sm:text-5xl lg:text-6xl"
        />
      </div>
    </section>
  );
}
