# Plan 001: Align the portfolio with the freelance AI-engineering position

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving to the next step. If anything in the "STOP conditions" section occurs, stop and report — do not improvise. When done, update the status row for this plan in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 3ea8df6..HEAD -- src/data/languages/fr.ts src/data/languages/en.ts src/types/site.ts src/components/Experience/Experience.tsx src/pages/[...lang]/resume.astro src/components/Intro/Intro.tsx src/components/Portfolio/Portfolio.tsx src/components/Stats/Stats.tsx src/layouts/Layout.astro src/pages/[...lang]/index.astro src/pages/[...lang]/projects.astro src/pages/[...lang]/blog.astro src/pages/[...lang]/blog/benchmark.astro package.json`
>
> If any in-scope file changed since this plan was written, compare the excerpts below with the live code. Stop if the data model or rendering path differs materially.

## Status

- **Priority**: P1
- **Effort**: L (multi-day; the editorial work and approved case-study material are the pacing items)
- **Risk**: MED — inaccurate claims, client confidentiality, or an unsupported visual claim would damage credibility more than leaving the current content unchanged.
- **Depends on**: none
- **Category**: direction, docs, DX, performance
- **Planned at**: commit `3ea8df6`, 2026-07-26

## Why this matters

The portfolio still describes Julien as a current Galadrim employee based in Paris, while the current professional positioning is Freelance AI Engineer based in Osaka. It also sends the primary home-page CTA to a Projects section that publicly says no projects have been published. This plan makes the status, location, career chronology, contact route, case studies, trust signals, SEO, and lightweight quality checks agree with the current public positioning.

The result must present Julien as independent without naming a current client. Galadrim remains a past employer in the historical experience timeline only.

## Current state

### Content architecture and conventions

- `src/data/languages/fr.ts` and `src/data/languages/en.ts` are the complete, typed content catalogs. They both export a `SiteData` object.
- `src/types/site.ts` defines the shared content schema. Keep French and English structurally identical; TypeScript must remain the enforcement mechanism.
- `src/data/copy.ts` registers the two catalogs.
- Routes receive `siteData[lang]`; do not add a second hard-coded source of editorial copy.
- The project uses Astro 7, React 19, TypeScript, Bun, Prettier and ESLint. Exact verified commands are in `package.json`.

### Outdated identity and contact details

`src/data/languages/en.ts:18-23` currently contains:

```ts
intro: {
  greeting: 'Software Engineer @ Galadrim',
  name: 'Julien Chapuy',
  roles: 'AI Engineer specializing in LLMs, RAG Architectures, and Scalable Backend Systems.',
```

`src/data/languages/fr.ts:18-24` currently contains:

```ts
intro: {
  greeting: 'Bonjour, je suis',
  name: 'Julien Chapuy',
  roles: 'AI Engineer @ Galadrim.',
  subRoles: 'Je construis des expériences digitales accessibles et pixel-perfect.',
```

The `about.description` values also say `AI Engineer @ Galadrim` (`en.ts:181`, `fr.ts:182`). Both contact objects currently use Paris and an older e-mail (`en.ts:243-249`, `fr.ts:245-251`). `ContactModal` opens a `mailto:` to `content.email` at `src/components/Contact/ContactModal.tsx:39-51`, so the content value is operational, not merely visual.

### Current experience model cannot represent independent work cleanly

`src/types/site.ts:25-36` requires every `Job` to have a `url`:

```ts
export interface Job {
  company: string;
  url: string;
  roles: Role[];
}
```

`src/components/Experience/Experience.tsx:99-110` always renders that URL as an external company link. `src/pages/[...lang]/resume.astro:40-77` does the same. Make a link optional rather than inventing an employer URL for freelance work.

The live language catalogs show Lead AI Engineer as current (`en.ts:67-74`, `fr.ts:68-75`) and incorrectly assign the ECS/Celery/RabbitMQ platform to that role. The current authoritative public profile is `data/Profile (1).txt`:

- Freelance AI Engineer: May 2026–Present, Japan.
- Lead AI Engineer at Galadrim: June 2025–May 2026.
- AI Software Engineer at Galadrim: June 2024–June 2025.
- The AWS ECS/Celery/RabbitMQ distributed data-collection platform belongs to AI Software Engineer.
- Internal AWS, Terraform and CDN training belongs to Lead AI Engineer.

### Conversion and proof gap

`src/components/Intro/Intro.tsx:32-35` hard-codes the primary CTA destination:

```tsx
<a href="#work" className={styles['btn-intro']}>
  {content.btn}
</a>
```

`portfolio.items` is empty in both language files (`fr.ts:212-219`, `en.ts:211-218`). `src/components/Portfolio/Portfolio.tsx:81-86` visibly renders the empty-state message. The home-page CTA therefore leads to an empty proof section.

The only public case study material currently approved in the source profile is:

> Designed and implemented an Azure lakehouse for a leading French football club, using a medallion architecture, Azure Data Factory and Delta Lake.

Do not add client name, logo, data volumes, results, sources, screenshots, or any architectural detail not explicitly approved by the site owner.

### Trust, blog, SEO and performance gaps

- `src/components/Stats/Stats.tsx:36-124` hard-codes `4`, `15`, `8`, and `2`, while the site currently publishes no projects and one blog entry.
- The benchmark page renders only three paragraphs and links to the generic Galadrim blog (`src/pages/[...lang]/blog/benchmark.astro:36-52`).
- Projects, blog, and benchmark routes reuse the generic home-page description (`src/pages/[...lang]/projects.astro:23-27`, `blog.astro:22-25`, `blog/benchmark.astro:20-24`). `src/layouts/Layout.astro:49-52` has basic Open Graph fields but no JSON-LD.
- The home hero always mounts `SplineScene` (`Intro.tsx:21-25`). `SplineScene` performs an idle-time dynamic import at `src/components/ui/SplineScene.tsx:15-45`. This is decorative, not evidence of capability; preserve the visual only if measured performance remains acceptable.

## Commands you will need

| Purpose                                  | Command                             | Expected on success                 |
| ---------------------------------------- | ----------------------------------- | ----------------------------------- |
| Install dependencies                     | `bun install --frozen-lockfile`     | Exit 0; lockfile unchanged          |
| Format check                             | `bun run format:check`              | Exit 0                              |
| Lint                                     | `bun run lint`                      | Exit 0 with no lint errors          |
| Typecheck                                | `bun run typecheck`                 | Exit 0 with no type errors          |
| Production build                         | `bun run build`                     | Exit 0; static routes are generated |
| Full verification                        | `bun run verify`                    | Exit 0                              |
| Search removed current-employment claims | `grep -RniE 'AI Engineer @ Galadrim | Software Engineer @ Galadrim        | June 2025 - Present | Juin 2025 - Présent | Paris, France / Remote' src` | No matches |

## Scope

**In scope**:

- `src/data/languages/fr.ts`
- `src/data/languages/en.ts`
- `src/types/site.ts`
- `src/components/Experience/Experience.tsx`
- `src/pages/[...lang]/resume.astro`
- `src/components/Intro/Intro.tsx`
- `src/components/Portfolio/Portfolio.tsx`
- `src/components/Stats/Stats.tsx`
- `src/layouts/Layout.astro`
- `src/pages/[...lang]/index.astro`
- `src/pages/[...lang]/projects.astro`
- `src/pages/[...lang]/blog.astro`
- `src/pages/[...lang]/blog/benchmark.astro`
- `src/components/ui/SplineScene.tsx` only if the optional performance step proceeds
- `public/` assets created specifically for approved, non-confidential project cards
- `package.json` and one new read-only content-check script only if Step 7 is implemented

**Out of scope**:

- LinkedIn profile data, OAuth scripts and `.env` files.
- Naming a current client or portraying any client as the current employer.
- Client logos, confidential data, source code, metrics, screenshots or architecture details not explicitly supplied and approved by the site owner.
- Redesigning the whole visual system, replacing Astro, or changing the GitHub Pages deployment workflow.
- Adding analytics, a form backend, tracking pixels or third-party marketing services.

## Git workflow

- Create branch `advisor/001-refresh-freelance-portfolio`.
- Do not push, open a pull request or commit unless explicitly asked by the operator.
- Keep commits logical if commits are requested: one for content/schema changes, one for case-study rendering, one for optional performance/tests.

## Steps

### Step 1: Establish the freelance identity and contact details in both languages

Update only the two language catalogs for identity, About text, social e-mail link, footer contact content, hero labels and SEO defaults. Do not name Galadrim as a current client or mission.

Use this English copy, adjusting only punctuation to match project formatting:

```text
Greeting: Freelance AI Engineer
Role: RAG, document processing and cloud infrastructure.

About description: Freelance AI Engineer based in Osaka, Japan.

About paragraphs:
1. AI engineer based in Japan, with experience building and operating production AI systems.
2. My work covers AI application architecture, backend implementation, asynchronous processing, infrastructure as code and deployment workflows.
3. I work with teams developing RAG systems, document-processing pipelines and LLM-enabled applications.

Contact address: Osaka, Japan · Remote
Contact description: Have an AI project involving RAG, document processing or cloud infrastructure? Feel free to get in touch.
```

Use this French copy:

```text
Greeting: Ingénieur IA freelance
Role: RAG, traitement documentaire et infrastructure cloud.

About description: Ingénieur IA freelance basé à Osaka, au Japon.

About paragraphs:
1. Ingénieur IA basé au Japon, avec une expérience dans la conception et l’exploitation de systèmes d’IA en production.
2. Mon travail couvre l’architecture d’applications IA, le développement backend, le traitement asynchrone, l’infrastructure as code et les workflows de déploiement.
3. J’accompagne les équipes qui développent des systèmes RAG, des pipelines de traitement documentaire et des applications intégrant des LLM.

Contact address: Osaka, Japon · À distance
Contact description: Vous avez un projet IA autour du RAG, du traitement documentaire ou de l’infrastructure cloud ? N’hésitez pas à me contacter.
```

Set both public e-mail values and mailto links to the professional address supplied in `data/Profile (1).txt`; do not guess an address if the reference file is absent or contradictory.

Update the meta title/description in each catalog to describe freelance AI engineering, Osaka/Japan, RAG, document processing, and cloud infrastructure. Keep them factual and concise; do not claim availability, clients, benchmarks, metrics, or services not supported by the public content.

**Verify**: `bun run typecheck` → exit 0. Then run the grep command in the command table → no matches for removed current-employment/location claims.

### Step 2: Add freelance work and correct the historical Galadrim timeline

First update the shared `Job` model so `url` is optional. Update both `Experience.tsx` and `resume.astro` to render an external link only when `job.url` is supplied; otherwise render the company/organization name as plain text. Preserve the existing external-link behavior, `target`, and `rel` for historical employers.

Add the independent entry as the first job in each language catalog. It must not contain a client name. Use company labels `Freelance` (EN) and `Freelance` or `Indépendant` (FR), with no URL. Add one role, `Freelance AI Engineer` / `Ingénieur IA freelance`, from May 2026 / Mai 2026 to Present / Présent, based in Osaka/Japan. Use the five public service bullets from the approved profile: retrieval/document processing; language-model integration; evaluation/monitoring/deployment; architecture review; backend/frontend/infrastructure implementation.

Then correct the existing Galadrim history in both language catalogs:

1. Set Lead AI Engineer to end in May 2026; never render it as current.
2. Move AWS/Terraform/CDN internal training to Lead AI Engineer.
3. Move the distributed AWS ECS/Celery/RabbitMQ data-collection platform to AI Software Engineer.
4. Use the current reference wording as the source of truth for responsibility allocation. Match the concise, factual tone of the updated LinkedIn profile rather than retaining phrases such as "highly scalable", "comprehensive", or "played a key role".
5. Keep Galadrim as a past employer only. Do not add any wording that indicates a current engagement, client relationship or availability constraint.

**Verify**: `bun run typecheck && bun run lint` → both exit 0. Open `/resume` and `/en/resume` with `bun run dev` in a local browser: freelance must be the first experience; Galadrim must have an end date; freelance must not render an empty or broken company link.

### Step 3: Replace the empty Projects experience with approved case-study content and a conversion-oriented CTA

Do not publish an empty dedicated Projects route once the home page promotes projects. Add the Azure lakehouse as the first bilingual portfolio item. The current `PortfolioItem` only supports `link`, `img`, `title`, `category`, and `tech`; extend the typed data model and rendering only as far as necessary to make the published project useful.

Minimum project-card facts in both languages:

- Title: `Azure Lakehouse for Sports Analytics` / `Lakehouse Azure pour l’analyse sportive`.
- Category: data platform / plateforme de données.
- Technology: Azure Data Factory, Delta Lake, medallion architecture.
- Description or detail-page lead: designed and implemented an Azure lakehouse for a leading French football club.
- Confidentiality statement: the client remains unnamed and implementation details are intentionally limited.

Create a dedicated bilingual case-study route rather than linking a card to `#` or an external placeholder. It must include only: context, Julien’s role, named technologies, the stated high-level purpose if the owner approves one, and the confidentiality statement. Do not invent results or visual assets. Use a neutral locally created abstract asset only if a card image is mandatory; it must not resemble, reference, or imply a club logo.

Change `IntroContent` to hold a configurable primary CTA destination instead of hard-coding `#work` in `Intro.tsx`. Until the case study is live, point both CTA values to the contact action. Once the Azure study is live, choose one of these coherent flows and apply it to both languages:

- primary CTA opens the contact modal / contact section; secondary CTA goes to Projects; or
- primary CTA goes to the selected case study; secondary CTA goes to contact.

Do not leave `Read Bio` pointing to a project section. The French and English CTA labels must describe their actual destination.

**Verify**: `bun run typecheck && bun run build` → exit 0. Manually visit `/`, `/projects`, `/en`, and `/en/projects`: no "No projects published yet" / "Aucun projet publié" message appears, the project card has a meaningful destination, and both hero CTAs match their labels.

### Step 4: Remove unsupported trust counters and make the blog claim proportionate to the published content

The current statistics promise 15 AI projects, 8 technical posts and 2 papers without public evidence. Remove the `StatsReact` section from the About route and remove the now-unused `stats` field from `SiteData` and both language catalogs, unless the owner provides publicly verifiable, explicitly scoped sources for every number.

Do not replace those counters with new numbers. The new case study and corrected experience are the proof layer.

For the benchmark article, choose exactly one path after confirming what may be public:

1. **Publishable material exists**: expand the article with an anonymized, factual context; evaluation criteria; methodology; conclusions; and a link to the exact published external article if one exists.
2. **No publishable material exists**: rename it as a short experience note, remove claims such as "in-depth analysis", and do not direct readers to a generic Galadrim blog page as if it were the source.

Keep all statements about work at Galadrim in the past tense. Do not mention a current relationship.

**Verify**: `bun run typecheck && bun run lint` → exit 0. `grep -RniE '15|8|2' src/components/Stats src/pages/[...lang]/about.astro` → no result because the stats component is no longer rendered; if the component is deleted, ensure no imports remain with `grep -Rni 'Stats' src`.

### Step 5: Give acquisition pages distinct metadata and add factual structured data

Extend `Layout.astro` props so route pages can supply page-specific title, description, and optional structured data. Preserve the existing canonical and hreflang behavior.

Set distinct bilingual descriptions for:

- home: freelance AI engineer in Osaka/Japan, RAG, document processing and cloud infrastructure;
- projects: selected AI and data-platform case studies;
- about/resume: background in AI engineering, technical delivery and production systems;
- blog: practical writing on RAG, LLM evaluation and production AI systems;
- benchmark note: only the actual scope chosen in Step 4.

Add JSON-LD only for facts visible on the site. A `Person` schema may include name, public website URL, LinkedIn URL, GitHub URL, professional e-mail, Osaka/Japan, and the freelance job title. Do not include client names, employment claims, skills not in the content, phone number, review/rating data, or fabricated availability.

**Verify**: `bun run build` → exit 0. Inspect the generated HTML for `/`, `/projects`, `/en`, and `/en/projects`: each must have a distinct `<title>` and meta description; French/English canonical and `hreflang` links must remain valid; JSON-LD must parse as valid JSON.

### Step 6: Measure the Spline hero before changing it; reduce its cost only if evidence supports it

The Spline scene is currently deferred to idle time, so do not remove it based on aesthetics alone. Build the site and measure the mobile home page using Lighthouse or browser DevTools under a throttled mobile profile.

Record before/after values for LCP, INP/TBT, transferred bytes, JavaScript execution time, and the Spline request. If the scene materially harms the page or blocks interaction, keep the existing placeholder and change `SplineScene` so the full scene is loaded only after an explicit user action (for example, an accessible "Enable interactive background" control). If it does not materially harm those metrics, leave it unchanged and record that decision in the PR description.

Do not replace the scene with an unlicensed external image, and do not remove it merely to reduce code size without measurement.

**Verify**: `bun run build` → exit 0. Under the chosen mobile profile, the page must keep readable hero content and a working primary CTA before any optional 3D asset loads.

### Step 7: Add a lightweight editorial regression check

The repository has no test script. Add a small dependency-free Bun/Node script that imports or parses the language catalog data without network access and checks stable editorial invariants rather than exact marketing copy.

Minimum checks:

- both languages expose the same required content fields;
- the first experience is freelance and has no company URL;
- no current-employment strings matching the removed Galadrim claims remain in the language catalogs;
- Lead AI Engineer ends in May 2026 in both languages;
- each language has at least one portfolio item;
- CTA labels have a configured, non-empty destination;
- contact e-mail is non-empty and matches the approved public profile reference supplied by the owner;
- supported counter values are not rendered if the stats section was removed.

Add a `check:content` package script and include it in `verify` before `build`. Keep the check deterministic, local, and free of browser/network dependencies. Do not turn marketing copy into brittle equality assertions; check relationships and mandatory fields instead.

**Verify**: `bun run check:content` → exit 0; `bun run verify` → exit 0.

## Test plan

This repository currently has no test framework. The new `check:content` script is the characterization layer for the bilingual content contracts most likely to regress during future portfolio updates.

- Assert freelancer-first ordering and no URL for that job.
- Assert historical Lead AI Engineer end dates and the absence of current-employment wording.
- Assert each language has a non-empty portfolio collection and non-empty CTA target.
- Assert language data remains structurally compatible with `SiteData`; TypeScript remains the schema check.
- Manually test desktop and mobile navigation in French and English, especially hero CTA, project card, contact modal and Resume timeline.
- Run `bun run verify` after every completed logical unit; expected result is exit 0.

## Done criteria

All of the following must hold:

- [ ] The visible hero, About page, resume, contact footer and metadata present Julien as a freelance AI engineer based in Osaka/Japan, in both languages.
- [ ] The site never represents Galadrim as a current employer or current client; historical Galadrim experience ends in May 2026.
- [ ] A freelance job is first in the timeline and does not render an artificial employer link.
- [ ] Responsibilities are attributed to the correct Galadrim role according to `data/Profile (1).txt`.
- [ ] `/projects` and `/en/projects` contain at least the approved, confidentiality-safe Azure lakehouse case study.
- [ ] The home CTA has a label consistent with its configured destination and never leads to an empty Projects state.
- [ ] Unsupported statistical counters are not rendered.
- [ ] Every public acquisition page has a page-specific title and description; JSON-LD contains only visible, factual data.
- [ ] The Spline decision is backed by a recorded mobile measurement, and primary content/CTA are usable before any optional 3D load.
- [ ] `bun run check:content` exits 0.
- [ ] `bun run verify` exits 0.
- [ ] No files outside this plan’s scope are modified, except `plans/README.md` status update.

## STOP conditions

Stop and report back instead of improvising if:

- The owner does not approve the Azure case-study title, the high-level purpose, or a non-confidential visual/abstract asset. Do not publish the card with invented details.
- The professional contact address in the owner-provided profile is no longer valid or the owner prefers a separate portfolio alias.
- The existing freelance contract, NDA, or client policy prevents publishing the football-club reference, even anonymously.
- Making `Job.url` optional changes a rendering path not listed in scope, or a different component depends on it being non-null.
- The owner cannot provide the public source/scope for any retained statistic.
- The benchmark material cannot be made public and the owner does not approve its removal or reframing.
- Mobile measurement tools are unavailable; record that Step 6 is blocked rather than claiming a performance improvement.
- Any verification command fails twice after a focused repair.

## Maintenance notes

- Treat `src/data/languages/fr.ts` and `src/data/languages/en.ts` as a pair. Any future content change must be reviewed in both languages and pass `check:content`.
- Keep current freelance work generic unless the owner explicitly approves a client reference. Past employment can remain in the historical timeline with correct end dates.
- Every future case study should state only approved facts: problem context, Julien’s role, technologies, constraints, and verified outcomes. Anonymize NDA-bound work rather than omitting the confidentiality boundary.
- Do not add new numerical credibility claims until they are either directly linked to public evidence or the scope is explained on-page.
- If new project types require richer content than the card model, evolve the typed data schema first; do not introduce another untyped content source.
