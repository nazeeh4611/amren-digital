import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

/** AMREN Digital's real logo mark (fixed navy/gold colors, so it reads the
 * same regardless of the `tone` a caller passes — kept for backward
 * compatibility with existing call sites, just unused here). */
export function Logo({ className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link href="/" className={clsx("inline-flex items-center", className)} aria-label="AMREN Digital — Home">
      <Image src="/amlogo.svg" alt="AMREN Digital" width={1897} height={632} priority className="h-11 w-auto sm:h-14" />
    </Link>
  );
}
