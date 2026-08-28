"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/content/services";
import { TextField, TextAreaField, SelectField } from "@/components/forms/FormField";
import { Button } from "@/components/buttons/Button";
import { Stagger, StaggerItem } from "@/components/animations/FadeIn";
import { trackEvent } from "@/lib/track";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
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
      // Honeypot tripped — silently succeed without submitting.
      router.push("/thank-you");
      return;
    }

    const nextErrors: Errors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) nextErrors.name = "Please tell us your name.";
    if (!email) nextErrors.email = "Please share an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "That email address doesn't look right.";
    if (!message) nextErrors.message = "Let us know a little about what you need.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!res.ok) throw new Error("Request failed");
      trackEvent("contact_form_submit");
      router.push("/thank-you");
    } catch {
      setSubmitError("Something went wrong sending your message. Please try again, or WhatsApp us directly.");
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
          <TextField label="Company" name="company" />
        </StaggerItem>

        <StaggerItem className="grid gap-5 sm:grid-cols-2">
          <TextField label="Email" name="email" type="email" required error={errors.email} />
          <TextField label="Phone / WhatsApp" name="phone" type="tel" />
        </StaggerItem>

        <StaggerItem className="grid gap-5 sm:grid-cols-2">
          <TextField label="Website (if you have one)" name="website" type="url" />
          <SelectField label="Service interested in" name="service">
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </SelectField>
        </StaggerItem>

        <StaggerItem>
          <TextAreaField label="Tell us about your business and goals" name="message" required error={errors.message} />
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
        {submitting ? "Sending…" : "Send Enquiry"}
      </Button>
    </form>
  );
}
