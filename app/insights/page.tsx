import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { articles } from "@/content/insights";
import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { AssetPlaceholder } from "@/components/assets/AssetPlaceholder";
import { FadeIn } from "@/components/animations/FadeIn";
import { SplitReveal } from "@/components/animations/SplitReveal";

export const metadata: Metadata = buildMetadata({
  title: "Digital Marketing Insights for UAE Businesses | AMREN Digital",
  description:
    "Practical articles on Google Ads, Meta Ads, SEO, websites, social media and digital growth for UAE businesses, from the AMREN Digital team.",
  path: "/insights",
});

export default function InsightsPage() {
  const sorted = [...articles].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return (
    <>
      <Breadcrumbs items={[{ name: "Insights", path: "/insights" }]} />

      <section className="wrap pb-16 pt-8 sm:pt-10">
        <Eyebrow>Insights</Eyebrow>
        <SplitReveal
          as="h1"
          text="Ideas worth acting on."
          trigger="mount"
          className="mt-5 max-w-3xl font-display text-5xl font-bold uppercase leading-[1.02] tracking-tight text-ink sm:text-7xl"
        />
        <p className="mt-6 max-w-2xl text-lg text-ink/70">
          Practical thinking on digital growth for UAE businesses — no fabricated statistics, no invented case
          studies.
        </p>
      </section>

      <section className="wrap flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 sm:grid sm:grid-cols-2 sm:gap-10 sm:overflow-visible sm:snap-none sm:pb-24 lg:grid-cols-3">
        {sorted.map((article, i) => (
          <FadeIn key={article.slug} delay={(i % 3) * 0.08} className="shrink-0 w-[80%] snap-start sm:w-auto sm:shrink">
            <Link href={`/insights/${article.slug}`} className="group block">
              <div className="overflow-hidden rounded-[var(--radius-card)]">
                <div className="transition-transform duration-500 group-hover:scale-[1.04]">
                  <AssetPlaceholder type="hero" label={article.category} src={article.image} alt={article.title} motif="mark" tone={i % 8} aspectRatio="16/9" />
                </div>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-blue">{article.category}</p>
              <h2 className="mt-1 font-display text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-blue">
                {article.title}
              </h2>
              <p className="mt-2 text-sm text-ink/60">{article.excerpt}</p>
            </Link>
          </FadeIn>
        ))}
      </section>
    </>
  );
}
