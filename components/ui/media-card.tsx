import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type MediaCardProps = {
  children: ReactNode;
  className?: string;
  as?: "article" | "figure" | "div";
};

export function MediaCard({ children, className, as: Tag = "article" }: MediaCardProps) {
  return (
    <Tag
      className={cn(
        "group overflow-hidden rounded-2xl border border-gmup-teal/25 bg-gmup-navy/80 transition-colors duration-300 hover:border-gmup-teal/45",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
