import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { projects } from "@/content/projects";
import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";
import { SplitReveal } from "@/components/animations/SplitReveal";

export const metadata: Metadata = buildMetadata({
  title: "Our Work | AMREN Digital",
  description:
    "Digital growth work from AMREN Digital — advertising, websites, SEO and creative campaigns for UAE businesses. Project pages are updated as engagements are approved for the portfolio.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Work", path: "/work" }]} />

      <section className="wrap pb-16 pt-8 sm:pt-10">
        <Eyebrow>Work</Eyebrow>
        <SplitReveal
          as="h1"
          text="Work that moves brands."
          trigger="mount"
          className="mt-5 max-w-3xl font-display text-5xl font-bold uppercase leading-[1.02] tracking-tight text-navy sm:text-7xl"
        />
        <p className="mt-6 max-w-2xl text-lg text-navy/70">
          Real project detail, visuals and results are added here as each engagement is confirmed and approved for
          public display. Nothing on this page is fabricated.
        </p>
      </section>

      <section className="wrap pb-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} tone={i % 8} />
            </FadeIn>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
