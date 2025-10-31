# Sanity CORS and Deployment Configuration Guide

## Overview
This guide walks you through configuring CORS (Cross-Origin Resource Sharing) and deployment settings for your Sanity project to ensure your Tinad website can properly fetch content from Sanity.

## Your Project Details
- **Project ID**: `zqlbhzob`
- **Dataset**: `production`
- **Development URL**: `http://localhost:5173`

---

## Step 1: Access Sanity Dashboard

1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Log in with your Sanity account
3. Select your project: **Tinad CMS** (Project ID: `zqlbhzob`)

---

## Step 2: Configure CORS Settings

### Navigate to CORS Settings
1. In your project dashboard, click on **"API"** in the left sidebar
2. Click on **"CORS Origins"** tab

### Add Development Origin
1. Click **"Add CORS origin"** button
2. Enter the following details:
   - **Origin**: `http://localhost:5173`
   - **Allow credentials**: ✅ Check this box (if you plan to use authenticated requests)
3. Click **"Save"**

### Add Production Origin
1. Click **"Add CORS origin"** button again
2. Enter your production domain:
   - **Origin**: `https://your-production-domain.com` (replace with your actual domain)
   - **Allow credentials**: ✅ Check this box
3. Click **"Save"**

> **Note**: If you don't have a production domain yet, you can add it later. Common hosting platforms:
> - Vercel: `https://your-app.vercel.app`
> - Netlify: `https://your-app.netlify.app`
> - Custom domain: `https://tinad.com`

### Wildcard for Development (Optional)
If you use multiple local ports during development, you can add:
- **Origin**: `http://localhost:*`
- This allows any localhost port

---

## Step 3: Configure API Tokens

### Create a Read-Only Token for Frontend

1. In your project dashboard, click on **"API"** in the left sidebar
2. Click on **"Tokens"** tab
3. Click **"Add API token"** button
4. Configure the token:
   - **Label**: `Frontend Read-Only Token`
   - **Permissions**: Select **"Viewer"** (read-only access)
   - **Dataset**: Select `production`
5. Click **"Save"**
6. **IMPORTANT**: Copy the generated token immediately (you won't be able to see it again)

### Add Token to Environment Variables

1. Open your `.env.local` file
2. Add the token:
   ```env
   VITE_SANITY_TOKEN=your_copied_token_here
   ```
3. Save the file

> **Security Note**: The token is optional for public read operations. Only add it if you need authenticated requests or want to access draft content.

---

## Step 4: Verify CORS Configuration

### Test from Development Environment

1. Make sure your development server is running:
   ```bash
   pnpm dev
   ```

2. Open your browser to `http://localhost:5173`

3. Open the browser's Developer Console (F12)

4. Check for any CORS errors:
   - ✅ **Success**: No CORS errors, content loads properly
   - ❌ **Error**: You'll see messages like "blocked by CORS policy"

### Common CORS Error Messages

If you see errors like:
```
Access to fetch at 'https://zqlbhzob.api.sanity.io/...' from origin 'http://localhost:5173' 
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present
```

**Solution**: Go back to Step 2 and ensure `http://localhost:5173` is added to CORS origins.

---

## Step 5: Test API Connection

### Manual API Test

You can test your Sanity API connection using curl or your browser:

```bash
# Test fetching artists
curl "https://zqlbhzob.api.sanity.io/v2024-01-01/data/query/production?query=*[_type == 'artist']"
```

Expected response: JSON array of artist documents

### Test in Your Application

1. Navigate to different pages in your app:
   - Home page (should show artists carousel)
   - Artists page (should show artist displays)
   - Blog page (should show blog posts)
   - Producer section (should show producers)

2. Check the Network tab in Developer Tools:
   - Look for requests to `zqlbhzob.api.sanity.io`
   - Status should be `200 OK`
   - Response should contain your content data

---

## Step 6: Production Deployment Configuration

### Before Deploying to Production

1. **Set Environment Variables** on your hosting platform:
   ```env
   VITE_SANITY_PROJECT_ID=zqlbhzob
   VITE_SANITY_DATASET=production
   VITE_SANITY_API_VERSION=2024-01-01
   VITE_SANITY_TOKEN=your_token_here
   ```

2. **Add Production Domain to CORS** (as described in Step 2)

3. **Build and Deploy**:
   ```bash
   pnpm build
   ```

### Platform-Specific Instructions

#### Vercel
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add each variable with the values above
4. Redeploy your application

#### Netlify
1. Go to Site settings → Build & deploy → Environment
2. Add each variable
3. Trigger a new deploy

---

## Step 7: Deploy Sanity Studio (Optional)

If you want to host your Sanity Studio separately:

```bash
cd studio
pnpm install
pnpm build
pnpm deploy
```

This will deploy your Studio to: `https://your-project.sanity.studio`

---

## Troubleshooting

### Issue: CORS errors persist after configuration
**Solution**: 
- Clear browser cache and hard refresh (Ctrl+Shift+R)
- Wait a few minutes for Sanity's CDN to update
- Verify the exact origin URL matches (including protocol and port)

### Issue: 401 Unauthorized errors
**Solution**:
- Check if your dataset is public or requires authentication
- Verify your API token is correctly set in environment variables
- Ensure the token has the correct permissions

### Issue: Content not loading
**Solution**:
- Check if content exists in Sanity Studio
- Verify your GROQ queries are correct
- Check browser console for specific error messages
- Ensure dataset name matches in both Studio and frontend

### Issue: Images not loading
**Solution**:
- Verify images are uploaded in Sanity Studio
- Check image URLs in the Network tab
- Ensure `@sanity/image-url` is properly configured

---

## Security Best Practices

1. ✅ **Never commit API tokens** to version control
2. ✅ **Use read-only tokens** for frontend applications
3. ✅ **Restrict CORS origins** to specific domains (avoid wildcards in production)
4. ✅ **Use environment variables** for all sensitive configuration
5. ✅ **Regularly rotate API tokens** for security
6. ✅ **Monitor API usage** in Sanity dashboard

---

## Verification Checklist

- [ ] CORS origin added for `http://localhost:5173`
- [ ] CORS origin added for production domain
- [ ] Read-only API token created
- [ ] Token added to `.env.local` (if needed)
- [ ] Development environment tested (no CORS errors)
- [ ] All pages load content successfully
- [ ] Images display correctly from Sanity CDN
- [ ] Network requests show 200 OK status
- [ ] Production environment variables configured
- [ ] Production deployment tested

---

## Additional Resources

- [Sanity CORS Documentation](https://www.sanity.io/docs/cors)
- [Sanity API Tokens Guide](https://www.sanity.io/docs/http-auth)
- [Sanity Client Configuration](https://www.sanity.io/docs/js-client)

---

## Support

If you encounter issues:
1. Check the Sanity documentation
2. Review browser console errors
3. Check Sanity project dashboard for API usage and errors
4. Contact Sanity support if needed

---

**Last Updated**: Task 14 - Sanity CMS Integration
**Project**: Tinad Music Label Website
