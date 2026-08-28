import type { Metadata } from "next";
import { Button } from "@/components/buttons/Button";
import { AssetPlaceholder } from "@/components/assets/AssetPlaceholder";
import { SplitReveal } from "@/components/animations/SplitReveal";

export const metadata: Metadata = {
  title: "Page Not Found | AMREN Digital",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="accent-dot accent-dot-a absolute left-16 top-20 h-3 w-3 bg-purple" />
      <div aria-hidden="true" className="accent-dot accent-dot-b absolute bottom-16 right-20 h-3.5 w-3.5 bg-coral" />
      <div className="wrap relative flex flex-col items-center gap-10 py-24 text-center sm:py-32">
        <AssetPlaceholder type="background" label="404" motif="nodes" aspectRatio="1/1" className="w-40" tone={2} />
        <div>
          <p className="font-display text-8xl font-bold text-navy/15 sm:text-9xl">404</p>
          <SplitReveal
            as="h1"
            text="This page got lost in the algorithm."
            trigger="mount"
            className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-navy sm:text-5xl"
          />
          <p className="mx-auto mt-5 max-w-md text-navy/70">
            The page you&rsquo;re looking for doesn&rsquo;t exist, or has moved somewhere new.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/">Go Home</Button>
          <Button href="/services" variant="ghost">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}
