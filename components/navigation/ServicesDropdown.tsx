"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { serviceCategories } from "@/content/services";
import { ServiceIcon } from "@/components/icons/ServiceIcons";

/**
 * Desktop-only nav dropdown: hovering (or clicking, for keyboard/touch)
 * "Services" reveals the 6 core service categories (not every individual
 * sub-service — SEO and Local SEO, for instance, are one "Search" line,
 * not two), so the list stays short and scannable. The trigger link
 * itself still goes to /services.
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
            {serviceCategories.map((category) => (
              <Link
                key={category.key}
                href={`/services/${category.serviceSlugs[0]}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-cream-2"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cream-2">
                  <ServiceIcon id={category.key} className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-ink">{category.title}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
