# Joaquin Vizcarra Site

Static-ready Next.js website for academic profile + writing.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Publish a new essay

1. Add a markdown file in `content/writing/`.
2. Use frontmatter:

```md
---
title: "Your title"
date: "YYYY-MM-DD"
description: "Short summary"
---
```

3. Commit and push. Vercel will redeploy automatically.

## Headshot

Replace `public/headshot.jpg` with your real image.
