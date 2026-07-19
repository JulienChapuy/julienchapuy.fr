# julienchapuy.fr

Portfolio bilingue (français par défaut, anglais sous `/en`) construit avec Astro, React et TypeScript, puis déployé sur GitHub Pages.

## Développement

Prérequis : Bun 1.3+ et Node.js 20+.

```sh
bun install --frozen-lockfile
bun run dev
```

Les contenus éditoriaux se trouvent dans `src/data/languages/fr.ts` et `src/data/languages/en.ts`. Les pages sont dans `src/pages/[...lang]` et les composants interactifs React dans `src/components`.

## Vérification

```sh
bun run format:check
bun run lint
bun run typecheck
bun run build
```

`bun run verify` exécute toutes ces vérifications. Le workflow GitHub Pages utilise le même contrôle avec une installation figée.

## Routes

- `/`, `/about`, `/projects`, `/blog`, `/blog/benchmark`, `/resume`
- `/en/` et les équivalents anglais

Les fichiers du dossier `public/` sont servis tels quels. Avant d’ajouter un asset, vérifier qu’il est référencé par une page ou un composant.
