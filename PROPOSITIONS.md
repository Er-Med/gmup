# Propositions design GMUP

Deux maquettes HTML/CSS/JS indépendantes pour comparer et choisir avant intégration.

| Dossier | Style | Agenda |
|---------|-------|--------|
| [`version-1/`](./version-1/) | Clean Medical / Corporate (Poppins, cartes, blanc) | Timeline verticale |
| [`version-2/`](./version-2/) | Éditorial / Moderne (Fraunces, asymétrique) | Grille de cartes |

## Stack choisie

**HTML + CSS + JS vanilla** (pas de React/Next pour ces maquettes).

Pourquoi : comparaison visuelle immédiate sans build, dossiers vraiment indépendants, placeholders faciles à éditer. Une fois le design choisi, on pourra le porter sur le projet Next.js existant à la racine.

## Pages (strictement 3)

1. **Accueil** — Mot du Président + Bureau uniquement
2. **Agenda** — Événements (placeholders `[ÉVÉNEMENT n]`)
3. **Blog** — Liste d’articles (structure prête)

## Navbar (identique sur les 2)

- Fond bleu `#0B5ED7`
- Texte noir `#111`
- Logo GMUP à gauche
- Liens : Accueil / Agenda / Blog
- Burger mobile (bleu + texte noir conservés)

## Footer

Logo · lien Facebook · `© 2025 GMUP. Tous droits réservés.`

## Prévisualiser

```bash
npx serve version-1
npx serve version-2
```

## Prochaine étape

Coller les textes réels à la place des marqueurs jaunes `[…]`, puis choisir la version à intégrer dans l’app Next.js.
