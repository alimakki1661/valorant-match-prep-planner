# Match Point

Match Point is a VALORANT match prep planner built with React and Vite. Choose a map and role, then review role-specific advice and write a goal and personal notes for the match. Advice is organized by role and can be used with any agent in that role.

## Features

- Choose Haven, Ascent, or Sunset.
- Choose Duelist, Initiator, Smokes (Controller), or Sentinel.
- Read attack and defense advice for each map and role.
- Write a match goal and personal notes in controlled inputs.
- Switch the selected map or role and see the plan update immediately.

The map advice is based on Ali's gameplay notes.

## Run locally

```bash
npm install
npm run dev
```

## Check the project

```bash
npm run lint
npm run build
```

The production build is written to `dist`.

## Deploy to Netlify

The repository includes these settings in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`

## Project structure

- `src/components/` contains the map selector, role selector, tips, plan, and notes components.
- `src/data/roles.js` contains the selectable roles.
- `src/data/mapTips.js` contains map and role advice.
