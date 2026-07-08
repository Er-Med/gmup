import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { PRESIDENT_LETTER, PRESIDENT_MESSAGE } from "@/lib/content";
import { typography } from "@/lib/typography";
import { v1 } from "@/lib/v1-ui";
import { cn } from "@/utils/cn";

function PresidentPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-xs lg:sticky lg:top-24 lg:mx-0 lg:max-w-sm lg:self-start">
      <div className={cn(v1.mediaFrame, "overflow-hidden rounded-2xl bg-gmup-navy-soft")}>
        <Image
          src={PRESIDENT_MESSAGE.portraitSrc}
          alt={PRESIDENT_MESSAGE.portraitAlt}
          width={232}
          height={293}
          sizes="(max-width: 1024px) 80vw, 320px"
          className="h-auto w-full object-cover"
          priority
        />
      </div>
    </div>
  );
}

export function PresidentMessageSection() {
  const { paragraphs, signoff } = PRESIDENT_LETTER;

  return (
    <section
      className={cn("relative border-b", v1.border, v1.section)}
      id="president"
      aria-labelledby="president-message-heading"
    >
      <Container className="relative">
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-20">
          <article className="order-1 lg:order-none">
            <PresidentPortrait />
          </article>

          <Reveal delay={0.08} className="order-2 lg:order-none">
            <div className={cn(v1.panel, "p-6 sm:p-8 lg:p-10")}>
              <div className="flex gap-5">
                <div
                  className="mt-1 hidden w-px shrink-0 self-stretch bg-gmup-teal/40 sm:block"
                  aria-hidden
                />

                <div className="min-w-0 flex-1">
                  <p className={cn("mb-4", typography.eyebrow)}>
                    {PRESIDENT_MESSAGE.label}
                  </p>

                  <h2
                    id="president-message-heading"
                    className={typography.h2}
                  >
                    {PRESIDENT_MESSAGE.heading}
                  </h2>

                  <div
                    className="mt-5 h-0.5 w-12 rounded-full bg-gmup-coral/75"
                    aria-hidden
                  />

                  <div
                    className={cn(
                      "mt-8",
                      typography.proseStack,
                      typography.body,
                      typography.prose,
                    )}
                  >
                    {paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                    ))}
                    <p
                      className={cn(
                        "mt-2 border-l-2 border-gmup-teal/35 pl-5",
                        typography.quote,
                      )}
                    >
                      {signoff}
                    </p>
                  </div>

                  <footer className="mt-10 border-t border-[#E6EEF5] pt-8">
                    <div className="relative pl-4">
                      <div
                        className="absolute top-1 bottom-1 left-0 w-0.5 rounded-full bg-gmup-coral/70"
                        aria-hidden
                      />
                      <p className={typography.name}>{PRESIDENT_MESSAGE.signatureName}</p>
                      <p className={cn("mt-1", typography.small)}>
                        {PRESIDENT_MESSAGE.signatureRole}
                      </p>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
