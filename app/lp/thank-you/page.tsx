import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { getServiceBySlug } from "@/content/services";
import { Button } from "@/components/buttons/Button";
import { SplitReveal } from "@/components/animations/SplitReveal";

export const metadata: Metadata = buildMetadata({
  title: "Request Received | AMREN Digital",
  description: "Thanks for your request. AMREN Digital will be in touch shortly.",
  path: "/lp/thank-you",
  noindex: true,
});

export default async function LandingThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service: serviceSlug } = await searchParams;
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="accent-dot accent-dot-a absolute left-16 top-20 h-3 w-3 bg-blue" />
      <div aria-hidden="true" className="accent-dot accent-dot-b absolute right-20 top-32 h-4 w-4 bg-coral" />
      <div className="wrap relative flex flex-col items-center gap-8 py-24 text-center sm:py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue">Request received</p>
        <SplitReveal
          as="h1"
          text="You’re in."
          trigger="mount"
          className="font-display text-6xl font-bold uppercase tracking-tight text-coral sm:text-8xl"
        />
        <p className="mx-auto max-w-lg text-lg text-ink/70">
          {service
            ? `We've received your ${service.title} request. A member of the AMREN team will review your details and get back to you shortly.`
            : "We've received your request. A member of the AMREN team will review your details and get back to you shortly."}
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Button href={site.contact.whatsapp} variant="primary">
            Chat on WhatsApp Now
          </Button>
          <Button href={site.contact.phoneHref} variant="ghost">
            Call {site.contact.phone}
          </Button>
        </div>

        <p className="mt-4 text-sm text-ink/50">
          Not urgent? We typically respond within 1–2 business days.{" "}
          <Link href="/" className="underline underline-offset-2 hover:text-ink">
            Back to the AMREN Digital homepage
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
