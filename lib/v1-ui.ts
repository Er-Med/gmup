import { typography } from "@/lib/typography";
import { cn } from "@/utils/cn";

/** Shared visual tokens for V1 — borders, panels, buttons, spacing. */
export const v1 = {
  border: "border-[#E6EEF5]",
  section: "py-20 md:py-24",
  panel:
    "rounded-2xl border border-[#E6EEF5] bg-white/82 backdrop-blur-sm",
  card:
    "rounded-xl border border-[#E6EEF5] bg-white/90 backdrop-blur-sm transition-[border-color,opacity] duration-200 hover:border-gmup-teal/25",
  mediaFrame:
    "overflow-hidden rounded-xl border border-[#E6EEF5] bg-white/90 backdrop-blur-sm",
  btnPrimary: cn(
    typography.button,
    "inline-flex items-center justify-center rounded-lg bg-gmup-navy px-5 py-3 text-white transition-[background-color,opacity] duration-200 hover:bg-gmup-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gmup-teal/40",
  ),
  btnSecondary: cn(
    typography.button,
    "inline-flex items-center justify-center rounded-lg border border-[#E6EEF5] bg-white px-5 py-3 text-gmup-navy transition-[background-color,border-color] duration-200 hover:border-gmup-teal/30 hover:bg-gmup-navy-soft/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gmup-teal/40",
  ),
  input:
    "rounded-lg border border-[#E6EEF5] bg-white px-3.5 py-2.5 text-[0.95rem] text-body transition-[border-color,box-shadow] duration-200 focus:border-gmup-teal/50 focus:outline-none focus:ring-2 focus:ring-gmup-teal/15",
  avatar:
    "grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#E6EEF5] bg-gmup-navy-soft text-sm font-semibold text-gmup-navy",
} as const;
