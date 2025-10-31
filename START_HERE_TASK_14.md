# 🚀 Start Here: Task 14 - CORS Configuration

## What You Need to Do

Task 14 provides all the tools and documentation for configuring CORS, but **you need to complete the configuration in the Sanity dashboard**.

---

## ⚡ Quick Start (5 Minutes)

### Step 1: Configure CORS in Sanity
1. Go to: **https://www.sanity.io/manage**
2. Select your project (ID: `zqlbhzob`)
3. Click: **API** → **CORS Origins**
4. Click: **Add CORS origin**
5. Add: `http://localhost:5173` (check "Allow credentials")
6. Click: **Save**

### Step 2: Verify It Works
```bash
node verify-sanity-connection.js
```

You should see:
```
✓ Project ID: zqlbhzob
✓ Dataset: production
✓ Sanity client created successfully
✓ All checks passed!
```

### Step 3: Test in Browser
```bash
pnpm dev
```

Open http://localhost:5173 and check:
- Open Developer Console (F12)
- Look for any CORS errors (there should be none)
- Navigate through all pages
- Verify content loads

---

## 📚 Documentation Available

Choose based on your needs:

### 🎯 Quick Setup (5 min)
→ **`CORS_QUICK_REFERENCE.md`**
- Essential steps only
- Quick troubleshooting

### ✅ Step-by-Step Checklist
→ **`TASK_14_CHECKLIST.md`**
- Complete checklist format
- Development and production steps
- Verification steps

### 📖 Comprehensive Guide
→ **`SANITY_CORS_CONFIGURATION_GUIDE.md`**
- Detailed explanations
- Platform-specific instructions
- Security best practices
- Troubleshooting guide

### 📊 Summary
→ **`TASK_14_SUMMARY.md`**
- What was accomplished
- Requirements satisfied
- Next steps

---

## 🔧 Tools Provided

### Verification Script
```bash
node verify-sanity-connection.js
```
Tests your Sanity connection and reports any issues.

---

## ❓ Common Questions

### Do I need an API token?
**No, it's optional.** The token is only needed for:
- Authenticated requests
- Accessing draft content
- Private datasets

For public read access, you don't need a token.

### What if I get CORS errors?
1. Make sure you added `http://localhost:5173` to CORS origins
2. Check that "Allow credentials" is enabled
3. Clear browser cache and refresh
4. Wait a few minutes for Sanity CDN to update

### What about production?
Before deploying to production:
1. Add your production domain to CORS origins
2. Set environment variables on your hosting platform
3. Test the production build

See `SANITY_CORS_CONFIGURATION_GUIDE.md` for details.

---

## ✅ Success Criteria

You'll know it's working when:
- ✅ Verification script passes all checks
- ✅ No CORS errors in browser console
- ✅ Content loads on all pages
- ✅ Images display correctly

---

## 🆘 Need Help?

1. **Quick fix**: Check `CORS_QUICK_REFERENCE.md`
2. **Detailed help**: See `SANITY_CORS_CONFIGURATION_GUIDE.md`
3. **Checklist**: Follow `TASK_14_CHECKLIST.md`

---

## 🎯 Your Action Items

- [ ] Configure CORS in Sanity dashboard
- [ ] Run verification script
- [ ] Test in browser
- [ ] Confirm no CORS errors

**Estimated time**: 5-10 minutes

---

**Ready?** Start with `CORS_QUICK_REFERENCE.md` for the fastest setup!
