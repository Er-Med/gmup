import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { SITE, homePath, type Event, type SiteVariant } from "@/lib/content";
import { typography } from "@/lib/typography";
import { v1 } from "@/lib/v1-ui";
import { cn } from "@/utils/cn";

type V1EventDetailProps = {
  event: Event;
  variant: SiteVariant;
};

export function V1EventDetail({ event, variant }: V1EventDetailProps) {
  const edition = event.slug.startsWith("2") ? "2" : "3";

  return (
    <>
      <div className={cn("overflow-hidden bg-white/40", v1.border, "border-b")}>
        <Image
          src="/banner-web.jpg"
          alt=""
          width={1233}
          height={250}
          className="max-h-[280px] w-full object-cover"
        />
      </div>

      <Container className="py-10 pb-20 md:py-12 md:pb-24">
        <nav
          className={cn("mb-8 flex flex-wrap items-center gap-2", typography.small)}
          aria-label="Fil d'Ariane"
        >
          <Link
            href={homePath(variant)}
            className="font-medium text-heading transition-colors duration-200 hover:text-gmup-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gmup-teal/40"
          >
            Accueil
          </Link>
          <span className="text-muted" aria-hidden>
            /
          </span>
          <span>
            {edition}
            <sup>ème</sup> journée d&apos;urgences pédiatriques
          </span>
        </nav>

        <Reveal>
          <header className="mb-12 max-w-3xl">
            <span className={cn("mb-4 inline-block", typography.eyebrow)}>
              Événement
            </span>
            <h1 className={typography.h2}>
              {edition}
              <sup>ème</sup> journée d&apos;urgences pédiatriques
            </h1>
            <p className={cn("mt-4", typography.bodyLg, "text-secondary")}>
              {event.date} — {event.location}
            </p>
          </header>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-12">
          <div>
            <figure className={v1.mediaFrame}>
              <Image
                src={event.programmeImage}
                alt={`Programme — ${event.title}`}
                width={800}
                height={1100}
                className="h-auto w-full"
              />
            </figure>
            <p className="mt-6">
              <a
                className={cn(v1.btnSecondary, "w-full")}
                href={event.programmeImage}
                download
              >
                Cliquez ici pour télécharger le programme
              </a>
            </p>
          </div>

          <aside aria-labelledby="inscription-title">
            <div
              className={cn(
                v1.panel,
                "p-6 lg:sticky lg:top-[5.5rem] lg:p-8",
              )}
            >
              <h2 className={cn("mb-6", typography.h4)} id="inscription-title">
                Inscription
              </h2>

              <form className="flex flex-col gap-5" action="#" method="post">
                {[
                  { id: "your-name", label: "Nom", type: "text", auto: "family-name" },
                  { id: "your-firstname", label: "Prénom", type: "text", auto: "given-name" },
                  { id: "your-specialty", label: "Spécialité", type: "text" },
                  { id: "your-city", label: "Ville", type: "text", auto: "address-level2" },
                  { id: "your-email", label: "Email", type: "email", auto: "email" },
                  { id: "your-ppr", label: "PPR / INPE / Autre", type: "text" },
                ].map((field) => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label htmlFor={field.id} className={typography.label}>
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      autoComplete={field.auto}
                      className={v1.input}
                    />
                  </div>
                ))}
                <button type="submit" className={cn(v1.btnPrimary, "w-full")}>
                  Envoyer
                </button>
              </form>

              <div
                className={cn(
                  "mt-8 flex flex-col gap-2 border-t border-[#E6EEF5] pt-6",
                  typography.small,
                )}
              >
                <p>
                  <strong className="text-heading">{SITE.organizer.name}</strong>
                </p>
                <p>
                  Tél:{" "}
                  <a
                    href={`tel:${SITE.organizer.phone}`}
                    className="text-heading transition-colors duration-200 hover:text-gmup-teal"
                  >
                    {SITE.organizer.phoneDisplay}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${SITE.organizer.email}`}
                    className="text-heading transition-colors duration-200 hover:text-gmup-teal"
                  >
                    {SITE.organizer.email}
                  </a>
                </p>
                <p>
                  <a
                    href={SITE.organizer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-heading transition-colors duration-200 hover:text-gmup-teal"
                  >
                    {SITE.organizer.website}
                  </a>
                </p>
              </div>
            </div>
          </aside>
        </div>

        <p className="mt-12">
          <Link
            href={homePath(variant)}
            className={cn(
              typography.link,
              "text-gmup-teal transition-colors duration-200 hover:text-gmup-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gmup-teal/40",
            )}
          >
            ← Retour à l&apos;accueil
          </Link>
        </p>
      </Container>
    </>
  );
}
