# Sanity Site Settings Guide

## Overview

The hero section images and background music are now managed through Sanity CMS. This allows you to update these assets without touching the code.

## What's Configurable

### 1. Hero Section Images (3 images)
- The three images displayed on the homepage hero section
- Must upload exactly 3 images
- Supports hotspot for better cropping
- Optimized automatically for web delivery

### 2. Background Music
- The audio file that plays in the background
- Supports any audio format (MP3 recommended)
- Automatically loops when playing

## Setup Instructions

### Step 1: Create Site Settings Document

Run the seed script to create the initial site settings document:

```bash
cd studio
node seed-site-settings.js
```

### Step 2: Upload Assets in Sanity Studio

1. Start your Sanity Studio (if not already running):
   ```bash
   cd studio
   pnpm dev
   ```

2. Open Sanity Studio in your browser (usually http://localhost:3333)

3. Navigate to **"Site Settings"** in the sidebar

4. Upload your content:
   - **Hero Images**: Click "Add item" 3 times and upload 3 images
   - **Background Music**: Upload your audio file (MP3 format recommended)

5. Click **"Publish"** to save your changes

### Step 3: Verify Changes

1. Start your development server:
   ```bash
   pnpm dev
   ```

2. Open your site (usually http://localhost:5173)

3. You should see:
   - Your uploaded images in the hero section
   - Background music playing (click the play button)

## File Structure

### New Files Created

```
studio/schemaTypes/siteSettings.ts    # Sanity schema for site settings
studio/seed-site-settings.js          # Seed script to create initial document
src/sanity/fileBuilder.js             # Helper to get file URLs from Sanity
```

### Modified Files

```
src/components/Hero.jsx               # Now fetches images from Sanity
src/components/MusicPlayer.jsx        # Now uses music URL from context
src/context/MusicContext.jsx          # Accepts music URL prop
src/App.jsx                           # Fetches site settings and passes to context
src/sanity/queries.js                 # Added siteSettingsQuery
studio/schemaTypes/index.ts           # Added siteSettings to schema
```

## How It Works

### Hero Images

1. **Query**: The Hero component fetches site settings using `siteSettingsQuery`
2. **Transform**: Images are processed through `urlFor()` for optimization
3. **Fallback**: If Sanity data isn't available, uses hardcoded fallback images
4. **Display**: Images are rendered with motion animations

### Background Music

1. **Query**: App.jsx fetches site settings on mount
2. **Extract**: Music file URL is extracted using `getFileUrl()` helper
3. **Context**: URL is passed to MusicProvider context
4. **Player**: MusicPlayer component uses the URL from context
5. **Fallback**: If no Sanity music, uses `/music/background-music.mp3`

## Troubleshooting

### Images Not Showing

1. Check that you uploaded exactly 3 images in Sanity Studio
2. Verify images are published (not just saved as draft)
3. Check browser console for any CORS errors
4. Ensure your `.env.local` has correct Sanity credentials

### Music Not Playing

1. Verify the audio file is uploaded and published in Sanity
2. Check that the file format is supported (MP3 is most compatible)
3. Check browser console for audio loading errors
4. Try clicking the play button (some browsers block autoplay)

### CORS Issues

If you see CORS errors:

1. Go to https://www.sanity.io/manage
2. Select your project
3. Navigate to **API → CORS Origins**
4. Add your development URL (e.g., http://localhost:5173)
5. Add your production URL when deploying

## Best Practices

### Image Guidelines

- **Format**: JPEG or PNG
- **Size**: At least 800x800px (will be optimized automatically)
- **File size**: Keep under 2MB for faster loading
- **Content**: High-quality photos of artists or music-related imagery

### Audio Guidelines

- **Format**: MP3 (best browser compatibility)
- **Bitrate**: 128-192 kbps (good quality, reasonable file size)
- **Length**: 2-5 minutes (will loop automatically)
- **Volume**: Normalize audio to avoid sudden loud playback
- **File size**: Keep under 5MB for faster loading

## Future Enhancements

Potential additions to site settings:

- Hero section text (title and description)
- Social media links
- Contact information
- Site-wide color theme
- Featured artists/tracks
- Announcement banner

## Support

If you encounter issues:

1. Check the browser console for errors
2. Verify Sanity Studio is running and accessible
3. Ensure all environment variables are set correctly
4. Review the Sanity documentation: https://www.sanity.io/docs
