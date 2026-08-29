import Link from "next/link";
import clsx from "clsx";
import { serviceCategories, services, categoryMotif } from "@/content/services";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { AssetPlaceholder } from "@/components/assets/AssetPlaceholder";
import { SplitReveal } from "@/components/animations/SplitReveal";
import { FadeIn } from "@/components/animations/FadeIn";

type CardSize = "wide" | "normal";

// Per-category accent identity, drawn from the swatch-card ladder.
// Performance is the one card on the dark accent (Atlantic), so it's the
// only one that needs light text — every other category sits on a light
// rung (Seafoam/Mint/Aqua) with a glossy 3D treatment (see .card-glossy
// in globals.css), so dark ink reads best on it. The numbered badge stays
// Atlantic throughout regardless of card color — one consistent
// dark-accent thread running across all six cards.
const cardStyle: Record<string, { bg: string; text: string; badgeBg: string; badgeText: string; size: CardSize }> = {
  performance: { bg: "bg-gold", text: "text-cream", badgeBg: "bg-navy-3", badgeText: "text-cream", size: "wide" },
  social: { bg: "bg-mint", text: "text-ink", badgeBg: "bg-navy", badgeText: "text-cream", size: "wide" },
  search: { bg: "bg-aqua", text: "text-ink", badgeBg: "bg-navy", badgeText: "text-cream", size: "normal" },
  "digital-experiences": { bg: "bg-seafoam", text: "text-ink", badgeBg: "bg-navy", badgeText: "text-cream", size: "wide" },
  content: { bg: "bg-mint", text: "text-ink", badgeBg: "bg-navy", badgeText: "text-cream", size: "normal" },
  systems: { bg: "bg-aqua", text: "text-ink", badgeBg: "bg-navy", badgeText: "text-cream", size: "normal" },
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

function CategoryCard({ category, index, fullWidthPair }: { category: (typeof serviceCategories)[number]; index: number; fullWidthPair?: boolean }) {
  const categoryServices = services.filter((s) => category.serviceSlugs.includes(s.slug));
  const firstHref = `/services/${categoryServices[0]?.slug ?? ""}`;
  const style = cardStyle[category.key];
  const isWide = style.size === "wide";

  const badge = (
    <span
      className={clsx(
        "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold",
        style.badgeBg,
        style.badgeText
      )}
    >
      {category.number}
    </span>
  );

  const image = (
    <div className={clsx("w-full shrink-0 overflow-hidden", isWide ? "h-80 sm:h-[26rem]" : "h-72 sm:h-80")}>
      <AssetPlaceholder
        type="service"
        label={category.title}
        alt={`${category.title} services at AMREN Digital`}
        motif={categoryMotif[category.key]}
        tone={index}
        fillHeight
        rounded={false}
        showLabel={false}
        className="h-full w-full"
      />
    </div>
  );

  if (isWide) {
    return (
      <FadeIn
        delay={index * 0.05}
        className={clsx(
          "card-glossy flex flex-col overflow-hidden rounded-[var(--radius-card)]",
          fullWidthPair ? "" : "sm:col-span-2",
          style.bg,
          style.text
        )}
      >
        {image}
        <div className="p-7 sm:p-9">
          {badge}
          <h3 className="mt-5 font-display text-2xl font-bold uppercase leading-none tracking-tight sm:text-4xl">
            <Link href={firstHref} className="hover:underline underline-offset-4">
              {category.title}
            </Link>
          </h3>
          <p className="mt-2 font-editorial text-lg italic opacity-80 sm:text-xl">{category.headline}</p>
          <p className="mt-3 max-w-md text-sm opacity-75">{category.description}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {categoryServices.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className={clsx(
                    "inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors",
                    style.text === "text-cream" ? "border-cream/30 hover:border-cream/60" : "border-ink/20 hover:border-ink/45"
                  )}
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn delay={index * 0.05}>
      <Link
        href={firstHref}
        className={clsx(
          "card-glossy group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)]",
          style.bg,
          style.text
        )}
      >
        {image}
        <div className="flex flex-1 flex-col p-7">
          {badge}
          <h3 className="mt-5 font-display text-xl font-bold uppercase leading-none tracking-tight">{category.title}</h3>
          <p className="mt-2 font-editorial text-base italic opacity-80">{category.headline}</p>
          <span className="mt-auto flex items-center gap-1.5 pt-6 text-xs font-semibold uppercase tracking-wide opacity-70 transition-opacity group-hover:opacity-100">
            Explore
            <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </FadeIn>
  );
}

/**
 * A bento grid, not a repeated card template — each tile is its own flat
 * brand color (reusing the secondary accent palette from globals.css that
 * otherwise sits mostly unused), image-forward (~80% image / ~20% detail)
 * rather than the usual photo-strip-under-text card. Performance and Social
 * open the grid as a matching, equal-width pair in their own row; everything
 * from Search onward keeps its original 3-column layout untouched.
 */
export function ServicesExperience() {
  const topPair = serviceCategories.filter((c) => c.key === "performance" || c.key === "social");

  // Wide (2-col-span) cards sorted to the front of each row: a wide card
  // stranded after a normal one can't fit in the remaining column, so CSS
  // grid auto-placement skips that cell and bumps the wide card to the
  // next row — leaving a blank gap (and isolating the trailing white
  // "Explore" card next to another one) at the sm/tablet 2-column
  // breakpoint. Leading with the wide card fills every row exactly at
  // both the sm (2-col) and lg (3-col) breakpoints.
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
          <CategoryCard key={category.key} category={category} index={serviceCategories.indexOf(category)} fullWidthPair />
        ))}
      </div>

      <div className="wrap mt-5 grid gap-5 sm:mt-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {rest.map((category) => (
          <CategoryCard key={category.key} category={category} index={serviceCategories.indexOf(category)} />
        ))}

        <FadeIn delay={serviceCategories.length * 0.05}>
          <Link
            href="/services"
            className="card-glossy group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white"
          >
            <div className="h-72 w-full shrink-0 overflow-hidden sm:h-80">
              <AssetPlaceholder
                type="hero"
                label="AMREN Digital"
                alt="Explore every AMREN Digital service"
                motif="nodes"
                tone={2}
                fillHeight
                rounded={false}
                showLabel={false}
                className="h-full w-full"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-7">
              <span className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-ink">
                Explore every service
              </span>

              {/* Rounded "track" spanning the full card width. At rest, it's
                  a plain white pill with a soft turquoise ring pulsing
                  outward from the border, and the arrow chip nudges side to
                  side — reads as alive without the fill color doing it. On
                  hover, the pulse and nudge both stop, a solid navy fill
                  sweeps in from the left behind the arrow, and the arrow
                  slides from the track's left end to its right end while
                  spinning a full turn. Positioned via `left` (not
                  `transform`) since the slide needs to be independent of the
                  icon's own rotation transform. */}
              <span className="relative mt-6 flex h-14 w-full shrink-0 animate-[track-pulse-glow_2.4s_ease-out_infinite] items-center justify-center overflow-hidden rounded-full border-2 border-navy bg-white group-hover:[animation-play-state:paused]">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 origin-left scale-x-0 bg-navy transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                />
                <span className="relative z-10 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-cream">
                  Explore all services
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-y-1.5 left-1.5 z-10 my-auto flex h-10 w-10 animate-[arrow-nudge_1.8s_ease-in-out_infinite] items-center justify-center rounded-full text-ink transition-[left,color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:left-[calc(100%-3.25rem)] group-hover:text-cream group-hover:[animation-play-state:paused]"
                >
                  <ArrowIcon className="h-4 w-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-[360deg]" />
                </span>
              </span>
            </div>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
