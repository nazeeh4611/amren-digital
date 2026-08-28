"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useFinePointer } from "@/lib/use-fine-pointer";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

/**
 * 3D tilt-on-hover wrapper for cards (portfolio, services, testimonials).
 * Desktop-only; a no-op wrapper elsewhere so touch/keyboard interaction is
 * never affected.
 */
export function TiltCard({ children, className, max = 8 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const finePointer = useFinePointer();
  const reducedMotion = usePrefersReducedMotion();
  const active = finePointer && !reducedMotion;

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!active || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(ref.current, {
      rotateX: py * -max,
      rotateY: px * max,
      transformPerspective: 800,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const onMouseLeave = () => {
    if (!active || !ref.current) return;
    gsap.to(ref.current, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
