"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { TextField, CheckboxGroupField } from "@/components/forms/FormField";
import { Button } from "@/components/buttons/Button";
import { trackEvent, trackConversion } from "@/lib/track";

type Errors = Partial<Record<"name" | "email" | "phone", string>>;

/**
 * 2-step lead form: goal → contact details. Kept short on purpose — every
 * extra field before "contact details" is a chance to lose a paid-traffic
 * visitor who was already close to converting.
 *
 * Both steps stay mounted (visibility toggled via the `hidden` attribute)
 * rather than conditionally rendered — fields are uncontrolled, read via
 * FormData on submit, so unmounting an earlier step would lose whatever
 * the visitor picked there. `hidden` also keeps hidden-step fields out of
 * the tab order and a11y tree for free.
 */
const afterSubmitSteps = [
  { title: "We review your request", body: "We look at your goals and current setup." },
  { title: "We identify opportunities", body: "We flag the most relevant areas to improve." },
  { title: "We contact you", body: "We share what we found and any suggested next steps." },
];

export function LeadForm({
  serviceSlug,
  serviceTitle,
  goalOptions,
  leadMagnetLabel,
  leadMagnetDescription,
  auditScope,
  auditOutcome,
}: {
  serviceSlug: string;
  serviceTitle: string;
  goalOptions: string[];
  leadMagnetLabel: string;
  leadMagnetDescription: string;
  auditScope: string[];
  auditOutcome: string;
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

  function goToStep(next: number) {
    trackEvent("form_step_complete", { service: serviceSlug, step: String(step) });
    setStep(next);
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
      setStep(2);
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
    <div>
      <div id="lead-form" className="scroll-mt-24 rounded-[var(--radius-lg)] border border-navy/10 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{leadMagnetLabel}</p>
      <p className="mt-2 text-sm text-ink/65">{leadMagnetDescription}</p>

      {step === 1 && (
        <div className="mt-4 rounded-[var(--radius-sm)] bg-cream-2 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">We&rsquo;ll review</p>
          <ul className="mt-2 grid grid-cols-1 gap-x-4 gap-y-1.5 sm:grid-cols-2">
            {auditScope.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-ink/70">
                <span aria-hidden="true" className="mt-1 h-1 w-1 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-ink/60">{auditOutcome}</p>
        </div>
      )}

      <div className="mt-6 flex items-center gap-2" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={2}>
        {[1, 2].map((s) => (
          <span key={s} className={clsx("h-1 flex-1 rounded-full transition-colors", s <= step ? "bg-gold" : "bg-navy/10")} />
        ))}
      </div>

      <form onSubmit={handleSubmit} onChange={markStarted} noValidate className="mt-6">
        <input type="text" name="hp_field" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 opacity-0" />

        <div hidden={step !== 1}>
          <CheckboxGroupField label="What are you looking to improve? (select all that apply)" name="goal" options={goalOptions} />
          <Button type="button" variant="primary" className="mt-6 w-full justify-center" onClick={() => goToStep(2)}>
            Continue
          </Button>
        </div>

        <div hidden={step !== 2} className="space-y-4">
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
            <Button type="button" variant="ghost" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button type="submit" variant="primary" className="flex-1 justify-center" arrow={!submitting}>
              {submitting ? "Sending…" : leadMagnetLabel}
            </Button>
          </div>
        </div>
      </form>
      </div>

      <div className="mt-5 rounded-[var(--radius-lg)] border border-navy/10 bg-cream-2 p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">What happens after you submit</p>
        <ol className="mt-3 space-y-3">
          {afterSubmitSteps.map((item, i) => (
            <li key={item.title} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy/10 text-[11px] font-semibold text-ink/60">
                {i + 1}
              </span>
              <span className="text-sm text-ink/70">
                <span className="font-semibold text-ink/85">{item.title}.</span> {item.body}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
