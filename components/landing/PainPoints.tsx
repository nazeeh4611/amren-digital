import type { LandingPain } from "@/content/landingPages";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { FadeIn } from "@/components/animations/FadeIn";

export function PainPoints({ kicker, headline, points }: { kicker: string; headline: string; points: LandingPain[] }) {
  return (
    <section className="section bg-white">
      <div className="wrap">
        <FadeIn>
          <Eyebrow accent="coral">{kicker}</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-5xl">
            {headline}
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {points.map((point, i) => (
            <FadeIn
              key={point.title}
              delay={Math.min(i * 0.08, 0.3)}
              className="rounded-[var(--radius-card)] border border-navy/10 bg-cream p-6 sm:p-7"
            >
              <h3 className="font-display text-lg font-semibold text-ink">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{point.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
