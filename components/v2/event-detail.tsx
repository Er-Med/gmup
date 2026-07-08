import Image from "next/image";

import Link from "next/link";



import { Container } from "@/components/layout/container";

import { PageHero } from "@/components/layout/page-hero";

import { Reveal } from "@/components/motion/reveal";

import { EventInfoSection } from "@/components/v2/event-info-section";

import { EventRegistrationCard } from "@/components/v2/event-registration-card";

import { homePath, type Event, type SiteVariant } from "@/lib/content";

import { typography } from "@/lib/typography";

import { cn } from "@/utils/cn";



type V2EventDetailProps = {

  event: Event;

  variant: SiteVariant;

};



export function V2EventDetail({ event, variant }: V2EventDetailProps) {

  const edition = event.slug.startsWith("2") ? "2" : "3";



  return (

    <>

      <PageHero alt="" />



      <Container className="pb-20 md:pb-24">

        <nav

          className={cn(

            "mb-10 flex flex-wrap items-center gap-2 md:mb-12",

            typography.small,

            "text-muted",

          )}

          aria-label="Fil d'Ariane"

        >

          <Link

            href={homePath(variant)}

            className={cn(typography.link, "text-secondary transition hover:text-gmup-teal")}

          >

            Accueil

          </Link>

          <span aria-hidden className="text-muted/70">

            /

          </span>

          <span className="text-secondary">

            {edition}

            <sup>ème</sup> journée d&apos;urgences pédiatriques

          </span>

        </nav>



        <Reveal>

          <header className="mb-12 max-w-3xl md:mb-14">

            <span className={cn("mb-4 inline-block", typography.eyebrow)}>

              Événement

            </span>

            <h1 className={typography.h1}>

              {edition}

              <sup>ème</sup> journée d&apos;urgences pédiatriques

            </h1>

            <p className={cn("mt-4", typography.bodyLg, typography.prose)}>

              {event.date} — {event.location}

            </p>

          </header>

        </Reveal>



        <EventInfoSection event={event} />



        <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-[minmax(0,1.86fr)_minmax(0,1fr)] lg:items-start lg:gap-10 xl:gap-12">

          <Reveal delay={0.1} className="min-w-0">

            <div className="group">

              <figure className="overflow-hidden rounded-2xl border border-gmup-teal/15 bg-white transition-colors duration-300 group-hover:border-gmup-teal/30">

                <Image

                  src={event.programmeImage}

                  alt={`Programme — ${event.title}`}

                  width={800}

                  height={1100}

                  className="h-auto w-full"

                  priority

                />

              </figure>

              <p className="mt-7 md:mt-8">

                <a

                  className={cn(

                    "inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-gmup-navy bg-transparent px-5 py-4 uppercase tracking-wide text-heading transition hover:bg-gmup-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gmup-teal",

                    typography.button,

                  )}

                  href={event.programmeImage}

                  download

                >

                  <svg

                    width="16"

                    height="16"

                    viewBox="0 0 24 24"

                    fill="none"

                    stroke="currentColor"

                    strokeWidth="2.5"

                    strokeLinecap="round"

                    strokeLinejoin="round"

                    aria-hidden

                  >

                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />

                    <polyline points="7 10 12 15 17 10" />

                    <line x1="12" y1="15" x2="12" y2="3" />

                  </svg>

                  Cliquez ici pour télécharger le programme

                </a>

              </p>

            </div>

          </Reveal>



          <Reveal delay={0.14} className="min-w-0 lg:sticky lg:top-[5.5rem] lg:self-start">

            <aside aria-labelledby="inscription-title">

              <EventRegistrationCard />

            </aside>

          </Reveal>

        </div>



        <p className="mt-14 border-t border-gmup-teal/20 pt-8 md:mt-16">

          <Link

            href={homePath(variant)}

            className={cn(

              "uppercase tracking-wide text-heading transition hover:text-gmup-teal",

              typography.button,

            )}

          >

            ← Retour à l&apos;accueil

          </Link>

        </p>

      </Container>

    </>

  );

}

