import type { CSSProperties, ElementType, ReactNode } from "react";

// Pure CSS reveal (see .reveal-fade / animation-timeline: view() in
// globals.css) — no Framer Motion, no client JS, no "use client".
//
// The previous implementation used `motion.div` with `initial="hidden"` /
// `whileInView="show"`. Framer Motion bakes the `initial` variant's styles
// (opacity:0, transform) directly into server-rendered HTML for SSR
// consistency — so every section using these was invisible from the very
// first byte of HTML, not just until an animation played. Visibility then
// depended on hydration reaching that component *and* an
// IntersectionObserver firing, which on a slow connection or a busy main
// thread could leave whole sections (FAQ, CTA, Footer) blank for a long,
// unbounded stretch.
//
// `--reveal-start`/`--reveal-end` approximate the old `delay` prop by
// shifting how far into the element's scroll-entry the reveal begins,
// since a real scroll-driven animation has no wall-clock "wait" to give it.
// Content is always visible by default (the animation only ever runs in
// browsers that support animation-timeline: view(), gated behind
// @supports — everywhere else it's just a plain, visible element).
export function FadeIn({
  children,
  delay = 0,
  x = 0,
  y = 28,
  className,
  as: Component = "div",
}: {
  children: ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: ElementType;
}) {
  const startPct = Math.round(delay * 60);
  return (
    <Component
      className={`reveal-fade${className ? ` ${className}` : ""}`}
      style={
        {
          "--reveal-x": `${x}px`,
          "--reveal-y": `${y}px`,
          "--reveal-start": `${startPct}%`,
          "--reveal-end": `${startPct + 55}%`,
        } as CSSProperties
      }
    >
      {children}
    </Component>
  );
}

export function Stagger({ children, className }: { children: ReactNode; className?: string; staggerDelay?: number }) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`reveal-fade${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
