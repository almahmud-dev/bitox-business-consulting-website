  "use client";

import { useEffect, useState } from "react";

// ─── Breakpoint definitions (Tailwind-compatible)
const BREAKPOINTS = {
  sm:  640,
  md:  768,
  lg:  1024,
  xl:  1280,
  "2xl": 1536,
};

/**
 * useBreakpoint()
 * Returns the current active breakpoint string:
 * "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
 *
 * Usage:
 *   const bp = useBreakpoint();
 *   if (bp === "xs" || bp === "sm") return <MobileNav />;
 */
export function useBreakpoint() {
  const [bp, setBp] = useState("xl"); // SSR-safe default

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if      (w < BREAKPOINTS.sm)       setBp("xs");
      else if (w < BREAKPOINTS.md)       setBp("sm");
      else if (w < BREAKPOINTS.lg)       setBp("md");
      else if (w < BREAKPOINTS.xl)       setBp("lg");
      else if (w < BREAKPOINTS["2xl"])   setBp("xl");
      else                               setBp("2xl");
    };

    update(); // run once on mount
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return bp;
}

/**
 * useIsMobile()
 * Simple boolean — true when viewport is xs or sm
 *
 * Usage:
 *   const isMobile = useIsMobile();
 */
export function useIsMobile() {
  const bp = useBreakpoint();
  return bp === "xs" || bp === "sm";
}



