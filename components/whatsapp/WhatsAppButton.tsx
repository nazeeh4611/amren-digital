"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { site } from "@/content/site";
import { trackEvent } from "@/lib/track";
import { useConsent } from "@/lib/consent";

/**
 * Persistent, low-key WhatsApp entry point — one fixed button, not a
 * popup, so it stays available on every page without interrupting reading.
 * Sits higher while the cookie consent banner is undecided so the two
 * never overlap, then settles to the corner once it's dismissed.
 */
export function WhatsAppButton() {
  const consent = useConsent();
  const bannerShowing = consent === null;

  return (
    <motion.a
      href={site.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { label: "floating_button" })}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      aria-label="Chat with AMREN Digital on WhatsApp"
      className={clsx(
        "fixed right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-card)] transition-[bottom] duration-300 sm:right-7",
        bannerShowing ? "bottom-56 sm:bottom-44" : "bottom-5 sm:bottom-7"
      )}
    >
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.652 4.527 1.783 6.393L4 29l7.81-1.746A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.94-1.352l-.354-.21-4.633 1.036 1.06-4.51-.232-.37A9.71 9.71 0 0 1 5.25 15c0-5.93 4.823-10.75 10.754-10.75S26.75 9.07 26.75 15 21.934 24.75 16.004 24.75Zm5.61-7.35c-.307-.154-1.82-.898-2.102-1-.282-.103-.487-.154-.692.154-.205.307-.795 1-.975 1.205-.18.205-.36.23-.667.077-.307-.154-1.296-.478-2.469-1.523-.913-.814-1.53-1.82-1.71-2.127-.18-.307-.02-.473.135-.626.138-.137.307-.36.46-.54.154-.18.205-.307.307-.512.103-.205.052-.384-.026-.538-.077-.154-.692-1.668-.949-2.284-.25-.6-.505-.519-.692-.529-.18-.008-.384-.01-.59-.01-.205 0-.538.077-.82.384-.282.307-1.076 1.051-1.076 2.564s1.101 2.973 1.255 3.179c.154.205 2.168 3.31 5.253 4.643.734.317 1.307.506 1.754.648.737.234 1.408.201 1.938.122.591-.088 1.82-.744 2.077-1.462.256-.717.256-1.333.18-1.462-.077-.128-.282-.205-.59-.36Z" />
      </svg>
    </motion.a>
  );
}
