import { site } from "@/content/site";
import { Button } from "@/components/buttons/Button";
import { SplitReveal } from "@/components/animations/SplitReveal";
import { FadeIn } from "@/components/animations/FadeIn";

export function FinalCTA({ headline, body, leadMagnetLabel }: { headline: string; body: string; leadMagnetLabel: string }) {
  return (
    <section className="section bg-navy text-cream">
      <div className="wrap text-center">
        <SplitReveal
          as="h2"
          text={headline}
          className="mx-auto max-w-3xl font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl"
        />
        <FadeIn delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-cream/70">{body}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="#lead-form" variant="primary">
              {leadMagnetLabel}
            </Button>
            <Button href={site.contact.whatsapp} variant="outline-light">
              Chat on WhatsApp
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
