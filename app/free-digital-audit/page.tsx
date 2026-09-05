import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { auditFaqs } from "@/content/faqs";
import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Button } from "@/components/buttons/Button";
import { AuditForm } from "@/components/forms/AuditForm";
import { FaqSection } from "@/components/sections/FaqSection";
import { SplitReveal } from "@/components/animations/SplitReveal";
import { FadeIn } from "@/components/animations/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Free Digital Growth Audit for Dubai Businesses | AMREN Digital",
  description:
    "Request a free digital audit from AMREN Digital — a review of your website, Google Business Profile, visible ad activity and lead-capture setup, based on publicly available information.",
  path: "/free-digital-audit",
});

const auditScope = [
  { label: "Google Ads", detail: "Whether campaigns are visible for relevant searches, and how ad copy and offers present." },
  { label: "Meta Ads", detail: "Visible ad activity on Facebook and Instagram, where public ad libraries allow." },
  { label: "Website", detail: "Speed, clarity, mobile experience and how obvious the path to enquiring actually is." },
  { label: "Landing pages", detail: "Whether traffic lands somewhere built to convert, or a generic page not built for that click." },
  { label: "SEO", detail: "Organic visibility, technical health signals and on-page structure that's publicly checkable." },
  { label: "Google Business Profile", detail: "Completeness, category accuracy and local visibility for relevant searches." },
  { label: "Conversion journey", detail: "How many steps it takes to go from landing on the site to actually enquiring." },
  { label: "WhatsApp journey", detail: "Whether WhatsApp is present, easy to find, and set up to actually capture a conversation." },
  { label: "Tracking", detail: "Whether basic tracking (GA4, conversion events) appears to be in place, where publicly detectable." },
  { label: "Lead capture", detail: "Whether the forms, CTAs and contact options on the site are doing their job." },
];

const funnelSteps = ["Ad", "Click", "Landing Page", "CTA", "Lead", "WhatsApp / Call", "CRM", "Follow-up", "Sale"];

export default function FreeDigitalAuditPage() {
  return (
    <>
      <JsonLd data={faqSchema(auditFaqs)} />
      <Breadcrumbs items={[{ name: "Free Digital Audit", path: "/free-digital-audit" }]} />

      <section className="wrap grid gap-10 pb-16 pt-8 sm:pt-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
        <div>
          <Eyebrow accent="gold">Free Digital Growth Audit</Eyebrow>
          <SplitReveal
            as="h1"
            text="A free digital growth audit for Dubai businesses."
            trigger="mount"
            className="mt-5 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-ink sm:text-6xl"
          />
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            Tell us about your business and we&rsquo;ll review what&rsquo;s publicly visible about your digital
            presence — website, Google Business Profile, visible advertising and lead-capture setup — and share what
            we find.
          </p>
          <p className="mt-4 max-w-xl text-sm text-ink/55">
            The audit is based on publicly observable information. We won&rsquo;t claim to know figures like your
            actual conversion rate or ad account performance unless you choose to share account access or data with
            us directly.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="ghost">
              Talk to Us Instead
            </Button>
          </div>
        </div>
        <div id="audit-form" className="scroll-mt-24 rounded-[var(--radius-lg)] border border-navy/10 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue">Request Your Audit</p>
          <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-ink">
            Tell us about your business.
          </h2>
          <div className="mt-6">
            <AuditForm />
          </div>
        </div>
      </section>

      <section className="section bg-white pt-0">
        <div className="wrap">
          <Eyebrow accent="gold">What We Review</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
            Where we look
          </h2>
          <div className="mt-10 flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible sm:snap-none sm:pb-0 lg:grid-cols-3">
            {auditScope.map((item, i) => (
              <FadeIn
                key={item.label}
                delay={Math.min(i * 0.05, 0.3)}
                className="shrink-0 w-[85%] rounded-[var(--radius-card)] border border-navy/10 bg-cream p-6 snap-start sm:w-auto sm:shrink"
              >
                <h3 className="font-display text-lg font-semibold text-ink">{item.label}</h3>
                <p className="mt-2 text-sm text-ink/65">{item.detail}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy text-cream">
        <div className="wrap">
          <Eyebrow light accent="gold">Already Running Ads?</Eyebrow>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
            Your campaigns may be generating traffic while opportunities are being lost somewhere between the ad and
            the enquiry.
          </h2>
          <p className="mt-6 max-w-2xl text-cream/70">
            Most businesses that come to AMREN already run Google Ads, Meta Ads, or both. The audit doesn&rsquo;t
            assume anything is broken — it looks at the full acquisition journey to see where it&rsquo;s working, and
            where a strong step is being undercut by a weaker one further along.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            {funnelSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-cream/25 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cream/90 sm:text-sm">
                  {step}
                </span>
                {i < funnelSteps.length - 1 && (
                  <span aria-hidden="true" className="text-cream/30">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-sm text-cream/55">
            We review the whole chain — not just the ad account — because a strong campaign pointed at a weak landing
            page, or a good landing page with slow follow-up, produces the same result: enquiries that don&rsquo;t
            become customers.
          </p>
        </div>
      </section>

      <FaqSection items={auditFaqs} title="Questions about the audit" />
    </>
  );
}
