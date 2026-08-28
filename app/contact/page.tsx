import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { ContactForm } from "@/components/forms/ContactForm";
import { SplitReveal } from "@/components/animations/SplitReveal";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = buildMetadata({
  title: "Contact AMREN Digital | Dubai Digital Marketing Agency",
  description:
    "Get in touch with AMREN Digital in Dubai, UAE — tell us about your business and goals, and we'll recommend the right combination of digital growth services.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />

      <section className="wrap grid gap-14 pb-24 pt-8 sm:pt-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <SplitReveal
            as="h1"
            text="Let’s build something that grows."
            trigger="mount"
            className="mt-5 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-ink sm:text-6xl"
          />
          <p className="mt-6 max-w-md text-lg text-ink/70">
            Tell us about your business and goals. We&rsquo;ll review your current digital presence and recommend the
            right combination of services.
          </p>

          <FadeIn delay={0.15} className="mt-10 space-y-5 text-ink/80">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Location</p>
              <p className="mt-1">{site.location.label}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Phone / WhatsApp</p>
              <a href={site.contact.phoneHref} className="mt-1 block hover:text-blue">
                {site.contact.phone}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Website</p>
              <p className="mt-1">{site.contact.website}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Instagram</p>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="mt-1 block hover:text-blue">
                {site.contact.instagram}
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="rounded-[var(--radius-lg)] border border-navy/10 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
