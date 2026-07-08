"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "header" | "li";
};

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      variants={variants}
    >
      {children}
    </Component>
  );
}
