# Task 14: CORS and Deployment Configuration Checklist

## Overview
This checklist helps you complete Task 14 of the Sanity CMS integration: configuring CORS and deployment settings.

---

## Pre-Configuration Information

**Your Sanity Project Details:**
- Project ID: `zqlbhzob`
- Dataset: `production`
- Development URL: `http://localhost:5173`

---

## Configuration Steps

### ✅ Step 1: Access Sanity Dashboard

- [ ] Navigate to https://www.sanity.io/manage
- [ ] Log in to your Sanity account
- [ ] Locate and select your project (ID: zqlbhzob)

---

### ✅ Step 2: Configure CORS for Development

- [ ] Click on "API" in the left sidebar
- [ ] Click on "CORS Origins" tab
- [ ] Click "Add CORS origin" button
- [ ] Add development origin:
  - Origin: `http://localhost:5173`
  - Allow credentials: ✅ (checked)
- [ ] Click "Save"
- [ ] Verify the origin appears in the list

---

### ✅ Step 3: Configure CORS for Production

- [ ] Click "Add CORS origin" button again
- [ ] Add production origin:
  - Origin: `https://your-production-domain.com` (update with your actual domain)
  - Allow credentials: ✅ (checked)
- [ ] Click "Save"
- [ ] Verify the origin appears in the list

**Note:** If you don't have a production domain yet, you can skip this and add it later before deploying.

---

### ✅ Step 4: Create Read-Only API Token

- [ ] In the Sanity dashboard, click on "API" in the left sidebar
- [ ] Click on "Tokens" tab
- [ ] Click "Add API token" button
- [ ] Configure the token:
  - Label: `Frontend Read-Only Token`
  - Permissions: Select "Viewer" (read-only)
  - Dataset: Select `production`
- [ ] Click "Save"
- [ ] **IMPORTANT:** Copy the generated token immediately
- [ ] Store the token securely (you won't be able to see it again)

---

### ✅ Step 5: Update Environment Variables (Optional)

**Note:** This step is optional. The token is only needed for authenticated requests or accessing draft content.

- [ ] Open `.env.local` file in your project
- [ ] Uncomment and update the token line:
  ```env
  VITE_SANITY_TOKEN=your_copied_token_here
  ```
- [ ] Save the file
- [ ] **IMPORTANT:** Never commit this file to version control

---

### ✅ Step 6: Test CORS Configuration (Development)

- [ ] Run the verification script:
  ```bash
  node verify-sanity-connection.js
  ```
- [ ] Check for successful connection messages
- [ ] Verify all content types are fetched (artists, blogs, producers)
- [ ] Note any errors or warnings

**Alternative Manual Test:**
- [ ] Start development server: `pnpm dev`
- [ ] Open browser to `http://localhost:5173`
- [ ] Open Developer Console (F12)
- [ ] Navigate through all pages (Home, Artists, Blog)
- [ ] Check Network tab for Sanity API requests
- [ ] Verify no CORS errors appear in console
- [ ] Confirm content loads correctly

---

### ✅ Step 7: Verify Content Loading

- [ ] Home page displays artists carousel
- [ ] Artists page shows artist display cards
- [ ] Blog page shows blog posts
- [ ] Producer section displays producers
- [ ] All images load from Sanity CDN
- [ ] No console errors related to Sanity

---

### ✅ Step 8: Production Deployment Preparation

**Complete these steps when ready to deploy to production:**

- [ ] Identify your production hosting platform (Vercel, Netlify, etc.)
- [ ] Add production domain to Sanity CORS (if not done in Step 3)
- [ ] Configure environment variables on hosting platform:
  - `VITE_SANITY_PROJECT_ID=zqlbhzob`
  - `VITE_SANITY_DATASET=production`
  - `VITE_SANITY_API_VERSION=2024-01-01`
  - `VITE_SANITY_TOKEN=your_token` (if using)
- [ ] Build the application: `pnpm build`
- [ ] Deploy to production
- [ ] Test production deployment

---

### ✅ Step 9: Test Production Configuration

**After deploying to production:**

- [ ] Visit your production URL
- [ ] Open Developer Console (F12)
- [ ] Navigate through all pages
- [ ] Verify no CORS errors
- [ ] Confirm all content loads correctly
- [ ] Check that images display properly
- [ ] Test on multiple browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices

---

## Troubleshooting

### Issue: CORS Errors in Console

**Symptoms:**
```
Access to fetch at 'https://zqlbhzob.api.sanity.io/...' has been blocked by CORS policy
```

**Solutions:**
- [ ] Verify the exact origin URL is added to Sanity CORS settings
- [ ] Check that protocol (http/https) matches exactly
- [ ] Ensure port number is included for localhost
- [ ] Clear browser cache and hard refresh (Ctrl+Shift+R)
- [ ] Wait a few minutes for Sanity CDN to update

---

### Issue: 401 Unauthorized Errors

**Symptoms:**
```
401 Unauthorized
```

**Solutions:**
- [ ] Check if dataset requires authentication
- [ ] Verify API token is correctly set in environment variables
- [ ] Ensure token has correct permissions (Viewer for read-only)
- [ ] Confirm token is for the correct dataset

---

### Issue: Content Not Loading

**Symptoms:**
- Empty sections
- Loading states that never complete

**Solutions:**
- [ ] Verify content exists in Sanity Studio
- [ ] Check GROQ queries are correct
- [ ] Review browser console for specific errors
- [ ] Ensure dataset name matches in both Studio and frontend
- [ ] Run verification script to test connection

---

### Issue: Images Not Displaying

**Symptoms:**
- Broken image icons
- Alt text showing instead of images

**Solutions:**
- [ ] Verify images are uploaded in Sanity Studio
- [ ] Check image URLs in Network tab
- [ ] Ensure `@sanity/image-url` is properly configured
- [ ] Verify image asset references in GROQ queries

---

## Verification Commands

Run these commands to verify your setup:

```bash
# Test Sanity connection
node verify-sanity-connection.js

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview
```

---

## Security Checklist

- [ ] API token is stored in `.env.local` (not committed to git)
- [ ] `.env.local` is listed in `.gitignore`
- [ ] Using read-only token for frontend (Viewer permissions)
- [ ] CORS origins are specific (not using wildcards in production)
- [ ] Production environment variables are set on hosting platform
- [ ] Token is not exposed in client-side code

---

## Documentation

- [ ] Review `SANITY_CORS_CONFIGURATION_GUIDE.md` for detailed instructions
- [ ] Keep a record of your production domain
- [ ] Document any custom CORS configurations
- [ ] Note any special deployment requirements

---

## Final Verification

Before marking this task as complete:

- [ ] Development environment works without CORS errors
- [ ] All content types load successfully
- [ ] Images display correctly from Sanity CDN
- [ ] Verification script passes all checks
- [ ] Production deployment plan is documented
- [ ] Security best practices are followed

---

## Resources

- **Sanity Dashboard**: https://www.sanity.io/manage
- **CORS Documentation**: https://www.sanity.io/docs/cors
- **API Tokens Guide**: https://www.sanity.io/docs/http-auth
- **Configuration Guide**: See `SANITY_CORS_CONFIGURATION_GUIDE.md`

---

## Task Completion

Once all checklist items are complete:

1. Run final verification: `node verify-sanity-connection.js`
2. Test the application: `pnpm dev`
3. Confirm no CORS errors in browser console
4. Mark task as complete in tasks.md

---

**Task Status**: In Progress
**Last Updated**: Task 14 Implementation
**Project**: Tinad Music Label Website - Sanity CMS Integration
