# Task 13: Populate Sanity Studio with Initial Content

## Overview

This task requires manually populating your Sanity Studio with content. Since this is a content management task rather than a coding task, I've created comprehensive guides and tools to help you complete it efficiently.

## What You Need to Do

You need to create:
- **8+ Artist entries** with images, bios, and social links
- **5+ Blog post entries** with rich content and featured images
- **6+ Producer entries** with images and bios

## Files Created to Help You

I've created several files to guide you through this process:

### 1. **SANITY_CONTENT_GUIDE.md** (Main Guide)
- Comprehensive step-by-step instructions
- Detailed content requirements for each type
- Suggested content with sample data
- Image guidelines and optimization tips
- Troubleshooting section

### 2. **CONTENT_CHECKLIST.md** (Progress Tracker)
- Complete checklist of all content to create
- Verification steps for each section
- Performance and quality checks
- Space for notes

### 3. **studio/seed-data.js** (Optional Automation)
- Automated script to create text content
- Saves time on typing
- Still requires manual image uploads

### 4. **studio/README.md** (Updated)
- Quick reference for Studio operations
- Configuration details
- Troubleshooting tips

## Two Approaches

### Approach 1: Fully Manual (Recommended)

**Best for:** Complete control over all content and images

1. Start Sanity Studio:
   ```bash
   cd studio
   pnpm dev
   ```

2. Open http://localhost:3333 in your browser

3. Follow the **SANITY_CONTENT_GUIDE.md** step by step

4. Use **CONTENT_CHECKLIST.md** to track your progress

5. Find free images from:
   - Unsplash: https://unsplash.com
   - Pexels: https://pexels.com
   - Search terms: "musician", "artist", "concert", "music producer"

### Approach 2: Semi-Automated (Faster)

**Best for:** Quick setup, manual image work

1. Install the seeding dependency:
   ```bash
   cd studio
   pnpm add @sanity/client
   ```

2. Get a Sanity write token:
   - Go to https://www.sanity.io/manage
   - Select your project (zqlbhzob)
   - Go to API Settings
   - Create a new token with "Editor" permissions
   - Copy the token

3. Run the seed script:
   ```bash
   # On Windows CMD:
   set SANITY_TOKEN=your_token_here
   pnpm seed

   # On Windows PowerShell:
   $env:SANITY_TOKEN="your_token_here"
   pnpm seed
   ```

4. Start Sanity Studio:
   ```bash
   pnpm dev
   ```

5. Open http://localhost:3333

6. Add images to each entry:
   - Click on each Artist, Producer, and Blog Post
   - Upload appropriate images
   - Click "Publish" to save changes

## Verification Steps

After adding all content:

1. **In Sanity Studio:**
   - Verify all entries are published (not drafts)
   - Check that all required fields are filled
   - Ensure all images are uploaded

2. **In React App:**
   ```bash
   # From project root
   pnpm dev
   ```
   
   Then check:
   - Home page Artist carousel shows all artists
   - Home page Producer section shows all producers
   - /artists page displays artist details
   - /blogs page shows all blog posts
   - All images load correctly
   - No console errors

## Image Guidelines

### Where to Find Images

**Free Stock Photo Sites:**
- **Unsplash** (https://unsplash.com) - High quality, free
- **Pexels** (https://pexels.com) - Great variety
- **Pixabay** (https://pixabay.com) - Free images

**Search Terms:**
- For Artists: "musician", "singer", "artist", "performer", "concert"
- For Producers: "dj", "music producer", "studio", "sound engineer"
- For Blogs: "music", "concert", "festival", "recording studio"

### Image Specifications

**Artists:**
- Profile Image: 800x800px (square), under 2MB
- Top Display Image: 1200x800px (landscape), under 2MB
- Bottom Display Image: 1200x800px (landscape), under 2MB

**Producers:**
- Profile Image: 800x800px (square), under 2MB

**Blog Posts:**
- Featured Image: 1200x630px (landscape), under 2MB

### Image Optimization Tips

1. Use high-quality images but compress before uploading
2. Crop to focus on the subject
3. Ensure good lighting and professional appearance
4. Maintain consistent style across all images
5. Use tools like TinyPNG or Squoosh to compress

## Sample Content Provided

The seed script includes sample content for:

### Artists:
1. Burna Boy (Afrobeats)
2. Wizkid (Afrobeats)
3. Tems (R&B/Soul)
4. Rema (Afrorave)
5. Asake (Afro-fusion)
6. Ayra Starr (Afropop)
7. Omah Lay (Afro-fusion)
8. Fireboy DML (Afropop/R&B)

### Producers:
1. Sarz (Afrobeats)
2. Pheelz (Afropop)
3. Rexxie (Afropop)
4. Tempoe (Amapiano)
5. Killertunes (Afrobeats)
6. Kel P (Afro-fusion)

### Blog Posts:
1. "The Rise of Afrobeats: How African Music Conquered the World"
2. "Behind the Scenes: A Day in the Life at Tinad Records"
3. "New Release Alert: Breaking Down the Latest Afrobeats Anthems"
4. "The Art of Music Production: Interview with Our Top Producers"
5. "Tinad Records Announces New Artist Signings for 2025"

## Time Estimate

- **Manual approach:** 2-3 hours (including finding and uploading images)
- **Semi-automated approach:** 1-2 hours (mainly for image work)

## Common Issues

### "Content not appearing in React app"
- Make sure content is **published**, not just saved as draft
- Refresh the React app after publishing
- Check browser console for errors

### "Images not loading"
- Verify images are uploaded in Sanity Studio
- Check that images are published
- Look for CORS errors in browser console

### "Seed script fails"
- Ensure SANITY_TOKEN is set correctly
- Verify token has "Editor" permissions
- Check that @sanity/client is installed

## Completion Criteria

Task 13 is complete when:

- [ ] At least 8 artists created with all required fields and images
- [ ] At least 5 blog posts created with rich content and images
- [ ] At least 6 producers created with all required fields and images
- [ ] All content is published (not drafts)
- [ ] All content displays correctly in the React app
- [ ] No console errors
- [ ] All images load from Sanity CDN
- [ ] Loading states work properly
- [ ] No empty states showing

## Next Steps

After completing this task:
1. Mark Task 13 as complete
2. Move to Task 14: Configure CORS and deployment settings
3. Move to Task 15: Create documentation

---

**Need Help?**

Refer to:
- **SANITY_CONTENT_GUIDE.md** for detailed instructions
- **CONTENT_CHECKLIST.md** for progress tracking
- **studio/README.md** for Studio-specific help
- Sanity Documentation: https://www.sanity.io/docs
