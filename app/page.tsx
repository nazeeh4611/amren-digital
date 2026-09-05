import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema, faqSchema } from "@/lib/structured-data";
import { Hero } from "@/components/hero/Hero";
import { Marquee } from "@/components/typography/Marquee";
import { AttractGenerateGrow } from "@/components/sections/AttractGenerateGrow";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ServicesExperience } from "@/components/sections/ServicesExperience";
import { FaqSection } from "@/components/sections/FaqSection";
import { CTASection } from "@/components/sections/CTASection";
import { FullBleedImage } from "@/components/sections/FullBleedImage";
import { BrandMarquee } from "@/components/sections/BrandMarquee";
import { TrustedBrands } from "@/components/sections/TrustedBrands";
import { QuickLeadForm } from "@/components/forms/QuickLeadForm";
import { WelcomeModal } from "@/components/modals/WelcomeModal";
import { homeFaqs } from "@/content/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Digital Marketing Agency in Dubai, UAE | AMREN Digital",
  description:
    "AMREN Digital is a Dubai-based digital growth agency helping UAE businesses attract customers, generate qualified leads and build scalable digital systems.",
  path: "/",
});

const marqueeServices = ["Google Ads", "Meta Ads", "SEO", "Web Development", "Social Media", "Video", "Automation"];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(homeFaqs)]} />
      <Hero />
      <Marquee items={marqueeServices} tone="dark" accent="gold" speed={26} />
      <ProblemSection />
      <AttractGenerateGrow />
      <ServicesExperience />
      <FullBleedImage eyebrow="Real work, real growth" statement="Built for brands that mean business." tone={1} />
      <TrustedBrands />
      <FaqSection items={homeFaqs} title="Questions, answered." />

      <section className="border-t border-navy/10 bg-cream-2 py-10">
        <div className="wrap flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg font-bold uppercase tracking-tight text-ink sm:text-xl">
            Get a call back from AMREN
          </p>
          <QuickLeadForm source="home_top_strip" className="w-full sm:w-auto" />
        </div>
      </section>

      <BrandMarquee />
      <CTASection />
      <WelcomeModal />
    </>
  );
}
