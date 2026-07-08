/**
 * GMUP typography scale — Plus Jakarta Sans (single family).
 * Weights: 700 hero & sections · 600 buttons · 500 nav & labels · 400 body.
 */
export const typography = {
  h1: "font-sans text-[2rem] md:text-[2.625rem] lg:text-[3.25rem] font-bold leading-[1.12] tracking-[-0.02em] text-heading",
  h2: "font-sans text-[1.75rem] md:text-[2.125rem] lg:text-[2.5rem] font-bold leading-[1.2] tracking-[-0.015em] text-heading",
  h3: "font-sans text-[1.3125rem] md:text-[1.4375rem] lg:text-[1.5625rem] font-bold leading-[1.28] tracking-[-0.01em] text-heading",
  h4: "font-sans text-[1.125rem] md:text-[1.25rem] font-bold leading-[1.32] tracking-[-0.005em] text-heading",
  bodyLg: "font-sans text-lg font-normal leading-[1.7] tracking-[0.005em] text-body",
  body: "font-sans text-base font-normal leading-[1.65] tracking-[0.01em] text-body",
  small: "font-sans text-sm font-normal leading-[1.55] tracking-[0.01em] text-secondary",
  nav: "font-sans text-[0.9375rem] font-medium leading-none tracking-[0.015em]",
  button: "font-sans text-[0.9375rem] font-semibold leading-none tracking-[0.025em]",
  label: "font-sans text-sm font-medium leading-snug tracking-[0.01em] text-body",
  eyebrow:
    "font-sans text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-gmup-teal",
  eyebrowOnDark:
    "font-sans text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-gmup-mint/80",
  quote:
    "font-sans text-lg font-normal leading-[1.7] tracking-[0.005em] text-secondary italic",
  heroEyebrow:
    "font-body text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-gmup-blue",
  heroQuote:
    "font-serif text-[1.375rem] md:text-[1.625rem] lg:text-[1.75rem] font-normal leading-[1.55] tracking-[-0.01em] text-gmup-text",
  heroName:
    "font-body text-base font-semibold leading-[1.4] tracking-[0.005em] text-gmup-text",
  heroRole:
    "font-body text-sm font-normal leading-[1.5] tracking-[0.01em] text-gmup-text-secondary",
  name: "font-sans text-base font-semibold leading-[1.4] tracking-[0.005em] text-heading",
  link: "font-sans text-sm font-medium leading-none tracking-[0.015em]",
  prose: "max-w-[65ch]",
  proseStack: "flex flex-col gap-5",
  list: "flex flex-col gap-3",
} as const;
