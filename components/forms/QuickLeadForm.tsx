"use client";

import { useState, type FormEvent } from "react";
import clsx from "clsx";
import { Button } from "@/components/buttons/Button";
import { trackEvent } from "@/lib/track";

const UAE_CODE = "+971";

type Props = {
  source: string;
  layout?: "inline" | "stacked";
  className?: string;
  onSuccess?: () => void;
};

/**
 * Name + UAE phone number only — the fast-path lead capture used by the
 * homepage strip and the first-visit welcome modal. Deliberately shorter
 * than LeadForm (no email, no multi-step flow): both call sites are
 * low-commitment moments where asking for more would just lose the lead.
 */
export function QuickLeadForm({ source, layout = "inline", className, onSuccess }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const trimmedName = name.trim();
    const digits = phone.replace(/[^\d]/g, "");

    if (!trimmedName) {
      setError("Please tell us your name.");
      return;
    }
    if (digits.length < 7) {
      setError("Please share a valid phone number.");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/quick-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, phone: `${UAE_CODE} ${digits}`, pageSource: source }),
      });
      if (!res.ok) throw new Error("Request failed");
      trackEvent("quick_lead_form_submit", { source });
      setDone(true);
      onSuccess?.();
    } catch {
      setError("Something went wrong. Please try again, or WhatsApp us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <p className={clsx("text-sm font-medium text-turquoise", className)}>
        Thanks — we&rsquo;ll be in touch shortly.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx("flex gap-3", layout === "inline" ? "flex-col sm:flex-row sm:items-start" : "flex-col", className)}
      noValidate
    >
      <div className={layout === "inline" ? "w-full sm:w-44" : "w-full"}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          aria-label="Your name"
          className="w-full rounded-full border border-navy/15 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-turquoise"
        />
      </div>

      <div className={layout === "inline" ? "w-full sm:w-56" : "w-full"}>
        <div className="flex items-center overflow-hidden rounded-full border border-navy/15 bg-white pl-4 focus-within:border-turquoise">
          <span className="shrink-0 text-sm font-medium text-ink/50">{UAE_CODE}</span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="50 123 4567"
            aria-label="Phone number"
            inputMode="numeric"
            className="w-full bg-transparent px-2 py-2.5 text-sm text-ink outline-none"
          />
        </div>
      </div>

      <Button type="submit" variant="primary" className="shrink-0 justify-center">
        {submitting ? "Sending…" : "Get in touch"}
      </Button>

      {error && <p className="text-xs text-red-600 sm:basis-full">{error}</p>}
    </form>
  );
}
