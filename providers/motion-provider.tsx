"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

import { useReducedMotion } from "@/hooks";

type MotionProviderProps = {
  children: ReactNode;
};

export function MotionProvider({ children }: MotionProviderProps) {
  const reducedMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion={reducedMotion ? "always" : "user"}>
      {children}
    </MotionConfig>
  );
}
