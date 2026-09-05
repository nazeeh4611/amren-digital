"use client";

import { useEffect, useState } from "react";
import { QuickLeadForm } from "@/components/forms/QuickLeadForm";

const STORAGE_KEY = "amren_welcome_modal_seen";
const OPEN_DELAY_MS = 7000;
const CLOSING_DISPLAY_MS = 1400;

type Phase = "hidden" | "open" | "closing";

/** Plain SVG frown face — never a Unicode emoji, per this site's icon convention. */
function FrownIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9.25" />
      <circle cx="8.75" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.25" cy="10" r="1" fill="currentColor" stroke="none" />
      <path d="M8.5 16c.9-1.2 2.1-1.8 3.5-1.8s2.6.6 3.5 1.8" />
    </svg>
  );
}

/**
 * First-visit welcome modal for the homepage. Shows once per browser —
 * gated on localStorage, marked seen the moment it's shown so a refresh
 * (or coming back to "/") never re-triggers it, only clearing on a full
 * storage wipe. Closing without submitting shows a brief plain-SVG frown
 * icon (never a real emoji, per this site's icon convention) instead of
 * just vanishing.
 */
export function WelcomeModal() {
  const [phase, setPhase] = useState<Phase>("hidden");

  useEffect(() => {
    let seen = true;
    try {
      seen = localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // localStorage unavailable (private mode, blocked storage) — skip the modal entirely
      return;
    }
    if (seen) return;

    const timer = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // ignore — worst case the modal reappears on the next visit
      }
      setPhase("open");
    }, OPEN_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase !== "open") return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") handleDismiss();
    }
    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [phase]);

  function handleDismiss() {
    setPhase("closing");
    setTimeout(() => setPhase("hidden"), CLOSING_DISPLAY_MS);
  }

  if (phase === "hidden") return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Welcome"
      onClick={(e) => {
        if (e.target === e.currentTarget && phase === "open") handleDismiss();
      }}
    >
      <div className="relative w-full max-w-sm rounded-[var(--radius-lg)] bg-cream p-7 shadow-[var(--shadow-card)] sm:p-8">
        {phase === "open" && (
          <>
            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-ink/50 transition-colors hover:bg-navy/5 hover:text-ink"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Welcome to AMREN Digital</p>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase leading-tight tracking-tight text-ink">
              Let&rsquo;s grow your business.
            </h2>
            <p className="mt-2 text-sm text-ink/65">
              Leave your name and number and our team will reach out for a quick chat.
            </p>

            <div className="mt-6">
              <QuickLeadForm source="welcome_modal" layout="stacked" onSuccess={() => setTimeout(handleDismiss, 1200)} />
            </div>
          </>
        )}

        {phase === "closing" && (
          <div className="flex flex-col items-center gap-3 py-4 text-center">
            <span className="text-ink/60">
              <FrownIcon />
            </span>
            <p className="text-sm font-medium text-ink/70">Sorry to see you go.</p>
          </div>
        )}
      </div>
    </div>
  );
}
