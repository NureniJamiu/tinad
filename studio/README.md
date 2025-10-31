# Tinad CMS - Sanity Studio

This is the Sanity Studio for managing content for the Tinad music label website.

## Quick Start

### Running the Studio

```bash
# Install dependencies (if not already done)
pnpm install

# Start the development server
pnpm dev
```

The Studio will be available at `http://localhost:3333`

## Content Management

### Content Types

The Studio manages three main content types:

1. **Artists** - Music artists signed to the label
2. **Producers** - Music producers working with the label
3. **Blog Posts** - News, updates, and articles

### Populating Initial Content

You have two options for adding content:

#### Option 1: Manual Entry (Recommended for Images)

1. Start the Studio: `pnpm dev`
2. Open `http://localhost:3333` in your browser
3. Log in with your Sanity account
4. Follow the detailed guide in `../SANITY_CONTENT_GUIDE.md`
5. Use the checklist in `../CONTENT_CHECKLIST.md` to track progress

#### Option 2: Automated Seeding (Text Only)

This will create entries with text content, but you'll still need to add images manually.

```bash
# Install required dependency
pnpm add @sanity/client

# Set your Sanity write token as an environment variable
# Get token from: https://www.sanity.io/manage -> Your Project -> API Settings
export SANITY_TOKEN=your_token_here

# Run the seed script
pnpm seed
```

**Note:** The seed script only creates text content. You must add images manually in the Studio.

## Project Configuration

- **Project ID:** `zqlbhzob`
- **Dataset:** `production`
- **Studio URL:** `http://localhost:3333` (development)

## Content Guidelines

### Artists
- **Required:** Name, Genre, Profile Image
- **Optional:** Top Display Image, Bottom Display Image, Biography, Social Links
- **Image specs:** Square format, 800x800px minimum

### Producers
- **Required:** Name, Specialty, Profile Image
- **Optional:** Biography
- **Image specs:** Square format, 800x800px minimum

### Blog Posts
- **Required:** Title, Description, Featured Image, Content, Published Date
- **Image specs:** 1200x630px (optimal for social sharing)
- **Content:** Use rich text editor with headings, paragraphs, and inline images

## Deployment

To deploy the Studio to Sanity's hosting:

```bash
pnpm deploy
```

## Resources

- [Sanity Documentation](https://www.sanity.io/docs/introduction/getting-started)
- [Community Slack](https://slack.sanity.io/)
- [Extending Sanity Studio](https://www.sanity.io/docs/content-studio/extending)

## Troubleshooting

### Studio won't start
- Ensure all dependencies are installed: `pnpm install`
- Check that port 3333 is available
- Verify your Sanity account is authenticated

### Content not appearing in React app
- Ensure content is **published** (not just saved as draft)
- Check that the dataset matches in both Studio and React app
- Verify CORS settings in Sanity dashboard
- Check browser console for API errors

### Images not loading
- Verify images are uploaded and published in Studio
- Check CORS configuration in Sanity dashboard
- Ensure image URLs are being generated correctly in React app

## Next Steps

After populating content:
1. Configure CORS settings in Sanity dashboard (Task 14)
2. Create deployment documentation (Task 15)
3. Test the entire application end-to-end
