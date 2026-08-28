"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { budgetRanges } from "@/components/forms/AuditForm";
import { TextField, CheckboxGroupField, SelectField } from "@/components/forms/FormField";
import { Button } from "@/components/buttons/Button";
import { trackEvent, trackConversion } from "@/lib/track";

type Errors = Partial<Record<"name" | "email" | "phone", string>>;

/**
 * 3-step lead form: goal → budget → contact details. Kept short on
 * purpose — every extra field before "contact details" is a chance to
 * lose a paid-traffic visitor who was already close to converting.
 *
 * All three steps stay mounted (visibility toggled via the `hidden`
 * attribute) rather than conditionally rendered — fields are uncontrolled,
 * read via FormData on submit, so unmounting an earlier step would lose
 * whatever the visitor picked there. `hidden` also keeps hidden-step
 * fields out of the tab order and a11y tree for free.
 */
export function LeadForm({
  serviceSlug,
  serviceTitle,
  goalOptions,
  leadMagnetLabel,
  leadMagnetDescription,
}: {
  serviceSlug: string;
  serviceTitle: string;
  goalOptions: string[];
  leadMagnetLabel: string;
  leadMagnetDescription: string;
}) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const started = useRef(false);

  function markStarted() {
    if (started.current) return;
    started.current = true;
    trackEvent("form_start", { service: serviceSlug });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("hp_field") || "").length > 0) {
      router.push(`/lp/thank-you?service=${serviceSlug}`);
      return;
    }

    const nextErrors: Errors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();

    if (!name) nextErrors.name = "Please tell us your name.";
    if (!email) nextErrors.email = "Please share an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "That email address doesn't look right.";
    if (!phone) nextErrors.phone = "Please share a WhatsApp or phone number so we can reach you.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStep(3);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    const goal = data.getAll("goal").map(String).join(", ");
    const payload = {
      ...Object.fromEntries(data.entries()),
      goal,
      serviceSlug,
      serviceTitle,
      pageSource: `/lp/${serviceSlug}`,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      trackEvent("generate_lead", { service: serviceSlug });
      trackConversion({ service: serviceSlug });
      router.push(`/lp/thank-you?service=${serviceSlug}`);
    } catch {
      setSubmitError("Something went wrong sending your request. Please try again, or WhatsApp us directly.");
      setSubmitting(false);
    }
  }

  return (
    <div id="lead-form" className="rounded-[var(--radius-lg)] border border-navy/10 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{leadMagnetLabel}</p>
      <p className="mt-2 text-sm text-navy/65">{leadMagnetDescription}</p>

      <div className="mt-6 flex items-center gap-2" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={3}>
        {[1, 2, 3].map((s) => (
          <span key={s} className={clsx("h-1 flex-1 rounded-full transition-colors", s <= step ? "bg-gold" : "bg-navy/10")} />
        ))}
      </div>

      <form onSubmit={handleSubmit} onChange={markStarted} noValidate className="mt-6">
        <input type="text" name="hp_field" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 opacity-0" />

        <div hidden={step !== 1}>
          <CheckboxGroupField label="What are you looking to improve? (select all that apply)" name="goal" options={goalOptions} />
          <Button type="button" variant="primary" className="mt-6 w-full justify-center" onClick={() => setStep(2)}>
            Continue
          </Button>
        </div>

        <div hidden={step !== 2}>
          <SelectField label="Approximate monthly marketing budget" name="budget">
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </SelectField>
          <div className="mt-6 flex gap-3">
            <Button type="button" variant="ghost" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button type="button" variant="primary" className="flex-1 justify-center" onClick={() => setStep(3)}>
              Continue
            </Button>
          </div>
        </div>

        <div hidden={step !== 3} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField label="Name" name="name" required error={errors.name} />
            <TextField label="Business Name" name="businessName" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField label="Work Email" name="email" type="email" required error={errors.email} />
            <TextField label="Phone / WhatsApp" name="phone" type="tel" required error={errors.phone} />
          </div>
          <TextField label="Website (if you have one)" name="website" type="url" />

          {submitError && <p className="text-sm text-red-600">{submitError}</p>}

          <div className="flex gap-3 pt-2">
            <Button type="button" variant="ghost" onClick={() => setStep(2)}>
              Back
            </Button>
            <Button type="submit" variant="primary" className="flex-1 justify-center" arrow={!submitting}>
              {submitting ? "Sending…" : leadMagnetLabel}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
