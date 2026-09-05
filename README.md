# AMREN Digital — Website

Production marketing site for AMREN Digital, a Dubai-based digital growth agency. Built with Next.js (App Router) and deployed to Vercel at [`digital.amren.ae`](https://digital.amren.ae).

## Stack

- **Framework**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion, GSAP
- **Email**: Resend
- **Hosting**: Vercel

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Copy `.env.example` to `.env.local` and fill in the variables you need locally — the site runs without any of them set (forms log to the console instead of sending email, analytics stay disabled).

```bash
npm run lint   # eslint
npm run build  # production build
npm run start  # serve the production build locally
```

## Project structure

- `app/` — routes (App Router), including all public pages and `app/api/*` form endpoints
- `components/` — UI components, grouped by area (`forms`, `sections`, `navigation`, `seo`, `cookie-consent`, etc.)
- `content/` — typed content data (services, portfolio, industries, insights, FAQs, site-wide constants in `content/site.ts`)
- `lib/` — shared logic: SEO metadata (`seo.ts`), JSON-LD (`structured-data.ts`), consent state (`consent.ts`), Resend client (`resend.ts`), form validation and rate limiting (`validation.ts`, `rate-limit.ts`)
- `public/` — static assets (images, favicons, portfolio screenshots)

## Environment variables

See `.env.example` for the full list with inline documentation. Summary:

**Required for production**

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, used for metadata, sitemap, and JSON-LD. Must match the deployed domain exactly. |
| `RESEND_API_KEY` | Required for any form submission to actually be emailed. Without it, submissions are logged server-side only. |
| `CONTACT_TO_EMAIL` | Inbox that receives all form submissions (contact, audit, waitlist, quick-lead, landing-page leads). |
| `RESEND_FROM_EMAIL` | Verified sender identity (e.g. `AMREN Digital <hello@digital.amren.ae>`). Requires verifying the sending domain in the Resend dashboard first — until then, this falls back to Resend's shared test sender. |

**Optional — analytics (each channel stays fully disabled if its ID is unset)**

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID. |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel ID. |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Google Ads account/tag ID (`AW-XXXXXXXXXX`). |
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` | Conversion label for the landing-page lead form's Google Ads conversion event. |

None of the analytics scripts load until a visitor grants the relevant cookie-consent category, and none load at all if the corresponding environment variable isn't set.

## Forms and email

All form endpoints (`/api/contact`, `/api/audit`, `/api/waitlist`, `/api/quick-lead`, `/api/lead`) share the same pattern:

- Client-side validation for immediate feedback, plus full server-side validation (required fields, email format, field length limits) — the client is never trusted alone.
- A hidden honeypot field (`hp_field`) checked on both client and server; a filled honeypot returns a fake success without sending an email.
- A best-effort, per-instance rate limit (`lib/rate-limit.ts`) to slow down abuse without adding an external infrastructure dependency.
- UAE phone numbers are normalized to a consistent `+971 XX XXX XXXX` format where recognizable; other formats are passed through rather than rejected, since AMREN's client base isn't UAE-only.
- If `RESEND_API_KEY` or `CONTACT_TO_EMAIL` isn't configured, the submission is accepted and logged, but never silently reported as "sent" when an actual send fails — a Resend error returns a real error response, and the form surfaces a retry message.

## Analytics and cookie consent

Consent state is stored client-side (`lib/consent.ts`, `localStorage`) with three categories: necessary (always on), analytics, and marketing. The cookie banner (`components/cookie-consent/CookieConsent.tsx`) lets visitors accept all, reject optional cookies, or set preferences individually, and the choice can be changed at any time by clearing the site's local storage. `components/seo/AnalyticsScripts.tsx` gates GA4, Google Ads, and Meta Pixel behind the matching consent category and the presence of the relevant environment variable.

## SEO

- Per-page metadata via `lib/seo.ts#buildMetadata` — every indexable page sets its own title, description, canonical URL, and Open Graph/Twitter data.
- JSON-LD via `lib/structured-data.ts` — Organization, WebSite, Service, Article, FAQPage, and BreadcrumbList schema, generated only from real site data (no fabricated ratings or review counts).
- `app/sitemap.ts` and `app/robots.ts` generate the sitemap and robots directives from the live production domain.

## Deployment (Vercel)

1. Connect the repository to a Vercel project.
2. Set the environment variables listed above in the Vercel project settings (Production, and Preview if you want forms/analytics to behave the same there).
3. Point `digital.amren.ae` at the Vercel project and set `NEXT_PUBLIC_SITE_URL=https://digital.amren.ae`.
4. Verify the sending domain in Resend before setting `RESEND_FROM_EMAIL` to an `@digital.amren.ae` address.
5. Deploy — `next build` runs automatically on push.
