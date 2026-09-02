import gsap from "gsap";

/**
 * Safety net for GSAP ScrollTrigger reveals that start from a hidden
 * `from` state (opacity:0, etc.). If a `once` trigger never fires —
 * mis-measured layout before ScrollTrigger.refresh() settles, an
 * extremely fast scroll past the trigger point, or JS loading very late —
 * the target would otherwise stay invisible forever. This forces the
 * target to its final animated (fully visible) state after a generous
 * timeout regardless of whether the real animation already completed;
 * `clearProps: "all"` on an element already at its end state is a no-op,
 * so this is safe to always schedule.
 */
export function scheduleRevealFailsafe(targets: gsap.TweenTarget, timeout = 3) {
  return gsap.delayedCall(timeout, () => {
    gsap.set(targets, { clearProps: "all" });
  });
}
