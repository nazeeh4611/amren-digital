import { NextResponse } from "next/server";
import { ADMIN_COOKIE, adminToken, passwordMatches } from "@/lib/admin-auth";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";

export async function POST(request: Request) {
  const form = await request.formData();
  const back = new URL("/admin", request.url);

  if (form.get("action") === "logout") {
    const res = NextResponse.redirect(back, 303);
    res.cookies.delete(ADMIN_COOKIE);
    return res;
  }

  if (isRateLimited(`admin:${getClientIp(request)}`, 10) || !passwordMatches(String(form.get("password") || ""))) {
    back.searchParams.set("error", "1");
    return NextResponse.redirect(back, 303);
  }

  const res = NextResponse.redirect(back, 303);
  res.cookies.set(ADMIN_COOKIE, adminToken()!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}
