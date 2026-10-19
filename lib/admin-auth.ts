import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "amren_admin";

export function adminToken(): string | null {
  const pw = process.env.ADMIN_PASSWORD;
  return pw ? createHash("sha256").update(`amren-admin:${pw}`).digest("hex") : null;
}

export function passwordMatches(input: string): boolean {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) return false;
  const a = createHash("sha256").update(input).digest();
  const b = createHash("sha256").update(pw).digest();
  return timingSafeEqual(a, b);
}

export async function isAdmin(): Promise<boolean> {
  const token = adminToken();
  return Boolean(token && (await cookies()).get(ADMIN_COOKIE)?.value === token);
}
