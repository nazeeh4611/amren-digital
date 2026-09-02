"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";
import { site } from "@/content/site";
import { Logo } from "@/components/navigation/Logo";
import { Button } from "@/components/buttons/Button";
import { Magnetic } from "@/components/animations/Magnetic";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { ServicesDropdown } from "@/components/navigation/ServicesDropdown";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  // ScrollTrigger, not a raw scroll listener — matches every other scroll-driven
  // effect in the codebase and avoids a React re-render firing on every scroll frame.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const st = ScrollTrigger.create({
      start: 24,
      end: 99999,
      onUpdate: (self) => setScrolled(self.scroll() > 24),
    });
    return () => st.kill();
  }, []);

  // Landing pages get a distraction-free header (no nav links) instead of
  // the full site nav — every extra way off the page costs paid traffic.
  if (pathname?.startsWith("/lp/")) {
    return <LandingHeader />;
  }

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-4">
        <div
          className={clsx(
            "flex w-full max-w-6xl items-center justify-between rounded-full border transition-all duration-300 ease-out",
            scrolled
              ? "border-navy/10 bg-cream/80 px-4 py-2 shadow-[var(--shadow-card)] backdrop-blur-md sm:px-5"
              : "border-cream/40 bg-cream/65 px-5 py-3 shadow-[0_8px_30px_-12px_rgba(11,18,31,0.35)] backdrop-blur-md sm:px-6 sm:py-4"
          )}
        >
          <Logo tone="dark" />

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {site.nav.map((item) => {
              if (item.label === "Services") {
                return <ServicesDropdown key={item.href} />;
              }
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "group relative text-sm font-semibold uppercase tracking-wide transition-colors hover:text-blue",
                    active ? "text-ink" : "text-ink/85"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={clsx(
                      "absolute -bottom-1 left-0 h-px bg-blue transition-[width] duration-300 ease-out",
                      active ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Magnetic>
              <Button href={site.cta.startProject.href} variant="primary" className="px-5 py-2.5 text-xs">
                {site.cta.startProject.label}
              </Button>
            </Magnetic>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 rounded-full border border-navy/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink lg:hidden"
            aria-haspopup="true"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            Menu
            <span aria-hidden="true" className="flex flex-col gap-[3px]">
              <span className="block h-[2px] w-4 bg-navy" />
              <span className="block h-[2px] w-4 bg-navy" />
            </span>
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
