import Link from "next/link";

import { Container } from "@/components/layout/container";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#fafafa] px-5 py-16 text-[#121212]">
      <Container className="max-w-2xl text-center">
        <p className="text-sm font-semibold tracking-[0.18em] text-[#5c5c5c] uppercase">
          GMUP
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.02em] sm:text-5xl">
          Choisir une version du site
        </h1>
        <p className="mt-4 text-lg font-normal leading-[1.7] text-[#5c5c5c]">
          Deux maquettes HTML recréées en Next.js avec Tailwind CSS et Framer
          Motion.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link
            href="/v1"
            className="rounded-xl border border-[#d4d4d4] bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#111111] hover:shadow-md"
          >
            <p className="text-xs font-bold tracking-[0.14em] text-[#5c5c5c] uppercase">
              Version 1
            </p>
            <h2 className="mt-2 text-xl font-bold tracking-[-0.01em]">Corporate / médical</h2>
            <p className="mt-2 text-sm font-normal leading-[1.55] text-[#5c5c5c]">
              Plus Jakarta Sans, cartes, grille bureau — proche de la maquette classique.
            </p>
          </Link>

          <Link
            href="/v2"
            className="rounded-xl border border-[#0a0a0a] bg-[#0a0a0a] p-6 text-left text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-xs font-bold tracking-[0.14em] text-white/60 uppercase">
              Version 2
            </p>
            <h2 className="mt-2 text-xl font-bold tracking-[-0.01em]">Éditorial / moderne</h2>
            <p className="mt-2 text-sm font-normal leading-[1.55] text-white/70">
              Hero plein écran, typo Plus Jakarta Sans, animations Framer Motion.
            </p>
          </Link>
        </div>
      </Container>
    </div>
  );
}
