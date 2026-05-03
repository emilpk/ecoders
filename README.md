# ecoders.dev

Personal portfolio and developer site for [Emil Krautmann](https://ecoders.dev) — senior web developer with 27+ years of experience.

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (SSR React + file-based routing)
- **UI**: React 19, [Tailwind CSS v4](https://tailwindcss.com), [Shadcn UI](https://ui.shadcn.com), Lucide React
- **Language**: TypeScript
- **Testing**: Vitest + Testing Library
- **Deployment**: [Netlify](https://netlify.com)

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run test` | Run tests |
| `npm run lint` | Lint with ESLint |
| `npm run format` | Format with Prettier + ESLint fix |

## Project Structure

```
src/
  routes/       # File-based routes (TanStack Router)
  components/   # React components (ui/ for Shadcn)
  hooks/        # Custom React hooks
  lib/          # Utilities (cn() helper)
  data/         # Static data (my-info.json)
  styles/       # Global CSS + Tailwind
public/         # Static assets
```

## Adding Components

```bash
pnpm dlx shadcn@latest add <component>
```

## Deployment

Deployed to Netlify. Build command: `vite build`, publish dir: `dist/client`.
