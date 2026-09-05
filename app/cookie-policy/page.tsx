import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
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

        <div className="prose-amren mt-10 space-y-6 text-ink/75">
          <p>
            This policy explains how {site.contact.website} uses cookies and similar technologies, and how you can
            manage your preferences. It should be read alongside our{" "}
            <a href="/privacy-policy" className="underline underline-offset-2 hover:text-blue">
              Privacy Policy
            </a>
            .
          </p>

          <h2 className="font-display text-xl font-bold text-ink">What are cookies</h2>
          <p>
            Cookies are small text files placed on your device when you visit a website. They help the site
            function correctly and, where you allow it, help us understand how the site is used and measure the
            performance of our advertising.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Cookies we use</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Necessary cookies</strong> — required for the site to function, such as remembering the cookie
              preference you&rsquo;ve set (stored in your browser&rsquo;s local storage). These cannot be switched
              off, and no consent is required for them under applicable cookie rules.
            </li>
            <li>
              <strong>Analytics cookies</strong> — help us understand how visitors use the site, such as which pages
              are viewed and how visitors navigate between them (e.g. Google Analytics). Only loaded after you accept
              analytics cookies, and only if Google Analytics is actually configured for the site.
            </li>
            <li>
              <strong>Marketing cookies</strong> — used to measure and improve the performance of our own
              advertising, such as attributing a form submission to a Google Ads or Meta (Facebook/Instagram) ad
              campaign (e.g. Google Ads conversion tracking, Meta Pixel). Only loaded after you accept marketing
              cookies, and only if the relevant advertising account is configured for the site.
            </li>
          </ul>
          <p>We do not currently use separate preference cookies beyond the necessary cookie preference noted above.</p>

          <h2 className="font-display text-xl font-bold text-ink">Third-party cookies</h2>
          <p>
            Where analytics or marketing cookies are enabled, Google (Analytics and Ads) and Meta may set their own
            cookies on your device, valid for durations set by those providers rather than by us. These providers
            process data under their own privacy policies, and we do not control their processing beyond the
            consent category you select in our cookie banner.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Managing your preferences</h2>
          <p>
            When you first visit the site, a cookie banner lets you Accept All, reject optional cookies (Essential
            Only), or open Preferences to choose analytics and marketing separately. You can change your choice at
            any time by clearing your browser&rsquo;s local storage for this site, which will show the banner again
            on your next visit. You can also control cookies more broadly through your browser&rsquo;s own settings,
            including blocking or deleting cookies — note that blocking necessary cookies may affect how the site
            behaves.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Changes to this policy</h2>
          <p>We may update this policy if the cookies or technologies we use change. The &ldquo;Last updated&rdquo; date at the top of this page reflects the current version.</p>

          <h2 className="font-display text-xl font-bold text-ink">Contact</h2>
          <p>
            Questions about this policy can be sent through our{" "}
            <a href="/contact" className="underline underline-offset-2 hover:text-blue">
              contact form
            </a>
            , by email at {site.contact.email}, or via phone/WhatsApp at {site.contact.phone}.
          </p>
        </div>
      </article>
    </>
  );
}
