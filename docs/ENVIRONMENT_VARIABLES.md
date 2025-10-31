# Environment Variables Documentation

This document explains all environment variables used in the Tinad project for Sanity CMS integration.

## Overview

Environment variables are used to configure the connection between your React application and Sanity.io. They allow you to use different configurations for development and production without changing code.

## File Location

Environment variables are stored in `.env.local` in the project root:

```
tinad/
├── .env.local          ← Environment variables here
├── src/
├── studio/
└── ...
```

**Important**: `.env.local` is gitignored and should never be committed to version control.

## Required Variables

### VITE_SANITY_PROJECT_ID

**Purpose**: Identifies your Sanity project

**Format**: Alphanumeric string (8 characters)

**Example**: 
```env
VITE_SANITY_PROJECT_ID=abc12345
```

**How to find it**:
1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Select your project
3. Find "Project ID" in the project settings

**Required**: Yes

**Used by**: Sanity client to connect to your project

---

### VITE_SANITY_DATASET

**Purpose**: Specifies which dataset to use (development or production)

**Format**: String (lowercase, no spaces)

**Example**: 
```env
VITE_SANITY_DATASET=development
```

**Common values**:
- `development` - For local development
- `production` - For live website

**Required**: Yes

**Used by**: Sanity client to determine which data to fetch

**Best practice**: Use `development` locally, `production` in deployed environments

---

### VITE_SANITY_API_VERSION

**Purpose**: Specifies the Sanity API version to use

**Format**: Date string (YYYY-MM-DD)

**Example**: 
```env
VITE_SANITY_API_VERSION=2024-01-01
```

**Required**: Yes

**Used by**: Sanity client for API compatibility

**Best practice**: Use the date when you first set up the project, or use `2024-01-01`

**Note**: This ensures consistent API behavior even as Sanity updates

## Optional Variables

### VITE_SANITY_TOKEN

**Purpose**: Provides authentication for private datasets or write operations

**Format**: Long alphanumeric string

**Example**: 
```env
VITE_SANITY_TOKEN=skAbCdEfGhIjKlMnOpQrStUvWxYz1234567890
```

**How to create it**:
1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Select your project
3. Go to "API" → "Tokens"
4. Click "Add API token"
5. Give it a name (e.g., "Frontend Read Token")
6. Select permissions (usually "Viewer" for read-only)
7. Copy the token

**Required**: No (only if using private datasets or authenticated requests)

**Used by**: Sanity client for authenticated operations

**Security note**: Never commit tokens to git. Keep them in `.env.local` only.

---

### VITE_SANITY_USE_CDN

**Purpose**: Enables/disables Sanity's CDN for faster reads

**Format**: Boolean string

**Example**: 
```env
VITE_SANITY_USE_CDN=true
```

**Default**: `true` (if not specified)

**Values**:
- `true` - Use CDN (faster, cached responses)
- `false` - Direct API calls (slower, always fresh data)

**Required**: No

**Used by**: Sanity client configuration

**Best practice**: Use `true` for production, `false` only when debugging

## Environment-Specific Configurations

### Development (.env.local)

```env
# Development Configuration
VITE_SANITY_PROJECT_ID=abc12345
VITE_SANITY_DATASET=development
VITE_SANITY_API_VERSION=2024-01-01
VITE_SANITY_USE_CDN=false
```

**Why these settings**:
- `development` dataset keeps test data separate
- `USE_CDN=false` ensures you see changes immediately

### Production (Hosting Platform)

```env
# Production Configuration
VITE_SANITY_PROJECT_ID=abc12345
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
VITE_SANITY_USE_CDN=true
```

**Why these settings**:
- `production` dataset contains live content
- `USE_CDN=true` for better performance

## Setting Up Environment Variables

### Local Development

1. **Create `.env.local` file** in project root:
   ```bash
   touch .env.local
   ```

2. **Add variables**:
   ```env
   VITE_SANITY_PROJECT_ID=your_project_id
   VITE_SANITY_DATASET=development
   VITE_SANITY_API_VERSION=2024-01-01
   ```

3. **Restart dev server**:
   ```bash
   pnpm dev
   ```

### Production Deployment

Environment variables are set differently depending on your hosting platform:

#### Vercel

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add each variable:
   - Name: `VITE_SANITY_PROJECT_ID`
   - Value: `your_project_id`
4. Select environment: Production
5. Click "Save"

#### Netlify

1. Go to Site settings → Build & deploy
2. Click "Environment" → "Environment variables"
3. Click "Add a variable"
4. Enter name and value
5. Click "Save"

#### Other Platforms

Consult your hosting platform's documentation for setting environment variables.

## Accessing Variables in Code

### In React Components

```javascript
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET
```

### In Sanity Client

```javascript
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
  useCdn: import.meta.env.VITE_SANITY_USE_CDN !== 'false',
})
```

## Variable Naming Rules

### Vite Requirements

- **Must start with `VITE_`** to be exposed to the client
- Without `VITE_` prefix, variables won't be accessible in browser code

### Naming Convention

- Use `SCREAMING_SNAKE_CASE`
- Be descriptive
- Group related variables with common prefix

**Good examples**:
- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET`
- `VITE_API_URL`

**Bad examples**:
- `sanity_id` (no VITE_ prefix, wrong case)
- `VITE_ID` (not descriptive)
- `VITE-SANITY-ID` (hyphens instead of underscores)

## Security Best Practices

### DO ✅

- Keep `.env.local` in `.gitignore`
- Use read-only tokens for frontend
- Rotate tokens periodically
- Use different tokens for dev and production
- Document required variables in README

### DON'T ❌

- Commit `.env.local` to git
- Share tokens in chat or email
- Use admin tokens in frontend code
- Hardcode values in source code
- Expose tokens in client-side code

## Troubleshooting

### Variables not loading

**Problem**: `import.meta.env.VITE_SANITY_PROJECT_ID` is undefined

**Solutions**:
1. Verify variable name starts with `VITE_`
2. Check `.env.local` is in project root (not `/src` or `/studio`)
3. Restart dev server after adding variables
4. Check for typos in variable names
5. Ensure no spaces around `=` sign

### Wrong dataset being used

**Problem**: Seeing development data in production (or vice versa)

**Solutions**:
1. Check `VITE_SANITY_DATASET` value
2. Verify environment variables in hosting platform
3. Clear browser cache
4. Redeploy application

### CORS errors despite correct setup

**Problem**: CORS errors even with variables set correctly

**Solutions**:
1. Verify Project ID is correct
2. Check CORS configuration in Sanity dashboard
3. Ensure dataset exists in Sanity project
4. Try with `VITE_SANITY_USE_CDN=false`

## Example Configurations

### Minimal Configuration

```env
VITE_SANITY_PROJECT_ID=abc12345
VITE_SANITY_DATASET=development
VITE_SANITY_API_VERSION=2024-01-01
```

### Full Configuration

```env
# Sanity Project Configuration
VITE_SANITY_PROJECT_ID=abc12345
VITE_SANITY_DATASET=development
VITE_SANITY_API_VERSION=2024-01-01

# Performance Options
VITE_SANITY_USE_CDN=false

# Authentication (optional)
# VITE_SANITY_TOKEN=your_token_here
```

### Multi-Environment Setup

**Development** (`.env.local`):
```env
VITE_SANITY_PROJECT_ID=abc12345
VITE_SANITY_DATASET=development
VITE_SANITY_API_VERSION=2024-01-01
VITE_SANITY_USE_CDN=false
```

**Staging** (hosting platform):
```env
VITE_SANITY_PROJECT_ID=abc12345
VITE_SANITY_DATASET=staging
VITE_SANITY_API_VERSION=2024-01-01
VITE_SANITY_USE_CDN=true
```

**Production** (hosting platform):
```env
VITE_SANITY_PROJECT_ID=abc12345
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
VITE_SANITY_USE_CDN=true
```

## Validation Script

Create a script to validate your environment variables:

```javascript
// validate-env.js
const required = [
  'VITE_SANITY_PROJECT_ID',
  'VITE_SANITY_DATASET',
  'VITE_SANITY_API_VERSION'
]

const missing = required.filter(key => !import.meta.env[key])

if (missing.length > 0) {
  console.error('Missing required environment variables:')
  missing.forEach(key => console.error(`  - ${key}`))
  process.exit(1)
}

console.log('✓ All required environment variables are set')
```

## Quick Reference

| Variable | Required | Default | Purpose |
|----------|----------|---------|---------|
| `VITE_SANITY_PROJECT_ID` | Yes | - | Project identifier |
| `VITE_SANITY_DATASET` | Yes | - | Dataset name |
| `VITE_SANITY_API_VERSION` | Yes | - | API version |
| `VITE_SANITY_TOKEN` | No | - | Auth token |
| `VITE_SANITY_USE_CDN` | No | `true` | Enable CDN |

## Additional Resources

- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Sanity Client Configuration](https://www.sanity.io/docs/js-client)
- [Sanity API Tokens](https://www.sanity.io/docs/http-auth)

## Next Steps

- Review `docs/SANITY_SETUP_GUIDE.md` for initial setup
- Check `docs/DEPLOYMENT_GUIDE.md` for production deployment
- See `docs/TROUBLESHOOTING_GUIDE.md` for common issues
