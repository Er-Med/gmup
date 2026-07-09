"use client";

import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { PRESIDENT_LETTER, PRESIDENT_MESSAGE } from "@/lib/content";
import { typography } from "@/lib/typography";
import { cn } from "@/utils/cn";

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
  const { president, paragraphs } = PRESIDENT_LETTER;

  return (
    <section
      className="relative border-b border-gmup-navy/8 pt-10 pb-24 md:pt-12 lg:pt-14 lg:pb-28"
      id="president"
      aria-labelledby="president-title"
    >
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)] lg:items-start lg:gap-20 xl:gap-24">
          <Reveal as="article" direction="left" className="min-w-0">
            <h2 className={typography.h2} id="president-title">
              {PRESIDENT_MESSAGE.label}
            </h2>

            <div
              className="mt-5 h-0.5 w-12 rounded-full bg-gmup-coral/75"
              aria-hidden
            />

            <div
              className={cn(
                "mt-10 text-[1.0625rem] leading-[1.75] md:text-lg md:leading-[1.7]",
                typography.prose,
                typography.proseStack,
              )}
            >
              {paragraphs.map((paragraph, index) => (
                <Reveal key={index} delay={0.06 + index * 0.06} direction="up">
                  <p className="prose-justify" lang="fr">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={0.12}
            direction="right"
            as="aside"
            className="flex flex-col items-center gap-5 lg:sticky lg:top-40 lg:self-start lg:items-start"
          >
            <PresidentPortrait />

            <div className="w-full max-w-[280px] text-center lg:max-w-none lg:text-left">
              <p className={typography.eyebrow}>{president.role}</p>
              <p className={cn("mt-1.5", typography.name)}>{president.name}</p>
              <p className={cn("mt-2 mx-auto max-w-xs lg:mx-0", typography.small)}>
                {president.note}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
