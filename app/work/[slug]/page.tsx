import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { projects, getProjectBySlug } from "@/content/projects";
import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { AssetPlaceholder } from "@/components/assets/AssetPlaceholder";
import { Button } from "@/components/buttons/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { SplitReveal } from "@/components/animations/SplitReveal";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return buildMetadata({
    title: `${project.title} | AMREN Digital Work`,
    description: project.summary,
    path: `/work/${project.slug}`,
    noindex: true, // placeholder project — unindexed until real content replaces it
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Breadcrumbs items={[{ name: "Work", path: "/work" }, { name: project.title, path: `/work/${project.slug}` }]} />

      <section className="wrap pb-12 pt-8 sm:pt-10">
        <Eyebrow>{project.industry}</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-ink sm:text-6xl">
          <SplitReveal as="span" text={project.title} trigger="mount" />
        </h1>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.servicesUsed.map((s, i) => (
            <FadeIn
              key={s}
              as="li"
              delay={0.4 + i * 0.05}
              className="rounded-full border border-navy/15 px-3 py-1 text-xs uppercase tracking-wide text-ink/60"
            >
              {s}
            </FadeIn>
          ))}
        </ul>
      </section>

      <section className="wrap pb-16">
        <ImageReveal>
          <AssetPlaceholder
            type="portfolio"
            label={project.industry}
            alt={`${project.title} — ${project.industry}`}
            aspectRatio="16/9"
            className="w-full"
          />
        </ImageReveal>
      </section>

      <section className="section bg-white pt-0">
        <div className="wrap grid gap-12 lg:grid-cols-3">
          <FadeIn>
            <h2 className="font-display text-lg font-bold uppercase tracking-tight text-ink">Overview</h2>
            <p className="mt-3 text-ink/70">{project.overview}</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="font-display text-lg font-bold uppercase tracking-tight text-ink">Challenge</h2>
            <p className="mt-3 text-ink/70">{project.challenge}</p>
          </FadeIn>
          <FadeIn delay={0.16}>
            <h2 className="font-display text-lg font-bold uppercase tracking-tight text-ink">Strategy &amp; Execution</h2>
            <p className="mt-3 text-ink/70">
              {project.strategy} {project.execution}
            </p>
          </FadeIn>
        </div>

        {!project.resultsAvailable && (
          <FadeIn className="wrap mt-12">
            <div className="rounded-[var(--radius-lg)] border border-dashed border-navy/20 bg-cream p-6 text-sm text-ink/60">
              Verified results for this project will be published here once confirmed with the client. AMREN does not
              publish estimated or fabricated results.
            </div>
          </FadeIn>
        )}
      </section>

      <section className="wrap flex items-center justify-between border-t border-navy/10 py-10">
        <Button href="/work" variant="ghost" arrow={false}>
          ← All work
        </Button>
        <Link href={`/work/${nextProject.slug}`} className="group text-right">
          <span className="block text-xs font-semibold uppercase tracking-wide text-ink/50">Next project</span>
          <span className="relative inline-flex font-display text-lg font-semibold text-ink transition-colors group-hover:text-blue">
            {nextProject.title}
            <span
              aria-hidden="true"
              className="ml-1 inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </Link>
      </section>
    </>
  );
}
