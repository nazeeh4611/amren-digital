import { landingFunnel } from "@/content/landingPages";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations/FadeIn";

export function SolutionFlow({ kicker, headline, statement }: { kicker: string; headline: string; statement: string }) {
  return (
    <section className="section bg-navy text-cream">
      <div className="wrap">
        <FadeIn>
          <Eyebrow light accent="gold">{kicker}</Eyebrow>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
            {headline}
          </h2>
          <p className="mt-6 max-w-2xl text-cream/70">{statement}</p>
        </FadeIn>

        <Stagger className="mt-12 flex flex-wrap items-center gap-3" staggerDelay={0.05}>
          {landingFunnel.map((step, i) => (
            <StaggerItem key={step} className="flex items-center gap-3">
              <span className="rounded-full border border-cream/25 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cream/90 sm:text-sm">
                {step}
              </span>
              {i < landingFunnel.length - 1 && (
                <span aria-hidden="true" className="text-cream/30">
                  →
                </span>
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
