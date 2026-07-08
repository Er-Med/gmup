# GMUP — Version 1 (Clean Medical / Corporate)

Proposition visuelle n°1 pour le site GMUP.

## Contenu

Pages principales :

| Page | Fichier | Contenu |
|------|---------|---------|
| Accueil | `index.html` | Mot du Président + Bureau |
| Blog | `blog.html` | Grille de cartes articles |

Les événements sont accessibles depuis le menu **Agenda événements** (2<sup>e</sup> et 3<sup>e</sup> journée d'urgences pédiatriques).

## Design

- Beaucoup de blanc, Poppins, cartes ombrées / coins arrondis
- Palette : bleu `#0B5ED7` (navbar + accents), blanc, gris clair
- Agenda via **menu déroulant** dans la navbar (comme le site actuel)
- Navbar : fond bleu, texte noir, logo à gauche, burger mobile

## Lancer

Ouvrir `index.html` dans le navigateur, ou servir le dossier :

```bash
npx serve version-1
```

## Placeholders à remplacer

- `[TEXTE MOT DU PRÉSIDENT]`, `[NOM DU PRÉSIDENT]`
- `[LISTE BUREAU]` / `[POSTE n]` / `[NOM MEMBRE n]`
- `[ÉVÉNEMENT n — TITRE|DESCRIPTION|DATE|LIEN]`
- `[TITRE|DATE|EXTRAIT ARTICLE n]`
