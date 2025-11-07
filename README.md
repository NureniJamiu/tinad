# Tinad Music Label Website

A modern, animated music record label website built with React, Vite, and Sanity CMS.

## 🚀 Project Status

**Production Ready** - This project is clean, documented, and ready for handover.

## 📋 Project Handover

**For new team members or clients taking over this project:**

👉 **[Read the Complete Handover Guide](docs/PROJECT_HANDOVER.md)**

This guide covers:
- How to transfer GitHub repository access
- Sanity CMS account ownership and team management
- Environment variables and API keys
- Deployment and hosting transfer
- Complete handover checklist

## 🛠️ Technology Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **CMS**: Sanity.io
- **Styling**: Tailwind CSS 4.1.14
- **Animations**: GSAP 3.13.0
- **Package Manager**: pnpm

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm package manager
- Sanity account (for CMS access)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tinad
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Create `.env.local` in the project root:
   ```env
   VITE_SANITY_PROJECT_ID=zqlbhzob
   VITE_SANITY_DATASET=production
   VITE_SANITY_API_VERSION=2024-01-01
   VITE_WEB3FORMS_ACCESS_KEY=your_key_here
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```
   
   Visit `http://localhost:5173`

5. **Start Sanity Studio** (in a separate terminal)
   ```bash
   cd studio
   pnpm dev
   ```
   
   Visit `http://localhost:3333`

## 📝 Available Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm lint         # Run ESLint
```

## 📁 Project Structure

```
tinad/
├── src/
│   ├── components/       # React components
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   ├── sanity/          # Sanity client and queries
│   └── constants/       # App constants
├── studio/              # Sanity Studio (CMS)
├── docs/                # Documentation
├── public/              # Static assets
└── .env.local          # Environment variables (not in git)
```

## 📚 Documentation

- **[Project Handover Guide](docs/PROJECT_HANDOVER.md)** - Complete handover instructions
- **[Deployment Guide](docs/DEPLOYMENT_GUIDE.md)** - How to deploy to production
- **[Environment Variables](docs/ENVIRONMENT_VARIABLES.md)** - Configuration reference
- **[Sanity Setup Guide](docs/SANITY_SETUP_GUIDE.md)** - CMS setup instructions
- **[Troubleshooting Guide](docs/TROUBLESHOOTING_GUIDE.md)** - Common issues and solutions

## 🔑 Key Features

- Animated hero sections with GSAP
- Dynamic content from Sanity CMS
- Artist profiles with tracks
- Blog system
- Contact form
- Responsive design
- Optimized images
- SEO friendly

## 🌐 Deployment

The project can be deployed to:
- Vercel (recommended)
- Netlify
- Any static hosting service

See [Deployment Guide](docs/DEPLOYMENT_GUIDE.md) for detailed instructions.

## 🔐 Environment Variables

Required environment variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_SANITY_PROJECT_ID` | Sanity project ID | Yes |
| `VITE_SANITY_DATASET` | Dataset name (production/development) | Yes |
| `VITE_SANITY_API_VERSION` | Sanity API version | Yes |
| `VITE_WEB3FORMS_ACCESS_KEY` | Contact form API key | Yes |

See [Environment Variables Guide](docs/ENVIRONMENT_VARIABLES.md) for more details.

## 🤝 Support

For questions or issues:
1. Check the [Troubleshooting Guide](docs/TROUBLESHOOTING_GUIDE.md)
2. Review the [documentation](docs/)
3. Contact the original developer (see handover guide)

## 📄 License

[Specify your license]

---

**Last Updated**: January 2025  
**Version**: 1.0.0  
**Status**: Production Ready
