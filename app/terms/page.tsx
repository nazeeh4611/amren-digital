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

        <div className="prose-amren mt-10 space-y-6 text-ink/75">
          <p>
            These terms govern your use of {site.contact.website} (the &ldquo;Site&rdquo;), operated by AMREN
            Digital, part of {site.parent.name}. By browsing or using the Site, you agree to these terms. They are
            written for a UAE-based digital agency&rsquo;s marketing website and do not constitute legal advice.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Use of this website</h2>
          <p>
            This website is provided for informational purposes and to allow prospective clients to learn about our
            services and enquire about working with us. You agree to use the Site only for lawful purposes, and not
            to:
          </p>
          <ul className="list-disc space-y-1.5 pl-6">
            <li>Attempt to gain unauthorized access to the Site, its underlying systems, or any account</li>
            <li>Interfere with or disrupt the Site&rsquo;s normal operation, including through automated scraping, spam, or excessive requests</li>
            <li>Submit false, misleading, or malicious content through any form on the Site</li>
            <li>Use the Site to transmit any virus, malware, or other harmful code</li>
          </ul>

          <h2 className="font-display text-xl font-bold text-ink">Accuracy of information</h2>
          <p>
            We take reasonable care to keep the content on this Site accurate and up to date, including our service
            descriptions and portfolio. However, service details, pricing approaches, and availability can change,
            and we do not guarantee that every page is free of errors at all times. Nothing on the Site is a binding
            offer until confirmed in a signed proposal or agreement.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Project enquiries, quotes, and proposals</h2>
          <p>
            Submitting a contact, free audit, or waitlist form does not create a service agreement or any obligation
            on either party. Any quote or proposal we provide in response is an estimate based on the information you
            give us at the time, and is subject to change once the full scope is confirmed. A binding engagement only
            exists once both parties have agreed to a written proposal, statement of work, or service agreement,
            which takes precedence over this page for any confirmed project.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Client responsibilities</h2>
          <p>
            Where you engage us for a service, timely delivery depends on you providing the access, content, brand
            assets, approvals, and feedback we reasonably request, within the timeframes agreed. Delays caused by
            missing or late client input may affect project timelines.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Scope, deliverables, revisions, and delays</h2>
          <p>
            The specific scope, deliverables, number of revision rounds, and timeline for any project are set out in
            the relevant proposal or service agreement, not on this website. Reasonable delays caused by
            circumstances outside our control (including delayed client feedback, third-party platform outages, or
            force majeure events) may adjust agreed timelines.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">No guaranteed results</h2>
          <p>
            SEO is a long-term strategy, and paid advertising, social media, and content results depend on factors
            including budget, audience, competition, creative quality, market conditions, and platform algorithm
            changes — many of which are outside our control. AMREN does not guarantee specific rankings, traffic,
            leads, sales, or return on investment from any service.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Intellectual property</h2>
          <p>
            The content, design, branding, and portfolio material on this Site belong to AMREN Digital or{" "}
            {site.parent.name}, or are used with permission, unless otherwise stated, and may not be copied,
            reproduced, or reused without our written permission. Ownership of deliverables created for a specific
            client engagement is set out in that engagement&rsquo;s own agreement.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Third-party services and external links</h2>
          <p>
            The Site may link to external websites, including client project sites and social media platforms, for
            reference. We are not responsible for the content, availability, or practices of any third-party site,
            and linking to it does not imply our endorsement of everything on it.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Confidentiality</h2>
          <p>
            Information you share with us through an enquiry or during a project is treated as confidential and used
            only to respond to you or deliver the relevant service, consistent with our{" "}
            <a href="/privacy-policy" className="underline underline-offset-2 hover:text-blue">
              Privacy Policy
            </a>
            . Formal confidentiality obligations for a specific engagement are set out in that engagement&rsquo;s own
            agreement.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Liability and disclaimer</h2>
          <p>
            The Site and its content are provided &ldquo;as is,&rdquo; without warranties of any kind beyond those
            that cannot be excluded under applicable law. To the fullest extent permitted by law, AMREN Digital is
            not liable for any indirect, incidental, or consequential loss arising from your use of the Site.
            Nothing in these terms limits liability that cannot be limited under applicable law.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Acceptable use and suspension</h2>
          <p>
            We may restrict or suspend your access to any interactive feature of the Site (such as contact forms) if
            we reasonably believe it is being misused, including for spam, abuse, or attempted unauthorized access.
          </p>

          <h2 className="font-display text-xl font-bold text-ink">Changes to these terms</h2>
          <p>We may update these terms from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects the current version, and continued use of the Site after an update means you accept the revised terms.</p>

          <h2 className="font-display text-xl font-bold text-ink">Governing law</h2>
          <p>These terms are intended to be interpreted in a manner consistent with the laws applicable in the United Arab Emirates, where AMREN Digital is based, without prejudice to any mandatory consumer or other protections that may apply to you under the law of your own jurisdiction.</p>

          <h2 className="font-display text-xl font-bold text-ink">Contact</h2>
          <p>
            Questions about these terms can be sent through our{" "}
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
