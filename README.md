# Corbin Langfeldt — Portfolio

Personal portfolio site. Built with React 19, Vite 7, Tailwind CSS 4, and react-router-dom.

## Develop

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

## Lint

```bash
npm run lint
```

## Project structure

```
src/
  components/    # Section + UI components (Hero, Navbar, ProjectsSection, ...)
  pages/         # Route-level pages (Home, ProjectDetail, NotFound)
  context/       # React context providers (theme)
  data/          # Static portfolio content (projects, skills, personal info)
  lib/           # Utilities (cn helper)
public/
  Corbin-Langfeldt-Resume.pdf  # Served at /Corbin-Langfeldt-Resume.pdf
```

## Editing content

All copy lives in `src/data/portfolio.js`: personal info, projects, experience, skills,
and social links. Edit there and rebuild.

## Resume

The Resume button in the hero links to `/Corbin-Langfeldt-Resume.pdf`. To update,
re-export the Word doc as PDF and overwrite the file in `public/`.

## Deploy

Deploys to Vercel. SPA route rewrites and security headers are configured in
`vercel.json`. To migrate to another host, translate that file:

- Netlify: `_redirects` and `_headers`
- Cloudflare Pages: `_redirects` and `_headers`
- Static host: configure SPA fallback to `index.html` for any unmatched route.
