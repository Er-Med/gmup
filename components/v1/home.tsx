import Image from "next/image";



import { Container } from "@/components/layout/container";

import { Reveal } from "@/components/motion/reveal";

import { PresidentHero } from "@/components/v1/president-hero";
import { PresidentMessageSection } from "@/components/v1/president-message-section";

import { ADVISORS, BUREAU_MEMBERS } from "@/lib/content";

import { typography } from "@/lib/typography";

import { v1 } from "@/lib/v1-ui";

import { cn } from "@/utils/cn";



function Eyebrow({ children }: { children: React.ReactNode }) {

  return <span className={cn("mb-4 inline-block", typography.eyebrow)}>{children}</span>;

}



export function V1Home() {

  return (

    <>

      <PresidentHero />

      <PresidentMessageSection />



      <section

        className={cn("border-t", v1.border, v1.section)}

        aria-label="Médias"

      >

        <Container>

          <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">

            <Reveal delay={0.1}>

              <figure className={v1.mediaFrame}>

                <Image

                  src="/affiche-3eme-journee.png"

                  alt="Affiche — 3ème Journée d'urgences pédiatriques, 25 octobre 2025"

                  width={800}

                  height={1100}

                  className="h-auto w-full"

                />

              </figure>

            </Reveal>



            <Reveal delay={0.15}>

              <div className="flex flex-col">

                <video

                  className={cn(

                    v1.mediaFrame,

                    "w-full bg-gmup-navy/90",

                  )}

                  controls

                  preload="metadata"

                  poster="/banner-web.jpg"

                >

                  <source src="/best-of-jup.mp4" type="video/mp4" />

                  Votre navigateur ne prend pas en charge la lecture vidéo.

                </video>

                <p className={cn("mt-4", typography.small)}>

                  Best of — Journée d&apos;urgences pédiatriques, SAUP Casablanca ·

                  Octobre 2023

                </p>

              </div>

            </Reveal>

          </div>

        </Container>

      </section>



      <section

        className={cn(v1.section, "border-t", v1.border)}

        id="bureau"

        aria-labelledby="bureau-title"

      >

        <Container>

          <header className={cn("mb-14 max-w-2xl", typography.prose)}>

            <Eyebrow>Gouvernance</Eyebrow>

            <h2 className={typography.h2} id="bureau-title">

              Le Bureau du GMUP

            </h2>

            <p className={cn("mt-4", typography.bodyLg, "text-secondary")}>

              L&apos;équipe élue qui porte les décisions et les projets du groupe.

            </p>

          </header>



          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {BUREAU_MEMBERS.map((member, index) => (

              <Reveal key={member.name} delay={index * 0.05} as="article">

                <article className={cn(v1.card, "flex items-center gap-4 p-5")}>

                  <div className={v1.avatar} aria-hidden>

                    {member.initials}

                  </div>

                  <div>

                    <span className={cn("mb-1 block", typography.eyebrow, "text-secondary")}>

                      {member.role}

                    </span>

                    <span className={typography.name}>{member.name}</span>

                  </div>

                </article>

              </Reveal>

            ))}

          </div>



          <div className="mt-14 border-t border-[#E6EEF5] pt-10">

            <h3 className={cn("mb-4", typography.eyebrow, "text-secondary")}>

              Conseillers

            </h3>

            <p className={cn(typography.bodyLg, "max-w-[65ch] text-secondary")}>

              {ADVISORS}

            </p>

          </div>

        </Container>

      </section>

    </>

  );

}


