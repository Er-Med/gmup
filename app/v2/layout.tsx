import type { Metadata } from "next";

import { SiteShell } from "@/components/layout";
import { LenisProvider } from "@/providers/lenis-provider";
import { MotionProvider } from "@/providers/motion-provider";
import { typography } from "@/lib/typography";
import { SITE } from "@/lib/content";
import { cn } from "@/utils/cn";

export const metadata: Metadata = {
  title: {
    default: `Qui sommes-nous ? | ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "v2-page-bg [--container-max:1180px] [--nav-bg:#1a4a8c] [--nav-text:#ffffff] font-sans text-body antialiased",
        typography.body,
      )}
    >
      <LenisProvider>
        <MotionProvider>
          <SiteShell variant="v2">{children}</SiteShell>
        </MotionProvider>
      </LenisProvider>
    </div>
  );
}
