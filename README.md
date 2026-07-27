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

## Export du profil LinkedIn

Après avoir configuré l’URL de redirection dans l’application LinkedIn, ajoutez-la également dans `.env` si elle diffère de la valeur par défaut :

```dotenv
LINKEDIN_REDIRECT_URI=http://localhost:3000/auth/linkedin/callback
```

L’URL doit correspondre exactement à celle déclarée dans le portail LinkedIn. Lancez ensuite :

```sh
bun run export:linkedin
```

Le script ouvre le navigateur pour recueillir votre consentement, récupère les données autorisées par OpenID Connect, puis crée `linkedin-profile.md` à la racine. Le jeton OAuth n’est ni affiché ni enregistré.

Les données dépendent des scopes accordés (`openid profile email`) et restent limitées au profil qui autorise l’application. LinkedIn ne fournit pas forcément le parcours professionnel, les formations ni les compétences via cet endpoint.
