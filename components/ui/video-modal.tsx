"use client";

import Image from "next/image";
import { useEffect, useId, useRef } from "react";

import { cn } from "@/utils/cn";
import { typography } from "@/lib/typography";

type VideoModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  youtubeId?: string;
  mp4Src?: string;
};

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.04-6.86a1 1 0 0 0 0-1.72L9.5 4.28A1 1 0 0 0 8 5.14Z" />
    </svg>
  );
}

export function VideoModal({
  open,
  onClose,
  title,
  youtubeId,
  mp4Src,
}: VideoModalProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();
    document.documentElement.classList.add("overflow-hidden");

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const hasYoutube = Boolean(youtubeId);
  const hasMp4 = Boolean(mp4Src);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-gmup-navy/85 backdrop-blur-sm"
        aria-label="Fermer la vidéo"
        onClick={onClose}
      />

      <div
        className="relative z-10 w-full max-w-4xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="mb-3 flex items-center justify-between gap-4 px-1">
          <h3
            id={titleId}
            className={cn(typography.h3, "text-white")}
          >
            {title}
          </h3>
          <button
            ref={closeButtonRef}
            type="button"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-white/40 hover:bg-white/20"
            aria-label="Fermer"
            onClick={onClose}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gmup-teal/30 bg-black">
          {hasYoutube ? (
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          ) : hasMp4 ? (
            <video
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="aspect-video w-full bg-black"
            >
              <source src={mp4Src} type="video/mp4" />
              Votre navigateur ne prend pas en charge la lecture vidéo.
            </video>
          ) : (
            <div className="flex aspect-video items-center justify-center bg-gmup-navy/90 text-white/70">
              Vidéo indisponible.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function VideoPreviewButton({
  thumbnailSrc,
  label,
  className,
  onClick,
}: {
  thumbnailSrc: string;
  label: string;
  className?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={cn(
        "relative block h-full w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gmup-mint",
        className,
      )}
      aria-label={label}
      onClick={onClick}
    >
      <Image
        src={thumbnailSrc}
        alt=""
        aria-hidden
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />

      <span
        className="absolute inset-0 bg-gradient-to-t from-gmup-navy/70 via-gmup-navy/20 to-gmup-navy/10 transition duration-300 group-hover:from-gmup-navy/80"
        aria-hidden
      />

      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-2 border-white/25 bg-gmup-mint/95 text-gmup-navy transition-colors duration-300 group-hover:bg-gmup-mint sm:h-20 sm:w-20">
          <PlayIcon className="ml-1 h-7 w-7 sm:h-8 sm:w-8" />
        </span>
      </span>
    </button>
  );
}
