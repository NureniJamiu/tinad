# Deployment Guide

This guide covers deploying both the Sanity Studio and the Tinad React frontend to production.

## Overview

The Tinad project consists of two separate applications that need to be deployed:

1. **Sanity Studio** (`/studio`) - Content management interface
2. **React Frontend** (`/`) - Public-facing website

## Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All content is created and published in Sanity
- [ ] CORS is configured in Sanity dashboard
- [ ] Environment variables are documented
- [ ] Production dataset is created in Sanity
- [ ] Images are optimized and uploaded
- [ ] All features tested locally
- [ ] Build process runs without errors

## Part 1: Deploy Sanity Studio

Sanity Studio can be deployed to Sanity's hosting or your own server.

### Option A: Deploy to Sanity Hosting (Recommended)

Sanity provides free hosting for Studio with a custom subdomain.

#### Step 1: Install Sanity CLI

```bash
# Install globally
npm install -g @sanity/cli

# Or use with npx (no installation needed)
npx sanity
```

#### Step 2: Login to Sanity

```bash
cd studio
sanity login
```

This opens a browser window for authentication.

#### Step 3: Deploy Studio

```bash
sanity deploy
```

You'll be prompted to choose a hostname:
```
? Studio hostname (<hostname>.sanity.studio): tinad
```

Your Studio will be available at: `https://tinad.sanity.studio`

#### Step 4: Verify Deployment

1. Visit your Studio URL
2. Log in with your Sanity credentials
3. Verify all content types are visible
4. Test creating/editing content

### Option B: Deploy to Custom Server

If you prefer to host Studio on your own infrastructure:

#### Step 1: Build Studio

```bash
cd studio
pnpm build
```

This creates a `dist` folder with static files.

#### Step 2: Deploy Static Files

Upload the `dist` folder to your hosting provider:

**Vercel**:
```bash
vercel --prod
```

**Netlify**:
```bash
netlify deploy --prod --dir=dist
```

**Other hosts**: Upload `dist` folder contents to your web server.

#### Step 3: Configure Environment

Ensure your hosting platform has these environment variables:
- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`

## Part 2: Deploy React Frontend

### Preparing for Deployment

#### Step 1: Update Environment Variables

Create production environment variables (don't commit these):

```env
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
VITE_SANITY_USE_CDN=true
```

#### Step 2: Test Production Build Locally

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

Visit `http://localhost:4173` and verify:
- All content loads correctly
- Images display properly
- Animations work
- No console errors

#### Step 3: Optimize Build

The build is already optimized, but verify:
- Bundle size is reasonable (check `dist` folder)
- Images are compressed
- No unnecessary dependencies

### Deploy to Vercel (Recommended)

Vercel offers excellent performance for Vite apps with zero configuration.

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

#### Step 3: Deploy

```bash
# From project root
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? **tinad**
- Directory? **./` (press Enter)
- Override settings? **N**

#### Step 4: Add Environment Variables

```bash
# Add each variable
vercel env add VITE_SANITY_PROJECT_ID
vercel env add VITE_SANITY_DATASET
vercel env add VITE_SANITY_API_VERSION
```

Or add them in the Vercel dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add each variable for Production environment

#### Step 5: Deploy to Production

```bash
vercel --prod
```

Your site will be live at: `https://tinad.vercel.app` (or your custom domain)

### Deploy to Netlify

#### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

#### Step 2: Login to Netlify

```bash
netlify login
```

#### Step 3: Initialize Site

```bash
netlify init
```

Follow the prompts:
- Create & configure a new site? **Y**
- Team? Select your team
- Site name? **tinad**
- Build command? **pnpm build**
- Directory to deploy? **dist**

#### Step 4: Add Environment Variables

```bash
netlify env:set VITE_SANITY_PROJECT_ID your_project_id
netlify env:set VITE_SANITY_DATASET production
netlify env:set VITE_SANITY_API_VERSION 2024-01-01
```

Or add them in Netlify dashboard:
1. Site settings → Build & deploy
2. Environment → Environment variables
3. Add each variable

#### Step 5: Deploy

```bash
netlify deploy --prod
```

Your site will be live at: `https://tinad.netlify.app` (or your custom domain)

### Deploy to Other Platforms

#### GitHub Pages

1. Install gh-pages:
   ```bash
   pnpm add -D gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "pnpm build && gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```bash
   pnpm deploy
   ```

#### AWS S3 + CloudFront

1. Build the project:
   ```bash
   pnpm build
   ```

2. Upload `dist` folder to S3 bucket

3. Configure CloudFront distribution

4. Set environment variables in build pipeline

#### Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t tinad .
docker run -p 80:80 tinad
```

## Part 3: Configure Production Settings

### Update CORS in Sanity

1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Select your project
3. Navigate to API → CORS Origins
4. Add your production domain:
   - Origin: `https://tinad.vercel.app` (or your domain)
   - Allow credentials: Check if using auth
5. Click "Save"

### Configure Custom Domain (Optional)

#### Vercel

1. Go to project settings → Domains
2. Add your domain (e.g., `tinad.com`)
3. Follow DNS configuration instructions
4. Wait for DNS propagation (up to 48 hours)

#### Netlify

1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS records
4. Enable HTTPS (automatic)

### Set Up Analytics (Optional)

Add analytics to track usage:

**Google Analytics**:
```javascript
// src/main.jsx
import ReactGA from 'react-ga4'

ReactGA.initialize('G-XXXXXXXXXX')
```

**Vercel Analytics**:
```bash
pnpm add @vercel/analytics
```

```javascript
// src/main.jsx
import { Analytics } from '@vercel/analytics/react'

// In your App component
<Analytics />
```

## Part 4: Post-Deployment

### Verify Deployment

Test your production site:

- [ ] Site loads at production URL
- [ ] All pages are accessible
- [ ] Content displays from Sanity
- [ ] Images load correctly
- [ ] Animations work smoothly
- [ ] Mobile responsive design works
- [ ] No console errors
- [ ] Loading screen displays
- [ ] Navigation works
- [ ] Forms submit correctly (if applicable)

### Performance Testing

Use these tools to test performance:

1. **Lighthouse** (Chrome DevTools)
   - Open DevTools → Lighthouse
   - Run audit
   - Aim for 90+ scores

2. **PageSpeed Insights**
   - Visit [pagespeed.web.dev](https://pagespeed.web.dev)
   - Enter your URL
   - Review recommendations

3. **WebPageTest**
   - Visit [webpagetest.org](https://www.webpagetest.org)
   - Test from multiple locations

### Monitor Performance

Set up monitoring:

1. **Vercel Analytics** (if using Vercel)
   - Automatically enabled
   - View in Vercel dashboard

2. **Sentry** (error tracking)
   ```bash
   pnpm add @sentry/react
   ```

3. **Uptime monitoring**
   - Use services like UptimeRobot
   - Get alerts if site goes down

## Continuous Deployment

### Set Up CI/CD with GitHub

#### Vercel (Automatic)

1. Connect GitHub repository in Vercel dashboard
2. Vercel automatically deploys on push to main branch
3. Preview deployments for pull requests

#### Netlify (Automatic)

1. Connect GitHub repository in Netlify dashboard
2. Configure build settings:
   - Build command: `pnpm build`
   - Publish directory: `dist`
3. Automatic deploys on push

#### GitHub Actions (Manual)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm build
      - name: Deploy to Vercel
        run: vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

## Rollback Strategy

If deployment fails or has issues:

### Vercel

1. Go to Deployments in dashboard
2. Find previous working deployment
3. Click "Promote to Production"

### Netlify

1. Go to Deploys
2. Find previous working deploy
3. Click "Publish deploy"

### Manual Rollback

1. Revert git commit:
   ```bash
   git revert HEAD
   git push
   ```

2. Redeploy previous version

## Environment-Specific Configurations

### Development

```env
VITE_SANITY_PROJECT_ID=abc12345
VITE_SANITY_DATASET=development
VITE_SANITY_USE_CDN=false
```

### Staging (Optional)

```env
VITE_SANITY_PROJECT_ID=abc12345
VITE_SANITY_DATASET=staging
VITE_SANITY_USE_CDN=true
```

### Production

```env
VITE_SANITY_PROJECT_ID=abc12345
VITE_SANITY_DATASET=production
VITE_SANITY_USE_CDN=true
```

## Security Checklist

Before going live:

- [ ] Environment variables are not committed to git
- [ ] API tokens are read-only for frontend
- [ ] CORS is configured correctly
- [ ] HTTPS is enabled
- [ ] Security headers are configured
- [ ] Dependencies are up to date
- [ ] No sensitive data in client-side code

## Troubleshooting Deployment

### Build Fails

**Problem**: `pnpm build` fails

**Solutions**:
1. Check for TypeScript errors
2. Verify all dependencies are installed
3. Check Node.js version (must be 18+)
4. Clear `node_modules` and reinstall
5. Check build logs for specific errors

### Environment Variables Not Working

**Problem**: Site can't connect to Sanity in production

**Solutions**:
1. Verify variables are set in hosting platform
2. Check variable names start with `VITE_`
3. Redeploy after adding variables
4. Check for typos in variable names

### CORS Errors in Production

**Problem**: CORS errors in production but not locally

**Solutions**:
1. Add production domain to Sanity CORS settings
2. Verify domain is exactly as shown in browser
3. Include protocol (https://)
4. Wait a few minutes for changes to propagate

### Images Not Loading

**Problem**: Images broken in production

**Solutions**:
1. Verify images are uploaded in Sanity
2. Check CORS includes Sanity CDN domain
3. Test image URLs directly in browser
4. Check browser console for specific errors

## Maintenance

### Regular Tasks

**Weekly**:
- Check for broken links
- Review analytics
- Monitor error logs

**Monthly**:
- Update dependencies
- Review performance metrics
- Backup Sanity data

**Quarterly**:
- Security audit
- Performance optimization
- Content review

### Updating Dependencies

```bash
# Check for updates
pnpm outdated

# Update all dependencies
pnpm update

# Update specific package
pnpm update package-name

# Test after updating
pnpm build
pnpm preview
```

## Backup Strategy

### Sanity Content Backup

Export Sanity data:

```bash
cd studio
sanity dataset export production backup.tar.gz
```

Schedule regular backups (weekly recommended).

### Code Backup

- Use Git for version control
- Push to GitHub/GitLab regularly
- Tag releases:
  ```bash
  git tag -a v1.0.0 -m "Release v1.0.0"
  git push origin v1.0.0
  ```

## Support and Resources

### Documentation

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Sanity Deployment](https://www.sanity.io/docs/deployment)
- [Vite Deployment](https://vitejs.dev/guide/static-deploy.html)

### Getting Help

- Sanity Slack Community
- Vercel Discord
- Stack Overflow
- GitHub Issues

## Next Steps

- Review `docs/TROUBLESHOOTING_GUIDE.md` for common issues
- Set up monitoring and analytics
- Configure custom domain
- Plan content update schedule
- Document deployment process for team

## Quick Reference

### Deploy Sanity Studio
```bash
cd studio
sanity deploy
```

### Deploy Frontend (Vercel)
```bash
vercel --prod
```

### Deploy Frontend (Netlify)
```bash
netlify deploy --prod
```

### Test Production Build
```bash
pnpm build && pnpm preview
```
