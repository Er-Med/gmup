"use client";

import { useEffect, useState } from "react";

/**
 * Respects the user's prefers-reduced-motion setting.
 * Use with Framer Motion to disable animations when appropriate.
 */
export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return reducedMotion;
}
