"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { collect } from "@/lib/collect";

export function PageViewTracker() {
  const pathname = usePathname();
  useEffect(() => {
    collect({ name: "pageview" });
  }, [pathname]);
  return null;
}
