import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { industries } from "@/content/industries";
import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { AssetPlaceholder } from "@/components/assets/AssetPlaceholder";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";
import { SplitReveal } from "@/components/animations/SplitReveal";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Work With | AMREN Digital",
  description:
    "How AMREN Digital approaches digital marketing for clinics, real estate, restaurants and beauty businesses in Dubai — each with a different customer acquisition journey.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Industries", path: "/industries" }]} />

      <section className="wrap pb-16 pt-8 sm:pt-10">
        <Eyebrow>Industries</Eyebrow>
        <SplitReveal
          as="h1"
          text="Different businesses, different journeys."
          trigger="mount"
          className="mt-5 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-ink sm:text-6xl"
        />
        <p className="mt-6 max-w-2xl text-lg text-ink/70">
          How a clinic gets discovered isn&rsquo;t how a real estate buyer decides, and neither looks like how someone
          picks a restaurant. AMREN builds the acquisition journey around how customers in your specific category
          actually search, compare and decide.
        </p>
      </section>

      <section className="wrap pb-24">
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 sm:grid sm:grid-cols-2 sm:gap-8 sm:overflow-visible sm:snap-none sm:pb-0">
          {industries.map((industry, i) => (
            <FadeIn key={industry.slug} delay={i * 0.08} className="shrink-0 w-[85%] snap-start sm:w-auto sm:shrink">
              <Link
                href={`/industries/${industry.slug}`}
                className="group block overflow-hidden rounded-[var(--radius-card)] border border-navy/10 bg-white p-6 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-blue/40 hover:shadow-[var(--shadow-card)]"
              >
                <AssetPlaceholder type="service" alt={industry.title} motif="chart" tone={i} aspectRatio="16/9" />
                <h2 className="mt-5 font-display text-2xl font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-blue">
                  {industry.title}
                </h2>
                <p className="mt-2 text-ink/65">{industry.headline}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
