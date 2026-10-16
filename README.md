# Portfolio

Portfolio site for gameplay, UI, and game design work. Built with React and Vite.

## Running it

```bash
npm install
npm run dev
```

Then open the link it prints in the terminal. The page updates whenever a file is saved.

## Editing content

Most content lives in `src/data`:

- `profile.js`: name, intro, links, and the About page
- `experience.js`: jobs
- `projects.js`: games. Each one has a `summary` (what the game is), a `contribution` (what was done on it), and an optional `trailer` link

Images go in `src/assets`, and the resume is `public/resume.pdf`. The site uses `headshot-web.jpg`. The original photo is left out of the repo on purpose because it has location data saved in it.

Pushing to `main` rebuilds the site and puts it live automatically.
