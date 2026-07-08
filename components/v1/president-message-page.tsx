import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import {
  PRESIDENT_LETTER,
  PRESIDENT_MESSAGE,
  homePath,
} from "@/lib/content";
import { typography } from "@/lib/typography";
import { v1 } from "@/lib/v1-ui";
import { cn } from "@/utils/cn";

export function PresidentMessagePageContent() {
  const { paragraphs, signoff } = PRESIDENT_LETTER;

  return (
    <article className={v1.section}>
      <Container className="max-w-3xl">
        <Reveal>
          <header className={cn(v1.panel, "p-6 sm:p-8 md:p-10")}>
            <p className={cn("mb-4", typography.eyebrow)}>
              {PRESIDENT_MESSAGE.label}
            </p>
            <h1 className={typography.h1}>{PRESIDENT_MESSAGE.heading}</h1>
            <div
              className="mt-5 h-0.5 w-12 rounded-full bg-gmup-coral/75"
              aria-hidden
            />
          </header>
        </Reveal>

        <Reveal delay={0.08}>
          <div
            className={cn(
              "mt-8",
              v1.panel,
              "p-6 sm:p-8 md:p-10",
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
        </Reveal>

        <Reveal delay={0.12}>
          <footer className="mt-10 border-t border-[#E6EEF5] pt-10">
            <p className={typography.name}>{PRESIDENT_MESSAGE.signatureName}</p>
            <p className={cn("mt-1", typography.small)}>
              {PRESIDENT_MESSAGE.signatureRole}
            </p>
            <Link
              href={homePath("v1")}
              className={cn(
                "mt-8 inline-flex items-center gap-2",
                typography.link,
                "text-gmup-teal transition-colors duration-200 hover:text-gmup-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gmup-teal/40",
              )}
            >
              <span aria-hidden>←</span>
              Retour à l&apos;accueil
            </Link>
          </footer>
        </Reveal>
      </Container>
    </article>
  );
}
