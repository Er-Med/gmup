"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Container } from "@/components/layout/container";
import { SocialLinks } from "@/components/layout/social-icons";
import { SITE, type SiteVariant } from "@/lib/content";
import { buildNav } from "@/lib/navigation";
import { typography } from "@/lib/typography";
import { cn } from "@/utils/cn";

type NavbarProps = {
  variant: SiteVariant;
};

const linkBase =
  "relative py-1.5 text-[0.9375rem] font-medium tracking-[0.01em] text-white/95 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/40";

const activeUnderline =
  "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-gmup-teal after:opacity-100";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

export function Navbar({ variant }: NavbarProps) {
  const pathname = usePathname();
  const nav = buildNav(variant, pathname);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setDropdownOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-[var(--nav-bg)] text-[var(--nav-text)]",
        open && "is-open",
      )}
    >
      <div className="border-b border-white/10">
        <Container className="flex min-h-10 items-center justify-between gap-4 py-2 text-[0.8125rem] text-white/90">
          <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1">
            <a
              href={`tel:${SITE.organizer.phone}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <PhoneIcon className="size-3.5 shrink-0 opacity-90" />
              <span className="truncate">{SITE.organizer.phoneDisplay}</span>
            </a>
            <span className="hidden h-3.5 w-px bg-white/30 sm:block" aria-hidden />
            <a
              href={`mailto:${SITE.organizer.email}`}
              className="inline-flex min-w-0 items-center gap-2 transition-colors hover:text-white"
            >
              <MailIcon className="size-3.5 shrink-0 opacity-90" />
              <span className="truncate">{SITE.organizer.email}</span>
            </a>
          </div>

          <SocialLinks />
        </Container>
      </div>

      <Container className="flex min-h-[4.75rem] items-center justify-between gap-6 md:min-h-[5.25rem]">
        <Link
          href={nav.home}
          className="flex min-w-0 items-center gap-3 transition-opacity duration-200 hover:opacity-90"
        >
          <Image
            src={variant === "v2" ? "/short-logo.svg" : "/logo.svg"}
            alt="Logo GMUP"
            width={variant === "v2" ? 72 : 48}
            height={variant === "v2" ? 72 : 48}
            className={cn(
              "w-auto shrink-0 object-contain",
              variant === "v2" ? "h-16 rounded-none md:h-[4.5rem]" : "h-11 rounded-lg bg-white",
            )}
            priority
          />
          <span className="min-w-0 leading-tight">
            <span className={cn(typography.nav, "block text-[1.35rem] font-bold tracking-[0.04em] text-white")}>
              {SITE.name}
            </span>
            <span className="mt-0.5 hidden max-w-[14rem] text-[0.625rem] leading-snug font-medium tracking-[0.04em] text-white/75 uppercase sm:block md:max-w-[18rem] md:text-[0.68rem]">
              {SITE.fullName}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:gap-10 md:flex"
          aria-label="Navigation principale"
        >
          <Link
            href={nav.home}
            aria-current={nav.items[0].current ? "page" : undefined}
            className={cn(linkBase, nav.items[0].current && activeUnderline)}
          >
            {nav.items[0].label}
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className={cn(
                linkBase,
                "inline-flex items-center gap-1.5",
                nav.isAgendaActive && activeUnderline,
              )}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              onClick={() => setDropdownOpen((value) => !value)}
            >
              Agenda événements
              <span
                aria-hidden
                className="border-x-[3px] border-t-[4px] border-x-transparent border-t-current opacity-75"
              />
            </button>

            <ul
              role="menu"
              className={cn(
                "absolute top-[calc(100%+0.75rem)] left-1/2 min-w-[19rem] -translate-x-1/2 rounded-lg border border-white/15 bg-[var(--nav-bg)] py-1.5 shadow-lg transition-[opacity,transform,visibility] duration-200",
                dropdownOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0",
              )}
            >
              {nav.events.map((event) => (
                <li key={event.href} role="none">
                  <Link
                    role="menuitem"
                    href={event.href}
                    aria-current={event.current ? "page" : undefined}
                    className="block px-4 py-2.5 text-sm leading-snug whitespace-nowrap text-white/95 transition-colors duration-200 hover:bg-white/8 aria-[current=page]:bg-white/10"
                  >
                    {event.label.includes("2ème") ? (
                      <>
                        2<sup>ème</sup> journée d&apos;urgences pédiatriques
                      </>
                    ) : (
                      <>
                        3<sup>ème</sup> journée d&apos;urgences pédiatriques
                      </>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href={nav.blog}
            aria-current={nav.items[1].current ? "page" : undefined}
            className={cn(linkBase, nav.items[1].current && activeUnderline)}
          >
            Blog
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40 md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative h-4 w-[1.35rem]" aria-hidden>
            <span
              className={cn(
                "absolute left-0 h-px w-full bg-current transition",
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current transition",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-px w-full bg-current transition",
                open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0",
              )}
            />
          </span>
        </button>
      </Container>

      <nav
        className={cn(
          "border-t border-white/10 bg-[var(--nav-bg)] md:hidden",
          open ? "block" : "hidden",
        )}
        aria-label="Navigation mobile"
      >
        <Link
          href={nav.home}
          aria-current={nav.items[0].current ? "page" : undefined}
          className="block px-5 py-4 font-medium text-white transition-colors duration-200 aria-[current=page]:bg-white/10"
        >
          {nav.items[0].label}
        </Link>
        <div className="pb-1">
          <span className="block px-5 pt-4 pb-2 text-xs font-medium tracking-[0.12em] text-white/60 uppercase">
            Agenda événements
          </span>
          {nav.events.map((event) => (
            <Link
              key={event.href}
              href={event.href}
              aria-current={event.current ? "page" : undefined}
              className="block py-3.5 pr-5 pl-8 text-sm leading-snug text-white/95 transition-colors duration-200 aria-[current=page]:bg-white/10"
            >
              {event.label}
            </Link>
          ))}
        </div>
        <Link
          href={nav.blog}
          aria-current={nav.items[1].current ? "page" : undefined}
          className="block px-5 py-4 font-medium text-white transition-colors duration-200 aria-[current=page]:bg-white/10"
        >
          Blog
        </Link>
      </nav>
    </header>
  );
}
