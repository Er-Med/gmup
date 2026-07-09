import { Carlito, IBM_Plex_Serif, Inter, Plus_Jakarta_Sans } from "next/font/google";

/** Metric-compatible Calibri substitute for non-Windows browsers. */
export const carlito = Carlito({
  variable: "--font-carlito",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});
