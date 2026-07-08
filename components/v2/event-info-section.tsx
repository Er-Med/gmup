import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/reveal";
import type { Event } from "@/lib/content";
import { typography } from "@/lib/typography";
import { cn } from "@/utils/cn";

type EventInfoSectionProps = {
  event: Event;
  className?: string;
};

type InfoItemProps = {
  icon: ReactNode;
  label: string;
  value: string;
  className?: string;
};

function InfoItem({ icon, label, value, className }: InfoItemProps) {
  return (
    <div
      className={cn(
        "flex gap-3.5 rounded-xl border border-gmup-teal/15 bg-white p-4 transition-colors hover:border-gmup-teal/30",
        className,
      )}
    >
      <div
        className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gmup-teal/10 text-gmup-teal"
        aria-hidden
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className={typography.eyebrow}>{label}</p>
        <p className={cn("mt-1 leading-snug", typography.label, "text-heading")}>{value}</p>
      </div>
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function EventTypeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function DescriptionIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="17" y1="10" x2="3" y2="10" />
      <line x1="21" y1="6" x2="3" y2="6" />
      <line x1="21" y1="14" x2="3" y2="14" />
      <line x1="17" y1="18" x2="3" y2="18" />
    </svg>
  );
}

export function EventInfoSection({ event, className }: EventInfoSectionProps) {
  return (
    <Reveal delay={0.06}>
      <section
        aria-label="Informations sur l'événement"
        className={cn("mb-12 md:mb-14", className)}
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <InfoItem icon={<CalendarIcon />} label="Date" value={event.date} />
          <InfoItem icon={<LocationIcon />} label="Lieu" value={event.location} />
          <InfoItem icon={<EventTypeIcon />} label="Type" value={event.eventType} />
        </div>
        {event.excerpt && (
          <InfoItem
            className="mt-3"
            icon={<DescriptionIcon />}
            label="À propos"
            value={event.excerpt}
          />
        )}
      </section>
    </Reveal>
  );
}
