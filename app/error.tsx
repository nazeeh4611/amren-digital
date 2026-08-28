"use client";

import { useEffect } from "react";
import { Button } from "@/components/buttons/Button";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="wrap flex flex-col items-center gap-8 py-24 text-center sm:py-32">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue">Something went wrong</p>
      <h1 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-navy sm:text-5xl">
        That wasn&rsquo;t supposed to happen.
      </h1>
      <p className="max-w-md text-navy/70">
        An unexpected error occurred. You can try again, or head back to the homepage.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button onClick={reset}>Try Again</Button>
        <Button href="/" variant="ghost">
          Go Home
        </Button>
      </div>
    </section>
  );
}
