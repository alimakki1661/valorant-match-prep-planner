# Match Point

Match Point is a VALORANT match prep planner built with React and Vite. Choose a map and any agent, then review role-specific advice and write a goal and personal notes for the match.

## Features

- Choose Haven, Ascent, or Sunset.
- Pick any of eight agents on any map.
- Search agents by name or filter by role.
- Read attack and defense advice for each map and role.
- Write a match goal and personal notes in controlled inputs.
- Switch selections and see the plan update immediately.

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

- `src/components/` contains the map selector, agent browser, tips, plan, and notes components.
- `src/data/agents.js` contains the agent list and roles.
- `src/data/mapTips.js` contains map and role advice.
