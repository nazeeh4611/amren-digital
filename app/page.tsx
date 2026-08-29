import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema, faqSchema } from "@/lib/structured-data";
import { Hero } from "@/components/hero/Hero";
import { Marquee } from "@/components/typography/Marquee";
import { AttractGenerateGrow } from "@/components/sections/AttractGenerateGrow";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ServicesExperience } from "@/components/sections/ServicesExperience";
// import { PortfolioTeaser } from "@/components/sections/PortfolioTeaser";
import { FaqSection } from "@/components/sections/FaqSection";
import { CTASection } from "@/components/sections/CTASection";
import { FullBleedImage } from "@/components/sections/FullBleedImage";
import { BrandMarquee } from "@/components/sections/BrandMarquee";
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
      {/* Portfolio teaser intentionally off the homepage for now — real
          completed work so far is video, posters and branding (shown on
          /work) plus this website itself; no case-study-worthy web
          projects to feature here yet. Re-add once there's real client
          work to show alongside it: <PortfolioTeaser /> */}
      <FaqSection items={homeFaqs} title="Questions, answered." />
      <BrandMarquee />
      <CTASection />
    </>
  );
}
