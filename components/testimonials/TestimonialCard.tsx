import type { Testimonial } from "@/content/testimonials";
import { AssetPlaceholder } from "@/components/assets/AssetPlaceholder";
import { TiltCard } from "@/components/animations/TiltCard";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <TiltCard className="h-full">
      <figure className="flex h-full flex-col justify-between rounded-[var(--radius-lg)] border border-navy/10 bg-white p-7 shadow-[var(--shadow-card)] sm:p-8">
        <blockquote className="pull-quote font-editorial text-xl italic leading-snug text-navy/80 sm:text-2xl">
          {testimonial.quote}
        </blockquote>
        <figcaption className="mt-8 flex items-center gap-4">
          <AssetPlaceholder
            type="testimonial-photo"
            aspectRatio="1/1"
            alt={testimonial.name}
            className="h-14 w-14 shrink-0 [&_svg]:h-6 [&_svg]:w-6"
            showLabel={false}
          />
          <div>
            <p className="font-semibold text-navy">{testimonial.name}</p>
            <p className="text-sm text-navy/60">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </figcaption>
      </figure>
    </TiltCard>
  );
}
