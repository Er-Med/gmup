import type { Metadata } from "next";

import { SITE } from "@/lib/content";
import { ibmPlexSerif, inter, plusJakartaSans } from "@/lib/fonts";
import { cn } from "@/utils/cn";

import "./globals.css";

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={SITE.locale}
      className={cn(
        "h-full scroll-smooth",
        plusJakartaSans.variable,
        ibmPlexSerif.variable,
        inter.variable,
      )}
    >
      <body className={cn("min-h-full font-sans antialiased", plusJakartaSans.className)}>
        {children}
      </body>
    </html>
  );
}
