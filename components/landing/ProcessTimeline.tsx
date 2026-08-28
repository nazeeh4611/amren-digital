import type { ProcessStep } from "@/content/services";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { FadeIn } from "@/components/animations/FadeIn";

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <section className="section bg-cream-2">
      <div className="wrap">
        <FadeIn>
          <Eyebrow accent="gold">How It Works</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold uppercase leading-tight tracking-tight text-navy sm:text-5xl">
            From first call to live campaign.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.08}>
              <span className="font-display text-4xl font-bold text-navy/15">0{i + 1}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm text-navy/65">{step.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
