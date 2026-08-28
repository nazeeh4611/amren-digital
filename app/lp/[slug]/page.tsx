import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { getServiceBySlug, categoryMotif } from "@/content/services";
import { landingPages, getLandingPageBySlug } from "@/content/landingPages";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, faqSchema } from "@/lib/structured-data";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { LandingHero } from "@/components/landing/LandingHero";
import { TrustBar } from "@/components/landing/TrustBar";
import { PainPoints } from "@/components/landing/PainPoints";
import { SolutionFlow } from "@/components/landing/SolutionFlow";
import { BenefitsGrid } from "@/components/landing/BenefitsGrid";
import { WhatWeDo } from "@/components/landing/WhatWeDo";
import { ProcessTimeline } from "@/components/landing/ProcessTimeline";
import { WhyAmren } from "@/components/landing/WhyAmren";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";

export function generateStaticParams() {
  return landingPages.map((lp) => ({ slug: lp.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const lp = getLandingPageBySlug(slug);
  if (!service || !lp) return {};
  return buildMetadata({
    title: `${lp.heroHeadline} | AMREN Digital`,
    description: service.metaDescription,
    path: `/lp/${slug}`,
  });
}

export default async function LandingPagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const lp = getLandingPageBySlug(slug);
  if (!service || !lp) notFound();

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: service.title, description: service.metaDescription, path: `/lp/${slug}` }),
          faqSchema([...lp.objections, ...service.faqs]),
        ]}
      />

      <LandingHero
        kicker={lp.heroKicker}
        headline={lp.heroHeadline}
        subheadline={lp.heroSubheadline}
        leadMagnetLabel={lp.leadMagnetLabel}
        leadMagnetDescription={lp.leadMagnetDescription}
        assetMotif={categoryMotif[service.category]}
        assetTone={service.number ? Number(service.number) : 0}
        assetLabel={service.assetLabel}
        serviceSlug={service.slug}
        serviceTitle={service.title}
        goalOptions={lp.formGoalOptions}
      />

      <TrustBar bullets={lp.trustBullets} />

      <PainPoints kicker={lp.painKicker} headline={lp.painHeadline} points={lp.painPoints} />

      <SolutionFlow kicker={lp.solutionKicker} headline={lp.solutionHeadline} statement={lp.solutionStatement} />

      <BenefitsGrid benefits={service.benefits} />

      <WhatWeDo deliverables={service.deliverables} />

      <ProcessTimeline steps={service.process} />

      <WhyAmren />

      <section className="section bg-white">
        <div className="wrap max-w-3xl">
          <Eyebrow accent="blue">Common Questions</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold uppercase tracking-tight text-navy sm:text-4xl">
            Before you reach out
          </h2>
          <div className="mt-8">
            <FaqAccordion items={lp.objections} />
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap max-w-3xl">
          <Eyebrow accent="gold">FAQ</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold uppercase tracking-tight text-navy sm:text-4xl">
            {service.title} — frequently asked
          </h2>
          <div className="mt-8">
            <FaqAccordion items={service.faqs} />
          </div>
        </div>
      </section>

      <FinalCTA headline={lp.finalCtaHeadline} body={lp.finalCtaBody} leadMagnetLabel={lp.leadMagnetLabel} />

      <StickyMobileCTA leadMagnetLabel={lp.leadMagnetLabel} serviceSlug={service.slug} />
    </>
  );
}
