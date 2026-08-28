import { site } from "@/content/site";
import { Button } from "@/components/buttons/Button";
import { SplitReveal } from "@/components/animations/SplitReveal";
import { Magnetic } from "@/components/animations/Magnetic";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScrollColorPop } from "@/components/animations/ScrollColorPop";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gold py-24 sm:py-32">
      {/* The strongest color moment on the site, per spec — solid Deep
          Blue, with small Cyan/Green/Peach accents used sparingly rather
          than more saturated blocks. */}
      <div aria-hidden="true" className="accent-dot accent-dot-a absolute left-12 top-10 h-3 w-3 rounded-full bg-cyan" />
      <div aria-hidden="true" className="accent-dot accent-dot-b absolute bottom-12 right-16 h-4 w-4 rounded-full bg-peach" />
      <div aria-hidden="true" className="accent-dot accent-dot-a absolute right-24 top-16 h-2 w-2 rounded-full bg-green" />
      <div className="wrap relative text-center">
        <div className="flex justify-center">
          <ScrollColorPop color="cyan" size={10} />
        </div>
        <SplitReveal
          as="h2"
          text="Let’s Grow."
          className="mt-4 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-cream sm:text-8xl"
        />
        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-cream/75">
            Attract the right audience. Generate qualified leads. Build systems that help your business grow.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <Button href={site.cta.startProject.href} variant="outline-light">
                {site.cta.startProject.label}
              </Button>
            </Magnetic>
            <Magnetic>
              <Button href={site.contact.whatsapp} variant="ghost" className="!text-cream hover:!text-cyan">
                WhatsApp AMREN
              </Button>
            </Magnetic>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
