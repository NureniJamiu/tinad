# Sanity CORS Configuration - Quick Reference

## 🚀 Quick Setup (5 Minutes)

### Your Project Info
- **Project ID**: `zqlbhzob`
- **Dashboard**: https://www.sanity.io/manage

---

## Step 1: Add CORS Origins (Required)

1. Go to: https://www.sanity.io/manage → Select your project
2. Click: **API** → **CORS Origins**
3. Click: **Add CORS origin**
4. Add these origins:

| Origin | Allow Credentials | Purpose |
|--------|------------------|---------|
| `http://localhost:5173` | ✅ Yes | Development |
| `https://your-domain.com` | ✅ Yes | Production |

---

## Step 2: Create API Token (Optional)

1. Click: **API** → **Tokens**
2. Click: **Add API token**
3. Settings:
   - **Label**: Frontend Read-Only Token
   - **Permissions**: Viewer (read-only)
   - **Dataset**: production
4. Copy token and add to `.env.local`:
   ```env
   VITE_SANITY_TOKEN=your_token_here
   ```

---

## Step 3: Verify Setup

Run this command:
```bash
node verify-sanity-connection.js
```

Expected output:
```
✓ Project ID: zqlbhzob
✓ Dataset: production
✓ Sanity client created successfully
✓ All checks passed!
```

---

## Step 4: Test in Browser

```bash
pnpm dev
```

Open http://localhost:5173 and check:
- ✅ No CORS errors in console (F12)
- ✅ Content loads on all pages
- ✅ Images display correctly

---

## Common Issues

### CORS Error?
```
blocked by CORS policy
```
**Fix**: Add `http://localhost:5173` to CORS origins in Sanity dashboard

### 401 Unauthorized?
```
401 Unauthorized
```
**Fix**: Check API token is set correctly in `.env.local`

### Content Not Loading?
**Fix**: Verify content exists in Sanity Studio at https://your-project.sanity.studio

---

## Production Deployment

Before deploying:
1. Add production domain to CORS origins
2. Set environment variables on hosting platform:
   ```
   VITE_SANITY_PROJECT_ID=zqlbhzob
   VITE_SANITY_DATASET=production
   VITE_SANITY_API_VERSION=2024-01-01
   ```
3. Build and deploy: `pnpm build`

---

## Need More Help?

See detailed guide: `SANITY_CORS_CONFIGURATION_GUIDE.md`
