# Portfolio

Personal portfolio site covering my game programming and game design work.

Built with React and Vite.

## Running locally

```bash
npm install
npm run dev
```

The dev server prints a local URL with hot reloading enabled.

## Scripts

| command | what it does |
| --- | --- |
| `npm run dev` | dev server with hot reloading |
| `npm run build` | production bundle into `dist/` |
| `npm run preview` | serve the built bundle locally |
| `npm run lint` | ESLint over the project |

## Structure

```
src/
├─ data/          content — edit these, not the components
│  ├─ profile.js      name, tagline, links, resume path
│  ├─ experience.js   work and education history
│  └─ projects.js     games and projects
├─ components/    one folder-level component per page section
└─ index.css      design tokens and shared button styles
```

Content lives in `src/data`, so adding a project or a role means editing an
array rather than touching any JSX. Each component has its own
`.module.css` beside it; colors come from the tokens in `src/index.css`.

`public/` is served from the site root — `public/resume.pdf` is reachable at
`/resume.pdf`.
