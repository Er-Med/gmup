"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

import { cn } from "@/utils/cn";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Max vertical shift in px as the element scrolls through the viewport. */
  offset?: number;
  /** Optional opacity fade tied to scroll progress. */
  fade?: boolean;
};

export function Parallax({
  children,
  className,
  offset = 48,
  fade = false,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [offset, -offset],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    prefersReducedMotion || !fade ? [1, 1, 1, 1] : [0.55, 1, 1, 0.55],
  );

  return (
    <div ref={ref} className={cn(className)}>
      <motion.div style={{ y, opacity: fade ? opacity : undefined }}>
        {children}
      </motion.div>
    </div>
  );
}

type ScrollProgressProps = {
  children: (progress: MotionValue<number>) => ReactNode;
  className?: string;
};

/** Exposes section scroll progress (0 → 1) for custom scroll-linked styles. */
export function ScrollProgress({ children, className }: ScrollProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={ref} className={cn(className)}>
      {children(scrollYProgress)}
    </div>
  );
}
