import { Eyebrow } from "@/components/typography/Eyebrow";
import { FadeIn } from "@/components/animations/FadeIn";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function BenefitsGrid({ benefits }: { benefits: string[] }) {
  return (
    <section className="section bg-cream">
      <div className="wrap">
        <FadeIn>
          <Eyebrow accent="blue">What You Get</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold uppercase leading-tight tracking-tight text-navy sm:text-5xl">
            Built around outcomes, not activity.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {benefits.map((benefit, i) => (
            <FadeIn
              key={benefit}
              delay={Math.min(i * 0.06, 0.3)}
              className="flex items-start gap-4 rounded-[var(--radius-card)] border border-navy/10 bg-white p-6"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/20 text-navy">
                <CheckIcon />
              </span>
              <p className="text-navy/80">{benefit}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
