"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { FadeIn } from "@/components/animations/FadeIn";

const arc = [
  { word: "Attention", note: "Someone notices AMREN exists." },
  { word: "Interest", note: "They look closer at what we do." },
  { word: "Enquiry", note: "They reach out to start a conversation." },
  { word: "Customer", note: "The relationship becomes a partnership." },
  { word: "Growth", note: "The system keeps compounding from there." },
];

export function GrowthArc() {
  return (
    <section className="section overflow-hidden bg-navy text-cream">
      <div className="wrap">
        <Eyebrow light accent="gold">The Arc of a Relationship</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold uppercase leading-tight tracking-tight sm:text-5xl">
          From attention to growth, deliberately.
        </h2>
      </div>

      <div className="wrap mt-14 flex flex-wrap items-start gap-x-4 gap-y-10 sm:flex-nowrap sm:overflow-x-auto">
        {arc.map((stage, i) => (
          <FadeIn key={stage.word} delay={i * 0.1} className="flex min-w-[10rem] flex-1 items-start gap-4 sm:min-w-0">
            <span className="font-display text-2xl font-bold text-cream/20">0{i + 1}</span>
            <div>
              <p className="font-display text-2xl font-bold uppercase tracking-tight text-gold-2 sm:text-3xl">{stage.word}</p>
              <p className="mt-2 max-w-[14rem] text-sm text-cream/60">{stage.note}</p>
            </div>
            {i < arc.length - 1 && (
              <span aria-hidden="true" className="mt-4 hidden items-center gap-1 lg:flex">
                <motion.span
                  className="block h-px w-8 bg-gold/40"
                  style={{ transformOrigin: "left" }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.25, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.span
                  className="text-cream/40"
                  initial={{ opacity: 0, x: -4 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 + 0.55 }}
                >
                  →
                </motion.span>
              </span>
            )}
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
