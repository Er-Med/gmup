import { blogPath, eventPath, homePath, type SiteVariant } from "./content";

export type NavItem = {
  label: string;
  href: string;
  current?: boolean;
};

export type NavEvent = {
  label: string;
  href: string;
  current?: boolean;
};

export function buildNav(variant: SiteVariant, pathname: string) {
  const home = homePath(variant);
  const blog = blogPath(variant);
  const events: NavEvent[] = [
    {
      label: "2ème journée d'urgences pédiatriques",
      href: eventPath(variant, "2eme-journee-urgences-pediatriques"),
      current: pathname.includes("2eme-journee"),
    },
    {
      label: "3ème journée d'urgences pédiatriques",
      href: eventPath(variant, "3eme-journee-urgences-pediatriques"),
      current: pathname.includes("3eme-journee"),
    },
  ];

  const isAgendaActive = events.some((event) => event.current);

  return {
    home,
    blog,
    events,
    items: [
      {
        label: variant === "v2" ? "Qui sommes-nous ?" : "Accueil",
        href: home,
        current: pathname === home,
      },
      {
        label: "Blog",
        href: blog,
        current: pathname === blog,
      },
    ] satisfies NavItem[],
    isAgendaActive,
  };
}
