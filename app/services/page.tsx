import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { serviceCategories, services, categoryMotif } from "@/content/services";
import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { AssetPlaceholder } from "@/components/assets/AssetPlaceholder";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";
import { SplitReveal } from "@/components/animations/SplitReveal";

export const metadata: Metadata = buildMetadata({
  title: "Digital Marketing Services in Dubai | AMREN Digital",
  description:
    "Explore AMREN Digital's connected digital growth services — Google Ads, Meta Ads, SEO, Local SEO, social media, web design and development, content, video and marketing automation.",
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
          text="What we build."
          trigger="mount"
          className="mt-5 max-w-3xl font-display text-5xl font-bold uppercase leading-[1.02] tracking-tight text-navy sm:text-7xl"
        />
        <p className="mt-6 max-w-2xl text-lg text-navy/70">
          Every service below works as part of one connected system — Attract, Generate Leads, Grow — rather than as
          an isolated line item.
        </p>
      </section>

      <section className="section bg-cream-2 pt-0">
        <div className="wrap divide-y divide-navy/10 border-y border-navy/10">
          {serviceCategories.map((category, index) => {
            const categoryServices = services.filter((s) => category.serviceSlugs.includes(s.slug));
            return (
              <FadeIn key={category.key} className="grid gap-8 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
                <div>
                  <span className="font-display text-5xl font-bold text-navy/10">{category.number}</span>
                  <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-navy sm:text-4xl">
                    {category.title}
                  </h2>
                  <p className="mt-3 font-editorial text-xl italic text-blue">{category.headline}</p>
                  <p className="mt-3 max-w-md text-navy/70">{category.description}</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {categoryServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group block overflow-hidden rounded-[var(--radius-card)] border border-navy/10 bg-white p-5 transition-colors hover:border-blue/40"
                    >
                      <AssetPlaceholder
                        type="service"
                        alt={service.title}
                        motif={categoryMotif[category.key]}
                        tone={index}
                        aspectRatio="4/3"
                        className="transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <h3 className="mt-4 font-display text-lg font-semibold text-navy transition-colors group-hover:text-blue">
                        {service.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm text-navy/60">{service.headline}</p>
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
