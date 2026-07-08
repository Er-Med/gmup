"use client";

import Image from "next/image";
import { useState } from "react";

import { MediaCard } from "@/components/ui/media-card";
import { VideoModal, VideoPreviewButton } from "@/components/ui/video-modal";
import { RENCONTRE_SPOTLIGHT } from "@/lib/content";

type RencontreVideoProps = {
  className?: string;
};

export function RencontreVideo({ className }: RencontreVideoProps) {
  const [open, setOpen] = useState(false);
  const { video } = RENCONTRE_SPOTLIGHT;

  return (
    <>
      <MediaCard className={className}>
        <VideoPreviewButton
          thumbnailSrc={video.thumbnail}
          label={`Lire la vidéo — ${video.title}`}
          onClick={() => setOpen(true)}
        />
      </MediaCard>

      <VideoModal
        open={open}
        onClose={() => setOpen(false)}
        title={video.title}
        youtubeId={video.youtubeId}
        mp4Src={video.mp4Src}
      />
    </>
  );
}

export function RencontrePoster({ className }: { className?: string }) {
  const { poster } = RENCONTRE_SPOTLIGHT;

  return (
    <MediaCard as="figure" className={className}>
      <div className="flex h-full w-full items-center justify-center p-2 sm:p-3">
        <Image
          src={poster.src}
          alt={poster.alt}
          width={poster.width}
          height={poster.height}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="h-auto w-full max-h-full object-contain md:h-full md:w-auto"
        />
      </div>
    </MediaCard>
  );
}
