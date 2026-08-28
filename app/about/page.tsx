import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { team } from "@/content/team";
import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { AssetPlaceholder } from "@/components/assets/AssetPlaceholder";
import { FadeIn } from "@/components/animations/FadeIn";
import { SplitReveal } from "@/components/animations/SplitReveal";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { GrowthArc } from "@/components/sections/GrowthArc";
import { VenturesConnection } from "@/components/sections/VenturesConnection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "About AMREN Digital | Digital Growth Agency, Dubai",
  description:
    "AMREN Digital is the digital growth arm of AMREN Ventures — a Dubai-based team building connected advertising, website, SEO and automation systems for UAE businesses.",
  path: "/about",
});

const values = [
  {
    title: "One system, not a service list",
    description: "Every channel we run is planned against the others — advertising informs content, SEO informs the website, tracking informs everything.",
  },
  {
    title: "Creative and performance together",
    description: "Work that looks good and work that performs aren't a tradeoff. We hold both to the same bar.",
  },
  {
    title: "Built for the UAE market",
    description: "Campaigns, content and SEO strategy shaped around how businesses actually search, buy and grow in the UAE.",
  },
  {
    title: "No guaranteed miracles",
    description: "We won't promise rankings, lead counts or ROI no one can guarantee. We will commit to a clear, measurable process.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", path: "/about" }]} />

      <section className="wrap grid gap-10 pb-16 pt-8 sm:pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <Eyebrow>About AMREN Digital</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-ink sm:text-6xl">
            <SplitReveal as="span" text="We don’t just market businesses." trigger="mount" className="block" />
            <SplitReveal as="span" text="We build the system around their growth." trigger="mount" delay={0.25} className="block" />
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            AMREN Digital is the digital growth arm of {site.parent.name}, based in {site.location.label}. We connect
            advertising, websites, SEO, content and automation into one system — built around Attract, Generate
            Leads, Grow.
          </p>
        </div>
        <ParallaxImage speed={20}>
          <AssetPlaceholder type="hero" label="AMREN Digital" aspectRatio="4/5" />
        </ParallaxImage>
      </section>

      <section className="section bg-white pt-0">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <ImageReveal>
            <AssetPlaceholder type="hero" label="Our Approach" motif="nodes" aspectRatio="4/3" tone={1} />
          </ImageReveal>
          <FadeIn delay={0.1}>
            <Eyebrow accent="gold">Our Approach</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              Connected, measurable, honest about what can be guaranteed.
            </h2>
            <p className="mt-5 text-ink/70">
              Most businesses we meet aren&rsquo;t short on marketing activity — they&rsquo;re short on marketing that
              works together. AMREN plans advertising, website, SEO and content as one system from the start, so each
              channel makes the others more effective instead of operating in isolation.
            </p>
            <p className="mt-4 text-ink/70">
              We&rsquo;re also direct about what digital marketing can and can&rsquo;t promise. SEO takes time.
              Advertising results depend on budget and market conditions. What we can commit to is a clear process,
              transparent reporting and a system built to compound over time.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap">
          <Eyebrow accent="gold">What We Value</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
            How we work with UAE businesses.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.08} className="rounded-[var(--radius-lg)] border border-navy/10 bg-white p-7">
                <h3 className="font-display text-xl font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 text-ink/65">{value.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <GrowthArc />

      <VenturesConnection />

      <section className="section bg-cream">
        <div className="wrap">
          <Eyebrow accent="gold">Team</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
            The people behind the system.
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {team.map((member, i) => (
              <FadeIn key={member.id} delay={i * 0.08} className="text-center">
                <ImageReveal>
                  <AssetPlaceholder type="team-photo" aspectRatio="4/5" alt={member.name} />
                </ImageReveal>
                <p className="mt-3 font-semibold text-ink">{member.name}</p>
                <p className="text-sm text-ink/60">{member.role}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
