import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { serviceCategories, services } from "@/content/services";
import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";
import { SplitReveal } from "@/components/animations/SplitReveal";

export const metadata: Metadata = buildMetadata({
  title: "Digital Marketing Services in Dubai | AMREN Digital",
  description:
    "Explore AMREN Digital's connected digital growth services — Paid Advertising, SEO, social media, web design and development, content & video production, and marketing automation.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />

      <section className="wrap pb-16 pt-8 sm:pt-10">
        <Eyebrow>Services</Eyebrow>
        <SplitReveal
          as="h1"
          text="Digital marketing services built to work together."
          trigger="mount"
          className="mt-5 max-w-4xl font-display text-5xl font-bold uppercase leading-[1.02] tracking-tight text-ink sm:text-7xl"
        />
        <p className="mt-6 max-w-2xl text-lg font-medium text-ink/80">
          One connected system — ads, search, social, web and automation working together instead of six separate
          agencies.
        </p>
      </section>

      <section className="section bg-cream-2 pt-0">
        <div className="wrap divide-y divide-navy/10 border-y border-navy/10">
          {serviceCategories.map((category) => {
            const categoryServices = services.filter((s) => category.serviceSlugs.includes(s.slug) && !s.hidden);
            return (
              <FadeIn key={category.key} className="grid gap-8 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                <div>
                  <span className="font-display text-6xl font-bold text-ink/10">{category.number}</span>
                  <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
                    {category.title}
                  </h2>
                  <p className="mt-3 font-editorial text-xl italic text-navy">{category.headline}</p>
                  <p className="mt-3 max-w-md font-medium text-ink/85">{category.description}</p>
                </div>

                <div className="flex flex-col divide-y divide-navy/10">
                  {categoryServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group flex items-center justify-between gap-6 py-7 transition-colors first:pt-0 last:pb-0"
                    >
                      <div>
                        <h3 className="font-display text-3xl font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-blue sm:text-4xl">
                          {service.title}
                        </h3>
                        <p className="mt-2 max-w-lg text-base font-medium text-ink/70">{service.headline}</p>
                      </div>
                      <span
                        aria-hidden="true"
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-navy/15 text-xl text-ink/50 transition-all duration-300 group-hover:-rotate-45 group-hover:border-blue group-hover:text-blue"
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
