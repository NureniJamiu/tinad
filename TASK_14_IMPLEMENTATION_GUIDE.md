# Task 14: CORS and Deployment Configuration - Implementation Guide

## ✅ Current Status

Your Sanity connection is **working correctly**! The verification script confirms:
- ✓ Environment variables are properly configured
- ✓ Sanity client connects successfully
- ✓ API queries execute without errors

**What's left**: Configure CORS origins in the Sanity dashboard to allow browser requests.

---

## 🎯 What You Need to Do

The Sanity API is working from Node.js (server-side), but browsers need CORS permission to make requests. You need to add your development and production URLs to Sanity's allowed origins list.

---

## 📋 Step-by-Step Instructions

### Step 1: Access Sanity Dashboard

1. Open your browser and go to: **https://www.sanity.io/manage**
2. Log in with your Sanity account credentials
3. You should see your project: **Tinad CMS** (Project ID: `zqlbhzob`)
4. Click on the project to open it

### Step 2: Navigate to CORS Settings

1. In the left sidebar, click on **"API"**
2. Click on the **"CORS Origins"** tab
3. You'll see a list of currently allowed origins (may be empty)

### Step 3: Add Development Origin

1. Click the **"Add CORS origin"** button
2. Fill in the form:
   - **Origin**: `http://localhost:5173`
   - **Allow credentials**: ✅ **Check this box**
3. Click **"Save"**

> **Important**: Make sure to include the exact URL with `http://` and the port `:5173`

### Step 4: Add Production Origin (Optional - Do Before Deployment)

When you're ready to deploy to production:

1. Click **"Add CORS origin"** again
2. Fill in your production domain:
   - **Origin**: `https://your-production-domain.com`
   - **Allow credentials**: ✅ **Check this box**
3. Click **"Save"**

**Common production URLs**:
- Vercel: `https://your-app.vercel.app`
- Netlify: `https://your-app.netlify.app`
- Custom domain: `https://tinad.com`

---

## 🧪 Step 5: Verify Configuration

### Test 1: Run Verification Script Again

```bash
node verify-sanity-connection.js
```

You should see the same successful output (this tests server-side connection).

### Test 2: Test in Browser (Most Important)

1. Start your development server:
   ```bash
   pnpm dev
   ```

2. Open your browser to: **http://localhost:5173**

3. Open Developer Console (Press **F12**)

4. Look at the **Console** tab for any errors:
   - ✅ **Success**: No CORS errors, content loads
   - ❌ **Error**: You'll see "blocked by CORS policy" messages

5. Navigate through all pages:
   - Home page (Artists carousel)
   - Artists page
   - Blog page
   - Check that content loads on each page

### Test 3: Check Network Requests

1. In Developer Tools, click the **Network** tab
2. Refresh the page
3. Look for requests to `zqlbhzob.api.sanity.io`
4. Click on any request and check:
   - **Status**: Should be `200 OK`
   - **Response**: Should contain JSON data

---

## 🔧 Optional: Create API Token

An API token is **optional** for public read access. Only create one if you need:
- Authenticated requests
- Access to draft content
- Private datasets

### To Create a Token:

1. In Sanity dashboard, go to **API** → **Tokens**
2. Click **"Add API token"**
3. Configure:
   - **Label**: `Frontend Read-Only Token`
   - **Permissions**: **Viewer** (read-only)
   - **Dataset**: `production`
4. Click **"Save"**
5. **Copy the token immediately** (you won't see it again)
6. Add to your `.env.local` file:
   ```env
   VITE_SANITY_TOKEN=your_copied_token_here
   ```

---

## ❌ Troubleshooting

### Issue: Still seeing CORS errors after adding origin

**Solutions**:
1. **Check the exact URL**: Make sure it's `http://localhost:5173` (not `https`, not a different port)
2. **Clear browser cache**: Press Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
3. **Wait a few minutes**: Sanity's CDN may take time to update
4. **Verify "Allow credentials" is checked**
5. **Try in incognito/private browsing mode**

### Issue: Content not loading

**Solutions**:
1. Check if content exists in Sanity Studio: https://your-project.sanity.studio
2. Run the verification script: `node verify-sanity-connection.js`
3. Check browser console for specific error messages
4. Verify your GROQ queries in `src/sanity/queries.js`

### Issue: Images not displaying

**Solutions**:
1. Verify images are uploaded in Sanity Studio
2. Check the Network tab for image request status
3. Ensure image URLs are being generated correctly
4. Check `src/sanity/imageBuilder.js` configuration

---

## 📊 Verification Checklist

Complete these checks to confirm everything is working:

- [ ] Accessed Sanity dashboard at https://www.sanity.io/manage
- [ ] Navigated to API → CORS Origins
- [ ] Added `http://localhost:5173` as allowed origin
- [ ] Enabled "Allow credentials" for the origin
- [ ] Saved the CORS configuration
- [ ] Started development server (`pnpm dev`)
- [ ] Opened http://localhost:5173 in browser
- [ ] Checked Developer Console (F12) - no CORS errors
- [ ] Navigated to Home page - Artists carousel loads
- [ ] Navigated to Artists page - Artist displays load
- [ ] Navigated to Blog page - Blog posts load
- [ ] Checked Network tab - API requests return 200 OK
- [ ] Verified images display correctly

---

## 🚀 Production Deployment Checklist

Before deploying to production:

- [ ] Add production domain to Sanity CORS origins
- [ ] Configure environment variables on hosting platform:
  ```
  VITE_SANITY_PROJECT_ID=zqlbhzob
  VITE_SANITY_DATASET=production
  VITE_SANITY_API_VERSION=2024-01-01
  ```
- [ ] Build the application: `pnpm build`
- [ ] Test production build locally: `pnpm preview`
- [ ] Deploy to hosting platform
- [ ] Test production site in browser
- [ ] Verify no CORS errors in production
- [ ] Confirm all content loads correctly

---

## 📚 Additional Resources

- **Quick Reference**: `CORS_QUICK_REFERENCE.md` - 5-minute setup guide
- **Detailed Guide**: `SANITY_CORS_CONFIGURATION_GUIDE.md` - Comprehensive instructions
- **Checklist**: `TASK_14_CHECKLIST.md` - Step-by-step checklist format
- **Sanity Docs**: https://www.sanity.io/docs/cors

---

## 🎉 Success Criteria

You'll know Task 14 is complete when:

1. ✅ CORS origins configured in Sanity dashboard
2. ✅ Development server runs without CORS errors
3. ✅ All pages load content from Sanity
4. ✅ Images display correctly from Sanity CDN
5. ✅ Network requests show 200 OK status
6. ✅ No errors in browser console

---

## 📝 Summary

**What's Working**:
- ✓ Sanity client configuration
- ✓ Environment variables
- ✓ API connection (server-side)
- ✓ Verification script

**What You Need to Do**:
1. Configure CORS in Sanity dashboard (5 minutes)
2. Test in browser to confirm no CORS errors
3. Optionally create API token if needed

**Estimated Time**: 5-10 minutes

---

**Need Help?** Check the troubleshooting section above or refer to the detailed guides in the project root.

