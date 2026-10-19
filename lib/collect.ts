/**
 * Client-side senders for the /admin dashboard (first-party, cookieless)
 * and Web3Forms email delivery. Never throw — tracking must not break UX.
 */
function utm() {
  const q = new URLSearchParams(window.location.search);
  return ["utm_source", "utm_medium", "utm_campaign"].map((k) => q.get(k)).filter(Boolean).join(" / ");
}

export function collect(payload: Record<string, unknown>) {
  if (typeof window === "undefined" || window.location.pathname.startsWith("/admin")) return;
  try {
    const body = JSON.stringify({ path: window.location.pathname, ref: document.referrer, utm: utm(), ...payload });
    if (!navigator.sendBeacon?.("/api/events", new Blob([body], { type: "text/plain" }))) {
      fetch("/api/events", { method: "POST", body, keepalive: true }).catch(() => {});
    }
  } catch {
    // ignore
  }
}

const SKIP = new Set(["hp_field", "botcheck"]);

/** Logs the lead to the dashboard and emails it via Web3Forms (if configured). */
export function reportLead(source: string, raw: Record<string, unknown>) {
  const data: Record<string, string> = {};
  for (const [k, v] of Object.entries(raw)) {
    if (SKIP.has(k) || v === "" || v == null) continue;
    data[k] = Array.isArray(v) ? v.join(", ") : String(v);
  }
  collect({ type: "lead", source, data });

  const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  if (!key) return;
  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: key,
      subject: `New ${source} lead — ${data.name || data.email || "website"}`,
      from_name: "AMREN Digital Website",
      ...(data.email ? { replyto: data.email } : {}),
      page: window.location.href,
      ...data,
    }),
    keepalive: true,
  }).catch(() => {});
}
