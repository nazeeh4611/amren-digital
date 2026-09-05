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

        <div className="prose-amren mt-10 space-y-6 text-ink/75">
          <p>
            AMREN Digital (&ldquo;AMREN&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), part of{" "}
            {site.parent.name}, respects your privacy. This policy explains what information we collect through{" "}
            {site.contact.website} (the &ldquo;Site&rdquo;), how we use and share it, and the choices available to
            you. It is written in plain language for visitors and prospective clients of a UAE-based digital agency
            and is not a substitute for legal advice.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Who we are</h2>
          <p>
            AMREN Digital is a Dubai-based digital growth agency and part of {site.parent.name}. For any privacy
            question, you can reach us through the contact details at the bottom of this page.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Information you provide to us</h2>
          <p>When you submit a contact, free audit, waitlist, or landing page enquiry form, we collect the details that form asks for, which may include:</p>
          <ul className="list-disc space-y-1.5 pl-6">
            <li>Your name and, where provided, job title or role</li>
            <li>Company or business name</li>
            <li>Email address</li>
            <li>Phone and/or WhatsApp number</li>
            <li>Website URL, industry, and current marketing channels (where the form asks for these)</li>
            <li>Any message, goal, or challenge you describe to us</li>
          </ul>
          <p>We do not ask for payment details, government ID numbers, or other sensitive personal data through these forms.</p>

          <h2 className="font-display text-xl font-bold text-ink">Information collected automatically</h2>
          <p>
            Like most websites, our servers and hosting provider record standard technical information for any
            visitor — such as IP address, browser type, device type, referring page, and pages visited — for
            security and operational purposes. Beyond this baseline logging, we only collect broader usage analytics
            (such as session duration or navigation paths) through analytics cookies, and only after you have granted
            analytics consent through our cookie banner. See{" "}
            <a href="/cookie-policy" className="underline underline-offset-2 hover:text-blue">
              Cookie Policy
            </a>{" "}
            for the full list of categories.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Cookies, analytics, and advertising technologies</h2>
          <p>
            We use essential cookies to operate the Site, and — only where you have granted the relevant consent —
            optional analytics and marketing technologies, which may include Google Analytics, Google Ads conversion
            tracking, and Meta (Facebook/Instagram) Pixel. These tools help us understand how visitors use the Site
            and measure the performance of our own advertising campaigns. None of these load before you make a
            choice in the cookie banner, and none load at all for a category you decline. Full detail is in our{" "}
            <a href="/cookie-policy" className="underline underline-offset-2 hover:text-blue">
              Cookie Policy
            </a>
            .
          </p>

          <h2 className="font-display text-xl font-bold text-ink">How we use your information</h2>
          <p>We use the information described above to:</p>
          <ul className="list-disc space-y-1.5 pl-6">
            <li>Respond to your enquiry and follow up on the service you asked about</li>
            <li>Prepare proposals, quotes, or a free digital audit where requested</li>
            <li>Deliver services to clients we have an active engagement with</li>
            <li>Improve the Site and understand which pages and campaigns are working, using analytics you have consented to</li>
            <li>Measure the performance of our own paid advertising, using marketing cookies you have consented to</li>
            <li>Meet legal, tax, or accounting obligations where applicable</li>
          </ul>
          <p>We do not sell your personal information, and we do not use form submissions for purposes unrelated to the enquiry or service you engaged us for.</p>

          <h2 className="font-display text-xl font-bold text-ink">Marketing communications</h2>
          <p>
            If you submit an enquiry, we may follow up about the service you asked about. We will only send broader
            marketing updates (such as newsletters or promotional offers) where you have opted in to receive them,
            and you can ask to stop receiving them at any time using the contact details below.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Who we share information with</h2>
          <p>We do not sell or rent your personal information. We share it only with:</p>
          <ul className="list-disc space-y-1.5 pl-6">
            <li>Service providers who help us operate the Site or deliver a service you requested — for example, our email delivery provider (Resend), hosting provider, or analytics/advertising platforms you have consented to (Google, Meta)</li>
            <li>Professional advisors (such as accountants) where necessary for our own legal or financial obligations</li>
            <li>Authorities, where required by applicable law or a valid legal process</li>
          </ul>
          <p>Any third-party service provider we use is only given the information needed to perform its function, and remains subject to its own privacy policy.</p>

          <h2 className="font-display text-xl font-bold text-ink">Data retention</h2>
          <p>
            We keep enquiry and client information for as long as reasonably necessary to respond to your enquiry,
            deliver an active engagement, and meet our own legal, accounting, or tax obligations, after which it is
            deleted or anonymized. You can ask us to delete information sooner using the contact details below,
            subject to any retention we are legally required to keep.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Data security</h2>
          <p>
            We take reasonable technical and organizational measures to protect the information you share with us,
            including transmitting form submissions over encrypted (HTTPS) connections and limiting access to
            enquiry data to the team members who need it. No method of transmission or storage is completely secure,
            and we cannot guarantee absolute security.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">International data transfers</h2>
          <p>
            We are based in the United Arab Emirates. Some of the service providers we use (such as our hosting,
            email, and analytics providers) may process data on servers located outside the UAE. Where this happens,
            we rely on those providers&rsquo; own safeguards and standard industry practices for cross-border data
            transfer.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Third-party websites</h2>
          <p>
            The Site may link to third-party websites, including client project sites in our portfolio and our
            social media profiles. We are not responsible for the privacy practices of those external sites, and we
            encourage you to review their own privacy policies.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Children&rsquo;s privacy</h2>
          <p>The Site is intended for businesses and professionals, and is not directed at children. We do not knowingly collect personal information from children.</p>

          <h2 className="font-display text-xl font-bold text-ink">Your choices and rights</h2>
          <p>Depending on where you are located, you may have rights to request access to, correction of, or deletion of your personal information, or to object to certain uses of it. You can:</p>
          <ul className="list-disc space-y-1.5 pl-6">
            <li>Change your cookie preferences at any time — see our <a href="/cookie-policy" className="underline underline-offset-2 hover:text-blue">Cookie Policy</a> for how</li>
            <li>Ask us what information we hold about you, or ask us to correct or delete it</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>
          <p>To exercise any of these choices, contact us using the details below. We will respond to legitimate requests within a reasonable timeframe, in line with applicable law.</p>

          <h2 className="font-display text-xl font-bold text-ink">Changes to this policy</h2>
          <p>We may update this policy from time to time to reflect changes in our practices or for legal reasons. The &ldquo;Last updated&rdquo; date at the top of this page will always reflect the current version.</p>

          <h2 className="font-display text-xl font-bold text-ink">Contact us</h2>
          <p>
            Questions about this policy or how we handle your information can be sent via WhatsApp or phone at{" "}
            {site.contact.phone}, by email at {site.contact.email}, or through our{" "}
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
