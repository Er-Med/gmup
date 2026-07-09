"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { useIsMobile } from "@/hooks";
import { cn } from "@/utils/cn";

type AnimatedBannerProps = {
  src: string;
  alt: string;
  className?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function AnimatedBanner({ src, alt, className }: AnimatedBannerProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const simple = prefersReducedMotion || isMobile;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    simple ? [0, 0] : [0, 72],
  );
  const parallaxScale = useTransform(
    scrollYProgress,
    [0, 1],
    simple ? [1, 1] : [1, 1.06],
  );
  const parallaxOpacity = useTransform(
    scrollYProgress,
    [0, 0.85],
    simple ? [1, 1] : [1, 0.72],
  );

  return (
    <section
      ref={sectionRef}
      aria-label="Bannière"
      className={cn("w-full p-0", className)}
    >
      <motion.div
        className="relative w-full overflow-hidden leading-none bg-transparent"
        initial={
          prefersReducedMotion
            ? false
            : simple
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  y: 28,
                  clipPath: "inset(8% 0% 12% 0%)",
                }
        }
        animate={
          simple
            ? { opacity: 1 }
            : {
                opacity: 1,
                y: 0,
                clipPath: "inset(0% 0% 0% 0%)",
              }
        }
        transition={{ duration: simple ? 0.4 : 1.15, ease }}
      >
        {simple ? (
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={720}
            sizes="100vw"
            className="block h-auto w-full object-cover object-center"
            priority
          />
        ) : (
          <>
            <motion.div
              style={{ y: parallaxY, scale: parallaxScale, opacity: parallaxOpacity }}
              className="origin-center will-change-transform"
            >
              <motion.div
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, ease }}
                className="origin-center"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={1920}
                  height={720}
                  sizes="100vw"
                  className="block h-auto w-full object-cover object-center"
                  priority
                />
              </motion.div>
            </motion.div>

            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              initial={{ x: "-120%", opacity: 0 }}
              animate={{ x: "120%", opacity: [0, 0.7, 0] }}
              transition={{ duration: 1.35, ease, delay: 0.35 }}
            />
          </>
        )}
      </motion.div>
    </section>
  );
}
