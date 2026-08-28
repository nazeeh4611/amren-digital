# AMREN Digital — Asset Guide

This site ships with a placeholder-asset system so it can go live today and be
upgraded with real photography, video, logos and testimonials later **without
any redesign**. This document explains where every asset belongs, what it
should show, and how to replace it.

## How the system works

- `content/assets.ts` — the central manifest. Every real asset path is
  registered here once supplied. Everything starts `null`.
- `content/asset-guide.ts` — internal planning reference: recommended subject,
  aspect ratio, priority and **SEO topic** (content-strategy context — never
  used as literal alt text) for each asset slot.
- `components/assets/AssetPlaceholder.tsx` — when no `src` is supplied, renders
  a real, free stock photo (via [Picsum Photos](https://picsum.photos), no API
  key or attribution required) seeded deterministically per slot, with a flat
  brand-color tint + motif icon + label on top — so nothing on the site is
  ever a blank box. Once a real asset is supplied via `src`, that replaces the
  stock photo and tint entirely. Swapping an asset is a one-line change to
  `content/assets.ts` (or passing `src`/`alt` where a component takes it
  directly) — no layout or component code needs to change.

## Replacing a placeholder

1. Drop the file under `public/assets/...` (see folder structure below).
2. Set its path in `content/assets.ts`.
3. Write the **final alt text from the actual image** — never copy the
   `seoTopic` string from `content/asset-guide.ts` into `alt`. See the alt-text
   rules below.
4. If the asset is decorative only, use `alt=""`.

## Folder structure (create under `public/assets/`)

```
assets/
├── logo/            (svg preferred — main, white, dark, mark, favicon source)
├── brand/
├── hero/
├── services/
│   ├── google-ads/
│   ├── meta-ads/
│   ├── seo/
│   ├── local-seo/
│   ├── social-media/
│   ├── web-design-development/
│   ├── content-creation/
│   ├── video-production/
│   └── marketing-automation/
├── portfolio/
│   └── <project-slug>/
├── testimonials/
├── team/
├── social/
└── og/              (1200×630 social share image)
```

## Recommended formats & dimensions

| Asset type       | Format          | Dimensions / ratio |
|-------------------|-----------------|---------------------|
| Logo / icons       | SVG             | vector |
| Photography         | WebP / AVIF     | see per-asset ratio below |
| Hero                | WebP / AVIF     | 1920×1080 or 4:5 |
| Service visual      | WebP / AVIF     | 1200×900 (varies by service, see `content/services.ts` → `aspectRatio`) |
| Portfolio           | WebP / AVIF     | 1600×1200 |
| Portrait (team/testimonial) | WebP / AVIF | 800×1000 |
| Social              | WebP / AVIF     | 1080×1350 |
| Blog featured       | WebP / AVIF     | 1600×900 |
| Video               | MP4 / WebM      | provide a poster image; compress before upload |

Use descriptive, human-readable filenames that describe what the image
actually shows — e.g. `google-ads-campaign-dashboard.webp`, not `IMG_2938.jpg`
or a keyword string that isn't represented in the image.

## Asset priority (what to source first)

**High priority** — hero visual, all 9 service visuals, Attract/Generate/Grow
visuals, About hero, real testimonials, first 2–3 portfolio projects.

**Medium priority** — floating hero cards, local SEO / social / video service
nuance shots, contact visual, blog featured images.

**Low priority** — team photos, client logos, additional portfolio projects
(these render as clean, clearly-marked placeholders until supplied and don't
block launch).

## The alt-text rule — read before adding any real image

This is the one rule that must never be broken:

**`seoTopic` in `content/asset-guide.ts` informs page/content strategy only.
It is never copied into an `alt` attribute.**

Bad (keyword-stuffed, taken from `seoTopic`):
```html
<img alt="Google Ads agency Dubai Google Ads management Dubai PPC agency Dubai" />
```

Good (describes what the image actually shows):
```html
<img alt="Google Ads campaign dashboard showing search advertising performance" />
```

Workflow for every new real image:
1. Look at the image. What does it actually show?
2. What page/service is it on?
3. Write a concise, natural description of what's visible.
4. Only include "Dubai" / "UAE" if the image or its context genuinely
   supports that (a visible storefront, a labelled dashboard for a UAE
   campaign, etc.) — never by default.
5. If purely decorative (texture, abstract shape, background gradient),
   use `alt=""`.
6. Never reuse the same alt text across multiple different images.

Temporary placeholders in this build use development-only accessibility text
(`"Temporary placeholder for {label} visual"` or `alt=""` for decorative
ones) — this is intentionally not production copy and must be replaced
following the workflow above when a real image is added.

## Content still required from the client

- Final logo files (SVG: main, reversed/white, dark, icon mark)
- Hero photography/video
- One visual per service (see `content/asset-guide.ts` for what each should show)
- Portfolio: at least 2–3 real projects (title, industry, services used, visuals, and results — only if verified)
- Real client testimonials (name, role, company, and permission to publish)
- Client logos (with permission to display)
- Team photos and names (optional — the About page section stays subtle until supplied)
- A monitored inbox or CRM endpoint for `CONTACT_TO_EMAIL` (see `.env.example`)
