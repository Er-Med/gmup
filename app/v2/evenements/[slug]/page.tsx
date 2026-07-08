import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { V2EventDetail } from "@/components/v2/event-detail";
import { EVENTS, getEvent } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return EVENTS.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);

  if (!event) return { title: "Événement" };

  return {
    title: event.title,
    description: `${event.title} — programme et inscription.`,
  };
}

export default async function V2EventPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getEvent(slug);

  if (!event) notFound();

  return <V2EventDetail event={event} variant="v2" />;
}
