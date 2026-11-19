# Personal website

Source code for my portfolio site: **[dawidkowalczyk.com](https://www.dawidkowalczyk.com/)**

## Stack

- React 19 + TypeScript, built with Vite
- React Router
- CSS Modules with design tokens, light and dark themes
- Deployed on Vercel

## Run locally

```sh
cd frontend
npm install
npm run dev      # http://localhost:5173
```

Other commands (run from `frontend/`):

- `npm run build`: type-check and build to `frontend/dist/`
- `npm run preview`: serve the production build
- `npm run lint`: run ESLint

## Project structure

```
frontend/
  src/
    pages/        # Landing page, case study page
    components/   # One folder per component (TSX + CSS module + types)
    hooks/        # Shared React hooks
    theme/        # Light/dark theme context
    assets/       # Images and icons
AGENT.md          # Instructions for AI coding agents
```

## License

The code is under the [MIT License](LICENSE). The content (copy, images, portrait and case study material) is © Dawid Kowalczyk, all rights reserved. See [LICENSE](LICENSE) for details.
