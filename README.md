# Mrudula V – Developer Portfolio

React + Vite + Tailwind CSS v4. All content lives in `src/data/content.js`.

## Setup
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the build locally
```

## Add your links
The resume PDF has no embedded URLs, so open `src/data/content.js` and fill in
`links.linkedin`, `links.github` and `links.portfolio`. GitHub and LinkedIn buttons
appear automatically once set. Projects accept optional `year`, `github` and `demo`
fields in the same file.

## Structure
```
src/
  data/content.js      all resume content and links
  components/          Header, Hero, Section, ProjectCard, Button
  App.jsx              page composition
  index.css            Tailwind theme tokens, hero animation
```

## Deploy
`dist/` is static; deploy to Vercel, Netlify, GitHub Pages or Cloudflare Pages.
