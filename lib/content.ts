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
    "La médecine d'urgence en pédiatrie n'est pas encore reconnue comme sous-spécia­lité au Maroc, comme c'est le cas dans des pays anglo­phones et certains pays euro­péens. Toute­fois, certains Centres Hospi­ta­liers Univer­si­taires maro­cains, notam­ment les plus anciens, ont ressenti l'impor­tance de la mise en place d'un Service d'Accueil des Urgences Pédia­triques (SAUP) avec une équipe aussi bien médi­cale que para­mé­di­cale dédiée unique­ment à l'accueil et à la prise en charge des enfants consul­tants en urgence.",
    "Cette indivi­dua­li­sa­tion des locaux et du personnel pour les urgences pédia­triques ne s'est pas accom­pa­gnée par l'élabo­ra­tion des normes concer­nant la défi­ni­tion des rôles (service des urgences et services d'hospi­ta­li­sa­tion), de l'archi­tec­ture des locaux néces­saires, de l'orga­ni­sa­tion interne selon le niveau des soins demandés, ni de la défi­ni­tion des profils (médical et para­mé­dical) qui devraient y travailler.",
    "Les pédia­tres des urgences se sentent souvent dépassés et non valori­sés, malgré les efforts énormes qu'ils four­nissent ; seuls ceux qui y travaillent le savent. Il y a heureu­se­ment de jeunes médecins qui demandent à se former pour pouvoir iden­ti­fier les vraies urgences, les prendre en charge rapi­de­ment et d'une façon adéquate.",
    "La création du Groupe Marocain des Urgences Pédia­triques (GMUP) est venue répondre essen­tiel­le­ment à ce besoin en forma­tion, et vise à réunir les diffé­rents pédia­tres et urgen­tistes qui s'occupent de la prise en charge des urgences pédia­triques. Cette action sera béné­fique grâce au partage des expé­riences, à l'harmo­ni­sa­tion des proto­coles et procé­dures de prise en charge, et à l'élabo­ra­tion de réfé­ren­tiels natio­naux avec les sociétés savantes et les instances respon­sables. Tout cela permettra certa­i­ne­ment de valori­ser l'acti­vité des services des urgences, d'iden­ti­fier les points de force et de faiblesse et d'amé­lio­rer la prise en charge des enfants malades dès leur arrivée dans un service d'urgences.",
    "Nous espérons, qu'avec l'effort de tous, faire recon­naître la médecine d'urgence en pédiatrie en tant que sous-spécia­lité pédia­trique et la rendre plus attrac­tive.",
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
