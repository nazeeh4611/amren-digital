import { Eyebrow } from "@/components/typography/Eyebrow";
import { FadeIn } from "@/components/animations/FadeIn";

const pillars = [
  { title: "Strategy before spend", body: "We don't start by spending more. We start by understanding where growth is leaking." },
  { title: "Built around conversion", body: "Traffic means little if visitors don't become enquiries — every recommendation is measured against that." },
  { title: "Tracking-first", body: "Know where leads come from and what happens after the click, not just how many people saw an ad." },
  { title: "Full-funnel capability", body: "Ads, landing pages, websites, SEO, WhatsApp, CRM and automation can work together instead of as disconnected vendors." },
  { title: "UAE-focused", body: "Strategy built around how the Dubai and wider UAE market actually competes and searches." },
  { title: "Transparent growth", body: "Clear reporting and understandable performance metrics — no vanity dashboards." },
];

export function WhyAmren() {
  return (
    <section className="section bg-white">
      <div className="wrap">
        <FadeIn>
          <Eyebrow accent="coral">Why AMREN</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-5xl">
            Built to be a growth partner, not a vendor.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={Math.min(i * 0.06, 0.3)}>
              <h3 className="font-display text-lg font-semibold text-ink">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{pillar.body}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
