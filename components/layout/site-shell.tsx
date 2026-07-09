import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Navbar } from "@/components/layout/navbar";
import { SocialLinks } from "@/components/layout/social-icons";
import { V2Navbar } from "@/components/v2/navbar";
import { SITE, homePath, type SiteVariant } from "@/lib/content";
import { typography } from "@/lib/typography";
import { cn } from "@/utils/cn";

type FooterProps = {
  variant: SiteVariant;
};

export function Footer({ variant }: FooterProps) {
  const isV2 = variant === "v2";

  return (
    <footer className="mt-auto bg-[var(--nav-bg)] text-[var(--nav-text)]">
      <Container className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-5">
        <Link
          href={homePath(variant)}
          className="flex min-w-0 items-center gap-2.5 transition-opacity duration-200 hover:opacity-90"
        >
          <Image
            src={isV2 ? "/short-logo.svg" : "/logo.svg"}
            alt="Logo GMUP"
            width={isV2 ? 40 : 32}
            height={isV2 ? 40 : 32}
            className={cn(
              "w-auto shrink-0 object-contain",
              isV2 ? "h-9 rounded-none" : "h-8 rounded-md bg-white",
            )}
          />
          <span className="min-w-0 leading-tight">
            <span
              className={cn(
                typography.nav,
                "block text-[1rem] font-bold tracking-[0.04em] text-white",
              )}
            >
              {SITE.name}
            </span>
            <span className="mt-0.5 block max-w-[16rem] text-[0.5625rem] leading-snug font-medium tracking-[0.04em] text-white/75 uppercase md:max-w-[20rem]">
              {SITE.fullName}
            </span>
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:justify-end">
          <SocialLinks />
          <p className={cn(typography.small, "text-[0.75rem] text-white/70")}>
            © 2025 GMUP. Tous droits réservés.
          </p>
        </div>
      </Container>
    </footer>
  );
}

type SiteShellProps = {
  variant: SiteVariant;
  children: ReactNode;
  className?: string;
};

export function SiteShell({ variant, children, className }: SiteShellProps) {
  return (
    <div
      data-variant={variant}
      className={cn(
        "flex min-h-screen flex-col font-sans antialiased",
        className,
      )}
    >
      {variant === "v2" ? <V2Navbar /> : <Navbar variant={variant} />}
      <main className="flex-1">{children}</main>
      <Footer variant={variant} />
    </div>
  );
}
