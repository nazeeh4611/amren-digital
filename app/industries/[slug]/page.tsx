import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { industries, getIndustryBySlug } from "@/content/industries";
import { getServiceBySlug } from "@/content/services";
import { site } from "@/content/site";
import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Button } from "@/components/buttons/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/structured-data";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return buildMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const relevantServices = industry.relevantServiceSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Digital Marketing for ${industry.title}`,
          description: industry.metaDescription,
          path: `/industries/${industry.slug}`,
        })}
      />

      <Breadcrumbs items={[{ name: "Industries", path: "/industries" }, { name: industry.title, path: `/industries/${industry.slug}` }]} />

      <section className="wrap grid gap-12 pb-16 pt-8 sm:pt-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start lg:gap-16">
        <div>
          <Eyebrow>Industry</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {industry.h1}
          </h1>
          <p className="mt-6 max-w-xl font-editorial text-2xl italic text-blue">{industry.headline}</p>
          <p className="mt-5 max-w-xl text-lg text-ink/70">{industry.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={site.cta.freeAudit.href}>{site.cta.freeAudit.label}</Button>
            <Button href={site.contact.whatsapp} variant="ghost">
              WhatsApp AMREN
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-5 border-t border-navy/10 pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue">What usually gets in the way</p>
          {industry.problems.slice(0, 3).map((problem) => (
            <div key={problem} className="flex gap-3 text-sm text-ink/70">
              <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
              {problem}
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white pt-0">
        <div className="wrap">
          <Eyebrow accent="gold">What Usually Gets in the Way</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            Common gaps in this category
          </h2>
          <ul className="mt-8 flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible sm:snap-none sm:pb-0">
            {industry.problems.map((problem) => (
              <li
                key={problem}
                className="flex shrink-0 w-[85%] gap-3 rounded-[var(--radius-card)] border border-navy/10 bg-cream p-5 text-ink/75 snap-start sm:w-auto sm:shrink"
              >
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                {problem}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap">
          <Eyebrow accent="gold">The Journey</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
            How customers actually decide
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {industry.journey.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.08}>
                <span className="font-display text-4xl font-bold text-ink/15">0{i + 1}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">{step.step}</h3>
                <p className="mt-2 text-sm text-ink/65">{step.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="wrap grid gap-16 lg:grid-cols-2">
          <FadeIn>
            <Eyebrow accent="gold">Relevant Services</Eyebrow>
            <h2 className="mt-5 font-display text-2xl font-bold uppercase tracking-tight text-ink">
              What we&rsquo;d typically use
            </h2>
            <div className="mt-6 grid gap-4">
              {relevantServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex items-center justify-between rounded-[var(--radius-card)] border border-navy/10 bg-cream p-5 transition-colors hover:border-blue/40"
                >
                  <span className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-blue">
                    {service.title}
                  </span>
                  <span aria-hidden="true" className="text-ink/40 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Eyebrow accent="gold">What Gets Measured</Eyebrow>
            <h2 className="mt-5 font-display text-2xl font-bold uppercase tracking-tight text-ink">
              Metrics that matter for this category
            </h2>
            <ul className="mt-6 space-y-4">
              {industry.measurement.map((item) => (
                <li key={item} className="flex gap-3 text-ink/75">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gold py-20 sm:py-28">
        <div className="wrap relative text-center">
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl">
            See where you stand.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ink/70">
            Request a free digital audit and we&rsquo;ll review your Google visibility, website and lead journey
            against what actually matters for this category.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={site.cta.freeAudit.href} variant="secondary">
              {site.cta.freeAudit.label}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
