import type { Metadata } from "next";

import { PresidentMessagePageContent } from "@/components/v1/president-message-page";
import { PRESIDENT_MESSAGE } from "@/lib/content";

export const metadata: Metadata = {
  title: PRESIDENT_MESSAGE.label,
  description: PRESIDENT_MESSAGE.excerpt,
};

export default function PresidentMessagePage() {
  return <PresidentMessagePageContent />;
}
