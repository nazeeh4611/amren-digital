import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { industries } from "@/content/industries";
import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { Eyebrow } from "@/components/typography/Eyebrow";
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
        <div className="flex flex-col divide-y divide-navy/10 border-y border-navy/10">
          {industries.map((industry, i) => (
            <FadeIn key={industry.slug} delay={i * 0.06}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group grid items-center gap-4 py-10 transition-colors sm:grid-cols-[3rem_1.3fr_1.7fr_auto] sm:gap-10"
              >
                <span className="font-display text-3xl font-bold text-ink/15">0{i + 1}</span>
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-blue sm:text-3xl">
                  {industry.title}
                </h2>
                <p className="max-w-md text-ink/65">{industry.headline}</p>
                <span
                  aria-hidden="true"
                  className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-navy/15 text-xl text-ink/50 transition-all duration-300 group-hover:-rotate-45 group-hover:border-blue group-hover:text-blue sm:flex"
                >
                  →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
