import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Navbar } from "@/components/layout/navbar";
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
    <footer
      className={cn(
        "mt-auto border-t py-12",
        isV2
          ? "border-transparent bg-gmup-navy text-white/70"
          : "border-[#E6EEF5] bg-white/75 text-secondary backdrop-blur-sm",
      )}
    >
      <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href={homePath(variant)}
          className={cn(
            "flex items-center gap-2.5 tracking-[-0.01em] transition-opacity duration-200 hover:opacity-80",
            isV2 ? cn(typography.nav, "font-semibold text-white") : cn(typography.nav, "font-semibold text-heading"),
          )}
        >
          <Image
            src="/logo.png"
            alt=""
            width={36}
            height={36}
            className={cn("h-auto w-auto rounded-md", isV2 && "bg-white")}
          />
          <span>GMUP</span>
        </Link>
        <div className={cn("flex flex-wrap items-center gap-4 sm:gap-6", isV2 ? typography.small : typography.small)}>
          <a
            href={SITE.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "transition-colors duration-200 hover:underline",
              isV2 ? cn(typography.nav, "text-white") : cn(typography.nav, "text-gmup-navy hover:text-gmup-teal"),
            )}
          >
            Facebook
          </a>
          <span className={isV2 ? "text-muted" : "text-muted"}>© 2025 GMUP. Tous droits réservés.</span>
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
