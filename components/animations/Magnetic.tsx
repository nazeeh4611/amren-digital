"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useFinePointer } from "@/lib/use-fine-pointer";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

/**
 * Wraps interactive elements (buttons, links) with a magnetic pull toward
 * the cursor. Desktop-only, and inert under reduced motion — children remain
 * fully clickable either way since this only ever applies a transform.
 */
export function Magnetic({ children, strength = 0.35, className }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const finePointer = useFinePointer();
  const reducedMotion = usePrefersReducedMotion();
  const active = finePointer && !reducedMotion;

  const quickX = useRef<((v: number) => void) | null>(null);
  const quickY = useRef<((v: number) => void) | null>(null);

  const ensureQuick = () => {
    if (!ref.current) return;
    if (!quickX.current) quickX.current = gsap.quickTo(ref.current, "x", { duration: 0.5, ease: "power3.out" });
    if (!quickY.current) quickY.current = gsap.quickTo(ref.current, "y", { duration: 0.5, ease: "power3.out" });
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!active || !ref.current) return;
    ensureQuick();
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    quickX.current?.(x * strength);
    quickY.current?.(y * strength);
  };

  const onMouseLeave = () => {
    if (!active) return;
    ensureQuick();
    quickX.current?.(0);
    quickY.current?.(0);
  };

  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className={className}>
      {children}
    </div>
  );
}
