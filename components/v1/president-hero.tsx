import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { eventPath, PRESIDENT_MESSAGE } from "@/lib/content";
import { typography } from "@/lib/typography";
import { cn } from "@/utils/cn";

export function PresidentHero() {
  const activitiesHref = eventPath(
    "v1",
    "3eme-journee-urgences-pediatriques",
  );

  return (
    <section
      className="relative overflow-hidden border-b border-gmup-border-light"
      aria-labelledby="president-hero-quote"
    >
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/gmup-v1-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/8" />
      </div>

      <Container className="relative py-24 md:py-28 lg:py-[7.5rem]">
        <div className="grid items-center gap-12 lg:grid-cols-[45fr_55fr] lg:gap-14 xl:gap-20">
          <Reveal delay={0.05} className="min-w-0">
            <p className={cn("mb-6", typography.heroEyebrow)}>
              {PRESIDENT_MESSAGE.heroLabel}
            </p>

            <figure className="relative">
              <span
                aria-hidden
                className="pointer-events-none absolute -top-6 -left-1 font-serif text-[5.5rem] leading-none text-gmup-blue/90 md:text-[6.5rem] lg:text-[7rem]"
              >
                &ldquo;
              </span>

              <blockquote className="relative z-10 pl-1">
                <p
                  id="president-hero-quote"
                  className={cn(typography.heroQuote, "max-w-[38ch]")}
                >
                  {PRESIDENT_MESSAGE.excerpt}
                </p>
              </blockquote>
            </figure>

            <footer className="mt-10 border-t border-gmup-border-light pt-8">
              <p className={typography.heroName}>
                {PRESIDENT_MESSAGE.signatureName}
              </p>
              <p className={cn("mt-1", typography.heroRole)}>
                {PRESIDENT_MESSAGE.signatureRole}
              </p>
            </footer>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#president"
                className={cn(
                  typography.button,
                  "inline-flex items-center justify-center rounded-2xl bg-gmup-blue px-6 py-3.5 text-white transition-[background-color,opacity] duration-300 hover:bg-[#0b438f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gmup-blue/40",
                )}
              >
                {PRESIDENT_MESSAGE.heroPrimaryCta}
              </Link>
              <Link
                href={activitiesHref}
                className={cn(
                  typography.button,
                  "inline-flex items-center justify-center rounded-2xl border border-gmup-border-light bg-white/10 px-6 py-3.5 text-gmup-text transition-[border-color,background-color,opacity] duration-300 hover:border-gmup-blue-light/50 hover:bg-white/12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gmup-blue/30",
                )}
              >
                {PRESIDENT_MESSAGE.heroSecondaryCta}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative min-w-0">
            <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:pl-4">
              <Image
                src={PRESIDENT_MESSAGE.portraitSrc}
                alt={PRESIDENT_MESSAGE.portraitAlt}
                width={560}
                height={700}
                priority
                sizes="(max-width: 1024px) 85vw, 55vw"
                className="mx-auto h-auto w-full max-w-[28rem] object-contain object-bottom transition-opacity duration-500 lg:mx-0 lg:max-w-none"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
