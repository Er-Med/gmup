"use client";

import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { PRESIDENT_LETTER, PRESIDENT_MESSAGE } from "@/lib/content";
import { typography } from "@/lib/typography";
import { cn } from "@/utils/cn";

function MedicalPattern() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-gmup-navy/[0.035]"
      aria-hidden
    >
      <defs>
        <pattern
          id="v2-president-medical-grid"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M16 10v12M10 16h12"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeLinecap="round"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#v2-president-medical-grid)" />
    </svg>
  );
}

function PresidentPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-none">
      <div className="overflow-hidden rounded-2xl border border-gmup-teal/15 bg-gmup-navy-soft">
        <Image
          src={PRESIDENT_MESSAGE.portraitSrc}
          alt={PRESIDENT_MESSAGE.portraitAlt}
          width={320}
          height={404}
          sizes="(max-width: 1024px) 72vw, 320px"
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
  );
}

export function V2PresidentMessageSection() {
  const { president, paragraphs, signoff } = PRESIDENT_LETTER;

  return (
    <section
      className="relative border-b border-gmup-navy/8 py-24 lg:py-28"
      id="president"
      aria-labelledby="president-title"
    >
      <MedicalPattern />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)] lg:items-start lg:gap-20 xl:gap-24">
          <Reveal as="article">
            <h2 className={typography.h2} id="president-title">
              {PRESIDENT_MESSAGE.label}
            </h2>

            <div
              className="mt-5 h-0.5 w-12 rounded-full bg-gmup-coral/75"
              aria-hidden
            />

            <div className="mt-10 flex gap-0 sm:gap-6">
              <div
                className="mt-1 hidden w-px shrink-0 self-stretch bg-gmup-teal/50 sm:block"
                aria-hidden
              />

              <div className="min-w-0 flex-1">
                <div
                  className={cn(
                    typography.proseStack,
                    typography.bodyLg,
                    typography.prose,
                  )}
                >
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>

                <p
                  className={cn(
                    "mt-8 border-l-2 border-gmup-teal/40 pl-5",
                    typography.quote,
                    typography.prose,
                  )}
                >
                  {signoff}
                </p>
              </div>
            </div>
          </Reveal>

          <aside className="flex flex-col items-center gap-5 lg:sticky lg:top-24 lg:self-start lg:items-start lg:pt-2">
            <PresidentPortrait />

            <div className="relative w-full max-w-[280px] pl-0 text-center lg:max-w-none lg:pl-1 lg:text-left">
              <div
                className="absolute top-1 bottom-1 left-0 hidden w-0.5 rounded-full bg-gmup-coral/70 lg:block"
                aria-hidden
              />
              <p className={typography.eyebrow}>{president.role}</p>
              <p className={cn("mt-1.5", typography.name)}>{president.name}</p>
              <p className={cn("mt-2 max-w-xs", typography.small)}>
                {president.note}
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
