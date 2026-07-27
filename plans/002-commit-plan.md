# Plan de commit

Le working tree mélange deux chantiers indépendants : une refonte de contenu
déjà en cours avant cette session (suppression Portfolio/Stats/projects,
refonte CV, métadonnées SEO — non écrite par moi) et l'implémentation DA
(palette, logo, typo, i18n) faite pendant cette session. Le plan sépare les
deux pour garder un historique lisible.

Plusieurs fichiers (`Navbar.tsx`, `resume.astro`, `data/languages/*.ts`,
`blog/benchmark.astro`) contiennent des hunks des deux chantiers — ils seront
scindés avec `git add -p`, pas commités en bloc.

## ⚠️ Blocage avant tout commit

`data/` (untracked) contient des exports LinkedIn personnels :
`Profile (1).pdf`, `Profile (1).txt`, `profile.md` — ce dernier a ton
téléphone perso en clair. Seul `data/Profile.pdf` est actuellement gitignoré
(règle `Profile.pdf` déjà existante), pas les trois autres.

**Action recommandée avant de committer quoi que ce soit** : ajouter
`data/` au `.gitignore` (comme `linkedin-profile.md` déjà ignoré, même
logique — export local, pas destiné au repo public). Je ne mets aucun
fichier de `data/` dans le plan ci-dessous.

---

## A — Refonte contenu (pré-existant, hors session)

### A1. `refactor(cleanup): remove unused Portfolio, Stats and projects page`
- suppression `src/components/Portfolio.astro`, `Portfolio/`
- suppression `src/components/Stats/`
- suppression `src/pages/[...lang]/projects.astro`
- `package.json`, `bun.lock` : retrait dépendance `react-countup` (utilisée
  uniquement par Stats)
- `Navbar.tsx` : retrait du lien "projects/work" (desktop + mobile) — *hunk
  isolé du reste du fichier*
- `about.astro`, `index.astro` : retrait des imports/usages Portfolio/Stats
  — *hunks isolés du reste de ces fichiers*

### A2. `feat(seo): centralize per-page metadata and add homepage structured data`
- `src/types/site.ts` : ajout du champ `pages` au type `SiteData`
- `data/languages/fr.ts`, `en.ts` : bloc `pages: { about, blog, benchmark,
  resume }` — *hunk isolé du reste du diff de ces fichiers*
- `about.astro`, `blog.astro`, `resume.astro`,
  `blog/benchmark.astro` : bascule de `title`/`description` construits
  inline vers `data.pages.*` — *hunks isolés du reste de ces fichiers*
- `index.astro` : ajout JSON-LD `Person` (structuredData)

### A3. `content(copy): refresh experience history and resume content`
- reste du diff `data/languages/fr.ts`, `en.ts` (claims employeur obsolètes
  retirées, dates/lieu à jour, contenu CV)
- `Experience.tsx` : `job.url` devient optionnel (affichage sans lien si
  absent)
- `Intro.tsx` : `ctaHref` piloté par les données au lieu d'un `#work` en dur
- `blog/benchmark.astro` : `article.galadrimLink` → `article.externalLink`
  — *hunk isolé*

### A4. `feat(resume): redesign resume page layout`
- `src/pages/[...lang]/resume.astro` — gros du diff (mise en page CV),
  **hors** les 2 hunks `--font-display`/accent déjà en place qui partent
  dans le groupe D

### A5. `chore(tooling): add LinkedIn export and content-check scripts`
- `scripts/check-content.ts`, `scripts/export-linkedin-profile.mjs`
  (untracked)
- `package.json` : scripts `check:content`, `export:linkedin` + wiring dans
  `verify` — *hunk isolé du retrait react-countup (déjà dans A1)*
- `README.md` : section "Export du profil LinkedIn"
- `.gitignore` : règle `linkedin-profile.md`
  *(+ ajouter la règle `data/` recommandée plus haut, dans ce même commit)*

---

## B — Identité de marque (cette session)

### B1. `feat(brand): apply new palette, typography and design tokens`
- `src/styles/global.scss` : tokens palette Vert/Terre, `--on-primary`,
  `--on-accent`, `--font-display` (Bricolage Grotesque), reset `.title-a`
  hérité du template legacy, fix `a:hover` (bleu Bootstrap qui gagnait le
  conflit de spécificité), gradient hero en `color-mix()`
- `src/layouts/Layout.astro` : lien Google Fonts (Bricolage Grotesque +
  Inter) — *hunk isolé des 2 autres concerns de ce fichier (favicon en B3,
  détection langue en B6)*
- `brand/palette.css` (untracked, référence)

### B2. `fix(theme): replace hardcoded colors with design tokens`
- `Navbar.module.scss`, `Footer.module.scss` : `color: white` → `var(--on-primary)`
- `BackToTop.tsx` : `#fff` en dur → `var(--on-primary)`
- `ContactModal.module.scss` : placeholder + bouton submit → tokens
- `Experience.module.scss`, `Timeline.module.scss` : `#86efac` (vert
  Tailwind sans rapport) → `var(--primary)`
- `Stack.module.scss` : verts/jaunes Tailwind → `var(--primary)`/`var(--accent)`
- `About.module.scss` : carte profil alignée sur le même style
  surface+bordure que le reste du site
- `404.astro` : `var(--text-secondary)`, `var(--primary-dark)` (tokens
  inexistants, CSS silencieusement invalide) → tokens réels
- `blog/benchmark.astro` : `var(--primary-rgb)` (inexistant) → `color-mix()`
  — *hunk isolé du reste de ce fichier*
- `Blog.tsx` : retrait des styles inline redondants (dupliquaient déjà ce
  que `.title-a`/`.btn-primary` appliquent)

### B3. `feat(brand): use two-tone logo mark in navbar and browser icon`
- `Navbar.tsx` : logo `<img>` → SVG inline (marque complète, JC en
  `var(--text)`, coins en `var(--primary)`/`var(--accent)`) — *hunk isolé du
  retrait nav "projects" (déjà en A1)*
- `Layout.astro` : ajout `<link rel="icon" type="image/svg+xml">` — *hunk
  isolé*
- `public/favicon.svg`, `public/assets/img/icon.png`
- `brand/logo/*.svg` (untracked, exports resynchronisés)

### B4. `feat(brand): give the copper accent real visual presence`
- `Intro.module.scss` : kicker hero → `var(--accent)` + pile monospace
  système propre (`.greeting`, `.btn-intro`)
- `Timeline.module.scss` : pile monospace système (`.timeline-period`)
- `Blog.module.scss` : badge catégorie → `var(--accent)`
- `global.scss` : `.line-mf` → `var(--accent)`
- `resume.astro` : `.tagline`, `.chip.soft` → `var(--accent)` — *hunks
  isolés du reste du fichier (déjà en A4)*

### B5. `feat(i18n): auto-detect browser language and theme on first visit`
- `Layout.astro` : script de détection langue au premier chargement
  (mémorisation `localStorage`, un seul redirect jamais répété) — *hunk
  isolé*
- `Navbar.tsx` : `onClick` du sélecteur EN/FR mémorise le choix explicite
  — *hunk isolé*

### B6. `feat(contact): make visitor email optional`
- `ContactModal.tsx` : retrait `required`, corps du `mailto:` sans ligne
  vide si email omis
- `data/languages/fr.ts`, `en.ts` : libellé "(optionnel)"/"(optional)"
  — *hunks isolés (1 ligne chacun)*

### B7. `docs(brand): document design system and ship exports`
- `brand/README.md`, `brand/preview.html`, `brand/capture-banner.mjs`,
  `brand/exports/banner-linkedin-1584x396.png` (untracked)

---

## Ordre d'exécution proposé

1. Résoudre le blocage `data/` (gitignore)
2. A1 → A2 → A3 → A4 → A5 (contenu, pré-existant)
3. B1 → B2 → B3 → B4 → B5 → B6 → B7 (identité de marque)

13 commits au total. Je n'exécute rien avant validation de ce plan.
