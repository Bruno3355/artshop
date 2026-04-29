"use client";

import { useEffect, useState } from "react";
import { breakpoints, Breakpoint } from "../tokens/breakpoints";

export function useBreakpoint(): Breakpoint {
  const getBreakpoint = (): Breakpoint => {
    if (typeof window === "undefined") return "xs";

    const width = window.innerWidth;
    if (width >= breakpoints["2xl"]) return "2xl";
    if (width >= breakpoints.xl) return "xl";
    if (width >= breakpoints.lg) return "lg";
    if (width >= breakpoints.md) return "md";
    if (width >= breakpoints.sm) return "sm";
    return "xs";
  };

  const [bp, setBp] = useState<Breakpoint>("xs");

  useEffect(() => {
    setBp(getBreakpoint());
    const handler = () => setBp(getBreakpoint());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return bp;
}
