# Portfolio of Ruslan Vasiliev - Full Stack Developer

[![Vercel Deployment](https://vercel.com/button)](https://portfolio-livid-pi-0ez0pe4nai.vercel.app/)

## 📌 Description

Full Stack Developer portfolio showcasing expertise in React, TypeScript, Next.js, and backend technologies. Features automated code quality checks, comprehensive testing, and continuous deployment.

### Full Stack
- React 18 + Vite (TypeScript strict mode)
- Next.js App Router experience
- Modular architecture (`routes/*`, `components/*`, `layouts/*`)
- Tailwind CSS + shadcn/ui component system
- Custom animations and responsive design

### Backend Integration
- Supabase & Firebase for database and authentication
- REST API integration with Axios/Fetch
- Node.js + Express.js experience

### AI-Powered Development
- Cursor & GitHub Copilot for accelerated development
- Automated code quality and refactoring
- AI-assisted problem solving and debugging

### Content & Data
- Profile data in `src/data/profile.ts` (easy localization)
- Automatic contact link detection (`tel:`, `mailto:`, `t.me`)
- SEO-optimized metadata and routing
- Responsive design for all devices

### Quality Assurance
- **ESLint** (TypeScript + React + custom rules)
- **Vitest** + Testing Library (4 comprehensive tests)
- **Husky Git Hooks** - automated pre-commit/pre-push checks
- Code coverage reporting

### CI/CD & Deployment
- **Vercel** automatic deployment on push to main
- Git hooks ensure quality before commits/pushes
- Optimized production builds with code splitting

## 🚀 Featured Projects

### Portfolio Website (Current)
- **Tech**: React, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Features**: Responsive design, automated testing, CI/CD pipeline
- **Live**: [portfolio-livid-pi-0ez0pe4nai.vercel.app](https://portfolio-livid-pi-0ez0pe4nai.vercel.app/)

### Key Achievements
- ✅ Automated code quality with ESLint + Husky pre-commit hooks
- ✅ Comprehensive test suite with Vitest (4 passing tests)
- ✅ Modern development workflow with AI tools (Cursor, GitHub Copilot)
- ✅ Production-ready deployment with Vercel
- ✅ Full TypeScript implementation with strict mode

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation & Setup
```bash
# Clone repository
git clone https://github.com/RusVass/Portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start local dev server (Vite)
npm run build        # Production build (optimized bundle)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint (code quality check)
npm run test         # Run Vitest unit tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

### Git Hooks (Husky)
Project uses **automated code quality checks**:
- **Pre-commit**: Runs ESLint + tests before every commit
- **Pre-push**: Runs ESLint + tests before every push
- Hooks prevent commits/pushes with failing checks

*Note: If hooks fail, fix issues and commit again*

## 📂 Project Structure
```
src/
├── components/        # Reusable UI components
│   ├── ui/           # shadcn/ui base components
│   └── page-loader/  # Loading states
├── data/             # Static data (profile, contacts)
├── layouts/          # Shared layout components
├── routes/           # Page-level components
│   ├── home/         # Homepage
│   ├── about/        # About page
│   └── not-found/    # 404 page
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── seo/              # SEO metadata
└── styles/           # Global styles
```

## 🚀 Deployment

### Vercel (Automatic)
Project is configured for **automatic deployment** on Vercel:
- Push to `main` branch → automatic deploy
- Production URL: https://portfolio-livid-pi-0ez0pe4nai.vercel.app/

### Manual Deployment
```bash
# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

## 🤝 Contributing

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/YOUR_USERNAME/Portfolio.git`
3. **Create** feature branch: `git checkout -b feature/amazing-feature`
4. **Install** dependencies: `npm install`
5. **Make** changes and test: `npm run test`
6. **Commit** changes: `git commit -m 'Add amazing feature'`
7. **Push** to branch: `git push origin feature/amazing-feature`
8. **Open** Pull Request

### Development Guidelines
- Follow TypeScript strict mode
- Write tests for new features
- Ensure ESLint passes
- Keep commits atomic and descriptive
- Use conventional commit messages

## 🎯 Experience & Skills

### Professional Experience
- **1+ years** of hands-on experience in modern web development
- **Full Stack Development** with React, TypeScript, and backend integration
- **AI-Assisted Development** using Cursor and GitHub Copilot
- **Quality Assurance** with automated testing and code reviews

### Core Competencies
- **Frontend**: React, TypeScript, Next.js, Tailwind CSS
- **Backend**: Node.js, Express.js, Supabase, Firebase
- **Tools**: Git, ESLint, Vitest, Vite, Vercel
- **Methodologies**: Clean Code, TDD, CI/CD

## 📞 Contact

**Ruslan Vasiliev** - Full Stack Developer

- **Email**: it.vasiliev@gmail.com
- **Telegram**: [@RuslanVasiliev](https://t.me/RuslanVasiliev)
- **LinkedIn**: [linkedin.com/in/ruslan-vasiliev](https://www.linkedin.com/in/ruslan-vasiliev-334a5419a/)
- **GitHub**: [github.com/RusVass](https://github.com/RusVass)
- **Portfolio**: [portfolio-livid-pi-0ez0pe4nai.vercel.app](https://portfolio-livid-pi-0ez0pe4nai.vercel.app/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🚧 Roadmap

- [ ] Add dark/light theme toggle
- [ ] Implement blog section
- [ ] Add project showcase with filtering
- [ ] Integrate contact form with validation
- [ ] Add performance monitoring
- [ ] Implement PWA features

## 📈 Stats

![GitHub stars](https://img.shields.io/github/stars/RusVass/Portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/RusVass/Portfolio?style=social)
![Vercel](https://vercel.com/button)

---

⭐ **Star this repo** if you found it helpful!

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern component-based UI
- **TypeScript** - Strict type safety
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality component library
- **Radix UI** - Accessible UI primitives

### Backend & Database
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Supabase** - Open source Firebase alternative
- **Firebase** - Authentication & real-time database
- **MongoDB** - NoSQL database

### Development Tools
- **Cursor** - AI-powered code editor
- **GitHub Copilot** - AI code completion
- **ESLint** - Code linting and formatting
- **Vitest** - Fast unit testing framework
- **Testing Library** - Component testing utilities
- **Husky** - Git hooks automation
- **Vercel** - Deployment platform

### Languages & Skills
- **JavaScript/TypeScript** - Primary languages
- **HTML5/CSS3** - Web fundamentals
- **SQL** - Database queries
- **REST APIs** - Backend communication
- **Git** - Version control

