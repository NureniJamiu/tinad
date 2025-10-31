/**
 * Sanity Track Seeding Script
 * 
 * This script adds sample tracks to your existing artists without affecting other data.
 * 
 * Usage:
 * 1. Make sure you have artists in your Sanity Studio
 * 2. Set environment variable: SANITY_TOKEN=your_write_token
 * 3. Run: node studio/seed-tracks.js
 * 
 * The script will:
 * - Create sample track documents
 * - Query for existing artists by name
 * - Associate tracks with those artists
 * - Skip artists that don't exist
 */

import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load .env.local from parent directory
dotenv.config({ path: join(__dirname, '..', '.env.local') })

const client = createClient({
  projectId: 'zqlbhzob',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
})

// Sample Tracks Data
const tracks = [
  {
    _type: 'track',
    title: 'Last Last',
    releaseYear: 2022,
    duration: '2:47',
    spotifyLink: 'https://open.spotify.com/track/3Vv5K3gYhJGKNvZqj8RKZX',
    appleMusicLink: 'https://music.apple.com/us/album/last-last/1627572206?i=1627572207',
  },
  {
    _type: 'track',
    title: 'It\'s Plenty',
    releaseYear: 2023,
    duration: '3:12',
    spotifyLink: 'https://open.spotify.com/track/5K3gYhJGKNvZqj8RKZX3Vv',
    // No Apple Music link
  },
  {
    _type: 'track',
    title: 'Sittin\' On Top Of The World',
    releaseYear: 2023,
    duration: '2:58',
    // No streaming links
  },
  {
    _type: 'track',
    title: 'On The Low',
    releaseYear: 2022,
    duration: '3:24',
    appleMusicLink: 'https://music.apple.com/us/album/on-the-low/1627572206?i=1627572210',
    // No Spotify link
  },
  {
    _type: 'track',
    title: 'Essence',
    releaseYear: 2020,
    duration: '4:07',
    spotifyLink: 'https://open.spotify.com/track/0F7FA14euOIX8KcbEturGH',
    appleMusicLink: 'https://music.apple.com/us/album/essence-feat-tems/1531583017?i=1531583350',
  },
  {
    _type: 'track',
    title: 'Calm Down',
    releaseYear: 2022,
    duration: '3:59',
    spotifyLink: 'https://open.spotify.com/track/1HU7ocv4jGcLRyyuAa4TJQ',
    appleMusicLink: 'https://music.apple.com/us/album/calm-down/1613321122?i=1613321123',
  },
  {
    _type: 'track',
    title: 'Free Mind',
    releaseYear: 2020,
    duration: '3:42',
    spotifyLink: 'https://open.spotify.com/track/3Kkjo3cT83cw09VJyrLNwX',
    // No Apple Music link
  },
  {
    _type: 'track',
    title: 'Sungba',
    releaseYear: 2022,
    duration: '3:18',
    // No streaming links
  },
]

// Track assignments: which tracks go to which artist (by artist name)
const trackAssignments = [
  {
    artistName: 'Burna Boy',
    trackIndices: [0, 1, 2, 3], // First 4 tracks
  },
  {
    artistName: 'Wizkid',
    trackIndices: [4, 5, 6], // Next 3 tracks
  },
  {
    artistName: 'Tems',
    trackIndices: [7], // Last track
  },
]

async function seedTracks() {
  console.log('🎵 Starting track seeding...\n')

  try {
    // Check if token is provided
    if (!process.env.SANITY_TOKEN) {
      console.error('❌ Error: SANITY_TOKEN is required for write operations')
      console.log('\nTo get a token:')
      console.log('1. Go to https://www.sanity.io/manage')
      console.log('2. Select your project')
      console.log('3. Go to API settings')
      console.log('4. Create a new token with "Editor" permissions')
      console.log('5. Add it to your .env.local file as SANITY_TOKEN=your_token_here\n')
      process.exit(1)
    }

    // Create all tracks first
    console.log('📝 Creating tracks...')
    const createdTracks = []
    for (const track of tracks) {
      const result = await client.create(track)
      createdTracks.push(result)
      console.log(`✅ Created track: ${track.title} (ID: ${result._id})`)
    }

    console.log(`\n✨ Created ${createdTracks.length} tracks successfully!\n`)

    // Now associate tracks with artists
    console.log('🔗 Associating tracks with artists...\n')

    for (const assignment of trackAssignments) {
      const { artistName, trackIndices } = assignment

      // Query for the artist by name
      const query = `*[_type == "artist" && name == $name][0]`
      const params = { name: artistName }
      const artist = await client.fetch(query, params)

      if (!artist) {
        console.log(`⚠️  Artist "${artistName}" not found - skipping`)
        continue
      }

      // Get the track references for this artist
      const trackRefs = trackIndices.map((index) => ({
        _type: 'reference',
        _ref: createdTracks[index]._id,
        _key: createdTracks[index]._id,
      }))

      // Get existing tracks (if any) and append new ones
      const existingTracks = artist.tracks || []
      const allTracks = [...existingTracks, ...trackRefs]

      // Update the artist with the tracks
      await client
        .patch(artist._id)
        .set({ tracks: allTracks })
        .commit()

      console.log(`✅ Associated ${trackIndices.length} tracks with ${artistName}`)
    }

    console.log('\n✨ Track seeding completed successfully!')
    console.log('\n⚠️  Note: Cover images are not included in this seed script.')
    console.log('Please upload cover images for each track in Sanity Studio.')
    console.log('\nNext steps:')
    console.log('1. Open Sanity Studio')
    console.log('2. Navigate to the Tracks section')
    console.log('3. Add cover images to each track')
    console.log('4. View your artists in the React app to see their tracks')
  } catch (error) {
    console.error('\n❌ Error seeding tracks:', error.message)
    if (error.statusCode === 401) {
      console.log('\nAuthentication failed. Please check your SANITY_TOKEN.')
    }
    process.exit(1)
  }
}

// Run the seeding function
seedTracks()
