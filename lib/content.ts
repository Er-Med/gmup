export type SiteVariant = "v1" | "v2";

export type BureauMember = {
  initials: string;
  role: string;
  name: string;
};

export type BlogPost = {
  slug: string;
  date: string;
  dateTime: string;
  title: string;
  excerpt: string;
};

export type Event = {
  slug: string;
  title: string;
  shortTitle: string;
  date: string;
  location: string;
  eventType: string;
  programmeImage: string;
  excerpt?: string;
};

export const SITE = {
  name: "GMUP",
  fullName: "Groupe Marocain des Urgences Pédiatriques",
  description:
    "Groupe Marocain des Urgences Pédiatriques — Mot du Président et Bureau.",
  locale: "fr",
  facebook: "https://www.facebook.com/",
  linkedin: "https://www.linkedin.com/",
  instagram: "https://www.instagram.com/",
  organizer: {
    name: "Agence organisatrice, ARKAYN HEALTH",
    phone: "+212665730530",
    phoneDisplay: "(+212 6 65 73 05 30)",
    email: "chadia.haji@arkaynhealth.org",
    website: "http://www.arkaynhealth.org",
  },
} as const;

export const PRESIDENT_MESSAGE = {
  label: "Mot de la Présidente",
  heroLabel: "Mot du Président",
  heading: "Un engagement pour l'avenir des urgences pédiatriques au Maroc",
  excerpt:
    "La médecine d'urgence pédiatrique mérite une reconnaissance à la hauteur de son rôle essentiel dans notre système de santé. Le GMUP œuvre pour renforcer la formation, harmoniser les pratiques et fédérer les professionnels afin d'améliorer la prise en charge des enfants en situation d'urgence partout au Maroc.",
  ctaLabel: "Lire le message complet",
  heroPrimaryCta: "Découvrir le GMUP",
  heroSecondaryCta: "Nos activités",
  portraitAlt: "Portrait de Dr Widad Gueddari, Présidente du GMUP",
  portraitSrc: "/president-widad-gueddari.png",
  signatureName: "Dr Widad GUEDDARI",
  signatureRole: "Présidente du GMUP",
} as const;

export const PRESIDENT_LETTER = {
  paragraphs: [
    "La médecine d'urgence en pédiatrie n'est pas encore reconnue comme sous-spécialité au Maroc, comme c'est le cas dans des pays anglophones et certains pays européens. Toutefois, certains Centres Hospitaliers Universitaires marocains, notamment les plus anciens, ont ressenti l'importance de la mise en place d'un Service d'Accueil des Urgences Pédiatriques (SAUP) avec une équipe aussi bien médicale que paramédicale dédiée uniquement à l'accueil et à la prise en charge des enfants consultants en urgence.",
    "Cette individualisation des locaux et du personnel pour les urgences pédiatriques ne s'est pas accompagnée par l'élaboration des normes concernant la définition des rôles (service des urgences et services d'hospitalisation), de l'architecture des locaux nécessaires, de l'organisation interne selon le niveau des soins demandés, ni de la définition des profils (médical et paramédical) qui devraient y travailler.",
    "Les pédiatres des urgences se sentent souvent dépassés et non valorisés, malgré les efforts énormes qu'ils fournissent ; seuls ceux qui y travaillent le savent. Il y a heureusement de jeunes médecins qui demandent à se former pour pouvoir identifier les vraies urgences, les prendre en charge rapidement et d'une façon adéquate.",
    "La création du Groupe Marocain des Urgences Pédiatriques (GMUP) est venue répondre essentiellement à ce besoin en formation, et vise à réunir les différents pédiatres et urgentistes qui s'occupent de la prise en charge des urgences pédiatriques. Cette action sera bénéfique grâce au partage des expériences, à l'harmonisation des protocoles et procédures de prise en charge, et à l'élaboration de référentiels nationaux avec les sociétés savantes et les instances responsables. Tout cela permettra certainement de valoriser l'activité des services des urgences, d'identifier les points de force et de faiblesse et d'améliorer la prise en charge des enfants malades dès leur arrivée dans un service d'urgences.",
    "Nous espérons, qu'avec l'effort de tous, faire reconnaître la médecine d'urgence en pédiatrie en tant que sous-spécialité pédiatrique et la rendre plus attractive.",
  ],
  president: {
    initials: "WG",
    role: "Présidente",
    name: "Dr Widad GUEDDARI",
    note: "Présidente du Groupe Marocain des Urgences Pédiatriques",
  },
} as const;

export const BUREAU_MEMBERS: BureauMember[] = [
  { initials: "WG", role: "Présidente", name: "W. Gueddari" },
  { initials: "ND", role: "Vice-Présidente", name: "N. Dini" },
  { initials: "LK", role: "Secrétaire Générale", name: "L. Karboubi" },
  { initials: "WK", role: "Secrétaire Générale Adjointe", name: "W. Kojmane" },
  { initials: "NM", role: "Trésorier", name: "N. Mekaoui" },
  { initials: "WL", role: "Vice-Trésorier", name: "W. Lahmini" },
];

export const ADVISORS =
  "M. Borrous · M. El-Bouz · Y. Jeddi · Fz. El Amrani Idrissi · N. Benbouziane";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "triage-pediatrique",
    date: "12 mars 2025",
    dateTime: "2025-03-12",
    title: "Triage pédiatrique : retour sur les recommandations nationales",
    excerpt:
      "Synthèse des échanges tenus lors de la dernière session du GMUP sur l'harmonisation des échelles de tri dans les services d'urgence pédiatriques marocains.",
  },
  {
    slug: "intoxications-pediatriques",
    date: "28 janvier 2025",
    dateTime: "2025-01-28",
    title: "Intoxications pédiatriques : outils d'aide à la décision",
    excerpt:
      "Présentation des fiches pratiques élaborées par le groupe de travail toxicologie, destinées aux équipes des urgences pédiatriques.",
  },
  {
    slug: "compte-rendu-2eme-journee",
    date: "5 novembre 2024",
    dateTime: "2024-11-05",
    title: "Compte rendu de la 2ème journée d'urgences pédiatriques",
    excerpt:
      "Retour sur les conférences et ateliers de la journée scientifique : réanimation, voies aériennes et gestion des flux aux urgences pédiatriques.",
  },
];

export const EVENTS: Event[] = [
  {
    slug: "2eme-journee-urgences-pediatriques",
    title: "2ème journée d'urgences pédiatriques",
    shortTitle: "2ème journée",
    date: "14 septembre 2024",
    location: "Casablanca",
    eventType: "Journée scientifique",
    programmeImage: "/programme-2eme.jpg",
    excerpt:
      "Journée scientifique dédiée aux urgences pédiatriques : réanimation, voies aériennes et gestion des flux.",
  },
  {
    slug: "3eme-journee-urgences-pediatriques",
    title: "3ème journée d'urgences pédiatriques",
    shortTitle: "3ème journée",
    date: "25 octobre 2025",
    location: "Hôtel Barceló Anfa, Casablanca",
    eventType: "Journée scientifique",
    programmeImage: "/programme-3eme.jpg",
    excerpt:
      "Affiche de l'édition 2025 et best-of de la journée SAUP Casablanca.",
  },
];

export function getEvent(slug: string) {
  return EVENTS.find((event) => event.slug === slug);
}

export function eventPath(variant: SiteVariant, slug: string) {
  return `/${variant}/evenements/${slug}`;
}

export function homePath(variant: SiteVariant) {
  return `/${variant}`;
}

export function blogPath(variant: SiteVariant) {
  return `/${variant}/blog`;
}

export function presidentMessagePath(variant: SiteVariant) {
  return `/${variant}/mot-de-la-presidente`;
}
