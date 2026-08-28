"use client";

import { useState } from "react";
import clsx from "clsx";
import type { Faq } from "@/content/faqs";
import { Stagger, StaggerItem } from "@/components/animations/FadeIn";

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Stagger className="divide-y divide-navy/10 border-y border-navy/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <StaggerItem key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-trigger-${index}`}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-lg font-semibold text-ink sm:text-xl">{item.q}</span>
                <span
                  aria-hidden="true"
                  className={clsx(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-navy/20 text-ink transition-transform duration-300",
                    isOpen && "rotate-45 border-gold bg-gold text-cream"
                  )}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-trigger-${index}`}
              className={clsx("grid overflow-hidden transition-all duration-300 ease-out", isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]")}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="max-w-2xl text-sm leading-relaxed text-ink/70 sm:text-base">{item.a}</p>
              </div>
            </div>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
