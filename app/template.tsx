"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Re-mounts on every route change (unlike layout.tsx), giving each page a
 * consistent soft entrance instead of an abrupt cut. The root layout wraps
 * the app in <MotionConfig reducedMotion="user"> so this — and every other
 * Framer Motion animation — automatically no-ops under prefers-reduced-motion.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
