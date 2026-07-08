import Image from "next/image";

import { Container } from "@/components/layout/container";
import { cn } from "@/utils/cn";

const DEFAULT_BANNER_SRC = "/banner-web.jpg";

type PageHeroProps = {
  alt: string;
  src?: string;
  priority?: boolean;
  className?: string;
};

export function PageHero({
  alt,
  src = DEFAULT_BANNER_SRC,
  priority = false,
  className,
}: PageHeroProps) {
  return (
    <Container
      as="section"
      aria-label="Bannière"
      className={cn(
        "pt-2 pb-10 md:pt-4 md:pb-12 lg:pb-14",
        className,
      )}
    >
      <figure
        className={cn(
          "relative overflow-hidden rounded-[28px]",
          "border border-gmup-teal/15",
        )}
      >
        <div className="relative aspect-[1233/250] w-full min-h-[9rem] sm:min-h-[10rem] md:min-h-[11rem]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1180px) calc(100vw - 2.5rem), 1180px"
            className="object-cover object-center"
            priority={priority}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gmup-navy/[0.06]"
          />
        </div>
      </figure>
    </Container>
  );
}
