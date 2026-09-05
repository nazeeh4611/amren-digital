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
    <section className="relative h-[50vh] min-h-[380px] w-full overflow-hidden sm:h-[54vh]">
      <ParallaxImage speed={40} className="absolute inset-0 h-full w-full">
        <Image
          src="/brands.avif"
          alt=""
          width={1983}
          height={793}
          className="h-[calc(100%+80px)] w-full object-cover"
        />
      </ParallaxImage>
      {/* This particular photo already has its own left-to-right dark
          gradient baked in (built for text on the left), so no flat color
          wash on top — just a soft shadow on the text itself as a safety
          margin at very wide viewports.
          `absolute inset-0` (not a `relative h-full` flex child) so this
          is always pinned exactly to the image's own box — on some mobile
          viewports a taller wrapped 2-line heading could otherwise push
          past the section's bottom edge onto the plain background below,
          where the light text became unreadable. */}
      <div className="wrap absolute inset-0 flex flex-col justify-end pb-12 sm:pb-16">
        <p
          className="text-xs font-semibold uppercase tracking-[0.3em] text-turquoise"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
        >
          {eyebrow}
        </p>
        <SplitReveal
          as="h2"
          text={statement}
          className="mt-4 max-w-3xl font-display text-2xl font-bold uppercase leading-[1.05] tracking-tight text-cream [text-shadow:0_4px_20px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-6xl"
        />
      </div>
    </section>
  );
}
