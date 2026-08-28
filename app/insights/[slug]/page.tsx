import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { articles, getArticleBySlug } from "@/content/insights";
import { site } from "@/content/site";
import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { AssetPlaceholder } from "@/components/assets/AssetPlaceholder";
import { Button } from "@/components/buttons/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema } from "@/lib/structured-data";
import { FadeIn } from "@/components/animations/FadeIn";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { SplitReveal } from "@/components/animations/SplitReveal";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/insights/${article.slug}`,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-AE", { year: "numeric", month: "long", day: "numeric" });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = article.relatedSlugs.map((s) => getArticleBySlug(s)).filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: article.title,
          description: article.metaDescription,
          path: `/insights/${article.slug}`,
          publishedAt: article.publishedAt,
          updatedAt: article.updatedAt,
          author: article.author,
        })}
      />

      <Breadcrumbs items={[{ name: "Insights", path: "/insights" }, { name: article.title, path: `/insights/${article.slug}` }]} />

      <article className="wrap max-w-3xl pb-24 pt-8 sm:pt-10">
        <Eyebrow>{article.category}</Eyebrow>
        <h1 className="mt-5 font-display text-3xl font-bold leading-tight text-ink sm:text-5xl">
          <SplitReveal as="span" text={article.title} trigger="mount" />
        </h1>
        <FadeIn delay={0.3} className="mt-4 flex flex-wrap items-center gap-3 text-sm text-ink/60">
          <span>{article.author}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          {article.updatedAt && (
            <>
              <span aria-hidden="true">·</span>
              <span>Updated {formatDate(article.updatedAt)}</span>
            </>
          )}
        </FadeIn>

        <div className="mt-8">
          <ImageReveal>
            <AssetPlaceholder type="hero" label={article.category} alt={article.title} motif="mark" aspectRatio="16/9" className="w-full" />
          </ImageReveal>
        </div>

        <div className="prose-amren mt-10 space-y-6 text-lg leading-relaxed text-ink/80">
          {article.body.map((paragraph, i) => (
            <FadeIn key={i} as="div" delay={Math.min(i * 0.04, 0.2)}>
              <p>{paragraph}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16 rounded-[var(--radius-lg)] bg-navy p-8 text-cream sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-2">Want this reviewed for your business?</p>
          <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
            Request a free digital audit.
          </h2>
          <p className="mt-3 max-w-xl text-cream/70">
            We&rsquo;ll look at your website, Google visibility and lead-capture setup against what&rsquo;s covered in
            this article, and tell you what we find.
          </p>
          <div className="mt-6">
            <Button href={site.cta.freeAudit.href} variant="primary">
              {site.cta.freeAudit.label}
            </Button>
          </div>
        </FadeIn>

        {related.length > 0 && (
          <FadeIn className="mt-16 border-t border-navy/10 pt-10">
            <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink">Related reading</h2>
            <ul className="mt-4 space-y-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/insights/${r.slug}`} className="text-ink underline decoration-gold decoration-2 underline-offset-4 hover:text-blue">
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>
        )}
      </article>
    </>
  );
}
