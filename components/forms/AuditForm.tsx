"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { industries } from "@/content/industries";
import { TextField, TextAreaField, SelectField, CheckboxGroupField } from "@/components/forms/FormField";
import { Button } from "@/components/buttons/Button";
import { Stagger, StaggerItem } from "@/components/animations/FadeIn";
import { trackEvent } from "@/lib/track";

type Errors = Partial<Record<"name" | "businessName" | "email", string>>;

const contactMethods = ["Email", "Phone Call", "WhatsApp"];

const channelOptions = ["Google Ads", "Meta Ads", "SEO", "Social Media", "Website Only", "None Yet"];

export function AuditForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("hp_field") || "").length > 0) {
      router.push("/thank-you");
      return;
    }

    const nextErrors: Errors = {};
    const name = String(data.get("name") || "").trim();
    const businessName = String(data.get("businessName") || "").trim();
    const email = String(data.get("email") || "").trim();

    if (!name) nextErrors.name = "Please tell us your name.";
    if (!businessName) nextErrors.businessName = "Please tell us your business name.";
    if (!email) nextErrors.email = "Please share an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "That email address doesn't look right.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError(null);

    const channels = data.getAll("channels").map(String);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, channels }),
      });
      if (!res.ok) throw new Error("Request failed");
      trackEvent("audit_form_submit");
      router.push("/thank-you");
    } catch {
      setSubmitError("Something went wrong sending your request. Please try again, or WhatsApp us directly.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <input
        type="text"
        name="hp_field"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <Stagger className="space-y-5" staggerDelay={0.05}>
        <StaggerItem className="grid gap-5 sm:grid-cols-2">
          <TextField label="Name" name="name" required error={errors.name} />
          <TextField label="Business Name" name="businessName" required error={errors.businessName} />
        </StaggerItem>

        <StaggerItem className="grid gap-5 sm:grid-cols-2">
          <TextField label="Email" name="email" type="email" required error={errors.email} />
          <TextField label="Phone / WhatsApp" name="phone" type="tel" />
        </StaggerItem>

        <StaggerItem className="grid gap-5 sm:grid-cols-2">
          <TextField label="Website" name="website" type="url" />
          <SelectField label="Industry" name="industry">
            {industries.map((i) => (
              <option key={i.slug} value={i.title}>
                {i.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </SelectField>
        </StaggerItem>

        <StaggerItem className="grid gap-5 sm:grid-cols-2">
          <TextField label="Main service or product" name="mainService" />
          <SelectField label="Preferred contact method" name="contactMethod">
            {contactMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </SelectField>
        </StaggerItem>

        <StaggerItem>
          <CheckboxGroupField label="Current marketing channels" name="channels" options={channelOptions} />
        </StaggerItem>

        <StaggerItem>
          <TextAreaField label="What's your biggest marketing challenge right now?" name="challenge" />
        </StaggerItem>
      </Stagger>

      <AnimatePresence>
        {submitError && (
          <motion.p
            initial={{ opacity: 0, y: -6, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-red-600"
          >
            {submitError}
          </motion.p>
        )}
      </AnimatePresence>

      <Button type="submit" variant="primary" className="w-full justify-center sm:w-auto" arrow={!submitting}>
        {submitting ? "Sending…" : "Request Your Free Audit"}
      </Button>
    </form>
  );
}
