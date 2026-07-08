import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { RencontrePoster, RencontreVideo } from "@/components/v2/rencontre-media";
import { RENCONTRE_SPOTLIGHT } from "@/lib/content";
import { typography } from "@/lib/typography";
import { cn } from "@/utils/cn";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className={cn("mb-3.5 inline-block", typography.eyebrowOnDark)}>
      {children}
    </span>
  );
}

export function V2RencontreSection() {
  const { eyebrow, title, description, video } = RENCONTRE_SPOTLIGHT;

  return (
    <section className="bg-gmup-navy py-20 text-white" aria-labelledby="spotlight-title">
      <Container>
        <header className="mb-10 max-w-xl md:mb-12">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className={cn(typography.h2, "text-white")} id="spotlight-title">
            {title}
          </h2>
          <p className={cn("mt-4", typography.bodyLg, typography.prose, "text-white/75")}>
            {description}
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 md:items-stretch md:gap-10 lg:gap-12">
          <Reveal className="min-w-0">
            <RencontrePoster className="md:aspect-video" />
          </Reveal>

          <Reveal delay={0.1} className="flex min-w-0 flex-col">
            <RencontreVideo className="aspect-video w-full" />
            <p className={cn("mt-3", typography.small, "text-gmup-mint/70")}>
              {video.caption}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
