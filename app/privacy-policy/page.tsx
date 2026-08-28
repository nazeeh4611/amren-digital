import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | AMREN Digital",
  description: "How AMREN Digital collects, uses and protects information submitted through digital.amren.ae.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy Policy", path: "/privacy-policy" }]} />
      <article className="wrap max-w-3xl pb-24 pt-8 sm:pt-10">
        <h1 className="font-display text-4xl font-bold uppercase tracking-tight text-ink sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-ink/50">Last updated: 25 August 2026</p>

        <div className="mt-6 rounded-[var(--radius-md)] border border-dashed border-navy/25 bg-cream p-5 text-sm text-ink/70">
          This is professional placeholder content pending final legal review. It should be reviewed by qualified
          legal counsel before this page is relied on for compliance purposes.
        </div>

        <div className="prose-amren mt-10 space-y-6 text-ink/75">
          <p>
            AMREN Digital (&ldquo;AMREN&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy
            explains what information we collect through {site.contact.website}, how we use it, and the choices
            available to you.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Information we collect</h2>
          <p>
            We collect information you provide directly, such as your name, company, email address, phone/WhatsApp
            number, website and message, when you submit a contact or waitlist form. We may also collect standard
            technical information (such as pages visited) through analytics tools, but only after you have granted
            analytics consent via our cookie banner.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">How we use information</h2>
          <p>
            We use the information you submit to respond to your enquiry, provide requested services, and — where you
            have opted in — to send relevant updates. We do not sell personal information to third parties.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Cookies and analytics</h2>
          <p>
            We use essential cookies to operate this site, and optional analytics/marketing cookies (such as Google
            Analytics and Meta Pixel) only where you have granted consent. See our{" "}
            <a href="/cookie-policy" className="underline underline-offset-2 hover:text-blue">
              Cookie Policy
            </a>{" "}
            for details.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Data sharing</h2>
          <p>
            We do not share your information with third parties except service providers directly involved in
            delivering the service you requested (for example, an email delivery or CRM provider), or where required
            by law.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Your rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information by contacting us at
            the details on our <a href="/contact" className="underline underline-offset-2 hover:text-blue">Contact page</a>.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Contact</h2>
          <p>
            Questions about this policy can be sent via WhatsApp or phone at {site.contact.phone}, or through our{" "}
            <a href="/contact" className="underline underline-offset-2 hover:text-blue">
              contact form
            </a>
            .
          </p>
        </div>
      </article>
    </>
  );
}
