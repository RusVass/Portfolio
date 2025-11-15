# Portfolio of Ruslan Vasiliev


## 📌 Description

A modern developer portfolio built with a cutting-edge tech stack, enhanced UI, and scalable architecture.

### Frontend
- React + Vite
- Strict TypeScript with modular structure (`routes/*`, `components/*`)
- Tailwind CSS with custom animations and theme extensions

### UI/UX
- shadcn/ui based cards and layout primitives
- Animated developer avatar and floating gradient background
- Dynamic hover effects with glow around tech stack items

### Content & Data
- Profile and contacts stored in `src/data/profile.ts` for easy localization
- Automatic detection of contact types (`tel:`, `mailto:`, `t.me`)

### Tooling & Quality
- ESLint (TypeScript + React)
- Vitest + Testing Library smoke tests
- `npm run build` produces optimized production bundle

### CI/CD Ready
- `.gitignore` covers build artifacts, caches, IDE files
- GitLab pipeline can run `lint`, `test`, `build` stages out of the box

## 🚀 Scripts
```bash
npm run dev      # start local dev server
npm run lint     # lint the project (ESLint)
npm run test     # run Vitest tests
npm run build    # production build
```

## 📂 Project Structure (core)
```
src/
  components/        reusable UI pieces (header, cards, loaders)
  data/              profile content (summary, skills, contacts)
  layouts/           shared layout components (root layout)
  routes/            page-level components (home, about, not-found)
  seo/               metadata configuration
  styles/            global Tailwind entry
  hooks/             custom hooks (page metadata)
```

## 🛠 Technologies
- React 18, React Router
- TypeScript strict mode
- Tailwind CSS + custom animations
- shadcn/ui style system
- Vitest + Testing Library

