import { SITE } from "@/lib/content";
import { typography } from "@/lib/typography";
import { cn } from "@/utils/cn";

const FORM_FIELDS = [
  { id: "your-name", label: "Nom", type: "text", auto: "family-name" },
  { id: "your-firstname", label: "Prénom", type: "text", auto: "given-name" },
  { id: "your-specialty", label: "Spécialité", type: "text" },
  { id: "your-city", label: "Ville", type: "text", auto: "address-level2" },
  { id: "your-email", label: "Email", type: "email", auto: "email" },
  { id: "your-ppr", label: "PPR / INPE / Autre", type: "text" },
] as const;

export function EventRegistrationCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gmup-teal/15 bg-white">
      <div className="border-b border-gmup-teal/10 bg-gmup-navy-soft/40 px-6 py-5 lg:px-8 lg:py-6">
        <h2 className={typography.h3} id="inscription-title">
          Inscription
        </h2>
        <p className={cn("mt-1.5", typography.small)}>
          Réservez votre place pour cette journée scientifique.
        </p>
      </div>

      <div className="px-6 py-6 lg:px-8 lg:py-7">
        <form className="flex flex-col gap-5" action="#" method="post" aria-labelledby="inscription-title">
          {FORM_FIELDS.map((field) => (
            <div key={field.id} className="flex flex-col gap-2">
              <label htmlFor={field.id} className={typography.label}>
                {field.label}
              </label>
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                autoComplete={"auto" in field ? field.auto : undefined}
                className={cn(
                  "rounded-lg border border-gmup-teal/20 bg-gmup-navy-soft/30 px-4 py-3.5 text-body transition-colors placeholder:text-muted focus:border-gmup-teal focus:bg-white focus:outline-none focus:ring-2 focus:ring-gmup-teal/15",
                  typography.body,
                )}
              />
            </div>
          ))}
          <button
            type="submit"
            className={cn(
              "mt-1 w-full rounded-lg bg-gmup-navy px-5 py-4 uppercase tracking-[0.06em] text-white transition hover:bg-gmup-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gmup-teal",
              typography.button,
            )}
          >
            Envoyer
          </button>
        </form>
      </div>

      <div className="border-t border-gmup-teal/15 bg-gmup-navy-soft/25 px-6 py-5 lg:px-8 lg:py-6">
        <h3 className={cn("mb-3", typography.eyebrow)}>Organisateur</h3>
        <div className={cn("flex flex-col gap-2", typography.small, "text-body")}>
          <p>
            <strong className={cn(typography.name)}>{SITE.organizer.name}</strong>
          </p>
          <p>
            Tél:{" "}
            <a
              href={`tel:${SITE.organizer.phone}`}
              className={cn(typography.link, "text-heading transition hover:text-gmup-teal")}
            >
              {SITE.organizer.phoneDisplay}
            </a>
          </p>
          <p>
            <a
              href={`mailto:${SITE.organizer.email}`}
              className={cn(typography.link, "text-heading transition hover:text-gmup-teal")}
            >
              {SITE.organizer.email}
            </a>
          </p>
          <p>
            <a
              href={SITE.organizer.website}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(typography.link, "text-heading transition hover:text-gmup-teal")}
            >
              {SITE.organizer.website}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
