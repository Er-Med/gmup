import { Container } from "@/components/layout/container";

import { PageHero } from "@/components/layout/page-hero";

import { Reveal } from "@/components/motion/reveal";

import { V2PresidentMessageSection } from "@/components/v2/president-message-section";

import { V2RencontreSection } from "@/components/v2/rencontre-section";

import { ADVISORS, BUREAU_MEMBERS } from "@/lib/content";

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

        alt="Bannière — Journée d'urgences pédiatriques GMUP"

        priority

      />



      <V2PresidentMessageSection />



      <V2RencontreSection />



      <section

        className="py-20"

        id="bureau"

        aria-labelledby="bureau-title"

      >

        <Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-16">

          <header className="max-w-sm lg:sticky lg:top-24">

            <Eyebrow>Gouvernance</Eyebrow>

            <h2 className={typography.h2} id="bureau-title">

              Le Bureau

              <br />

              du GMUP

            </h2>

            <p className={cn("mt-4", typography.bodyLg, typography.prose)}>

              L&apos;équipe élue qui porte les décisions et les projets du groupe.

            </p>

          </header>



          <div>

            <ul className={cn("border-t border-gmup-teal/20", typography.list)}>

              {BUREAU_MEMBERS.map((member, index) => (

                <Reveal

                  key={member.name}

                  delay={index * 0.04}

                  as="li"

                  className="grid items-baseline gap-1 border-b border-gmup-teal/20 py-5.5 sm:grid-cols-[0.45fr_1fr] sm:gap-8"

                >

                  <span className={typography.eyebrow}>{member.role}</span>

                  <span className={typography.name}>{member.name}</span>

                </Reveal>

              ))}

            </ul>



            <div className="mt-10 border-t border-gmup-teal/20 pt-8">

              <h3 className={cn("mb-4", typography.eyebrow)}>Conseillers</h3>

              <p className={cn(typography.bodyLg, typography.prose)}>{ADVISORS}</p>

            </div>

          </div>

        </Container>

      </section>

    </>

  );

}

