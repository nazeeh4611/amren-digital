"use client";

import { useEffect, useRef } from "react";

// Cycles through the brand palette as the reader moves through the page —
// a small, always-visible "different color appears while scroll" cue.
const PALETTE = ["#1e2142", "#3fa8ac", "#1e2142"];

function hexToRgb(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function lerpColor(a: string, b: string, t: number) {
  const [ar, ag, ab] = hexToRgb(a);
  const [br, bg, bb] = hexToRgb(b);
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return `rgb(${r}, ${g}, ${bl})`;
}

// A native scroll listener + rAF batching — no GSAP/ScrollTrigger for a
// bar that only ever needs a scaleX value and an interpolated color.
export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;

      const segment = progress * (PALETTE.length - 1);
      const index = Math.min(Math.floor(segment), PALETTE.length - 2);
      const localProgress = segment - index;
      const color = lerpColor(PALETTE[index], PALETTE[index + 1], localProgress);

      bar.style.transform = `scaleX(${progress})`;
      bar.style.backgroundColor = color;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="scroll-progress"
      aria-hidden="true"
      style={{ transform: "scaleX(0)", backgroundColor: PALETTE[0] }}
    />
  );
}
