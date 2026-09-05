import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { services, getServiceBySlug, categoryMotif } from "@/content/services";
import { getPortfolioByCategory } from "@/content/portfolio";
import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { AssetPlaceholder } from "@/components/assets/AssetPlaceholder";
import { Button } from "@/components/buttons/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, faqSchema } from "@/lib/structured-data";
import { site } from "@/content/site";
import { CTASection } from "@/components/sections/CTASection";
import { ServicePortfolio } from "@/components/sections/ServicePortfolio";
import { TrustedBrands } from "@/components/sections/TrustedBrands";

export function generateStaticParams() {
  return services.filter((service) => !service.hidden).map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service || service.hidden) notFound();

  const relatedServices = service.relatedSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s) && !s?.hidden);
  const portfolioProjects = getPortfolioByCategory(service.slug);
  const hasPortfolio = portfolioProjects.length > 0;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: service.title, description: service.metaDescription, path: `/services/${service.slug}` }),
          faqSchema(service.faqs),
        ]}
      />

      <Breadcrumbs items={[{ name: "Services", path: "/services" }, { name: service.title, path: `/services/${service.slug}` }]} />

      <section className="wrap grid gap-10 pb-16 pt-8 sm:pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <Eyebrow>{service.eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {service.h1}
          </h1>
          <p className="mt-5 font-editorial text-2xl italic text-blue sm:text-3xl">{service.headline}</p>
          <p className="mt-5 max-w-xl text-lg text-ink/70">{service.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Start a Project</Button>
            {hasPortfolio ? (
              <Button href="#portfolio" variant="ghost">
                View Portfolio
              </Button>
            ) : (
              <Button href={site.contact.whatsapp} variant="ghost">
                WhatsApp AMREN
              </Button>
            )}
          </div>
        </div>
        <AssetPlaceholder
          type="service"
          label={service.assetLabel}
          src={service.assetSrc}
          alt={`${service.title} — AMREN Digital`}
          motif={categoryMotif[service.category]}
          aspectRatio={service.aspectRatio}
        />
      </section>

      <section className="section bg-white pt-0">
        <div className="wrap grid gap-16 lg:grid-cols-2">
          <FadeIn>
            <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-ink">Why it matters</h2>
            <ul className="mt-6 space-y-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-ink/75">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {benefit}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-ink">What&rsquo;s included</h2>
            <ul className="mt-6 space-y-4">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-ink/75">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {hasPortfolio && <ServicePortfolio category={service.slug} heading={`${service.title} Portfolio`} />}

      <section className="section bg-cream">
        <div className="wrap">
          <Eyebrow accent="gold">Process</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
            How we work
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.08}>
                <span className="font-display text-4xl font-bold text-ink/15">0{i + 1}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-ink/65">{step.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="wrap max-w-3xl">
          <Eyebrow accent="gold">FAQ</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            Common questions
          </h2>
          <div className="mt-8 divide-y divide-navy/10 border-y border-navy/10">
            {service.faqs.map((faq, i) => (
              <FadeIn key={faq.q} delay={Math.min(i * 0.06, 0.3)} className="py-6">
                <h3 className="font-display text-lg font-semibold text-ink">{faq.q}</h3>
                <p className="mt-2 text-ink/70">{faq.a}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="section bg-cream">
          <div className="wrap">
            <Eyebrow accent="gold">Related Services</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              Works well alongside
            </h2>
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible sm:snap-none sm:pb-0">
              {relatedServices.map((related, i) => (
                <FadeIn key={related.slug} delay={i * 0.08} className="shrink-0 w-[80%] snap-start sm:w-auto sm:shrink">
                  <Link
                    href={`/services/${related.slug}`}
                    className="group block h-full rounded-[var(--radius-card)] border border-navy/10 bg-white p-6 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-blue/40 hover:shadow-[var(--shadow-card)]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue">{related.eyebrow}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-ink transition-colors group-hover:text-blue">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink/60">{related.headline}</p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {hasPortfolio && <TrustedBrands />}

      <CTASection />
    </>
  );
}
