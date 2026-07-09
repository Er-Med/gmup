"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Container } from "@/components/layout/container";
import { SocialLinks } from "@/components/layout/social-icons";
import { useIsMobile } from "@/hooks";
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

const HIDE_AT = 72;
const SHOW_AT = 16;

export function Navbar({ variant }: NavbarProps) {
  const pathname = usePathname();
  const nav = buildNav(variant, pathname);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [logoHidden, setLogoHidden] = useState(false);

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

  function updateLogoVisibility(scrollY: number) {
    setLogoHidden((hidden) => {
      if (!hidden && scrollY > HIDE_AT) return true;
      if (hidden && scrollY < SHOW_AT) return false;
      return hidden;
    });
  }

  useLenis((lenis) => {
    updateLogoVisibility(lenis.scroll);
  });

  useEffect(() => {
    function onScroll() {
      updateLogoVisibility(window.scrollY);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-[var(--nav-bg)] text-[var(--nav-text)]",
        open && "is-open",
      )}
    >
      <motion.div
        initial={false}
        animate={
          logoHidden
            ? { height: 0, opacity: 0 }
            : { height: "auto", opacity: 1 }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : {
                duration: isMobile ? 0.25 : 0.45,
                ease: [0.22, 1, 0.36, 1],
              }
        }
        className="overflow-hidden bg-white"
        aria-hidden={logoHidden}
      >
        <Container className="flex items-center justify-center py-4 md:py-5">
          <Link
            href={nav.home}
            tabIndex={logoHidden ? -1 : undefined}
            className="transition-opacity duration-200 hover:opacity-90"
          >
            <Image
              src="/logo-ar-fr.svg"
              alt="Logo GMUP — Groupe Marocain des Urgences Pédiatriques"
              width={420}
              height={186}
              className="h-24 w-auto object-contain sm:h-28 md:h-32 lg:h-36"
              priority
            />
          </Link>
        </Container>
      </motion.div>

      <Container className="relative flex min-h-[4.5rem] items-center justify-between gap-6 md:min-h-[5rem]">
        <Link
          href={nav.home}
          className="relative z-10 flex shrink-0 items-center gap-2.5 transition-opacity duration-200 hover:opacity-90"
        >
          <Image
            src="/short-logo.svg"
            alt=""
            width={72}
            height={72}
            className="h-12 w-auto object-contain md:h-14"
            aria-hidden
          />
          <span
            className={cn(
              typography.nav,
              "text-[1.375rem] font-bold tracking-[0.04em] text-white md:text-[1.5rem]",
            )}
          >
            {SITE.name}
          </span>
        </Link>

        <nav
          className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 lg:gap-10 md:flex"
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

        <SocialLinks className="relative z-10 ml-auto hidden md:flex" />

        <button
          type="button"
          className="relative z-10 ml-auto inline-flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40 md:hidden"
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
        <div className="border-t border-white/10 px-5 py-4">
          <SocialLinks />
        </div>
      </nav>
    </header>
  );
}
