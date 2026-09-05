/** Shared field name every public form submits as a hidden, empty-by-default trap for bots. */
export const HONEYPOT_FIELD = "hp_field";

export const FIELD_LIMITS = {
  /** name, email, phone, website, company, service, industry, single-line values */
  short: 200,
  /** message, goal, challenge — free-text areas */
  long: 5000,
} as const;

export function isValidEmail(email: string): boolean {
  return email.length > 0 && email.length <= FIELD_LIMITS.short && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function withinLimit(value: string, max: number): boolean {
  return value.length <= max;
}

const UAE_LOCAL_LENGTH = 9;

/**
 * Normalizes recognizable UAE numbers (local 0-prefixed, bare 9-digit, or
 * already-international +971/00971 forms) to "+971 XX XXX XXXX". Numbers
 * that don't match a UAE shape are passed through unchanged rather than
 * rejected — AMREN's portfolio and landing pages reach clients outside the
 * UAE too, so a non-UAE number isn't "invalid," just not normalized.
 * Returns null only when the input has too few digits to be a real phone
 * number at all.
 */
export function normalizePhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  if (digits.length < 7) return null;

  let national: string | null = null;
  if (digits.startsWith("00971")) national = digits.slice(5);
  else if (digits.startsWith("971") && digits.length - 3 === UAE_LOCAL_LENGTH) national = digits.slice(3);
  else if (digits.startsWith("0") && digits.length - 1 === UAE_LOCAL_LENGTH) national = digits.slice(1);
  else if (digits.length === UAE_LOCAL_LENGTH && /^[2-9]/.test(digits)) national = digits;

  if (national && national.length === UAE_LOCAL_LENGTH) {
    return `+971 ${national.slice(0, 2)} ${national.slice(2, 5)} ${national.slice(5)}`;
  }

  return raw.trim();
}
