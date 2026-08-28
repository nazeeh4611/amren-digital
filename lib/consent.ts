import { useSyncExternalStore } from "react";

export type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

export const CONSENT_STORAGE_KEY = "amren-cookie-consent";
export const CONSENT_EVENT = "amren-consent-updated";

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
}

function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getServerSnapshot() {
  return null;
}

// useSyncExternalStore requires a stable reference when the underlying value
// hasn't changed, so the parsed object is cached alongside its raw string.
let cachedRaw: string | null = null;
let cachedParsed: ConsentState | null = null;

function getSnapshot(): ConsentState | null {
  const raw = typeof window === "undefined" ? null : window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    try {
      cachedParsed = raw ? (JSON.parse(raw) as ConsentState) : null;
    } catch {
      cachedParsed = null;
    }
  }
  return cachedParsed;
}

/** Reactive read of stored consent — updates when writeConsent() runs anywhere on the page. */
export function useConsent(): ConsentState | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function writeConsent(partial: { analytics: boolean; marketing: boolean }) {
  const state: ConsentState = {
    necessary: true,
    analytics: partial.analytics,
    marketing: partial.marketing,
    timestamp: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: state }));
  } catch {
    // localStorage unavailable — consent simply won't persist across visits
  }
  return state;
}
