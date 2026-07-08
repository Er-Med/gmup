import type { Metadata } from "next";

import { V1Blog } from "@/components/v1/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog du Groupe Marocain des Urgences Pédiatriques.",
};

export default function V1BlogPage() {
  return <V1Blog />;
}
