import { testimonials } from "@/content/testimonials";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { SplitReveal } from "@/components/animations/SplitReveal";

export function TestimonialsSection() {
  return (
    <section className="section bg-white">
      <div className="wrap">
        <Eyebrow accent="gold">What Clients Say</Eyebrow>
        <SplitReveal
          as="h2"
          text="Real feedback, from real work."
          className="mt-5 max-w-2xl font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-ink sm:text-6xl"
        />

        <div className="mt-14 flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 sm:grid sm:grid-cols-2 sm:gap-8 sm:overflow-visible sm:snap-none sm:pb-0 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <FadeIn key={testimonial.id} delay={i * 0.08} className="shrink-0 w-[85%] snap-start sm:w-auto sm:shrink">
              <TestimonialCard testimonial={testimonial} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
