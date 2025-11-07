# Project Handover Guide

This guide explains how to transfer the Tinad music label website project to a new team or client.

## Project Overview

**Tinad** is a modern music record label website built with:
- **Frontend**: React 19 + Vite
- **CMS**: Sanity.io
- **Styling**: Tailwind CSS
- **Animations**: GSAP
- **Package Manager**: pnpm

## What Needs to Be Transferred

### 1. Code Repository (GitHub)

**Current Owner**: Your GitHub account

**How to Transfer**:

**Option A: Transfer Repository Ownership**
1. Go to repository Settings → General
2. Scroll to "Danger Zone"
3. Click "Transfer ownership"
4. Enter new owner's GitHub username
5. Confirm transfer

**Option B: Add Collaborators (Keep Ownership)**
1. Go to repository Settings → Collaborators
2. Click "Add people"
3. Enter their GitHub username/email
4. Select permission level:
   - **Admin**: Full access (recommended for handover)
   - **Write**: Can push code
   - **Read**: View only

### 2. Sanity CMS Account

**Current Owner**: Your Sanity account (email: [YOUR_EMAIL])

**Important**: The Sanity project is tied to YOUR account. Here's how it works:

#### Understanding Sanity Ownership

- **Project Owner**: You (the account that created the project)
- **Project ID**: `zqlbhzob`
- **Billing**: Tied to your account
- **Access**: You control who can access the project

#### Option A: Add Team Members (Recommended)

Keep ownership but give others access:

1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Select "Tinad CMS" project
3. Click "Members" in sidebar
4. Click "Invite members"
5. Enter their email address
6. Choose role:
   - **Administrator**: Full access, can manage team
   - **Editor**: Can edit content
   - **Viewer**: Read-only access
7. Click "Send invitation"

**Pros**:
- Simple and quick
- You maintain control
- Easy to revoke access
- No billing changes

**Cons**:
- You remain responsible for billing
- Project stays under your account

#### Option B: Transfer Project Ownership

Transfer the entire project to another account:

1. Contact Sanity Support at support@sanity.io
2. Request project ownership transfer
3. Provide:
   - Project ID: `zqlbhzob`
   - New owner's email address
   - Confirmation of transfer
4. New owner must have a Sanity account
5. Sanity will process the transfer (usually 1-2 business days)

**Pros**:
- Complete handover
- New owner handles billing
- Clean separation

**Cons**:
- Requires Sanity support
- Takes 1-2 days
- You lose access unless re-invited

#### Option C: Create New Project for Client

Start fresh with client's account:

1. Client creates their own Sanity account
2. Client creates new project
3. Export data from your project:
   ```bash
   cd studio
   sanity dataset export production backup.tar.gz
   ```
4. Import to new project:
   ```bash
   sanity dataset import backup.tar.gz production
   ```
5. Update environment variables with new Project ID

**Pros**:
- Clean start
- Client owns from day one
- No dependency on your account

**Cons**:
- Requires data migration
- Need to update all environment variables
- More setup work

### 3. Hosting Platform (Vercel/Netlify)

**Current Status**: [Specify if deployed or not]

**How to Transfer**:

#### If Using Vercel:
1. Go to project Settings → General
2. Scroll to "Transfer Project"
3. Enter recipient's email
4. They must accept the transfer

#### If Using Netlify:
1. Go to Site settings → General
2. Scroll to "Transfer site"
3. Enter recipient's email
4. They must have a Netlify account

#### If Not Yet Deployed:
- Provide deployment instructions (see `docs/DEPLOYMENT_GUIDE.md`)
- Client can deploy to their own account

### 4. Domain Name (If Applicable)

**Current Status**: [Specify domain registrar if applicable]

**How to Transfer**:
1. Log into domain registrar (GoDaddy, Namecheap, etc.)
2. Unlock domain
3. Get transfer authorization code
4. Provide code to new owner
5. They initiate transfer at their registrar
6. Approve transfer via email

**Note**: Domain transfers can take 5-7 days

### 5. Environment Variables & API Keys

**Critical Information to Share**:

```env
# Sanity Configuration
VITE_SANITY_PROJECT_ID=zqlbhzob
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01

# Web3Forms (Contact Form)
VITE_WEB3FORMS_ACCESS_KEY=b0f86cfe-6030-4d51-afe6-32c121f65fa4
```

**Security Note**: 
- Share these securely (not via email)
- Use password manager (1Password, LastPass)
- Or use secure sharing service (Bitwarden Send, etc.)

**After Handover**:
- Consider rotating API keys
- Create new Sanity tokens if needed
- Update CORS settings for new domains

## Handover Checklist

Use this checklist during the handover process:

### Before Handover

- [ ] Code is clean and production-ready
- [ ] All console.log statements removed (except error handlers)
- [ ] Build completes successfully (`pnpm build`)
- [ ] All documentation is up to date
- [ ] Content is published in Sanity
- [ ] Environment variables documented

### During Handover

- [ ] Transfer GitHub repository access
- [ ] Add team members to Sanity project (or transfer ownership)
- [ ] Share environment variables securely
- [ ] Transfer hosting platform access (if deployed)
- [ ] Transfer domain (if applicable)
- [ ] Provide access to any other services

### After Handover

- [ ] Verify new team can access all systems
- [ ] Confirm they can build and deploy
- [ ] Test Sanity Studio access
- [ ] Provide support contact information
- [ ] Schedule follow-up if needed

## Key Files and Folders

Help the new team understand the project structure:

```
tinad/
├── src/
│   ├── components/       # React components
│   ├── pages/           # Page components (Home, Artists, Blog, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── sanity/          # Sanity client and queries
│   ├── constants/       # App constants
│   └── App.jsx          # Main app component
├── studio/              # Sanity Studio (CMS)
│   ├── schemaTypes/     # Content type definitions
│   └── sanity.config.ts # Studio configuration
├── docs/                # Documentation
│   ├── DEPLOYMENT_GUIDE.md
│   ├── ENVIRONMENT_VARIABLES.md
│   ├── SANITY_SETUP_GUIDE.md
│   └── TROUBLESHOOTING_GUIDE.md
├── public/              # Static assets
├── .env.local           # Environment variables (not in git)
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## Important Commands

Share these commands with the new team:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Start Sanity Studio
cd studio
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linter
pnpm lint
```

## Third-Party Services

### Sanity.io
- **Purpose**: Content Management System
- **Account**: Your account
- **Project ID**: zqlbhzob
- **Dashboard**: [manage.sanity.io](https://manage.sanity.io)

### Web3Forms
- **Purpose**: Contact form submissions
- **Access Key**: In environment variables
- **Dashboard**: [web3forms.com](https://web3forms.com)
- **Note**: May need to create new account for client

### Hosting (If Deployed)
- **Platform**: [Vercel/Netlify/Other]
- **URL**: [Production URL]
- **Account**: [Your account]

## Support and Documentation

Point the new team to these resources:

### Project Documentation
- `README.md` - Project overview and setup
- `docs/DEPLOYMENT_GUIDE.md` - How to deploy
- `docs/ENVIRONMENT_VARIABLES.md` - Environment configuration
- `docs/SANITY_SETUP_GUIDE.md` - Sanity CMS setup
- `docs/TROUBLESHOOTING_GUIDE.md` - Common issues

### External Resources
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://gsap.com/docs)

## Contact Information

**Original Developer**: [Your Name]
- Email: [Your Email]
- GitHub: [Your GitHub]
- Available for support: [Specify timeframe, e.g., "2 weeks after handover"]

**Support Period**: [Specify if you'll provide ongoing support]

## Frequently Asked Questions

### Q: Will the Sanity project continue to work after handover?

**A**: Yes! If you add team members, they get full access and the project continues working. If you transfer ownership, there's a brief transition but no downtime.

### Q: What happens to the billing?

**A**: 
- **If you add team members**: Billing stays with your account
- **If you transfer ownership**: Billing transfers to new owner
- **Sanity free tier**: Includes 3 users, 10k documents, 5GB assets

### Q: Can I remove my access after handover?

**A**: Yes, but only after:
1. Confirming new team has full access
2. They can successfully deploy
3. They can manage content in Sanity
4. Any support period has ended

### Q: What if something breaks after handover?

**A**: 
1. Check `docs/TROUBLESHOOTING_GUIDE.md`
2. Review error messages in browser console
3. Verify environment variables are set correctly
4. Contact you during support period (if applicable)
5. Reach out to Sanity support for CMS issues

## Next Steps

After reading this guide:

1. **Decide on Sanity ownership approach** (add members vs transfer)
2. **Prepare credentials** for secure sharing
3. **Schedule handover meeting** with new team
4. **Walk through the project** together
5. **Verify access** to all systems
6. **Provide support** during transition period

## Handover Meeting Agenda

Suggested agenda for handover meeting (1-2 hours):

1. **Project Overview** (15 min)
   - Technology stack
   - Key features
   - Architecture overview

2. **Code Walkthrough** (30 min)
   - Project structure
   - Key files and components
   - How to run locally

3. **Sanity CMS** (20 min)
   - How to access Studio
   - Content types
   - How to add/edit content

4. **Deployment** (15 min)
   - How to deploy
   - Environment variables
   - Domain configuration

5. **Q&A and Access Verification** (20 min)
   - Answer questions
   - Test all access
   - Confirm everything works

---

**Last Updated**: [Current Date]
**Project Version**: 1.0.0
**Status**: Production Ready
