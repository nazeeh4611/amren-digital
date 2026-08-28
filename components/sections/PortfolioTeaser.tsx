import { projects } from "@/content/projects";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Button } from "@/components/buttons/Button";
import { SplitReveal } from "@/components/animations/SplitReveal";
import { HorizontalGallery } from "@/components/sections/HorizontalGallery";
import { ScrollColorPop } from "@/components/animations/ScrollColorPop";

export function PortfolioTeaser() {
  return (
    <section className="section overflow-hidden bg-cream pr-0 sm:pr-0">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <Eyebrow accent="gold">Work</Eyebrow>
              <ScrollColorPop color="blue" shape="square" size={9} />
            </div>
            <SplitReveal
              as="h2"
              text="Work that moves brands."
              className="mt-5 max-w-2xl font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-navy sm:text-6xl"
            />
          </div>
          <Button href="/work" variant="ghost">
            View all work
          </Button>
        </div>
        <p className="mt-4 hidden text-sm uppercase tracking-wide text-navy/40 lg:block">Scroll to explore →</p>
      </div>

      <div className="mt-14">
        <HorizontalGallery projects={projects} />
      </div>
    </section>
  );
}
