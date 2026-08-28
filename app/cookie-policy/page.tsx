import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy | AMREN Digital",
  description: "How AMREN Digital uses cookies on digital.amren.ae, and how to manage your preferences.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Cookie Policy", path: "/cookie-policy" }]} />
      <article className="wrap max-w-3xl pb-24 pt-8 sm:pt-10">
        <h1 className="font-display text-4xl font-bold uppercase tracking-tight text-ink sm:text-5xl">Cookie Policy</h1>
        <p className="mt-4 text-sm text-ink/50">Last updated: 25 August 2026</p>

        <div className="mt-6 rounded-[var(--radius-md)] border border-dashed border-navy/25 bg-cream p-5 text-sm text-ink/70">
          This is professional placeholder content pending final legal review, and does not constitute legal advice
          or a guarantee of regulatory compliance.
        </div>

        <div className="prose-amren mt-10 space-y-6 text-ink/75">
          <h2 className="font-display text-xl font-bold text-ink">What are cookies</h2>
          <p>Cookies are small text files stored on your device that help websites function and, optionally, understand usage.</p>

          <h2 className="font-display text-xl font-bold text-ink">Cookies we use</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Essential cookies</strong> — required for the site to function correctly (e.g. remembering your cookie preference). These cannot be switched off.</li>
            <li><strong>Analytics cookies</strong> — help us understand how visitors use the site (e.g. Google Analytics). Only loaded after you accept analytics cookies.</li>
            <li><strong>Marketing cookies</strong> — used to measure advertising performance (e.g. Meta Pixel). Only loaded after you accept marketing cookies.</li>
          </ul>

          <h2 className="font-display text-xl font-bold text-ink">Managing your preference</h2>
          <p>
            You can accept all cookies, reject non-essential cookies, or set granular preferences via the cookie
            banner shown on your first visit. Clearing your browser&rsquo;s local storage will reset this choice and
            show the banner again.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Third-party cookies</h2>
          <p>
            Where enabled, Google Analytics and Meta Pixel may set their own cookies subject to their respective
            privacy policies. AMREN does not control how these third parties process data beyond the consent settings
            you provide here.
          </p>
        </div>
      </article>
    </>
  );
}
