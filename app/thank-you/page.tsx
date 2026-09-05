import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { Button } from "@/components/buttons/Button";
import { SplitReveal } from "@/components/animations/SplitReveal";

export const metadata: Metadata = buildMetadata({
  title: "Thank You | AMREN Digital",
  description: "Thanks for reaching out to AMREN Digital. We'll be in touch shortly.",
  path: "/thank-you",
  noindex: true,
});

export default function ThankYouPage() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="accent-dot accent-dot-a absolute left-16 top-20 h-3 w-3 bg-blue" />
      <div aria-hidden="true" className="accent-dot accent-dot-b absolute right-20 top-32 h-4 w-4 bg-coral" />
      <div aria-hidden="true" className="accent-dot accent-dot-a absolute bottom-20 left-1/4 h-2.5 w-2.5 bg-gold" />
      <div className="wrap relative flex flex-col items-center gap-10 py-24 text-center sm:py-32">
        <p className="font-editorial text-3xl italic text-navy/25 sm:text-4xl">Thank you</p>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue">Enquiry received</p>
          <SplitReveal
            as="h1"
            text="You’re in."
            trigger="mount"
            className="mt-5 font-display text-6xl font-bold uppercase tracking-tight text-coral sm:text-8xl"
          />
          <p className="mx-auto mt-6 max-w-md text-lg text-ink/70">
            Thanks for reaching out. We&rsquo;ll be in touch shortly.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/">Return Home</Button>
          <Button href="/services" variant="ghost">
            Explore Services
          </Button>
          <Button href="/services/web-design-development#portfolio" variant="ghost">
            View Our Work
          </Button>
          <Button href={site.contact.whatsapp} variant="secondary">
            WhatsApp AMREN
          </Button>
        </div>
      </div>
    </section>
  );
}
