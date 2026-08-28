import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions | AMREN Digital",
  description: "Terms and conditions for using digital.amren.ae and engaging AMREN Digital's services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Terms & Conditions", path: "/terms" }]} />
      <article className="wrap max-w-3xl pb-24 pt-8 sm:pt-10">
        <h1 className="font-display text-4xl font-bold uppercase tracking-tight text-ink sm:text-5xl">Terms &amp; Conditions</h1>
        <p className="mt-4 text-sm text-ink/50">Last updated: 25 August 2026</p>

        <div className="mt-6 rounded-[var(--radius-md)] border border-dashed border-navy/25 bg-cream p-5 text-sm text-ink/70">
          This is professional placeholder content pending final legal review. A detailed service agreement is issued
          separately for confirmed engagements and takes precedence over this page.
        </div>

        <div className="prose-amren mt-10 space-y-6 text-ink/75">
          <h2 className="font-display text-xl font-bold text-ink">Use of this website</h2>
          <p>
            This website is provided by AMREN Digital for informational purposes and to allow prospective clients to
            enquire about our services. By using this site, you agree not to misuse it or attempt to interfere with
            its normal operation.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Service engagements</h2>
          <p>
            Any digital marketing, website, or related services described on this site are subject to a separate,
            detailed proposal and service agreement, which sets out scope, pricing, engagement period and commercial
            terms. Nothing on this website constitutes a binding service agreement on its own.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">No guaranteed results</h2>
          <p>
            SEO and Local SEO are long-term strategies, and advertising results depend on budget, audience,
            competition, creative quality and market conditions. AMREN does not guarantee specific rankings, traffic,
            leads, sales or return on investment.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Intellectual property</h2>
          <p>
            Content, design and branding on this website belong to AMREN Digital / {site.parent.name} unless
            otherwise stated, and may not be reproduced without permission.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Contact</h2>
          <p>
            Questions about these terms can be sent through our{" "}
            <a href="/contact" className="underline underline-offset-2 hover:text-blue">
              contact form
            </a>{" "}
            or via phone/WhatsApp at {site.contact.phone}.
          </p>
        </div>
      </article>
    </>
  );
}
