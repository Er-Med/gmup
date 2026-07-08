import type { Metadata } from "next";

import { V2Blog } from "@/components/v2/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog du Groupe Marocain des Urgences Pédiatriques.",
};

export default function V2BlogPage() {
  return <V2Blog />;
}
