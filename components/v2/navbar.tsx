"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { buildNav } from "@/lib/navigation";
import { typography } from "@/lib/typography";
import { cn } from "@/utils/cn";

function NavLink({
  href,
  current,
  children,
  className,
}: {
  href: string;
  current?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      className={cn(
        typography.nav,
        "relative rounded-full px-4 py-2 text-secondary transition-colors duration-200",
        "hover:text-gmup-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gmup-teal/40",
        current && [
          "bg-gmup-teal-soft/80 text-gmup-teal",
          "after:absolute after:inset-x-3 after:-bottom-px after:h-0.5 after:rounded-full",
          "after:bg-gradient-to-r after:from-gmup-teal after:to-gmup-mint",
        ],
        className,
      )}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  current,
  children,
  className,
  onNavigate,
}: {
  href: string;
  current?: boolean;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      onClick={onNavigate}
      className={cn(
        typography.nav,
        "relative block rounded-xl px-4 py-3.5 text-secondary transition-colors",
        "hover:bg-gmup-teal-soft/50 hover:text-gmup-teal",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gmup-teal/40",
        current && [
          "bg-gmup-teal-soft/70 text-gmup-teal",
          "after:absolute after:inset-x-4 after:bottom-2 after:h-0.5 after:rounded-full",
          "after:bg-gradient-to-r after:from-gmup-teal after:to-gmup-mint",
        ],
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function V2Navbar() {
  const pathname = usePathname();
  const nav = buildNav("v2", pathname);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const barClassName = cn(
    "flex min-h-[3.75rem] items-center justify-between gap-4 rounded-[24px] border px-4 sm:px-6",
    "bg-white/72 text-gmup-navy backdrop-blur-md",
    "border-gmup-teal/15",
    "transition-all duration-300 ease-out",
    scrolled && "border-gmup-teal/25 bg-white/85 backdrop-blur-lg",
  );

  const panelClassName = cn(
    "rounded-[22px] border border-gmup-teal/15 bg-white/88 backdrop-blur-md",
    scrolled && "border-gmup-teal/20 bg-white/90",
  );

  return (
    <header className="sticky top-0 z-50 pt-3 pb-2">
      <Container>
        <div className={barClassName}>
          <Link
            href={nav.home}
            className="flex shrink-0 items-center gap-2.5 rounded-xl py-1 pr-2 transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gmup-teal/40 sm:gap-3"
          >
            <Image
              src="/logo.png"
              alt="Logo GMUP"
              width={40}
              height={40}
              className="h-auto w-auto rounded-lg border border-gmup-teal/15 bg-white object-contain"
              priority
            />
            <span className={cn(typography.nav, "text-heading")}>
              GMUP
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Navigation principale"
          >
            <NavLink href={nav.home} current={nav.items[0].current}>
              Accueil
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                className={cn(
                  typography.nav,
                  "relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-secondary transition-colors duration-200",
                  "hover:text-gmup-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gmup-teal/40",
                  nav.isAgendaActive && [
                    "bg-gmup-teal-soft/80 text-gmup-teal",
                    "after:absolute after:inset-x-3 after:-bottom-px after:h-0.5 after:rounded-full",
                    "after:bg-gradient-to-r after:from-gmup-teal after:to-gmup-mint",
                  ],
                )}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                onClick={() => setDropdownOpen((value) => !value)}
              >
                Agenda événements
                <span
                  aria-hidden
                  className={cn(
                    "border-x-[5px] border-t-[6px] border-x-transparent border-t-gmup-teal/70 transition-transform duration-200",
                    dropdownOpen && "rotate-180",
                  )}
                />
              </button>

              <ul
                role="menu"
                className={cn(
                  "absolute top-[calc(100%+0.5rem)] left-1/2 min-w-[19rem] -translate-x-1/2 py-2 transition-all duration-200",
                  panelClassName,
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
                      className={cn(
                        typography.body,
                        "block px-4 py-2.5 leading-snug text-secondary transition-colors",
                        "hover:bg-gmup-teal-soft/45 hover:text-gmup-teal",
                        "focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gmup-teal/40",
                        event.current && "bg-gmup-teal-soft/60 text-gmup-teal",
                      )}
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

            <NavLink href={nav.blog} current={nav.items[1].current}>
              Blog
            </NavLink>
          </nav>

          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-xl text-gmup-navy transition-colors md:hidden",
              "hover:bg-gmup-teal-soft/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gmup-teal/40",
            )}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="v2-mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative h-4 w-[1.35rem]" aria-hidden>
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-full rounded-full bg-gmup-navy transition duration-200",
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 rounded-full bg-gmup-navy transition duration-200",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-full rounded-full bg-gmup-navy transition duration-200",
                  open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0",
                )}
              />
            </span>
          </button>
        </div>

        <nav
          id="v2-mobile-nav"
          className={cn(
            "mt-2 overflow-hidden p-2 transition-all duration-300 md:hidden",
            panelClassName,
            open
              ? "visible max-h-[28rem] translate-y-0 opacity-100"
              : "invisible max-h-0 -translate-y-1 border-transparent bg-transparent p-0 opacity-0 shadow-none backdrop-blur-none",
          )}
          aria-label="Navigation mobile"
          aria-hidden={!open}
        >
          <MobileNavLink
            href={nav.home}
            current={nav.items[0].current}
            onNavigate={() => setOpen(false)}
          >
            Accueil
          </MobileNavLink>

          <div className="px-1 py-1">
            <span className={cn("block px-4 py-2", typography.eyebrow)}>
              Agenda événements
            </span>
            {nav.events.map((event) => (
              <MobileNavLink
                key={event.href}
                href={event.href}
                current={event.current}
                className="py-3 pl-6 leading-snug"
                onNavigate={() => setOpen(false)}
              >
                {event.label}
              </MobileNavLink>
            ))}
          </div>

          <MobileNavLink
            href={nav.blog}
            current={nav.items[1].current}
            onNavigate={() => setOpen(false)}
          >
            Blog
          </MobileNavLink>
        </nav>
      </Container>
    </header>
  );
}
