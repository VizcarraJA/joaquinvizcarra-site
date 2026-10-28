# Joaquin Vizcarra Site

Personal academic website for Joaquin Vizcarra, MD, MSTR, a movement disorders neurologist and Assistant Professor at the University of Cincinnati. The Clinical Perspective redesign emphasizes Parkinson's disease research, clinical AI, selected publications, leadership, and speaking.

The October 2026 overhaul is implemented in the local source. Deployment remains a separate step through the PR workflow below.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content maintenance

- `lib/site-data.ts`: shared profile, research, publication, leadership, and speaking content.
- `app/page.tsx` and the Research, Publications, Speaking, About, and Contact routes: page composition and explanatory copy.
- `lib/metadata.ts`: shared metadata helper and canonical site URL.
- `app/components/JsonLd.tsx`: current University of Cincinnati Person schema.
- `app/sitemap.ts`: the six public profile pages.

Update content when appointments, papers, projects, or talks change. Clearly label in-press publications; add a DOI or publisher link when one is available. Research aims should remain distinct from established results. Read `CONTEXT.md` for confirmed facts, public voice, and site strategy.

## Retired writing

The opinion blog has been removed from the public site. `/writing` and former `/writing/[slug]` URLs return a 404 with links to the homepage and current research. `/feed.xml` returns HTTP 410 Gone with a short retirement notice. These paths remain crawlable so search engines can observe their removal.

The six Markdown essay sources in `content/writing/`, private drafts in `drafts/`, and parsing utilities in `lib/posts.ts` remain in the repository for reference. They are outside the public directory and no page or feed publishes them. Existing static images and the standalone Bayesian tool under `public/` are retained; they are no longer promoted as blog content.

## Verification and deployment

Run `npm run build` before requesting review. Check the six public pages at desktop and mobile sizes, metadata, and the retired URL responses.

Never push directly to `main`. Branch from `main`, open a PR, and pass CI, which runs `npm ci` and `npm run build`. Merge approved changes with `gh pr merge --squash --delete-branch`. Vercel auto-deploys after merge.

## Headshot

The portrait is stored at `public/headshot.jpg`.
