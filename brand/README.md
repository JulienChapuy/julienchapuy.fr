# Direction artistique — Julien Chapuy

Décisions validées le 2026-07-27. Banc d'essai interactif : `brand/preview.html`.

## Palette — ★ Retenue — Vert / Terre

Sapin + terre cuite. Mode sombre par défaut, variante claire disponible via `[data-theme='light']`.

```css
:root {
  --background: #0b0f0d;
  --surface: #131915;
  --border: #2a332d;

  --primary: #5fa47e;
  --accent: #d4874c;

  --text: #edf2ee;
  --text-muted: #a4b0a8;

  --on-primary: #07130d;
  --on-accent: #1b0d04;
}

[data-theme='light'] {
  --background: #f7f8f5;
  --surface: #ffffff;
  --border: #d8ded7;

  --primary: #285943;
  --accent: #a85d2a;

  --text: #202821;
  --text-muted: #677269;

  --on-primary: #ffffff;
  --on-accent: #ffffff;
}
```

Fichier prêt à l'emploi : `brand/palette.css`.

### Pourquoi `--on-primary` / `--on-accent`

Un bouton primaire ne peut pas coder son texte en blanc en dur — dès que `--primary` est clair (ex. Sumi `#fafafa` testé pendant l'exploration), le texte devient illisible. Ces deux tokens portent la couleur de texte correcte à poser sur un aplat de `--primary` ou `--accent`, recalculée par mode.

### Contrastes WCAG vérifiés

| Paire                   | Sombre      | Clair       |
| ----------------------- | ----------- | ----------- |
| text / background       | 17.03:1 AAA | 14.20:1 AAA |
| text-muted / background | 8.59:1 AAA  | 4.70:1 AA   |
| text / surface          | 15.74:1 AAA | 15.14:1 AAA |
| on-primary / primary    | 6.41:1 AA   | 8.08:1 AAA  |
| on-accent / accent      | 6.66:1 AA   | 4.92:1 AA   |
| primary / background    | 6.52:1 AA   | 7.58:1 AAA  |
| accent / background     | 6.77:1 AA   | 4.62:1 AA   |

Point de vigilance : `text-muted` en mode clair est à 4.70:1, juste au-dessus du seuil AA (4.5). Pas de marge — à éviter en dessous de 16px ou en graisse fine. `#5E6960` donnerait 5.4:1 pour un écart visuel imperceptible, si besoin de marge.

`border / background` est très bas (1.48 sombre, 1.28 clair) mais une bordure décorative n'est soumise à aucun minimum WCAG — ce n'est pas un défaut.

## Logo — ★ Ébréché × tensho

Sceau (hanko) à cadre interrompu (bord d'encre) + monogramme JC en traits droits façon écriture sigillaire tensho. Construction `viewBox 0 0 96 96`, `stroke-linejoin: miter`, sans courbe.

```svg
<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M30 13 H83 V56" stroke="var(--accent)" stroke-width="7" stroke-linejoin="miter"/>
  <path d="M66 83 H13 V40" stroke="var(--accent)" stroke-width="7" stroke-linejoin="miter"/>
  <path d="M68 36 V30 H50 V66 H68 V60" stroke="currentColor" stroke-width="7" stroke-linejoin="miter"/>
  <path d="M40 30 V56 H28 V48" stroke="currentColor" stroke-width="7" stroke-linejoin="miter"/>
</svg>
```

`currentColor` = `--text` (ou `--primary` selon contexte), les deux traits de cadre en `var(--accent)`.

### Limite connue — favicon 16px

Le cadre + JC intérieur ne survit pas à 16px : la forme devient illisible. Deux marques distinctes sont utilisées :

- **sceau complet** (`brand/logo/mark-full-*.svg`) → bannière, avatar, signature, en-tête de site
- **Chanfreins 45°** (`brand/logo/mark-reduced-*.svg`, `public/favicon.svg`) → favicon, navbar en petit format. Traits droits, cohérente avec le tensho.

Tranché et exporté.

## Typographie — Bricolage Grotesque

```css
--font-display: 'Bricolage Grotesque', 'Inter', sans-serif;
--font-body: 'Inter', system-ui, sans-serif;
--display-weight: 700;
--display-tracking: -0.02em;
```

Bricolage Grotesque est une police variable à axe optique — grotesque à caractère, légèrement brute et artisanale, cohérente avec le grain « encre » du sceau ébréché sans tomber dans le pastiche calligraphique. Corps de texte en Inter (déjà en place, pas de régression de lisibilité). Pas de police mono dédiée : le peu de contexte monospace du site (dates, tags) reste sur la pile système (`ui-monospace, monospace`) plutôt que de charger une famille supplémentaire.

Google Fonts, gratuit en usage commercial (licence OFL) :

```
https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Bricolage+Grotesque:wght@400;500;600;700&display=swap
```

## Exports livrés

| Fichier                                                           | Usage                                                                                                   |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `brand/logo/mark-full-dark.svg` / `mark-full-light.svg`           | Sceau complet, bicolore, sur fond sombre / clair                                                        |
| `brand/logo/mark-full-mono-dark.svg` / `mark-full-mono-light.svg` | Sceau complet, monochrome (print, tampon)                                                               |
| `brand/logo/mark-reduced-dark.svg` / `mark-reduced-light.svg`     | Chanfreins 45°, petites tailles                                                                         |
| `public/favicon.svg`                                              | Favicon actif du site, réactif à `prefers-color-scheme`                                                 |
| `public/assets/img/icon.png`                                      | Icône 512×512 (onglet navigateur, apple-touch-icon)                                                     |
| `brand/exports/banner-linkedin-1584x396.png`                      | Bannière LinkedIn, capturée en conditions réelles (Chromium, polices chargées), livrée en 3168×792 (2×) |
| `brand/palette.css`                                               | Tokens palette prêts à l'import                                                                         |

`src/styles/global.scss` et `src/layouts/Layout.astro` sont patchés avec la palette et la typographie ci-dessus.

## Ce qui reste à faire

- [ ] Décider si les états sémantiques (`--success`, `--warning`, `--danger`) sont repris d'une palette candidate écartée ou redéfinis pour Vert/Terre — non traité à ce stade
- [ ] Décision différée : traitement de la photo de profil LinkedIn (actuelle datée 2022) pour cohérence avec la nouvelle DA
