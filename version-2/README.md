# GMUP — Version 2 (Éditorial / Moderne)

Proposition visuelle n°2 pour le site GMUP.

## Contenu

Pages principales :

| Page | Fichier | Contenu |
|------|---------|---------|
| Accueil | `index.html` | Mot du Président + Bureau |
| Blog | `blog.html` | Blocs texte + image en alternance |

Les événements sont accessibles depuis le menu **Agenda événements** (2<sup>e</sup> et 3<sup>e</sup> journée d'urgences pédiatriques).

## Design

- Accueil : hero full-bleed (marque GMUP dominante), puis Mot de la Présidente, médias, Bureau
- Mise en page asymétrique, grande typographie (Fraunces + DM Sans)
- Moins de cartes : listes éditoriales, blocs alternés
- Palette : noir + blanc + gris
- Agenda via **menu déroulant** dans la navbar (comme le site actuel)
- Navbar : fond noir, texte blanc, logo, Accueil / Blog

## Lancer

```bash
npx serve version-2
```

Ou ouvrir `index.html` dans le navigateur.

## Placeholders à remplacer

Mêmes marqueurs que la Version 1 (`[TEXTE MOT DU PRÉSIDENT]`, `[ÉVÉNEMENT n]`, etc.).
