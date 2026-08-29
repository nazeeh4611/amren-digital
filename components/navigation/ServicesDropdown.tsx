"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { services } from "@/content/services";

const iconColors = [
  "bg-turquoise/15 text-turquoise",
  "bg-lagoon/15 text-lagoon",
  "bg-peacock/15 text-peacock",
  "bg-aqua/40 text-navy-3",
  "bg-teal/15 text-teal",
  "bg-mint/50 text-lagoon",
];

function ServiceIcon({ slug, className }: { slug: string; className?: string }) {
  const shared = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className,
  };

  switch (slug) {
    case "google-ads":
    case "meta-ads":
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="0.5" fill="currentColor" />
        </svg>
      );
    case "seo":
    case "local-seo":
      return (
        <svg {...shared}>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="M20 20l-4.35-4.35" />
        </svg>
      );
    case "social-media-marketing":
      return (
        <svg {...shared}>
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="18" cy="5.5" r="2.5" />
          <circle cx="18" cy="18.5" r="2.5" />
          <path d="M8.2 10.8l7.6-4.2M8.2 13.2l7.6 4.2" />
        </svg>
      );
    case "web-design-development":
      return (
        <svg {...shared}>
          <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />
        </svg>
      );
    case "content-creation":
      return (
        <svg {...shared}>
          <path d="M4 20l1.2-4.4L16.3 4.5a1.5 1.5 0 0 1 2.1 0l1.1 1.1a1.5 1.5 0 0 1 0 2.1L8.4 18.8 4 20z" />
        </svg>
      );
    case "video-production":
      return (
        <svg {...shared}>
          <rect x="3" y="6" width="13" height="12" rx="2" />
          <path d="M21 8.5l-5 3 5 3z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "marketing-automation":
      return (
        <svg {...shared}>
          <path d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" />
        </svg>
      );
    default:
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

/**
 * Desktop-only nav dropdown: hovering (or clicking, for keyboard/touch)
 * "Services" reveals every individual service as an icon + label row, so
 * visitors can jump straight to what they want instead of landing on the
 * overview page first. The trigger link itself still goes to /services.
 */
export function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const active = pathname === "/services" || Boolean(pathname?.startsWith("/services/"));

  function handleEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }
  function handleLeave() {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  }

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <Link
        href="/services"
        className={clsx(
          "group relative flex items-center gap-1 text-sm font-semibold uppercase tracking-wide transition-colors hover:text-blue",
          active ? "text-ink" : "text-ink/85"
        )}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(false)}
      >
        Services
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={clsx("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
        <span
          aria-hidden="true"
          className={clsx(
            "absolute -bottom-1 left-0 h-px bg-blue transition-[width] duration-300 ease-out",
            active ? "w-full" : "w-0 group-hover:w-full"
          )}
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-full z-50 mt-4 w-80 -translate-x-1/2 rounded-2xl border border-navy/10 bg-white p-2 shadow-[var(--shadow-soft)]"
          >
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-cream-2"
              >
                <span
                  className={clsx(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                    iconColors[i % iconColors.length]
                  )}
                >
                  <ServiceIcon slug={service.slug} className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-ink">{service.title}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
