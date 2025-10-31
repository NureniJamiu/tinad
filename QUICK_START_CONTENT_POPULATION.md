# Quick Start: Populate Sanity Content

## TL;DR

You need to add content to Sanity Studio. Here's the fastest way:

### Option 1: Automated Text + Manual Images (Recommended)

```bash
# 1. Go to studio directory
cd studio

# 2. Install dependency
pnpm add @sanity/client

# 3. Get your Sanity token from https://www.sanity.io/manage
#    (Select project -> API Settings -> Create token with "Editor" permissions)

# 4. Set token and run seed script (Windows CMD)
set SANITY_TOKEN=your_token_here
pnpm seed

# 5. Start Studio
pnpm dev

# 6. Open http://localhost:3333 and add images to each entry
```

### Option 2: Fully Manual

```bash
# 1. Start Studio
cd studio
pnpm dev

# 2. Open http://localhost:3333

# 3. Create content manually following SANITY_CONTENT_GUIDE.md
```

## What to Create

- **8 Artists** (name, genre, image, bio, social links)
- **5 Blog Posts** (title, description, featured image, content, date)
- **6 Producers** (name, specialty, image, bio)

## Where to Get Images

- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Search: "musician", "artist", "concert", "music producer"

## Verify It Works

```bash
# From project root
pnpm dev

# Check:
# - Home page shows artists and producers
# - /artists page works
# - /blogs page shows posts
# - All images load
```

## Detailed Guides

- **TASK_13_INSTRUCTIONS.md** - Complete task overview
- **SANITY_CONTENT_GUIDE.md** - Step-by-step content creation
- **CONTENT_CHECKLIST.md** - Track your progress
- **studio/README.md** - Studio-specific help

## Need Help?

Check the detailed guides above or visit https://www.sanity.io/docs
