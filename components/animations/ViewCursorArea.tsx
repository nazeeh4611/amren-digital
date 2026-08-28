"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import clsx from "clsx";
import { useFinePointer } from "@/lib/use-fine-pointer";

/**
 * Scoped mouse-follower cursor — NOT a global replacement for the system
 * pointer. It only appears while the pointer is inside this specific area
 * (a service or portfolio image), tracks the mouse with gsap.quickTo, and
 * disappears the instant the pointer leaves. Desktop/fine-pointer only.
 */
export function ViewCursorArea({
  children,
  label = "VIEW",
  className,
}: {
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  const areaRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const quickX = useRef<((v: number) => void) | null>(null);
  const quickY = useRef<((v: number) => void) | null>(null);
  const finePointer = useFinePointer();

  const ensureQuick = () => {
    if (!followerRef.current) return;
    if (!quickX.current) quickX.current = gsap.quickTo(followerRef.current, "x", { duration: 0.35, ease: "power3.out" });
    if (!quickY.current) quickY.current = gsap.quickTo(followerRef.current, "y", { duration: 0.35, ease: "power3.out" });
  };

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!finePointer || !followerRef.current) return;
    ensureQuick();
    quickX.current?.(e.clientX);
    quickY.current?.(e.clientY);
    gsap.to(followerRef.current, { scale: 1, opacity: 1, duration: 0.3, ease: "power3.out" });
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!finePointer) return;
    ensureQuick();
    quickX.current?.(e.clientX);
    quickY.current?.(e.clientY);
  };

  const onMouseLeave = () => {
    if (!finePointer || !followerRef.current) return;
    gsap.to(followerRef.current, { scale: 0, opacity: 0, duration: 0.3, ease: "power3.out" });
  };

  return (
    <div
      ref={areaRef}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={clsx(className, finePointer && "cursor-none")}
    >
      {children}
      {finePointer && (
        <div
          ref={followerRef}
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-[70] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 scale-0 items-center justify-center rounded-full bg-gold text-xs font-bold uppercase tracking-wide text-cream opacity-0"
        >
          {label}
        </div>
      )}
    </div>
  );
}
