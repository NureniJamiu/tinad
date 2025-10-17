# Technology Stack

## Core Technologies

- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.14
- **Animations**: GSAP 3.13.0 with ScrollTrigger and SplitText plugins
- **Package Manager**: pnpm

## Key Libraries

- `@gsap/react` - GSAP React integration
- `react-responsive` - Responsive breakpoint utilities
- `@tailwindcss/vite` - Tailwind CSS Vite plugin

## Development Tools

- **Linting**: ESLint 9.36.0 with React Hooks and React Refresh plugins
- **Module System**: ES Modules (type: "module")

## Common Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linter
pnpm lint
```

## Configuration Notes

- Vite config uses React plugin with Tailwind CSS integration
- ESLint configured for React Hooks best practices
- Custom ESLint rule: unused vars allowed if they match pattern `^[A-Z_]`
- ECMAScript 2020 target with latest features enabled
