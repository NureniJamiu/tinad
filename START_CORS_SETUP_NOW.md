# 🚀 Start CORS Setup Now (5 Minutes)

## ⚡ Quick Action Required

Your Sanity integration is ready! Just configure CORS to allow browser requests.

---

## 🎯 Do This Now:

### 1. Open Sanity Dashboard
👉 **https://www.sanity.io/manage**

### 2. Navigate to CORS
- Select project: **Tinad CMS** (ID: `zqlbhzob`)
- Click: **API** (left sidebar)
- Click: **CORS Origins** (tab)

### 3. Add Your Development URL
- Click: **"Add CORS origin"**
- Enter: `http://localhost:5173`
- Check: ☑ **"Allow credentials"**
- Click: **"Save"**

### 4. Test It
```bash
pnpm dev
```
Open browser → Check console (F12) → No CORS errors = Success! ✅

---

## 📚 Need More Help?

Choose your guide:

| Guide | Best For |
|-------|----------|
| `TASK_14_FINAL_INSTRUCTIONS.md` | Quick start |
| `CORS_SETUP_VISUAL_GUIDE.md` | Visual walkthrough |
| `CORS_QUICK_REFERENCE.md` | 5-minute setup |
| `TASK_14_CHECKLIST.md` | Step-by-step |

---

## ✅ You'll Know It Works When:

- ✅ No CORS errors in browser console
- ✅ Content loads on all pages
- ✅ Images display correctly

---

## ⚠️ Important:

If your dev server uses port **5174** instead of 5173:
- Add `http://localhost:5174` to CORS origins

---

## 🆘 Having Issues?

Run this to test connection:
```bash
node verify-sanity-connection.js
```

Check `CORS_QUICK_REFERENCE.md` for troubleshooting.

---

**Time needed**: 5 minutes
**Difficulty**: Easy
**Status**: Ready to go!

👉 **Start here**: https://www.sanity.io/manage

