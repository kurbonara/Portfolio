# Kurt Tristan Dela Rosa — Portfolio

Personal portfolio built with React and Vite.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

## Edit content

All text lives in `src/data.js`: your profile, the project list, skills, and education.

- **Projects:** each entry in `projects` has a `category` (`web`, `mac`, `game`, `design`), which
  drives the filter pills and the coloured badge. `featured: true` gives it a wide card on the
  home page. `url` adds a "Live ↗" button.
- **Covers:** put a screenshot in `public/projects/` and point the project's `cover` at it
  (16:10 landscape, around 1440×900). Projects without one show artwork drawn in code
  (`src/components/Cover.jsx`).
- `public/profile.jpg` is your photo, and `public/KurtTristanDelaRosa.pdf` is your résumé.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel detects Vite automatically (build command `npm run build`, output directory `dist`). Click **Deploy**.
