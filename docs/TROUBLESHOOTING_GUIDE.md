# Troubleshooting Guide

This guide helps you diagnose and fix common issues with the Sanity CMS integration in the Tinad project.

## Table of Contents

1. [Connection Issues](#connection-issues)
2. [CORS Errors](#cors-errors)
3. [Content Not Displaying](#content-not-displaying)
4. [Image Loading Problems](#image-loading-problems)
5. [Build and Deployment Issues](#build-and-deployment-issues)
6. [Performance Issues](#performance-issues)
7. [Studio Issues](#studio-issues)
8. [Environment Variable Issues](#environment-variable-issues)

---

## Connection Issues

### Problem: "Failed to fetch" Error

**Symptoms**:
- Error message in console: `Failed to fetch`
- Content doesn't load
- Loading state persists indefinitely

**Possible Causes**:
1. Incorrect Project ID
2. Wrong dataset name
3. Network connectivity issues
4. CORS not configured

**Solutions**:

**Step 1**: Verify environment variables
```bash
# Check .env.local file
cat .env.local
```

Ensure:
- `VITE_SANITY_PROJECT_ID` matches your Sanity project
- `VITE_SANITY_DATASET` is correct (development/production)
- No typos or extra spaces

**Step 2**: Test connection
```bash
node verify-sanity-connection.js
```

**Step 3**: Check network
- Open browser DevTools → Network tab
- Look for failed requests to `*.sanity.io`
- Check response status and error message

**Step 4**: Restart dev server
```bash
# Stop server (Ctrl+C)
pnpm dev
```

---

### Problem: "Unauthorized" or 401 Error

**Symptoms**:
- 401 status code in network requests
- "Unauthorized" error message

**Possible Causes**:
1. Invalid or expired API token
2. Token doesn't have required permissions
3. Dataset is private but no token provided

**Solutions**:

**Step 1**: Check if token is needed
- Public datasets don't require tokens for read operations
- Private datasets require a token

**Step 2**: Verify token in Sanity dashboard
1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Select your project
3. Go to API → Tokens
4. Check token permissions (should be "Viewer" or higher)

**Step 3**: Update token in `.env.local`
```env
VITE_SANITY_TOKEN=your_new_token_here
```

**Step 4**: Restart dev server

---

## CORS Errors

### Problem: CORS Policy Error

**Symptoms**:
- Error: `Access to fetch at '...' from origin '...' has been blocked by CORS policy`
- Content doesn't load
- Network requests show CORS error

**Possible Causes**:
1. Origin not added to Sanity CORS settings
2. Wrong origin URL format
3. CORS changes not yet propagated

**Solutions**:

**Step 1**: Add origin to Sanity CORS settings

1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Select your project
3. Navigate to **API** → **CORS Origins**
4. Click **"Add CORS origin"**
5. Enter your origin:
   - Development: `http://localhost:5173`
   - Production: `https://yourdomain.com`
6. Check **"Allow credentials"** if using authentication
7. Click **"Save"**

**Step 2**: Verify origin format
- Must include protocol (`http://` or `https://`)
- No trailing slash
- Exact match required (including port for localhost)

**Step 3**: Wait for propagation
- CORS changes can take 1-2 minutes to propagate
- Clear browser cache
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

**Step 4**: Test with different browser
- Try incognito/private mode
- Try different browser to rule out cache issues

**Common CORS Mistakes**:

❌ Wrong:
- `localhost:5173` (missing protocol)
- `http://localhost:5173/` (trailing slash)
- `http://localhost` (missing port)

✅ Correct:
- `http://localhost:5173`
- `https://tinad.com`

---

### Problem: CORS Works Locally But Not in Production

**Symptoms**:
- Works fine on `localhost`
- CORS errors on deployed site

**Solutions**:

**Step 1**: Add production domain to CORS
1. Go to Sanity dashboard → API → CORS Origins
2. Add your production URL exactly as it appears in browser
3. Include `https://` protocol
4. Save changes

**Step 2**: Check for multiple domains
If you have:
- `https://tinad.com`
- `https://www.tinad.com`

Add both to CORS origins.

**Step 3**: Verify deployment
- Check that environment variables are set in hosting platform
- Ensure production build is using correct Project ID

---

## Content Not Displaying

### Problem: Content Shows "Loading..." Forever

**Symptoms**:
- Loading state never completes
- No error messages
- Content never appears

**Possible Causes**:
1. No content published in Sanity
2. Query syntax error
3. Dataset is empty
4. Network request hanging

**Solutions**:

**Step 1**: Check if content exists
1. Open Sanity Studio (`http://localhost:3333`)
2. Verify content is created and **published** (not just saved as draft)
3. Check correct dataset (development vs production)

**Step 2**: Test query in Vision tool
1. Open Sanity Studio
2. Click **"Vision"** in top menu
3. Paste query:
   ```groq
   *[_type == "artist"]
   ```
4. Click **"Execute"**
5. Verify results are returned

**Step 3**: Check browser console
- Open DevTools → Console
- Look for JavaScript errors
- Check Network tab for failed requests

**Step 4**: Verify hook is working
Add debug logging to `useSanityData.js`:
```javascript
useEffect(() => {
  console.log('Fetching data with query:', query)
  // ... rest of code
}, [query])
```

---

### Problem: Content Shows Empty State

**Symptoms**:
- "No artists available" message
- "No blog posts available" message
- Data array is empty

**Possible Causes**:
1. Content not published
2. Wrong dataset
3. Query filtering out all results

**Solutions**:

**Step 1**: Verify content is published
- Open Sanity Studio
- Check that content has green "Published" badge
- If showing "Draft", click **"Publish"**

**Step 2**: Check dataset
```bash
# Verify which dataset you're using
cat .env.local | grep DATASET
```

Ensure it matches the dataset where you created content.

**Step 3**: Test query without filters
```groq
*[_type == "artist"]
```

If this returns results, your filters might be too restrictive.

---

### Problem: Some Content Missing

**Symptoms**:
- Some items display, others don't
- Inconsistent content loading

**Possible Causes**:
1. Missing required fields
2. Image upload failed
3. Content not published

**Solutions**:

**Step 1**: Check for required fields
In Sanity Studio, verify each content item has:
- Artists: name, genre, image
- Blogs: title, description, featuredImage, publishedAt
- Producers: name, specialty, image

**Step 2**: Verify images uploaded
- Click on content item
- Check that image fields show thumbnails
- Re-upload if necessary

**Step 3**: Check query projection
Ensure query requests all needed fields:
```groq
*[_type == "artist"] {
  _id,
  name,
  genre,
  "image": image.asset->url
}
```

---

## Image Loading Problems

### Problem: Images Not Displaying

**Symptoms**:
- Broken image icons
- Alt text showing instead of images
- 404 errors for image URLs

**Possible Causes**:
1. Images not uploaded to Sanity
2. Image reference broken
3. CORS blocking image CDN
4. Incorrect image URL format

**Solutions**:

**Step 1**: Verify image in Sanity
1. Open content in Studio
2. Check image field shows thumbnail
3. If empty, upload image again

**Step 2**: Check image URL in console
```javascript
console.log('Image URL:', artist.image)
```

Should look like:
```
https://cdn.sanity.io/images/abc12345/production/xyz...
```

**Step 3**: Test image URL directly
- Copy image URL from console
- Paste in browser address bar
- If it loads, problem is in React code
- If it doesn't load, problem is with Sanity

**Step 4**: Verify GROQ query
Ensure query includes image URL:
```groq
*[_type == "artist"] {
  "image": image.asset->url
}
```

Note the `->url` to resolve the reference.

---

### Problem: Images Load Slowly

**Symptoms**:
- Images take long time to appear
- Page feels sluggish
- Large file sizes

**Solutions**:

**Step 1**: Use image optimization
Update image URLs to include parameters:
```javascript
const optimizedUrl = `${imageUrl}?w=800&h=800&fit=crop&fm=webp&q=80`
```

**Step 2**: Implement lazy loading
```jsx
<img 
  src={imageUrl} 
  loading="lazy"
  alt={artist.name}
/>
```

**Step 3**: Compress images before upload
- Use tools like TinyPNG or ImageOptim
- Aim for under 500KB per image
- Use appropriate dimensions

**Step 4**: Enable CDN
In `.env.local`:
```env
VITE_SANITY_USE_CDN=true
```

---

## Build and Deployment Issues

### Problem: Build Fails

**Symptoms**:
- `pnpm build` command fails
- Error messages during build
- Build process exits with error code

**Common Errors and Solutions**:

#### Error: "Module not found"

**Solution**:
```bash
# Delete node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

#### Error: "TypeScript errors"

**Solution**:
```bash
# Check for type errors
pnpm tsc --noEmit

# Fix reported errors in code
```

#### Error: "Out of memory"

**Solution**:
```bash
# Increase Node memory limit
NODE_OPTIONS=--max_old_space_size=4096 pnpm build
```

#### Error: "Environment variable undefined"

**Solution**:
- Ensure `.env.local` exists
- Verify all required variables are set
- Check variable names start with `VITE_`

---

### Problem: Production Build Works Locally But Fails When Deployed

**Symptoms**:
- `pnpm preview` works fine
- Deployed site shows errors
- Content doesn't load in production

**Solutions**:

**Step 1**: Check environment variables in hosting platform
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Build & deploy → Environment

**Step 2**: Verify dataset
- Production should use `production` dataset
- Check `.env.local` vs hosting platform variables

**Step 3**: Check CORS for production domain
- Add production URL to Sanity CORS settings
- Include `https://` protocol

**Step 4**: Review build logs
- Check hosting platform's build logs
- Look for warnings or errors

---

## Performance Issues

### Problem: Slow Page Load

**Symptoms**:
- Page takes long time to load
- Loading screen shows for extended period
- Sluggish interactions

**Solutions**:

**Step 1**: Enable CDN
```env
VITE_SANITY_USE_CDN=true
```

**Step 2**: Optimize images
- Use image parameters: `?w=800&fm=webp&q=80`
- Implement lazy loading
- Compress images before upload

**Step 3**: Optimize queries
- Fetch only needed fields
- Use projections to reduce payload:
```groq
*[_type == "artist"] {
  _id,
  name,
  genre,
  "image": image.asset->url
}
```

**Step 4**: Check network
- Open DevTools → Network tab
- Look for slow requests
- Check total payload size

---

### Problem: Loading Screen Too Short/Long

**Symptoms**:
- Loading animation doesn't complete
- Loading screen disappears too quickly
- Loading screen stays too long

**Solutions**:

**Adjust minimum display time** in `useLoadingState.js`:

```javascript
// Shorter (1 second)
export function useLoadingState(dataLoading, minDisplayTime = 1000) {

// Longer (2.5 seconds)
export function useLoadingState(dataLoading, minDisplayTime = 2500) {
```

---

## Studio Issues

### Problem: Can't Access Sanity Studio

**Symptoms**:
- Studio won't load at `localhost:3333`
- "Cannot GET /" error
- Blank page

**Solutions**:

**Step 1**: Verify Studio is running
```bash
cd studio
pnpm dev
```

**Step 2**: Check port
- Default is 3333
- Check if another app is using the port
- Try different port:
```bash
pnpm dev -- --port 3334
```

**Step 3**: Clear Studio cache
```bash
cd studio
rm -rf .sanity node_modules
pnpm install
pnpm dev
```

---

### Problem: Can't Publish Content

**Symptoms**:
- "Publish" button disabled
- Error when clicking "Publish"
- Content stays as draft

**Solutions**:

**Step 1**: Check required fields
- All required fields must be filled
- Look for red asterisks (*)
- Fill in missing fields

**Step 2**: Check permissions
- Verify you're logged in
- Check your Sanity account has write permissions

**Step 3**: Check validation errors
- Look for error messages in Studio
- Fix validation issues
- Try publishing again

---

### Problem: Images Won't Upload in Studio

**Symptoms**:
- Upload fails
- Error message when uploading
- Image doesn't appear after upload

**Solutions**:

**Step 1**: Check file size
- Maximum 10MB per image
- Compress large images before upload

**Step 2**: Check file format
- Supported: JPG, PNG, WebP, GIF
- Convert unsupported formats

**Step 3**: Check browser console
- Open DevTools → Console
- Look for error messages
- Check Network tab for failed uploads

**Step 4**: Try different browser
- Some browsers have upload issues
- Try Chrome or Firefox

---

## Environment Variable Issues

### Problem: Environment Variables Not Loading

**Symptoms**:
- `import.meta.env.VITE_SANITY_PROJECT_ID` is undefined
- Console shows "undefined" for env variables

**Solutions**:

**Step 1**: Check file location
- `.env.local` must be in project root
- Not in `/src` or `/studio`

**Step 2**: Check variable names
- Must start with `VITE_`
- Use SCREAMING_SNAKE_CASE
- No spaces around `=`

**Step 3**: Restart dev server
```bash
# Stop server (Ctrl+C)
pnpm dev
```

**Step 4**: Verify file format
```env
# Correct
VITE_SANITY_PROJECT_ID=abc12345

# Wrong
VITE_SANITY_PROJECT_ID = abc12345  # spaces
sanity_project_id=abc12345         # no VITE_ prefix
VITE-SANITY-PROJECT-ID=abc12345    # hyphens instead of underscores
```

---

### Problem: Different Values in Dev vs Production

**Symptoms**:
- Works locally but not in production
- Production uses wrong dataset
- Production can't connect to Sanity

**Solutions**:

**Step 1**: Check hosting platform variables
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment

**Step 2**: Verify values match
- Project ID should be same
- Dataset should be `production` (not `development`)

**Step 3**: Redeploy after changes
- Environment variable changes require redeploy
- Trigger new deployment

---

## Getting More Help

### Debug Checklist

Before asking for help, gather this information:

- [ ] Error message (exact text)
- [ ] Browser console logs
- [ ] Network tab showing failed requests
- [ ] Environment (local dev or production)
- [ ] Steps to reproduce
- [ ] What you've already tried

### Useful Debug Commands

```bash
# Check environment variables
cat .env.local

# Test Sanity connection
node verify-sanity-connection.js

# Check Node version
node --version

# Check pnpm version
pnpm --version

# View build output
pnpm build

# Check for outdated packages
pnpm outdated
```

### Enable Debug Logging

Add to `src/sanity/client.js`:

```javascript
export const client = createClient({
  // ... existing config
  useCdn: false, // Disable CDN for debugging
  withCredentials: true,
  // Log all requests
  requestTagPrefix: 'debug',
})

// Log all queries
const originalFetch = client.fetch
client.fetch = function(...args) {
  console.log('Sanity query:', args[0])
  return originalFetch.apply(this, args)
    .then(result => {
      console.log('Sanity result:', result)
      return result
    })
    .catch(error => {
      console.error('Sanity error:', error)
      throw error
    })
}
```

### Community Resources

- **Sanity Slack**: [slack.sanity.io](https://slack.sanity.io)
- **Sanity Documentation**: [sanity.io/docs](https://www.sanity.io/docs)
- **Stack Overflow**: Tag questions with `sanity`
- **GitHub Issues**: Check Sanity client issues

### Contact Support

If you're still stuck:

1. **Sanity Support**: [sanity.io/help](https://www.sanity.io/help)
2. **Community Forum**: [sanity.io/exchange](https://www.sanity.io/exchange)
3. **Email**: support@sanity.io

## Quick Reference

### Common Error Messages

| Error | Likely Cause | Quick Fix |
|-------|--------------|-----------|
| "Failed to fetch" | CORS or connection | Check CORS settings |
| "Unauthorized" | Missing/invalid token | Check API token |
| "Module not found" | Missing dependency | Run `pnpm install` |
| "Cannot read property of undefined" | Missing data | Check content exists |
| "CORS policy" | Origin not allowed | Add origin to CORS |
| "Network error" | Connection issue | Check internet/firewall |

### Quick Fixes

**Reset everything**:
```bash
# Frontend
rm -rf node_modules .env.local
pnpm install
# Create new .env.local with correct values
pnpm dev

# Studio
cd studio
rm -rf node_modules .sanity
pnpm install
pnpm dev
```

**Clear all caches**:
```bash
# Browser: Hard refresh (Ctrl+Shift+R)
# Clear browser cache in DevTools
# Clear Sanity CDN cache (wait 5 minutes)
```

## Additional Resources

- `docs/SANITY_SETUP_GUIDE.md` - Initial setup
- `docs/CONTENT_MANAGEMENT_GUIDE.md` - Managing content
- `docs/DEPLOYMENT_GUIDE.md` - Deployment instructions
- `docs/ENVIRONMENT_VARIABLES.md` - Environment configuration
