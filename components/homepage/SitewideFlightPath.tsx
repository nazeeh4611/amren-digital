"use client";

import { useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

function PlaneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M2 4 22 12 2 20 7 12Z" fill="currentColor" />
    </svg>
  );
}

function Cloud({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 64 28" className={className} style={style} aria-hidden="true">
      <path
        d="M14 22a9 9 0 0 1-1-17.9A11 11 0 0 1 34 3a8 8 0 0 1 10.5 8.4A7 7 0 0 1 50 24H14Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * A smooth zig-zag confined to a narrow lane (xCenter ± amplitude, in
 * viewBox percentage units) so it never crosses over real content — just
 * the right-edge gutter outside the .wrap max-width column.
 */
function buildFlightPath(waves: number, xCenter: number, amplitude: number, totalHeight: number) {
  const segments = waves * 2;
  const step = totalHeight / segments;
  const d: string[] = [`M ${xCenter} 0`];
  for (let i = 1; i <= segments; i++) {
    const y = step * i;
    const x = xCenter + (i % 2 === 0 ? amplitude : -amplitude);
    const cpY = y - step / 2;
    d.push(`C ${xCenter} ${cpY}, ${x} ${cpY}, ${x} ${y}`);
  }
  return d.join(" ");
}

const CLOUD_STOPS = [6, 20, 36, 52, 68, 84, 96];

/**
 * Wraps every homepage section below the hero in a relative container and
 * overlays one continuous flight path down the right-hand gutter — the
 * line draws itself and the paper plane rides its tip as the reader
 * scrolls, tracking scroll position directly (not a one-shot entrance),
 * so it's "flying over the homepage" for the full scroll, not just once.
 * Desktop/wide screens only: below `xl` the gutter outside `.wrap` isn't
 * reliably empty, so the overlay would risk sitting over real content.
 */
export function SitewideFlightPath({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const pathD = buildFlightPath(14, 95, 3, 100);

  useLayoutEffect(() => {
    if (reducedMotion || !wrapperRef.current) return;
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    const ctx = gsap.context(() => {
      const path = wrapperRef.current?.querySelector<SVGPathElement>(".sitewide-flight-line");
      const plane = wrapperRef.current?.querySelector<HTMLDivElement>(".sitewide-flight-plane");
      if (!path || !plane) return;

      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.set(plane, { opacity: 1 });

      const trigger = ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.4,
        onUpdate: (self) => {
          gsap.set(path, { strokeDashoffset: length * (1 - self.progress) });
        },
      });

      gsap.to(plane, {
        ease: "none",
        motionPath: { path, align: path, alignOrigin: [0.5, 0.5], autoRotate: true },
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.4,
        },
      });

      gsap.to(".sitewide-flight-cloud", {
        x: (i) => (i % 2 === 0 ? 10 : -10),
        duration: (i) => 5 + i * 0.7,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      return () => trigger.kill();
    }, wrapperRef);

    return () => ctx.revert();
  }, [reducedMotion, pathD]);

  return (
    <div ref={wrapperRef} className="relative">
      {!reducedMotion && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 hidden xl:block">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="h-full w-full overflow-visible"
          >
            <path
              className="sitewide-flight-line"
              d={pathD}
              vectorEffect="non-scaling-stroke"
              fill="none"
              stroke="var(--amren-blue)"
              strokeOpacity="0.6"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <div className="sitewide-flight-plane absolute left-0 top-0 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-blue opacity-0">
            <PlaneIcon className="h-full w-full" />
          </div>
          {CLOUD_STOPS.map((stop, i) => (
            <Cloud
              key={stop}
              className="sitewide-flight-cloud absolute h-6 w-12 text-blue/20"
              style={{ left: i % 2 === 0 ? "89%" : "94%", top: `${stop}%` }}
            />
          ))}
        </div>
      )}
      {children}
    </div>
  );
}
