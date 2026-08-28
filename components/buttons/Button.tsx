"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import clsx from "clsx";
import { trackEvent } from "@/lib/track";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";

const fillByVariant: Partial<Record<Variant, string>> = {
  primary: "bg-gold-2",
  secondary: "bg-navy-2",
  "outline-light": "bg-cream/12",
};

/**
 * Sets the sweep's transform-origin to whichever edge the cursor entered
 * from, so the fill always travels in the direction of approach instead of
 * always sliding from a fixed side.
 */
function onFillEnter(e: MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  const originX = e.clientX - rect.left < rect.width / 2 ? "0%" : "100%";
  e.currentTarget.style.setProperty("--fill-origin", originX);
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
  arrow = true,
  onClick,
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const base =
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-[transform,box-shadow,color] duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 will-change-transform hover:-translate-y-0.5 active:translate-y-0";

  const variants: Record<Variant, string> = {
    primary: "bg-gold text-cream shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_14px_34px_-10px_rgba(32,55,120,0.5)]",
    secondary: "bg-navy text-cream shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_14px_34px_-10px_rgba(32,55,120,0.55)]",
    // Near-black by default (dominant heading/body color), Deep Blue on
    // hover — the accent shows up only on interaction, not at rest.
    ghost: "bg-transparent text-ink underline decoration-2 underline-offset-4 hover:text-gold",
    "outline-light": "border border-cream/40 text-cream hover:shadow-[0_14px_34px_-10px_rgba(255,255,255,0.25)]",
  };

  const fill = fillByVariant[variant];

  const content = (
    <>
      {fill && (
        <span
          aria-hidden="true"
          style={{ transformOrigin: "var(--fill-origin, 0%) 50%" }}
          className={clsx(
            "pointer-events-none absolute inset-0 z-0 scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100",
            fill
          )}
        />
      )}
      <span className="relative z-10">{children}</span>
      {arrow && (
        <span aria-hidden="true" className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </>
  );

  const classes = clsx(base, variants[variant], className);

  function handleClick() {
    if (href?.startsWith("https://wa.me")) trackEvent("whatsapp_click", { label: labelText(children) });
    else if (href?.startsWith("tel:")) trackEvent("phone_click", { label: labelText(children) });
    else if (href?.startsWith("mailto:")) trackEvent("email_click", { label: labelText(children) });
    else if (href) trackEvent("cta_click", { label: labelText(children), href });
    onClick?.();
  }

  if (href) {
    const isExternal = /^(https?:|mailto:|tel:)/.test(href);
    return (
      <Link
        href={href}
        className={classes}
        onMouseEnter={fill ? onFillEnter : undefined}
        onClick={handleClick}
        {...(isExternal ? { target: href.startsWith("tel:") ? undefined : "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type || "button"}
      onClick={handleClick}
      onMouseEnter={fill ? onFillEnter : undefined}
      className={classes}
    >
      {content}
    </button>
  );
}

function labelText(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.filter((c) => typeof c === "string").join(" ");
  return "";
}
