"use client";



import Image from "next/image";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";



import { Container } from "@/components/layout/container";

import { buildNav } from "@/lib/navigation";

import type { SiteVariant } from "@/lib/content";

import { typography } from "@/lib/typography";

import { cn } from "@/utils/cn";



type NavbarProps = {

  variant: SiteVariant;

};



const linkBase =

  "relative py-1.5 transition-[opacity,color] duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/40";



const activeUnderline =

  "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-current after:opacity-90";



export function Navbar({ variant }: NavbarProps) {

  const pathname = usePathname();

  const nav = buildNav(variant, pathname);

  const [open, setOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);



  useEffect(() => {

    function onScroll() {

      setScrolled(window.scrollY > 8);

    }



    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);

  }, []);



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

        "sticky top-0 z-50 border-b bg-[var(--nav-bg)] text-[var(--nav-text)] transition-[border-color,backdrop-filter,background-color] duration-300",

        variant === "v1"

          ? cn(

              "border-gmup-border-light/30 backdrop-blur-sm",

              scrolled && "border-gmup-border-light/50 backdrop-blur-md",

            )

          : "border-white/8",

        open && "is-open",

      )}

    >

      <Container className="flex min-h-[4.5rem] items-center justify-between gap-6 md:min-h-[4.75rem]">

        <Link

          href={nav.home}

          className={cn(

            "flex items-center gap-3 tracking-[-0.01em] transition-opacity duration-200 hover:opacity-90",

            typography.nav,

            "text-[1.0625rem] font-semibold",

          )}

        >

          <Image

            src="/logo.png"

            alt="Logo GMUP"

            width={42}

            height={42}

            className="h-auto w-auto rounded-lg bg-white object-contain"

            priority

          />

          <span>GMUP</span>

        </Link>



        <nav

          className="hidden items-center gap-9 md:flex"

          aria-label="Navigation principale"

        >

          <Link

            href={nav.home}

            aria-current={nav.items[0].current ? "page" : undefined}

            className={cn(

              linkBase,

              typography.nav,

              nav.items[0].current && activeUnderline,

            )}

          >

            Accueil

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

                typography.nav,

                "inline-flex items-center gap-1.5 uppercase tracking-[0.06em]",

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

                "absolute top-[calc(100%+0.75rem)] left-1/2 min-w-[19rem] -translate-x-1/2 rounded-lg border border-white/15 bg-[var(--nav-bg)] py-1.5 transition-[opacity,transform,visibility] duration-200",

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

                    className="block px-4 py-2.5 text-sm leading-snug whitespace-nowrap transition-colors duration-200 hover:bg-white/8 aria-[current=page]:bg-white/10"

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

            className={cn(

              linkBase,

              typography.nav,

              nav.items[1].current && activeUnderline,

            )}

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

          className={cn(

            "block px-5 py-4 font-medium transition-colors duration-200 aria-[current=page]:bg-white/10",

            typography.nav,

          )}

        >

          Accueil

        </Link>

        <div className="pb-1">

          <span className="block px-5 pt-4 pb-2 text-xs font-medium tracking-[0.12em] uppercase opacity-60">

            Agenda événements

          </span>

          {nav.events.map((event) => (

            <Link

              key={event.href}

              href={event.href}

              aria-current={event.current ? "page" : undefined}

              className="block py-3.5 pr-5 pl-8 text-sm leading-snug transition-colors duration-200 aria-[current=page]:bg-white/10"

            >

              {event.label}

            </Link>

          ))}

        </div>

        <Link

          href={nav.blog}

          aria-current={nav.items[1].current ? "page" : undefined}

          className={cn(

            "block px-5 py-4 font-medium transition-colors duration-200 aria-[current=page]:bg-white/10",

            typography.nav,

          )}

        >

          Blog

        </Link>

      </nav>

    </header>

  );

}


