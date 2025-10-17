# Project Structure

## Directory Organization

```
tinad/
├── public/              # Static assets (images, logos)
├── src/
│   ├── components/      # React components (Navbar, Hero, etc.)
│   ├── constants/       # Application constants and data
│   ├── App.jsx          # Main app component with GSAP setup
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles and Tailwind config
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

## Code Organization Patterns

### Components
- Located in `src/components/`
- Use `.jsx` extension for React components
- Export default for component modules

### Styling Approach
- Tailwind CSS with custom theme variables in `index.css`
- Custom utilities defined using `@utility` directive
- Component-specific styles in `@layer components`
- Theme variables: `--color-yellow`, `--color-white-100`, `--font-sans`, `--font-serif`

### Custom Tailwind Utilities
- `flex-center` - Flex with center alignment
- `col-center` - Flex column with center alignment
- `abs-center` - Absolute positioning centered
- `text-gradient` - White to gray gradient text
- `radial-gradient` - Radial background gradient
- `masked-img` - Image masking utility

### Animation Setup
- GSAP plugins registered in `App.jsx`
- ScrollTrigger and SplitText used for scroll-based animations
- Animations applied to sections: hero, cocktails, about, art, menu, contact

### Naming Conventions
- Component files: PascalCase (e.g., `Navbar.jsx`, `Hero.jsx`)
- CSS IDs: kebab-case (e.g., `#hero`, `#cocktails`, `#about`)
- CSS classes: Tailwind utility classes

### Constants
- Application data stored in `src/constants/index.js`
- Centralized data management for menus, content, etc.
