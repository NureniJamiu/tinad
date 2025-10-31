# Task 14: Final Instructions - CORS Configuration

## 🎯 Current Status

✅ **Technical Setup Complete**:
- Sanity client configured correctly
- Environment variables set up
- Verification script confirms API connection works
- All documentation created

⚠️ **Action Required**: Configure CORS in Sanity Dashboard

---

## 🚀 What You Need to Do (5 Minutes)

### Step 1: Configure CORS in Sanity Dashboard

1. **Go to**: https://www.sanity.io/manage
2. **Login** with your Sanity account
3. **Select** your project: **Tinad CMS** (ID: `zqlbhzob`)
4. **Click**: API → CORS Origins
5. **Click**: "Add CORS origin"
6. **Enter**:
   - Origin: `http://localhost:5173`
   - Allow credentials: ✅ **Check this box**
7. **Click**: "Save"

> **Important**: If your dev server runs on a different port (like 5174), add that URL too: `http://localhost:5174`

### Step 2: Verify in Browser

1. **Start dev server**:
   ```bash
   pnpm dev
   ```

2. **Open browser** to the URL shown (e.g., http://localhost:5173 or http://localhost:5174)

3. **Open Developer Console** (Press F12)

4. **Check for CORS errors**:
   - ✅ **Success**: No errors, content loads
   - ❌ **Error**: "blocked by CORS policy" message

5. **Navigate through pages**:
   - Home (Artists carousel should load)
   - Artists page
   - Blog page

---

## 📊 Quick Verification

Run this command to test the connection:
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

## ⚠️ Important Notes

### Port Number
Your dev server may run on different ports:
- Default: `http://localhost:5173`
- Alternative: `http://localhost:5174` (if 5173 is in use)

**Add the actual port you're using to Sanity CORS origins!**

### Multiple Ports
If you use different ports, add each one:
- `http://localhost:5173`
- `http://localhost:5174`
- `http://localhost:5175`

Or use a wildcard for development:
- `http://localhost:*` (allows any localhost port)

---

## 🔧 Troubleshooting

### Still seeing CORS errors?

1. **Check exact URL**: Make sure it matches what's in your browser
2. **Include port**: `http://localhost:5173` (not just `localhost`)
3. **Check protocol**: Use `http://` (not `https://`)
4. **Clear cache**: Press Ctrl+Shift+R
5. **Wait**: Sanity CDN may take 1-2 minutes to update

### Content not loading?

1. Check if content exists in Sanity Studio
2. Run: `node verify-sanity-connection.js`
3. Check browser console for specific errors

---

## 📚 Documentation Reference

- **Quick Setup**: `CORS_QUICK_REFERENCE.md`
- **Detailed Guide**: `SANITY_CORS_CONFIGURATION_GUIDE.md`
- **Full Checklist**: `TASK_14_CHECKLIST.md`
- **Implementation Guide**: `TASK_14_IMPLEMENTATION_GUIDE.md`

---

## ✅ Task Completion Checklist

- [ ] Accessed Sanity dashboard
- [ ] Added CORS origin for development
- [ ] Started dev server (`pnpm dev`)
- [ ] Opened browser to dev URL
- [ ] Checked Developer Console - no CORS errors
- [ ] Verified content loads on all pages
- [ ] Images display correctly

---

## 🎉 Success Criteria

Task 14 is complete when:
1. ✅ CORS configured in Sanity dashboard
2. ✅ Dev server runs without CORS errors
3. ✅ All pages load content from Sanity
4. ✅ No errors in browser console

---

## 🚀 Production (Do Later)

Before deploying to production:
1. Add production domain to Sanity CORS
2. Set environment variables on hosting platform
3. Test production build

See `SANITY_CORS_CONFIGURATION_GUIDE.md` for details.

---

**Estimated Time**: 5-10 minutes
**Difficulty**: Easy
**Status**: Ready for your action

