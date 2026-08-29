# WarkozZ Coaching — site vitrine

Site vitrine pour une activité de coaching CS2 : présentation, coachs, formations, galerie et tips gratuits.

## Structure du projet

```
warkozz-coaching/
├── index.html          Page d'accueil
├── coachs.html          Spotlight coach principal (preuve sociale) + toute l'équipe
├── formations.html      Formations, process de réservation et tarifs
├── communaute.html      Twitch, dernières vidéos, communauté Discord partenaire
├── galerie.html          Photos et vidéos
├── tips.html             Tips gratuits
├── login.html            Connexion à l'espace élève
└── assets/
    ├── css/
    │   ├── variables.css    Couleurs, polices, valeurs réutilisées partout
    │   ├── reset.css        Réinitialisation de base du navigateur
    │   ├── base.css         Typographie et conteneurs génériques
    │   ├── buttons.css      Boutons et badges (.btn, .eyebrow)
    │   ├── header.css       En-tête et navigation
    │   ├── footer.css       Pied de page
    │   ├── hero.css         Section hero + hero des pages secondaires
    │   ├── stats.css        Bandeau de statistiques (page d'accueil)
    │   ├── social-proof.css Spotlight coach : stats, structures, accomplissements
    │   ├── pricing.css      Étapes de réservation et grille tarifaire
    │   ├── videos.css       Bandeau Twitch, grille vidéos, bloc communauté
    │   ├── cards.css        Cartes coachs, formations, tips
    │   ├── gallery.css      Grille photos/vidéos
    │   ├── forms.css        Formulaire de connexion
    │   ├── cta.css          Bandeaux d'appel à l'action
    │   └── responsive.css   Toutes les media queries (chargé en dernier)
    ├── js/
    │   └── main.js         Menu mobile
    ├── images/             Placeholders — remplace par tes vraies images (.webp recommandé)
    └── videos/             Placeholders — remplace par tes vraies vidéos (.mp4 H.264 recommandé)
```

## Pourquoi le CSS est découpé ainsi

Chaque fichier a une seule responsabilité (composant ou zone du site). Chaque page HTML n'importe que les fichiers CSS dont elle a réellement besoin, toujours dans le même ordre :

`variables → reset → base → buttons → header → footer → (fichiers spécifiques à la page) → responsive`

`responsive.css` est toujours chargé en dernier pour que ses media queries aient la priorité sur les styles de base.

## Remplacer les médias placeholders

Chaque emplacement image/vidéo est commenté directement dans le HTML avec la syntaxe exacte à utiliser, par exemple dans `galerie.html` :

```html
<!-- Remplacer par une vraie image -->
<div class="gallery-item">Screen gameplay 1</div>
```

devient :

```html
<div class="gallery-item"><img src="assets/images/mon-screen.webp" alt="Description"></div>
```

## Ajouter une nouvelle page

1. Copie une page existante proche du besoin (ex. `formations.html` pour une nouvelle page de contenu).
2. Garde le même bloc `<head>` (mêmes fichiers CSS dans le même ordre).
3. Ajoute le lien vers la nouvelle page dans `.nav-links` sur **toutes** les pages, et dans le footer si pertinent.

## Points de vigilance avant mise en ligne

- Les photos de joueurs pro trouvées dans l'ancien projet (zywoo, NaVi, etc.) ne doivent pas être réutilisées : ce sont des photos de presse protégées par droit d'auteur.
- Le formulaire de connexion (`login.html`) n'est pas connecté à un backend — à brancher sur un vrai système d'authentification avant mise en production.
- Penser à compresser les images (.webp) et vidéos (.mp4 H.264) avant de les intégrer, pour garder un temps de chargement correct.
- `formations.html` contient un emplacement `.calendar-placeholder` à remplacer par un vrai widget de réservation (Calendly, Cal.com, Styled Calendar...).
- `communaute.html` contient 6 blocs `.video-thumb` à remplacer par de vrais embeds YouTube (`<iframe src="https://www.youtube.com/embed/ID" loading="lazy"></iframe>`), et un lien Twitch factice (`#`) à remplacer par la vraie chaîne.
- Les liens vers les structures partenaires et les réseaux sociaux (Twitch, YouTube) dans `coachs.html` sont des placeholders (`#`) à compléter.
