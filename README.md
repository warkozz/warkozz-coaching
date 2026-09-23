# WarkozZ Coaching — v2

Site vitrine d'une activité de coaching CS2 : coachs, formations et tarifs, communauté, galerie, tips gratuits et quiz de niveau.
Construit avec [Astro](https://astro.build) (build statique, 0 JS par défaut).

## Démarrer

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
npm run preview  # prévisualise le build
```

## Structure

```
src/
├── layouts/BaseLayout.astro      Head/SEO, header, footer, slot
├── components/
│   ├── layout/                   Header, Footer, Logo, PageHero
│   ├── ui/                       Button, Card, Badge, Tag, SectionHead, Icon
│   └── sections/                 CoachCard, PricingCard, StatsBento, VideoFacade, CtaBanner
├── content/
│   ├── site.ts                   Nom, navigation, liens sociaux, colonnes du footer
│   ├── coachs.ts · pricing.ts · faq.ts · quiz.ts · community.ts · gallery.ts
│   └── tips/*.md                 Un fichier Markdown par tip (content collection)
├── pages/                        index, coachs, formations, communaute, galerie, quiz, login, tips/
└── styles/                       tokens.css (couleurs, rayons, polices), base.css, utilities.css
public/                           favicon, images/, videos/
```

## Modifier le contenu

- **Textes, tarifs, coachs, FAQ, quiz** : édite les fichiers de `src/content/` — pas besoin de toucher aux pages.
- **Ajouter un tip** : crée `src/content/tips/mon-tip.md` avec le frontmatter `title`, `order`, `category`, `excerpt`.
- **Ajouter une page** : crée `src/pages/ma-page.astro` en utilisant `BaseLayout` et `PageHero`, puis ajoute le lien dans `navLinks` (`src/content/site.ts`).
- **Design** : les couleurs et rayons sont dans `src/styles/tokens.css`.

## À compléter avant la mise en ligne

- `formations.astro` : brancher le widget Cal.com à l'emplacement `booking__slot`.
- `content/community.ts` : ID des vraies vidéos YouTube, lien Twitch et chaîne YouTube.
- `content/gallery.ts` : vraies images dans `public/images/` (.webp recommandé).
- `content/coachs.ts` : vraies structures, accomplissements et liens (Steam, Twitch, YouTube).
- `login.astro` : formulaire non branché à un backend, à relier à un vrai système d'authentification.
- Ne pas réutiliser de photos de joueurs pro protégées par le droit d'auteur.
- Ajouter le sitemap (`@astrojs/sitemap`) une fois l'URL de production connue.
