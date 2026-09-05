import { getPortfolioByCategory } from "@/content/portfolio";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { FadeIn } from "@/components/animations/FadeIn";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";

/**
 * Embedded portfolio for a single service page — real, completed client
 * websites, linked straight out to the live sites rather than a separate
 * internal case-study page. Only "web-design-development" has entries so
 * far; other service slugs simply render nothing until their own
 * portfolio is added to content/portfolio.ts.
 */
export function ServicePortfolio({ category, heading }: { category: string; heading: string }) {
  const projects = getPortfolioByCategory(category);
  if (projects.length === 0) return null;

  return (
    <section id="portfolio" className="section scroll-mt-24 bg-cream-2">
      <div className="wrap">
        <Eyebrow accent="blue">Portfolio</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-5xl">
          {heading}
        </h2>
        <p className="mt-4 max-w-xl text-ink/65">Real, completed websites — live and running for real clients today.</p>

        <div className="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible sm:snap-none sm:pb-0">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={Math.min(i * 0.05, 0.3)} className="shrink-0 w-[85%] snap-start sm:w-auto sm:shrink">
              <PortfolioCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
