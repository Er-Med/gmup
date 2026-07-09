"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

import { useIsMobile } from "@/hooks";
import { cn } from "@/utils/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "aside" | "header" | "li";
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Replay when scrolling back into view. Default: once. */
  once?: boolean;
};

const directionOffset = {
  up: { y: 40, x: 0 },
  down: { y: -32, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
} as const;

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  direction = "up",
  once = true,
}: RevealProps) {
  const Component = motion[as];
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={cn(className)}>{children}</Tag>;
  }

  const offset = isMobile
    ? { x: 0, y: 16 }
    : directionOffset[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <Component
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: isMobile ? 0.12 : 0.2, margin: "0px 0px -8% 0px" }}
      transition={{
        duration: isMobile ? 0.35 : 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: isMobile ? Math.min(delay, 0.08) : delay,
      }}
      variants={variants}
    >
      {children}
    </Component>
  );
}
