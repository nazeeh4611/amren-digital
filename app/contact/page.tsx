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

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
      <path d="M12 21s-7-6.05-7-11a7 7 0 0 1 14 0c0 4.95-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.652 4.527 1.783 6.393L4 29l7.81-1.746A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.94-1.352l-.354-.21-4.633 1.036 1.06-4.51-.232-.37A9.71 9.71 0 0 1 5.25 15c0-5.93 4.823-10.75 10.754-10.75S26.75 9.07 26.75 15 21.934 24.75 16.004 24.75Zm5.61-7.35c-.307-.154-1.82-.898-2.102-1-.282-.103-.487-.154-.692.154-.205.307-.795 1-.975 1.205-.18.205-.36.23-.667.077-.307-.154-1.296-.478-2.469-1.523-.913-.814-1.53-1.82-1.71-2.127-.18-.307-.02-.473.135-.626.138-.137.307-.36.46-.54.154-.18.205-.307.307-.512.103-.205.052-.384-.026-.538-.077-.154-.692-1.668-.949-2.284-.25-.6-.505-.519-.692-.529-.18-.008-.384-.01-.59-.01-.205 0-.538.077-.82.384-.282.307-1.076 1.051-1.076 2.564s1.101 2.973 1.255 3.179c.154.205 2.168 3.31 5.253 4.643.734.317 1.307.506 1.754.648.737.234 1.408.201 1.938.122.591-.088 1.82-.744 2.077-1.462.256-.717.256-1.333.18-1.462-.077-.128-.282-.205-.59-.36Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const contactDetails = [
  { icon: LocationIcon, label: "Location", value: site.location.label, wide: true },
  { icon: PhoneIcon, label: "Phone", value: site.contact.phone, href: site.contact.phoneHref },
  { icon: WhatsAppIcon, label: "WhatsApp / Call", value: site.contact.phone2, href: site.contact.phone2Href },
  { icon: MailIcon, label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
  { icon: InstagramIcon, label: "Instagram", value: site.contact.instagram, href: site.social.instagram, external: true },
];

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

          <FadeIn delay={0.15} className="mt-10 grid gap-4 sm:grid-cols-2">
            {contactDetails.map((detail) => (
              <div
                key={detail.label}
                className={`flex items-start gap-3 rounded-[var(--radius-card)] border border-navy/10 bg-white p-4 ${detail.wide ? "sm:col-span-2" : ""}`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue/10 text-blue">
                  <detail.icon />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">{detail.label}</p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target={detail.external ? "_blank" : undefined}
                      rel={detail.external ? "noopener noreferrer" : undefined}
                      className="mt-0.5 block truncate font-medium text-ink transition-colors hover:text-blue"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="mt-0.5 font-medium text-ink">{detail.value}</p>
                  )}
                </div>
              </div>
            ))}
          </FadeIn>
        </div>

        <div className="rounded-[var(--radius-lg)] border border-navy/10 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
