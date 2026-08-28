"use client";

import { useState } from "react";
import Link from "next/link";
import { useConsent, writeConsent } from "@/lib/consent";

export function CookieConsent() {
  const consent = useConsent();
  const [showPreferences, setShowPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  if (consent) return null;

  const acceptAll = () => {
    writeConsent({ analytics: true, marketing: true });
  };

  const rejectAll = () => {
    writeConsent({ analytics: false, marketing: false });
  };

  const savePreferences = () => {
    writeConsent({ analytics, marketing });
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-2xl rounded-[var(--radius-lg)] border border-navy/10 bg-cream p-5 shadow-[var(--shadow-soft)] sm:inset-x-auto sm:right-6 sm:bottom-6 sm:p-6"
    >
      <p className="text-sm text-navy/80">
        AMREN Digital uses essential cookies to run this site, and optional analytics/marketing cookies to understand
        traffic and improve campaigns. You can change your choice anytime — see our{" "}
        <Link href="/cookie-policy" className="underline underline-offset-2 hover:text-blue">
          Cookie Policy
        </Link>
        .
      </p>

      {showPreferences && (
        <div className="mt-4 space-y-3 border-t border-navy/10 pt-4">
          <label className="flex items-center justify-between gap-4 text-sm text-navy/80">
            <span>Essential cookies (always on)</span>
            <input type="checkbox" checked disabled className="h-4 w-4 accent-navy" />
          </label>
          <label className="flex items-center justify-between gap-4 text-sm text-navy/80">
            <span>Analytics cookies</span>
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
              className="h-4 w-4 accent-blue"
            />
          </label>
          <label className="flex items-center justify-between gap-4 text-sm text-navy/80">
            <span>Marketing cookies</span>
            <input
              type="checkbox"
              checked={marketing}
              onChange={(e) => setMarketing(e.target.checked)}
              className="h-4 w-4 accent-blue"
            />
          </label>
        </div>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={acceptAll}
          className="rounded-full bg-navy px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-navy-2"
        >
          Accept All
        </button>
        <button
          type="button"
          onClick={rejectAll}
          className="rounded-full border border-navy/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-navy transition-colors hover:bg-navy/5"
        >
          Essential Only
        </button>
        {showPreferences ? (
          <button
            type="button"
            onClick={savePreferences}
            className="rounded-full border border-navy/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-navy transition-colors hover:bg-navy/5"
          >
            Save Preferences
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setShowPreferences(true)}
            className="text-xs font-semibold uppercase tracking-wide text-navy/60 underline underline-offset-4 hover:text-blue"
          >
            Preferences
          </button>
        )}
      </div>
    </div>
  );
}
