import Link from "next/link";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations/FadeIn";

export function SolutionFlow({
  kicker,
  headline,
  statement,
  funnelSteps,
  example,
}: {
  kicker: string;
  headline: string;
  statement: string;
  funnelSteps: string[];
  example: { label: string; text: string; href?: string; hrefLabel?: string };
}) {
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
          {funnelSteps.map((step, i) => (
            <StaggerItem key={step} className="flex items-center gap-3">
              <span className="rounded-full border border-cream/25 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cream/90 sm:text-sm">
                {step}
              </span>
              {i < funnelSteps.length - 1 && (
                <span aria-hidden="true" className="text-cream/30">
                  →
                </span>
              )}
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.1} className="mt-8 max-w-2xl rounded-[var(--radius-card)] border border-cream/15 bg-cream/[0.06] p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{example.label}</p>
          <p className="mt-2 text-sm leading-relaxed text-cream/75">{example.text}</p>
          {example.href && (
            <Link href={example.href} className="mt-3 inline-block text-sm font-semibold text-gold underline underline-offset-4">
              {example.hrefLabel || "Learn more"}
            </Link>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
