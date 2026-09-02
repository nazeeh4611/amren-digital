import { Eyebrow } from "@/components/typography/Eyebrow";
import { FadeIn } from "@/components/animations/FadeIn";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

const goodFit = [
  "You want a measurable marketing system, not just activity.",
  "You're ready to invest consistently rather than test once and stop.",
  "You value strategy and tracking over guesswork.",
  "You want direct, straightforward communication.",
  "You want your website, marketing and follow-up working together.",
];

const notFit = [
  "You're comparing purely on who's cheapest.",
  "You expect guaranteed results on a fixed timeline.",
  "You'd rather not track or measure what's working.",
  "You're not ready to invest in the creative or infrastructure the work needs.",
];

/**
 * Qualification section — helps the right visitors self-select in (and
 * the wrong ones self-select out) before they reach the form. Shared
 * across every landing page rather than duplicated per service, since
 * fit criteria are about how AMREN works, not the specific service.
 */
export function LandingFit() {
  return (
    <section className="section bg-cream-2">
      <div className="wrap">
        <FadeIn>
          <Eyebrow accent="blue">Is This a Fit?</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-5xl">
            AMREN works best with businesses that want a real system.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <FadeIn className="rounded-[var(--radius-card)] border border-navy/10 bg-white p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-ink">Good fit if:</h3>
            <ul className="mt-5 space-y-4">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink/75">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green/15 text-green">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.08} className="rounded-[var(--radius-card)] border border-navy/10 bg-white/60 p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-ink/70">Probably not, if:</h3>
            <ul className="mt-5 space-y-4">
              {notFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink/55">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy/10 text-ink/50">
                    <CrossIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
