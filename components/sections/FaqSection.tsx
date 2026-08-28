import type { Faq } from "@/content/faqs";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScrollColorPop } from "@/components/animations/ScrollColorPop";

export function FaqSection({ items, title = "Frequently Asked Questions" }: { items: Faq[]; title?: string }) {
  return (
    <section className="section bg-cream-2">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <FadeIn>
            <div className="flex items-center gap-3">
              <Eyebrow accent="gold">FAQ</Eyebrow>
              <ScrollColorPop color="coral" size={9} />
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-navy sm:text-5xl">
              {title}
            </h2>
          </FadeIn>
          <FaqAccordion items={items} />
        </div>
      </div>
    </section>
  );
}
