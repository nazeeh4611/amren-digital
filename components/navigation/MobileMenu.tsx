"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/content/site";
import { Button } from "@/components/buttons/Button";
import { Logo } from "@/components/navigation/Logo";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex flex-col bg-navy text-cream lg:hidden"
        >
          <div className="flex items-center justify-between px-5 pt-5">
            {/* The logo's colors are fixed (navy/gold), so it needs a light
                chip behind it to stay visible on this dark navy panel. */}
            <Logo className="rounded-lg bg-cream px-2.5 py-1.5" />
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-cream/25 px-4 py-2 text-xs font-semibold uppercase tracking-wide"
            >
              Close
            </button>
          </div>

          <motion.nav
            aria-label="Mobile primary"
            className="flex flex-1 flex-col justify-center gap-2 px-6"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
          >
            {site.nav.map((item) => (
              <motion.div
                key={item.href}
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-2 font-display text-4xl font-bold uppercase tracking-tight text-cream transition-colors hover:text-gold sm:text-5xl"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <div className="flex flex-col gap-6 border-t border-cream/15 px-6 py-8">
            <Button href={site.cta.startProject.href} variant="primary" onClick={onClose}>
              {site.cta.startProject.label}
            </Button>
            <div className="flex items-center justify-between text-sm text-cream/70">
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                {site.contact.instagram}
              </a>
              <a href={site.parent.url} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                {site.parent.name} →
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
