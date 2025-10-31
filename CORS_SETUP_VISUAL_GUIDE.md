# 🎨 Visual Guide: Sanity CORS Setup

## 📍 Your Mission

Add `http://localhost:5173` to Sanity's allowed origins list.

---

## 🗺️ Navigation Path

```
Sanity Dashboard
    ↓
Your Project (zqlbhzob)
    ↓
API (left sidebar)
    ↓
CORS Origins (tab)
    ↓
Add CORS origin (button)
    ↓
Fill form & Save
```

---

## 📝 Form Fields

When you click "Add CORS origin", you'll see a form:

```
┌─────────────────────────────────────────┐
│  Add CORS Origin                        │
├─────────────────────────────────────────┤
│                                         │
│  Origin *                               │
│  ┌───────────────────────────────────┐ │
│  │ http://localhost:5173             │ │
│  └───────────────────────────────────┘ │
│                                         │
│  ☑ Allow credentials                   │
│                                         │
│  [Cancel]  [Save]                       │
└─────────────────────────────────────────┘
```

**Fill in**:
- Origin: `http://localhost:5173`
- Allow credentials: ✅ **Checked**

---

## 🎯 What You'll See

### Before Adding CORS:
```
Browser Console:
❌ Access to fetch at 'https://zqlbhzob.api.sanity.io/...'
   has been blocked by CORS policy
```

### After Adding CORS:
```
Browser Console:
✅ (No CORS errors)
✅ Content loads successfully
```

---

## 🔍 Where to Look

### In Browser (F12):

```
┌─────────────────────────────────────────┐
│ Elements  Console  Network  ...         │
├─────────────────────────────────────────┤
│                                         │
│ ✅ No errors = CORS is working          │
│                                         │
│ ❌ "blocked by CORS policy" = Need to   │
│    add origin in Sanity dashboard       │
│                                         │
└─────────────────────────────────────────┘
```

### In Network Tab:

```
┌─────────────────────────────────────────┐
│ Name                    Status   Type   │
├─────────────────────────────────────────┤
│ query?query=*[_type...  200 OK   fetch  │
│ query?query=*[_type...  200 OK   fetch  │
│ query?query=*[_type...  200 OK   fetch  │
└─────────────────────────────────────────┘

✅ Status 200 OK = Working correctly
❌ Status 0 or error = CORS issue
```

---

## 🎬 Step-by-Step Actions

### 1️⃣ Open Sanity Dashboard
```
🌐 https://www.sanity.io/manage
```

### 2️⃣ Select Your Project
```
Click: Tinad CMS (zqlbhzob)
```

### 3️⃣ Navigate to CORS
```
Left sidebar: API
Top tabs: CORS Origins
```

### 4️⃣ Add Origin
```
Button: "Add CORS origin"
```

### 5️⃣ Fill Form
```
Origin: http://localhost:5173
☑ Allow credentials
```

### 6️⃣ Save
```
Button: "Save"
```

### 7️⃣ Verify
```
Terminal: pnpm dev
Browser: Open dev URL
Console: Check for errors (F12)
```

---

## ✅ Success Indicators

You'll know it's working when:

1. **No CORS errors** in browser console
2. **Content loads** on all pages
3. **Images display** correctly
4. **Network requests** show 200 OK status

---

## 🆘 Quick Fixes

### Problem: Still seeing CORS errors

**Check**:
- [ ] Exact URL matches (including port)
- [ ] Protocol is `http://` (not `https://`)
- [ ] "Allow credentials" is checked
- [ ] Saved the configuration
- [ ] Cleared browser cache (Ctrl+Shift+R)
- [ ] Waited 1-2 minutes for CDN update

### Problem: Wrong port

If your dev server runs on port 5174 instead of 5173:
- Add `http://localhost:5174` to CORS origins
- Or use `http://localhost:*` for all ports

---

## 📱 Mobile View

Same steps apply, but:
- Use your computer's IP address
- Example: `http://192.168.1.100:5173`
- Add this to CORS origins too

---

## 🎓 Understanding CORS

**What is CORS?**
- Security feature in browsers
- Prevents unauthorized cross-origin requests
- Sanity needs to explicitly allow your domain

**Why do we need it?**
- Your app (localhost:5173) requests data from Sanity (zqlbhzob.api.sanity.io)
- Different domains = cross-origin request
- Sanity must allow your domain in CORS settings

**Server vs Browser:**
- ✅ Node.js (server): Works without CORS
- ⚠️ Browser: Needs CORS configuration

---

## 🔗 Quick Links

- **Sanity Dashboard**: https://www.sanity.io/manage
- **CORS Docs**: https://www.sanity.io/docs/cors
- **Your Project**: https://www.sanity.io/manage/project/zqlbhzob

---

## ⏱️ Time Estimate

- **Configuration**: 2 minutes
- **Testing**: 3 minutes
- **Total**: 5 minutes

---

**Ready? Go to**: https://www.sanity.io/manage 🚀

