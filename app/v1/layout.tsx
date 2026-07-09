import type { Metadata } from "next";

import { SiteShell } from "@/components/layout";
import { MotionProvider } from "@/providers/motion-provider";
import { SITE } from "@/lib/content";
import { typography } from "@/lib/typography";
import { cn } from "@/utils/cn";

export const metadata: Metadata = {
  title: {
    default: `Accueil | ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
};

export default function V1Layout({ children }: { children: React.ReactNode; }) {
  return (
    <div
      className={cn(
        "hidden v1-page-bg [--container-max:1100px] [--nav-bg:#0a1d43] [--nav-text:#ffffff] font-body text-gmup-text antialiased",
        typography.body,
      )}
    >
      <MotionProvider>
        <SiteShell variant="v1">{children}</SiteShell>
      </MotionProvider>
    </div>
  );
}
