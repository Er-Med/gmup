"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { cn } from "@/utils/cn";

type AnimatedBannerProps = {
  src: string;
  alt: string;
  className?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function AnimatedBanner({ src, alt, className }: AnimatedBannerProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, 72],
  );
  const parallaxScale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : [1, 1.06],
  );
  const parallaxOpacity = useTransform(
    scrollYProgress,
    [0, 0.85],
    prefersReducedMotion ? [1, 1] : [1, 0.72],
  );

  return (
    <section
      ref={sectionRef}
      aria-label="Bannière"
      className={cn("w-full p-0 md:pb-10", className)}
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] md:px-5">
        <motion.div
          className={cn(
            "relative w-full overflow-hidden leading-none",
            "md:rounded-b-[1.75rem] lg:rounded-b-[2rem]",
            "bg-transparent",
          )}
          initial={
            prefersReducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 28,
                  clipPath: "inset(12% 8% 18% 8% round 1.5rem)",
                }
          }
          animate={{
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0% round 0rem)",
          }}
          transition={{ duration: 1.15, ease }}
        >
          <motion.div
            style={{ y: parallaxY, scale: parallaxScale, opacity: parallaxOpacity }}
            className="origin-center will-change-transform"
          >
            <motion.div
              initial={prefersReducedMotion ? false : { scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.6, ease }}
              className="origin-center"
            >
              <Image
                src={src}
                alt={alt}
                width={1920}
                height={720}
                sizes="(max-width: 768px) 100vw, (max-width: 1180px) calc(100vw - 2.5rem), 1180px"
                className="block h-auto w-full object-contain object-center"
                priority
              />
            </motion.div>
          </motion.div>

          {!prefersReducedMotion && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              initial={{ x: "-120%", opacity: 0 }}
              animate={{ x: "120%", opacity: [0, 0.7, 0] }}
              transition={{ duration: 1.35, ease, delay: 0.35 }}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
