# Portfolio - Stevy Nguyen

Portfolio professionnel réalisé dans le cadre du Projet 12 de ma formation **Développeur web front-end / Intégrateur web** chez OpenClassrooms.

Le site présente mon parcours, mes compétences, une sélection de projets réalisés en formation, et un moyen de me contacter.

🔗 **Site en ligne** : https://pivix15-portfolio.netlify.app
🔗 **LinkedIn** : https://www.linkedin.com/#
🔗 **GitHub** : https://github.com/Pivix15

## Aperçu

- Thème **Sumi** (indigo, accent vermillon, ambiance japonisante sobre), avec bascule clair/sombre
- Site en **pages séparées** (Accueil, Projets, À propos, Contact) plutôt qu'en single-page
- Développé en **full-code**, sans low-code ni générateur de site

## Stack technique

- **React** + **Vite**
- **React Router** - navigation entre les pages
- **Sass** - feuilles de styles
- **react-helmet-async** - gestion des balises `<head>` par page (title, meta description, Open Graph, Twitter Card)
- **react-icons** / **lucide-react** - icônes des compétences
- **Netlify** - hébergement et déploiement continu

## SEO, accessibilité & performance

- Balises meta par page (title, description, Open Graph, Twitter Card) via `react-helmet-async`
- Données structurées **JSON-LD** (schema.org `Person`) sur la page À propos
- Attention portée à l'accessibilité (**RGAA**) : contrastes, focus visibles, attributs `aria-label`/`alt`
- Polices auto-hébergées via `@fontsource` (Inter, Shippori Mincho) plutôt que chargées depuis un CDN externe

## Projets présentés

Une sélection de projets réalisés durant la formation OpenClassrooms :

- **Kasa** - React
- **724 Events** - React, tests
- **Portfolio Sophie Bluel** - JavaScript vanilla, Node.js
- **Nina Carducci - Photographe** - SEO, accessibilité
- **Argent Bank** - React, Redux, full-stack
- **OhMyFood** - HTML, CSS, SCSS

## Installation en local

```bash
git clone https://github.com/Pivix15/Projet-12.git
cd projet-12
npm install
npm run dev
```

## Build de production

```bash
npm run build
```

## Auteur

**Stevy Nguyen** - en reconversion vers le développement web front-end.