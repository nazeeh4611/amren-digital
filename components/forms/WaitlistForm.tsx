"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { TextField, TextAreaField } from "@/components/forms/FormField";
import { Button } from "@/components/buttons/Button";
import { Stagger, StaggerItem } from "@/components/animations/FadeIn";
import { trackEvent } from "@/lib/track";

type Errors = Partial<Record<"name" | "email", string>>;

export function WaitlistForm() {
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
    const email = String(data.get("email") || "").trim();

    if (!name) nextErrors.name = "Please tell us your name.";
    if (!email) nextErrors.email = "Please share an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "That email address doesn't look right.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!res.ok) throw new Error("Request failed");
      trackEvent("waitlist_form_submit");
      router.push("/thank-you");
    } catch {
      setSubmitError("Something went wrong joining the list. Please try again, or WhatsApp us directly.");
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
          <TextField label="WhatsApp" name="whatsapp" type="tel" />
        </StaggerItem>

        <StaggerItem>
          <TextField label="Website (if you have one)" name="website" type="url" />
        </StaggerItem>
        <StaggerItem>
          <TextAreaField label="What do you want to grow?" name="goal" />
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
        {submitting ? "Joining…" : "Join the Growth List"}
      </Button>
    </form>
  );
}
