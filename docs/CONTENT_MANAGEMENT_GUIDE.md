# Content Management Guide

This guide explains how to create and manage content in Sanity Studio for the Tinad music label website.

## Accessing Sanity Studio

1. **Start the Studio locally**:
   ```bash
   cd studio
   pnpm dev
   ```
   Open `http://localhost:3333` in your browser

2. **Or access the deployed Studio**:
   - Visit your deployed Studio URL (e.g., `https://tinad.sanity.studio`)
   - Log in with your Sanity credentials

## Content Types Overview

The Tinad CMS has three main content types:

1. **Artists** - Musicians and performers signed to the label
2. **Blog Posts** - News, updates, and articles
3. **Producers** - Music producers working with the label

## Managing Artists

### Creating a New Artist

1. Click **"Artist"** in the left sidebar
2. Click **"Create new Artist"** button
3. Fill in the required fields:

#### Required Fields

- **Name**: Artist's full name or stage name
  - Example: `Kendrick Lamar`

- **Genre**: Primary music genre
  - Example: `Hip-Hop`, `R&B`, `Afrobeats`

- **Profile Image**: Main artist photo
  - Click "Upload" or drag and drop
  - Recommended size: 800x800px (square)
  - Formats: JPG, PNG, WebP
  - This image appears in the artist carousel on the homepage

#### Optional Fields

- **Top Display Image**: Large hero image for Artists page
  - Recommended size: 1200x800px (landscape)
  - Used in the detailed artist display

- **Bottom Display Image**: Secondary image for Artists page
  - Recommended size: 1200x800px (landscape)
  - Used in the detailed artist display

- **Biography**: Artist description and background
  - Keep it concise (2-3 paragraphs)
  - Highlight achievements and style

- **Social Media Links**: Artist's social profiles
  - Instagram URL
  - Twitter URL
  - Spotify URL
  - Must be full URLs (e.g., `https://instagram.com/username`)

### Editing an Artist

1. Click **"Artist"** in the sidebar
2. Select the artist from the list
3. Make your changes
4. Click **"Publish"** to save

### Best Practices for Artists

- Use high-quality, professional photos
- Keep genre names consistent across artists
- Fill in all social media links when available
- Write engaging bios that capture the artist's essence
- Upload both top and bottom display images for featured artists

## Managing Blog Posts

### Creating a New Blog Post

1. Click **"Blog Post"** in the left sidebar
2. Click **"Create new Blog Post"** button
3. Fill in the required fields:

#### Required Fields

- **Title**: Blog post headline
  - Keep it under 100 characters
  - Make it engaging and descriptive
  - Example: `Kendrick Lamar Drops Surprise Album`

- **Description**: Brief summary of the post
  - 2-3 sentences
  - Appears in blog card previews
  - Example: `Grammy-winning artist surprises fans with a new 12-track album exploring themes of identity and social justice.`

- **Featured Image**: Main blog post image
  - Recommended size: 1200x630px (landscape)
  - Formats: JPG, PNG, WebP
  - This image appears in blog listings

- **Published At**: Publication date and time
  - Click the calendar icon
  - Select date and time
  - Posts are sorted by this date (newest first)

#### Optional Fields

- **Content**: Full blog post content
  - Rich text editor with formatting options
  - Can include:
    - Headings (H1, H2, H3)
    - Bold and italic text
    - Bullet lists and numbered lists
    - Links
    - Inline images
    - Block quotes

### Using the Rich Text Editor

The content field supports rich formatting:

1. **Add headings**: Select text and choose heading level
2. **Format text**: Use bold, italic, or underline
3. **Insert links**: 
   - Select text
   - Click link icon
   - Enter URL
4. **Add images**:
   - Click image icon
   - Upload or select existing image
   - Add alt text for accessibility
5. **Create lists**:
   - Click bullet or numbered list icon
   - Press Enter for new items

### Best Practices for Blog Posts

- Use descriptive, SEO-friendly titles
- Write compelling descriptions that encourage clicks
- Choose eye-catching featured images
- Structure content with headings for readability
- Include relevant images throughout the content
- Set accurate publication dates
- Proofread before publishing

## Managing Producers

### Creating a New Producer

1. Click **"Producer"** in the left sidebar
2. Click **"Create new Producer"** button
3. Fill in the required fields:

#### Required Fields

- **Name**: Producer's full name or alias
  - Example: `Metro Boomin`

- **Specialty**: Production style or expertise
  - Example: `Trap & Hip-Hop`, `R&B Production`, `Sound Engineering`

- **Profile Image**: Producer photo
  - Recommended size: 800x800px (square)
  - Formats: JPG, PNG, WebP

#### Optional Fields

- **Biography**: Producer background and achievements
  - Highlight notable collaborations
  - Mention production style and techniques
  - Keep it concise (2-3 paragraphs)

### Best Practices for Producers

- Use professional headshots or studio photos
- Be specific with specialty descriptions
- Highlight major collaborations in bio
- Keep specialty names consistent

## Image Guidelines

### Image Requirements

- **File formats**: JPG, PNG, or WebP
- **Maximum file size**: 10MB (smaller is better for performance)
- **Color space**: sRGB

### Recommended Dimensions

| Content Type | Image Field | Recommended Size | Aspect Ratio |
|--------------|-------------|------------------|--------------|
| Artist | Profile Image | 800x800px | 1:1 (Square) |
| Artist | Top Display | 1200x800px | 3:2 (Landscape) |
| Artist | Bottom Display | 1200x800px | 3:2 (Landscape) |
| Blog | Featured Image | 1200x630px | 1.91:1 (Landscape) |
| Blog | Content Images | 1000x600px | Variable |
| Producer | Profile Image | 800x800px | 1:1 (Square) |

### Image Optimization Tips

1. **Compress images** before uploading
   - Use tools like TinyPNG or ImageOptim
   - Aim for under 500KB per image

2. **Use appropriate dimensions**
   - Don't upload images larger than needed
   - Sanity will optimize, but starting smaller is better

3. **Choose the right format**
   - JPG for photos
   - PNG for graphics with transparency
   - WebP for best compression (if supported)

4. **Add alt text** (for accessibility)
   - Describe what's in the image
   - Keep it concise but descriptive

## Publishing Workflow

### Draft vs Published

- **Draft**: Content is saved but not visible on the website
- **Published**: Content is live and visible to users

### Publishing Content

1. Create or edit content
2. Fill in all required fields
3. Click **"Publish"** button (top right)
4. Content is now live on the website

### Unpublishing Content

1. Open the published content
2. Click the three-dot menu (top right)
3. Select **"Unpublish"**
4. Content is removed from the website but saved as draft

### Scheduling (Manual Process)

Sanity doesn't have built-in scheduling, but you can:
1. Create content as draft
2. Set the "Published At" date to future date
3. Manually publish when ready

## Content Organization Tips

### Naming Conventions

- Use clear, descriptive names
- Be consistent with capitalization
- Avoid special characters in names

### Content Planning

1. **Artists**: Aim for 8-12 active artists
2. **Blog Posts**: Publish regularly (weekly or bi-weekly)
3. **Producers**: Maintain 6-10 producer profiles

### Quality Checklist

Before publishing, verify:
- [ ] All required fields are filled
- [ ] Images are high quality and properly sized
- [ ] Text is proofread and error-free
- [ ] Links work correctly
- [ ] Content displays correctly in preview
- [ ] Publication date is correct

## Bulk Operations

### Duplicating Content

1. Open existing content
2. Click three-dot menu (top right)
3. Select **"Duplicate"**
4. Edit the duplicated content
5. Publish when ready

### Deleting Content

1. Open the content to delete
2. Click three-dot menu (top right)
3. Select **"Delete"**
4. Confirm deletion
5. Content is permanently removed

**Warning**: Deletion is permanent and cannot be undone!

## Using the Vision Tool

The Vision tool lets you test GROQ queries:

1. Click **"Vision"** in the top menu
2. Enter a GROQ query
3. Click **"Execute"** to see results

### Example Queries

**Fetch all artists**:
```groq
*[_type == "artist"] {
  name,
  genre,
  "image": image.asset->url
}
```

**Fetch recent blog posts**:
```groq
*[_type == "blog"] | order(publishedAt desc) [0...5] {
  title,
  description,
  publishedAt
}
```

**Count producers**:
```groq
count(*[_type == "producer"])
```

## Keyboard Shortcuts

- **Cmd/Ctrl + S**: Save draft
- **Cmd/Ctrl + P**: Publish
- **Cmd/Ctrl + K**: Open command palette
- **Cmd/Ctrl + /**: Toggle sidebar

## Getting Help

### In-Studio Help

- Click the **"?"** icon (top right) for help
- Hover over field labels for tooltips
- Check field validation messages

### External Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Cheat Sheet](https://www.sanity.io/docs/query-cheat-sheet)
- [Content Modeling Guide](https://www.sanity.io/docs/content-modelling)

## Troubleshooting

### Can't upload images

**Problem**: Upload fails or images don't appear

**Solution**:
1. Check file size (must be under 10MB)
2. Verify file format (JPG, PNG, WebP)
3. Try a different browser
4. Clear browser cache

### Changes not appearing on website

**Problem**: Published content doesn't show on site

**Solution**:
1. Verify content is published (not draft)
2. Check CORS configuration
3. Clear browser cache
4. Wait 30 seconds for CDN cache
5. Check browser console for errors

### Lost unsaved changes

**Problem**: Accidentally closed tab with unsaved work

**Solution**:
- Sanity auto-saves drafts every few seconds
- Reopen the content - your changes should be there
- Always click "Publish" to make changes live

## Best Practices Summary

1. **Always fill required fields** before publishing
2. **Use high-quality images** optimized for web
3. **Proofread content** before publishing
4. **Be consistent** with naming and formatting
5. **Test links** before publishing
6. **Set accurate dates** for blog posts
7. **Keep content fresh** with regular updates
8. **Use descriptive titles** for better SEO
9. **Add alt text** to images for accessibility
10. **Preview content** before publishing

## Next Steps

- Review `docs/DEPLOYMENT_GUIDE.md` for production deployment
- Check `docs/TROUBLESHOOTING_GUIDE.md` for common issues
- Explore `docs/ENVIRONMENT_VARIABLES.md` for configuration options
