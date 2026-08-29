"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { Button } from "@/components/buttons/Button";
import { Magnetic } from "@/components/animations/Magnetic";
import { SplitReveal } from "@/components/animations/SplitReveal";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations/FadeIn";
import { LandingFooter } from "@/components/landing/LandingFooter";

const footerServices = services.slice(0, 7);

const footerColumns = [
  {
    heading: "Navigation",
    items: site.footerNav.map((item) => ({ href: item.href, label: item.label, external: false })),
  },
  {
    heading: "Services",
    items: footerServices.map((service) => ({ href: `/services/${service.slug}`, label: service.title, external: false })),
  },
];

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/lp/")) {
    return <LandingFooter />;
  }

  return (
    <footer className="bg-petrol text-cream">
      <div className="wrap section">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-cream/12 pb-14 sm:flex-row sm:items-end">
          <div>
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-turquoise">Ready to grow?</p>
            </FadeIn>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[0.95] sm:text-6xl">
              <SplitReveal as="span" text="Let’s build your" className="block" />
              <SplitReveal as="span" text="digital growth system." className="block" delay={0.08} />
            </h2>
          </div>
          <FadeIn delay={0.15}>
            <Magnetic>
              <Button href={site.cta.startProject.href} variant="warm">
                {site.cta.startProject.label}
              </Button>
            </Magnetic>
          </FadeIn>
        </div>

        <Stagger className="grid grid-cols-2 gap-10 py-14 sm:grid-cols-4" staggerDelay={0.06}>
          {footerColumns.map((column) => (
            <StaggerItem key={column.heading}>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/50">{column.heading}</p>
              <ul className="mt-4 space-y-2.5">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group relative inline-flex text-sm text-cream/80 transition-colors hover:text-turquoise"
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-0.5 left-0 h-px w-0 bg-turquoise transition-[width] duration-300 ease-out group-hover:w-full"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}

          <StaggerItem>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/50">Company</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={site.parent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex text-sm text-cream/80 transition-colors hover:text-turquoise"
                >
                  {site.parent.name}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-0.5 left-0 h-px w-0 bg-turquoise transition-[width] duration-300 ease-out group-hover:w-full"
                  />
                </a>
              </li>
              {site.legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative inline-flex text-sm text-cream/80 transition-colors hover:text-turquoise"
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-0.5 left-0 h-px w-0 bg-turquoise transition-[width] duration-300 ease-out group-hover:w-full"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/50">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/80">
              <li>{site.location.label}</li>
              <li>
                <a href={site.contact.phoneHref} className="transition-colors hover:text-turquoise">
                  {site.contact.phone}
                </a>
              </li>
              <li>{site.contact.website}</li>
              <li>
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-turquoise">
                  {site.contact.instagram}
                </a>
              </li>
            </ul>
          </StaggerItem>
        </Stagger>

        <FadeIn className="flex flex-col items-start justify-between gap-6 border-t border-cream/12 pt-8 sm:flex-row sm:items-center">
          <p className="font-display text-3xl font-bold tracking-tight text-cream/90 sm:text-4xl">AMREN DIGITAL</p>
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} AMREN Digital. Part of {site.parent.name}. All rights reserved.
          </p>
        </FadeIn>
      </div>
    </footer>
  );
}
