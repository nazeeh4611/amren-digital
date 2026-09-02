import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { serviceCategories, services } from "@/content/services";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { SplitReveal } from "@/components/animations/SplitReveal";
import { ServiceIcon } from "@/components/icons/ServiceIcons";

type CardSize = "wide" | "normal";

// Flat, special-mix pastel colors (one distinct hue per card, not the
// site's usual teal-only ladder) — plain flat panels, no glass/shine
// treatment. Performance stays the one dark anchor card; every other
// category gets its own warm or cool pastel so the grid reads as varied
// at a glance instead of a repeated teal tint.
const cardStyle: Record<string, { bg: string; text: string; badgeBg: string; badgeText: string; size: CardSize }> = {
  performance: { bg: "bg-gold", text: "text-cream", badgeBg: "bg-navy-3", badgeText: "text-cream", size: "wide" },
  social: { bg: "bg-[#F6C9BE]", text: "text-ink", badgeBg: "bg-ink", badgeText: "text-cream", size: "wide" },
  search: { bg: "bg-[#FCE8B8]", text: "text-ink", badgeBg: "bg-ink", badgeText: "text-cream", size: "normal" },
  "digital-experiences": { bg: "bg-[#D9D0E8]", text: "text-ink", badgeBg: "bg-ink", badgeText: "text-cream", size: "wide" },
  content: { bg: "bg-[#D7DFB0]", text: "text-ink", badgeBg: "bg-ink", badgeText: "text-cream", size: "normal" },
  systems: { bg: "bg-[#F6B8AE]", text: "text-ink", badgeBg: "bg-ink", badgeText: "text-cream", size: "normal" },
};

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

/**
 * One flat-color panel: an icon chip, the category name, and its
 * illustration bleeding off the bottom-right corner — nothing else. No
 * number badge, no description, no tag list, no separate detail panel
 * under the image.
 *
 * No entrance animation: the image itself downloads in single-digit ms
 * once discovered (verified via resource timing), so the only thing
 * making these appear "late" was a Framer Motion whileInView wrapper
 * gating the whole card's opacity for ~0.7-0.9s after scroll-in. Cards
 * now render at full opacity the moment their content (including the
 * lazy-loaded image) is ready.
 */
function CategoryCard({ category, fullWidthPair }: { category: (typeof serviceCategories)[number]; fullWidthPair?: boolean }) {
  const categoryServices = services.filter((s) => category.serviceSlugs.includes(s.slug));
  const firstHref = `/services/${categoryServices[0]?.slug ?? ""}`;
  const style = cardStyle[category.key];
  const isWide = style.size === "wide";

  return (
    <div className={clsx(isWide && !fullWidthPair && "sm:col-span-2")}>
      <Link
        href={firstHref}
        className={clsx(
          "group relative flex h-[22rem] flex-col overflow-hidden rounded-[var(--radius-card)] p-7 shadow-[var(--shadow-card)] transition-transform duration-300 ease-out hover:-translate-y-1 sm:h-[26rem] sm:p-8",
          style.bg,
          style.text
        )}
      >
        <span className="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/90 shadow-sm">
          <ServiceIcon id={category.key} className="h-6 w-6" />
        </span>
        <h3 className="relative z-10 mt-5 max-w-[65%] font-display text-2xl font-bold uppercase leading-[0.95] tracking-tight sm:text-3xl">
          {category.title}
        </h3>
        <p className="relative z-10 mt-3 max-w-[60%] text-sm font-medium leading-snug opacity-80 sm:text-base">
          {category.headline}
        </p>
        <span
          className={clsx(
            "relative z-10 mt-auto inline-flex w-fit items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-transform duration-300 ease-out group-hover:translate-x-1",
            style.badgeBg,
            style.badgeText
          )}
        >
          Learn More
          <ArrowIcon className="h-3.5 w-3.5" />
        </span>
        <div className="pointer-events-none absolute bottom-0 right-0 h-[78%] w-[72%]">
          <Image
            src={category.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, 90vw"
            className="object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      </Link>
    </div>
  );
}

/**
 * A bento grid of flat-color panels — icon, heading, illustration bleeding
 * off the corner, nothing else per card. Performance and Social open the
 * grid as a matching, equal-width pair in their own row; everything from
 * Search onward keeps its original 3-column layout untouched.
 */
export function ServicesExperience() {
  const topPair = serviceCategories.filter((c) => c.key === "performance" || c.key === "social");

  // Wide (2-col-span) cards sorted to the front of each row: a wide card
  // stranded after a normal one can't fit in the remaining column, so CSS
  // grid auto-placement skips that cell and bumps the wide card to the
  // next row — leaving a blank gap at the sm/tablet 2-column breakpoint.
  // Leading with the wide card fills every row exactly at both the sm
  // (2-col) and lg (3-col) breakpoints.
  const rest = serviceCategories
    .filter((c) => c.key !== "performance" && c.key !== "social")
    .sort((a, b) => Number(cardStyle[b.key].size === "wide") - Number(cardStyle[a.key].size === "wide"));

  return (
    <section id="what-we-build" className="section relative overflow-hidden bg-cream-2">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 45% at 15% 10%, var(--amren-blue-2), transparent 60%), radial-gradient(ellipse 55% 40% at 85% 25%, var(--amren-navy-3), transparent 65%), radial-gradient(ellipse 70% 50% at 40% 95%, var(--amren-navy-2), transparent 60%)",
          filter: "blur(60px)",
        }}
      />
      <div className="wrap">
        <Eyebrow accent="gold">What We Build</Eyebrow>
        <SplitReveal
          as="h2"
          text="One system. Six connected capabilities."
          className="mt-5 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-ink sm:text-6xl"
        />
      </div>

      <div className="wrap mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:gap-6">
        {topPair.map((category) => (
          <CategoryCard key={category.key} category={category} fullWidthPair />
        ))}
      </div>

      <div className="wrap mt-5 grid gap-5 sm:mt-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {rest.map((category) => (
          <CategoryCard key={category.key} category={category} />
        ))}

        <Link
          href="/services"
          className="group relative flex h-[22rem] flex-col overflow-hidden rounded-[var(--radius-card)] bg-white p-7 shadow-[var(--shadow-card)] transition-transform duration-300 ease-out hover:-translate-y-1 sm:h-[26rem] sm:p-8"
        >
          <span className="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy text-cream">
            <ArrowIcon className="h-6 w-6 -rotate-45" />
          </span>
          <h3 className="relative z-10 mt-5 max-w-[65%] font-display text-2xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-3xl">
            Explore every service
          </h3>
          <p className="relative z-10 mt-3 max-w-[60%] text-sm font-medium leading-snug text-ink/70 sm:text-base">
            See the full list of what AMREN builds and runs for clients.
          </p>
          <span className="relative z-10 mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cream transition-transform duration-300 ease-out group-hover:translate-x-1">
            Explore More
            <ArrowIcon className="h-3.5 w-3.5" />
          </span>
          <div className="pointer-events-none absolute bottom-0 right-0 h-[78%] w-[72%]">
            <Image
              src="/allservices.avif"
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, 90vw"
              className="object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
