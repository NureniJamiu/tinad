# Sanity CMS Setup Guide

This guide walks you through setting up Sanity.io as the content management system for the Tinad music label website.

## Prerequisites

- Node.js 18+ installed
- pnpm package manager
- A Sanity.io account (free tier available at [sanity.io](https://www.sanity.io))

## Step 1: Create a Sanity Project

1. **Sign up or log in to Sanity.io**
   - Visit [sanity.io](https://www.sanity.io)
   - Create an account or log in with your existing credentials

2. **Create a new project**
   - Go to [manage.sanity.io](https://manage.sanity.io)
   - Click "Create new project"
   - Enter project name: `Tinad CMS`
   - Choose a plan (free tier is sufficient for most use cases)
   - Note your **Project ID** - you'll need this later

3. **Create datasets**
   - In your project dashboard, go to "Datasets"
   - Create two datasets:
     - `development` - for local development
     - `production` - for live website
   - Set both to "Public" access mode for read operations

## Step 2: Install Sanity Studio

The Sanity Studio is already set up in the `/studio` directory. Install its dependencies:

```bash
cd studio
pnpm install
```

## Step 3: Configure Sanity Studio

1. **Update studio configuration**
   
   Open `studio/sanity.config.ts` and verify the configuration:

   ```typescript
   import {defineConfig} from 'sanity'
   import {structureTool} from 'sanity/structure'
   import {visionTool} from '@sanity/vision'
   import {schemaTypes} from './schemaTypes'

   export default defineConfig({
     name: 'default',
     title: 'Tinad CMS',
     
     projectId: 'YOUR_PROJECT_ID', // Replace with your project ID
     dataset: 'development',
     
     plugins: [structureTool(), visionTool()],
     
     schema: {
       types: schemaTypes,
     },
   })
   ```

2. **Replace `YOUR_PROJECT_ID`** with the Project ID from Step 1

## Step 4: Configure Environment Variables

1. **Create `.env.local` in the root directory**

   ```bash
   # Navigate to project root
   cd ..
   
   # Create .env.local file
   touch .env.local
   ```

2. **Add Sanity configuration**

   Open `.env.local` and add:

   ```env
   # Sanity Configuration
   VITE_SANITY_PROJECT_ID=your_project_id_here
   VITE_SANITY_DATASET=development
   VITE_SANITY_API_VERSION=2024-01-01
   
   # Optional: Add token for authenticated requests (not required for public read)
   # VITE_SANITY_TOKEN=your_token_here
   ```

3. **Replace values**:
   - `your_project_id_here` - Your Sanity Project ID from Step 1
   - Keep `development` for local development
   - Change to `production` when deploying

## Step 5: Start Sanity Studio

```bash
cd studio
pnpm dev
```

The Studio will open at `http://localhost:3333`

## Step 6: Verify Frontend Connection

1. **Install frontend dependencies** (if not already done)

   ```bash
   cd ..
   pnpm install
   ```

2. **Start the development server**

   ```bash
   pnpm dev
   ```

   The app will open at `http://localhost:5173`

3. **Test the connection**

   Run the verification script:

   ```bash
   node verify-sanity-connection.js
   ```

   You should see:
   ```
   ✓ Successfully connected to Sanity!
   ✓ Project ID: your_project_id
   ✓ Dataset: development
   ```

## Step 7: Configure CORS (Required)

For the frontend to fetch data from Sanity, you must configure CORS:

1. **Go to Sanity dashboard**
   - Visit [manage.sanity.io](https://manage.sanity.io)
   - Select your project

2. **Navigate to API settings**
   - Click "API" in the left sidebar
   - Scroll to "CORS Origins"

3. **Add allowed origins**
   - Click "Add CORS origin"
   - Add `http://localhost:5173` (development)
   - Check "Allow credentials" if using authenticated requests
   - Click "Save"

4. **For production**, add your production domain:
   - Example: `https://tinad.com`
   - Click "Add CORS origin" again
   - Enter your domain
   - Click "Save"

See `docs/CORS_CONFIGURATION.md` for detailed CORS setup instructions.

## Step 8: Populate Content

Before the website can display data, you need to add content:

1. **Open Sanity Studio** at `http://localhost:3333`

2. **Create content** for each type:
   - Artists (minimum 8 recommended)
   - Blog Posts (minimum 5 recommended)
   - Producers (minimum 6 recommended)

3. **Use the seed script** (optional):

   ```bash
   cd studio
   node seed-data.js
   ```

   This will create sample content to get you started.

See `docs/CONTENT_MANAGEMENT_GUIDE.md` for detailed content creation instructions.

## Troubleshooting

### "Failed to fetch" errors

**Problem**: Frontend shows "Failed to fetch" or CORS errors

**Solution**:
1. Verify CORS is configured in Sanity dashboard
2. Check that your Project ID in `.env.local` is correct
3. Ensure the dataset name matches (`development` or `production`)
4. Clear browser cache and reload

### Studio won't start

**Problem**: `pnpm dev` fails in studio directory

**Solution**:
1. Delete `node_modules` and `pnpm-lock.yaml`
2. Run `pnpm install` again
3. Check Node.js version (must be 18+)

### Environment variables not loading

**Problem**: Frontend can't connect to Sanity

**Solution**:
1. Ensure `.env.local` is in the project root (not in `/studio`)
2. Restart the development server after changing `.env.local`
3. Verify variable names start with `VITE_`

### Images not displaying

**Problem**: Content loads but images are broken

**Solution**:
1. Verify images are uploaded in Sanity Studio
2. Check image URLs in browser console
3. Ensure CORS is configured for image CDN
4. Try accessing image URL directly in browser

## Next Steps

- Read `docs/CONTENT_MANAGEMENT_GUIDE.md` to learn how to manage content
- Review `docs/DEPLOYMENT_GUIDE.md` before deploying to production
- Check `docs/TROUBLESHOOTING_GUIDE.md` for common issues

## Additional Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity Image URLs](https://www.sanity.io/docs/image-url)
- [Sanity Studio Customization](https://www.sanity.io/docs/studio)
