import Image from "next/image";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { V2PresidentMessageSection } from "@/components/v2/president-message-section";
import { typography } from "@/lib/typography";
import { cn } from "@/utils/cn";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className={cn("mb-3.5 inline-block", typography.eyebrow)}>
      {children}
    </span>
  );
}

export function V2Home() {
  return (
    <>
      <PageHero
        src="/banner-v2.webp"
        alt="Bannière — 4ème Congrès des urgences pédiatriques GMUP"
        priority
        flush
      />

      <V2PresidentMessageSection />

      <section className="py-20" id="bureau" aria-labelledby="bureau-title">
        <Container>
          <header className="mx-auto mb-10 max-w-2xl text-center">
            <Eyebrow>Gouvernance</Eyebrow>
            <h2 className={typography.h2} id="bureau-title">
              Le Bureau du GMUP
            </h2>
            <p className={cn("mt-4", typography.bodyLg, typography.prose)}>
              L&apos;équipe élue qui porte les décisions et les projets du groupe.
            </p>
          </header>

          <div className="overflow-hidden bg-transparent">
            <Image
              src="/bureau.webp"
              alt="Organigramme du Bureau du GMUP"
              width={1600}
              height={900}
              sizes="(max-width: 1024px) 100vw, 1100px"
              className="h-auto w-full bg-transparent object-contain"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
