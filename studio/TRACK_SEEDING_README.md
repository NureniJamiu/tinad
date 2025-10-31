# Track Seeding Guide

This guide explains how to add sample tracks to your existing artists without affecting any other data.

## What This Does

The `seed-tracks.js` script will:
- ✅ Create 8 sample track documents with variety (some with streaming links, some without)
- ✅ Query for existing artists by name (Burna Boy, Wizkid, Tems)
- ✅ Associate tracks with those artists
- ✅ Preserve all your existing data (artists, producers, blog posts)
- ✅ Append tracks to existing track lists (won't overwrite)

## Prerequisites

1. Make sure you have at least one of these artists in your Sanity Studio:
   - Burna Boy
   - Wizkid
   - Tems

2. You need a Sanity write token set in your `.env.local` file:
   ```
   SANITY_TOKEN=your_write_token_here
   ```

## How to Run

```bash
pnpm seed:tracks
```

Or directly:
```bash
node studio/seed-tracks.js
```

## What Gets Created

### 8 Sample Tracks:

1. **Last Last** (2022) - Has Spotify + Apple Music links
2. **It's Plenty** (2023) - Has Spotify link only
3. **Sittin' On Top Of The World** (2023) - No streaming links
4. **On The Low** (2022) - Has Apple Music link only
5. **Essence** (2020) - Has Spotify + Apple Music links
6. **Calm Down** (2022) - Has Spotify + Apple Music links
7. **Free Mind** (2020) - Has Spotify link only
8. **Sungba** (2022) - No streaming links

### Track Assignments:

- **Burna Boy**: Gets tracks 1-4 (4 tracks)
- **Wizkid**: Gets tracks 5-7 (3 tracks)
- **Tems**: Gets track 8 (1 track)

If an artist doesn't exist in your database, the script will skip them and continue with the others.

## After Running

1. Open Sanity Studio
2. Navigate to the **Tracks** section
3. Add cover images to each track
4. View your artist detail pages in the React app to see the tracks

## Customization

You can edit `studio/seed-tracks.js` to:
- Add more tracks to the `tracks` array
- Change which tracks go to which artists in the `trackAssignments` array
- Add tracks to different artists by changing the `artistName` values

## Troubleshooting

**Error: SANITY_TOKEN is required**
- Make sure you have `SANITY_TOKEN` set in your `.env.local` file
- Get a token from https://www.sanity.io/manage → Your Project → API Settings

**Artist not found**
- The script looks for artists by exact name match
- Make sure the artist names in your Sanity Studio match exactly (case-sensitive)
- Check the console output to see which artists were skipped

**Tracks created but not showing up**
- Clear your browser cache
- Check that CORS is configured correctly in Sanity
- Verify the tracks are associated with the artist in Sanity Studio
