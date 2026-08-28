import clsx from "clsx";

export type Accent = "blue" | "coral" | "purple" | "orange" | "gold";

const accentClasses: Record<Accent, { onLightBg: string; onLightBgBefore: string; onDarkBg: string; onDarkBgBefore: string }> = {
  blue: { onLightBg: "text-blue", onLightBgBefore: "before:bg-blue", onDarkBg: "text-blue-2", onDarkBgBefore: "before:bg-blue-2" },
  coral: { onLightBg: "text-coral", onLightBgBefore: "before:bg-coral", onDarkBg: "text-coral-2", onDarkBgBefore: "before:bg-coral-2" },
  purple: { onLightBg: "text-purple", onLightBgBefore: "before:bg-purple", onDarkBg: "text-purple-2", onDarkBgBefore: "before:bg-purple-2" },
  orange: { onLightBg: "text-orange", onLightBgBefore: "before:bg-orange", onDarkBg: "text-orange-2", onDarkBgBefore: "before:bg-orange-2" },
  gold: { onLightBg: "text-gold", onLightBgBefore: "before:bg-gold", onDarkBg: "text-gold-2", onDarkBgBefore: "before:bg-gold-2" },
};

export function Eyebrow({
  children,
  className,
  light,
  accent,
}: {
  children: React.ReactNode;
  className?: string;
  /** Set on a dark (navy) background — switches to the brighter tint of the accent. */
  light?: boolean;
  accent?: Accent;
}) {
  const resolved = accentClasses[accent ?? (light ? "gold" : "blue")];

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] before:h-px before:w-6 before:content-['']",
        light ? [resolved.onDarkBg, resolved.onDarkBgBefore] : [resolved.onLightBg, resolved.onLightBgBefore],
        className
      )}
    >
      {children}
    </span>
  );
}
