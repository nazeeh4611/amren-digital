import type { ReactNode } from "react";

// No entrance animation: the page must be visible immediately once
// HTML/CSS load, not hidden behind an opacity fade on every navigation.
export default function Template({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
