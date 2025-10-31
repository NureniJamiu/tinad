/**
 * Sanity Content Seeding Script
 * 
 * This script helps populate your Sanity Studio with initial content.
 * 
 * Usage:
 * 1. Install dependencies: pnpm add @sanity/client dotenv
 * 2. Set environment variable: SANITY_TOKEN=your_write_token
 * 3. Run: pnpm seed
 * 
 * To get a write token:
 * 1. Go to https://www.sanity.io/manage
 * 2. Select your project (zqlbhzob)
 * 3. Go to API settings
 * 4. Create a new token with "Editor" permissions
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
  token: process.env.SANITY_TOKEN, // Required for write operations
})

// Sample Artists Data
const artists = [
  {
    _type: 'artist',
    name: 'Burna Boy',
    genre: 'Afrobeats',
    bio: 'Grammy-winning Nigerian artist Damini Ebunoluwa Ogulu, known professionally as Burna Boy, has become one of the biggest and most successful African artists. He is known for his unique blend of Afrobeats with dancehall, reggae, American rap, and R&B. His music often addresses social and political issues affecting Africa.',
    socialLinks: {
      instagram: 'https://instagram.com/burnaboygram',
      twitter: 'https://twitter.com/burnaboy',
      spotify: 'https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa',
    },
  },
  {
    _type: 'artist',
    name: 'Wizkid',
    genre: 'Afrobeats',
    bio: 'Ayodeji Ibrahim Balogun, known as Wizkid, is a Nigerian singer and songwriter who is credited with bringing Afrobeats to the global mainstream. With numerous international collaborations and chart-topping hits, Wizkid has become one of Africa\'s most decorated artists.',
    socialLinks: {
      instagram: 'https://instagram.com/wizkidayo',
      twitter: 'https://twitter.com/wizkidayo',
      spotify: 'https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp',
    },
  },
  {
    _type: 'artist',
    name: 'Tems',
    genre: 'R&B/Soul',
    bio: 'Temilade Openiyi, known professionally as Tems, is a Nigerian singer, songwriter, and record producer. Rising to prominence with her unique blend of R&B and Afrobeats, Tems has collaborated with international superstars and won multiple awards including a Grammy.',
    socialLinks: {
      instagram: 'https://instagram.com/temsbaby',
      twitter: 'https://twitter.com/temsbaby',
      spotify: 'https://open.spotify.com/artist/687cZJR45JO7jhk1LHIbgq',
    },
  },
  {
    _type: 'artist',
    name: 'Rema',
    genre: 'Afrorave',
    bio: 'Divine Ikubor, known as Rema, is a Nigerian singer and rapper who has pioneered a new sound he calls "Afrorave" - a fusion of Afrobeats with Indian and Arabian influences. His global hit "Calm Down" has broken numerous records worldwide.',
    socialLinks: {
      instagram: 'https://instagram.com/heisrema',
      twitter: 'https://twitter.com/heisrema',
      spotify: 'https://open.spotify.com/artist/1W2919zs8SBCLTrOB1ftQT',
    },
  },
  {
    _type: 'artist',
    name: 'Asake',
    genre: 'Afro-fusion',
    bio: 'Ahmed Ololade, known as Asake, is a fast-rising Nigerian singer and songwriter. His unique blend of Amapiano, Afrobeats, and Fuji music has made him one of the most exciting new voices in African music.',
    socialLinks: {
      instagram: 'https://instagram.com/asakemusik',
      twitter: 'https://twitter.com/asakemusik',
      spotify: 'https://open.spotify.com/artist/3U0vkjQZXL8Ql4zzLBvjPE',
    },
  },
  {
    _type: 'artist',
    name: 'Ayra Starr',
    genre: 'Afropop',
    bio: 'Oyinkansola Sarah Aderibigbe, known as Ayra Starr, is a Nigerian singer and songwriter bringing fresh energy to Afropop. Her powerful vocals and confident style have made her one of the most promising young artists in Africa.',
    socialLinks: {
      instagram: 'https://instagram.com/ayrastarr',
      twitter: 'https://twitter.com/ayrastarr',
      spotify: 'https://open.spotify.com/artist/3ZpEKRjHaHANcxOJRB8Vrj',
    },
  },
  {
    _type: 'artist',
    name: 'Omah Lay',
    genre: 'Afro-fusion',
    bio: 'Stanley Omah Didia, known as Omah Lay, is a Nigerian singer, songwriter and record producer. Known for his melodic approach and introspective lyrics, Omah Lay has quickly become one of the most streamed African artists.',
    socialLinks: {
      instagram: 'https://instagram.com/omah_lay',
      twitter: 'https://twitter.com/omah_lay',
      spotify: 'https://open.spotify.com/artist/5EbFJEy0fXNGvOZ0V5FFqJ',
    },
  },
  {
    _type: 'artist',
    name: 'Fireboy DML',
    genre: 'Afropop/R&B',
    bio: 'Adedamola Adefolahan, known as Fireboy DML, is a Nigerian singer and songwriter. His unique blend of Afropop and R&B, combined with his romantic lyrics and smooth vocals, has earned him critical acclaim and commercial success.',
    socialLinks: {
      instagram: 'https://instagram.com/fireboydml',
      twitter: 'https://twitter.com/fireboydml',
      spotify: 'https://open.spotify.com/artist/3A7F5TpHGLF5bkNfxTYOhY',
    },
  },
]

// Sample Producers Data
const producers = [
  {
    _type: 'producer',
    name: 'Sarz',
    specialty: 'Afrobeats',
    bio: 'Osabuohien Osaretin, known as Sarz, is a legendary Nigerian record producer. With over a decade of hit productions, Sarz has crafted the sound of modern Afrobeats and worked with virtually every major African artist.',
  },
  {
    _type: 'producer',
    name: 'Pheelz',
    specialty: 'Afropop',
    bio: 'Phillip Kayode Moses, known as Pheelz, is a multi-talented Nigerian record producer, singer, and songwriter. Beyond his production work, Pheelz has also found success as a performing artist with his own hit singles.',
  },
  {
    _type: 'producer',
    name: 'Rexxie',
    specialty: 'Afropop',
    bio: 'Ezeh Chisom Faith, known as Rexxie, is a Grammy-nominated Nigerian record producer. He is credited with creating and popularizing the "Zanku" sound and has produced numerous chart-topping hits.',
  },
  {
    _type: 'producer',
    name: 'Tempoe',
    specialty: 'Amapiano',
    bio: 'Tempoe is a rising producer bringing the infectious South African Amapiano sound to West African music. His productions blend the log drum-heavy Amapiano style with Afrobeats elements.',
  },
  {
    _type: 'producer',
    name: 'Killertunes',
    specialty: 'Afrobeats',
    bio: 'Nathaniel Oluwaseun Adedeji, known as Killertunes, is a versatile Nigerian record producer. His production style ranges from hard-hitting Afrobeats to melodic Afropop, making him one of the most sought-after producers.',
  },
  {
    _type: 'producer',
    name: 'Kel P',
    specialty: 'Afro-fusion',
    bio: 'Kelvin Boj, known as Kel P, is an innovative Nigerian record producer known for blending traditional African sounds with modern production techniques. His work has helped define the sound of contemporary Afro-fusion.',
  },
]

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

// Sample Blog Posts Data
const blogPosts = [
  {
    _type: 'blog',
    title: 'The Rise of Afrobeats: How African Music Conquered the World',
    description: 'Exploring the global phenomenon of Afrobeats and its impact on international music charts, from its roots in West Africa to dominating playlists worldwide.',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Afrobeats has evolved from a regional sound to a global phenomenon, dominating charts and influencing artists worldwide. This journey represents not just musical evolution, but a cultural revolution that has put African music at the forefront of the global music industry.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Origins' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Rooted in the rich musical traditions of West Africa, Afrobeats emerged as a fusion of traditional African rhythms, highlife, funk, and contemporary pop music. Artists like Fela Kuti laid the groundwork, but the modern Afrobeats sound has evolved into something entirely new.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Breaking International Barriers' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The breakthrough came through strategic collaborations, streaming platforms, and social media. Artists like Wizkid, Burna Boy, and Davido opened doors, while the next generation continues to push boundaries and reach new audiences.',
          },
        ],
      },
    ],
    publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
  },
  {
    _type: 'blog',
    title: 'Behind the Scenes: A Day in the Life at Tinad Records',
    description: 'An exclusive look at what goes on behind the scenes at our label, from early morning studio sessions to late-night creative breakthroughs.',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Ever wondered what happens behind the closed doors of a record label? At Tinad Records, every day is a blend of creativity, business, and pure passion for music. Let us take you through a typical day at our headquarters.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Morning: Studio Sessions' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The day starts early with our producers and artists in the studio. The creative energy is palpable as beats are crafted, melodies are tested, and lyrics are perfected. Our state-of-the-art facilities provide the perfect environment for musical magic.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Afternoon: Strategy and Planning' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'As the afternoon rolls in, our team shifts focus to strategy. Marketing campaigns are planned, release schedules are coordinated, and partnerships are forged. Every detail matters when it comes to launching the next hit.',
          },
        ],
      },
    ],
    publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week ago
  },
  {
    _type: 'blog',
    title: 'New Release Alert: Breaking Down the Latest Afrobeats Anthems',
    description: 'A deep dive into the hottest new releases from our artists, exploring the production, lyrics, and cultural impact of these chart-topping tracks.',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'This month has been incredible for Afrobeats, with several groundbreaking releases that are already making waves across streaming platforms and radio stations worldwide. Let\'s break down what makes these tracks special.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Production Excellence' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The production quality on these new releases showcases the evolution of Afrobeats. From the intricate percussion patterns to the layered synths and bass lines, every element is carefully crafted to create an immersive sonic experience.',
          },
        ],
      },
    ],
    publishedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 2 weeks ago
  },
  {
    _type: 'blog',
    title: 'The Art of Music Production: Interview with Our Top Producers',
    description: 'Exclusive insights from the producers shaping the sound of modern African music, sharing their creative process, favorite tools, and industry secrets.',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'We sat down with some of the most talented producers in the game to discuss their craft, their inspirations, and what it takes to create hit records in today\'s competitive music landscape.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Creative Process' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Every producer has their unique approach, but they all share a common dedication to innovation. From starting with a simple melody to building complex arrangements, the journey from idea to finished track is both challenging and rewarding.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Tools of the Trade' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'While software and hardware are important, our producers emphasize that the most crucial tool is creativity. That said, they do have their favorite DAWs, plugins, and instruments that help bring their visions to life.',
          },
        ],
      },
    ],
    publishedAt: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(), // 3 weeks ago
  },
  {
    _type: 'blog',
    title: 'Tinad Records Announces New Artist Signings for 2025',
    description: 'Exciting news about fresh talent joining the Tinad family. Meet the next generation of African music superstars and learn about their upcoming projects.',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'We are thrilled to announce several new signings to the Tinad Records roster. These talented artists represent the future of African music, and we cannot wait to share their music with the world.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Discovering New Talent' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Our A&R team has been working tirelessly to identify and nurture the next generation of superstars. Each new signing brings a unique sound and perspective, adding to the diverse tapestry of music we represent.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'What to Expect' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Over the coming months, you can expect debut singles, music videos, and live performances from our new artists. We are committed to providing them with the resources and support they need to reach their full potential.',
          },
        ],
      },
    ],
    publishedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // 1 month ago
  },
]

async function seedData() {
  console.log('🌱 Starting Sanity content seeding...\n')

  try {
    // Check if token is provided
    if (!process.env.SANITY_TOKEN) {
      console.error('❌ Error: SANITY_TOKEN is required for write operations')
      console.log('\nTo get a token:')
      console.log('1. Go to https://www.sanity.io/manage')
      console.log('2. Select your project')
      console.log('3. Go to API settings')
      console.log('4. Create a new token with "Editor" permissions')
      console.log('5. Add it to your .env file as SANITY_TOKEN=your_token_here\n')
      process.exit(1)
    }

    // Seed Artists
    console.log('📝 Creating artists...')
    const createdArtists = []
    for (const artist of artists) {
      const result = await client.create(artist)
      createdArtists.push(result)
      console.log(`✅ Created artist: ${artist.name} (ID: ${result._id})`)
    }

    // Seed Tracks
    console.log('\n📝 Creating tracks...')
    const createdTracks = []
    for (const track of tracks) {
      const result = await client.create(track)
      createdTracks.push(result)
      console.log(`✅ Created track: ${track.title} (ID: ${result._id})`)
    }

    // Associate tracks with artists
    console.log('\n📝 Associating tracks with artists...')
    if (createdArtists.length > 0 && createdTracks.length > 0) {
      // Associate first 4 tracks with first artist (Burna Boy)
      if (createdArtists[0] && createdTracks.length >= 4) {
        await client
          .patch(createdArtists[0]._id)
          .set({
            tracks: [
              { _type: 'reference', _ref: createdTracks[0]._id },
              { _type: 'reference', _ref: createdTracks[1]._id },
              { _type: 'reference', _ref: createdTracks[2]._id },
              { _type: 'reference', _ref: createdTracks[3]._id },
            ],
          })
          .commit()
        console.log(`✅ Associated 4 tracks with ${createdArtists[0].name}`)
      }

      // Associate tracks 4-7 with second artist (Wizkid)
      if (createdArtists[1] && createdTracks.length >= 7) {
        await client
          .patch(createdArtists[1]._id)
          .set({
            tracks: [
              { _type: 'reference', _ref: createdTracks[4]._id },
              { _type: 'reference', _ref: createdTracks[5]._id },
              { _type: 'reference', _ref: createdTracks[6]._id },
            ],
          })
          .commit()
        console.log(`✅ Associated 3 tracks with ${createdArtists[1].name}`)
      }

      // Associate last track with third artist (Tems)
      if (createdArtists[2] && createdTracks.length >= 8) {
        await client
          .patch(createdArtists[2]._id)
          .set({
            tracks: [{ _type: 'reference', _ref: createdTracks[7]._id }],
          })
          .commit()
        console.log(`✅ Associated 1 track with ${createdArtists[2].name}`)
      }
    }

    // Seed Producers
    console.log('\n📝 Creating producers...')
    for (const producer of producers) {
      const result = await client.create(producer)
      console.log(`✅ Created producer: ${producer.name} (ID: ${result._id})`)
    }

    // Seed Blog Posts
    console.log('\n📝 Creating blog posts...')
    for (const post of blogPosts) {
      const result = await client.create(post)
      console.log(`✅ Created blog post: ${post.title} (ID: ${result._id})`)
    }

    console.log('\n✨ Seeding completed successfully!')
    console.log('\n⚠️  Note: Images are not included in this seed script.')
    console.log('Please upload images manually in Sanity Studio for each entry.')
    console.log('\nNext steps:')
    console.log('1. Open Sanity Studio (pnpm dev in studio directory)')
    console.log('2. Add cover images to each track in Sanity Studio')
    console.log('3. Add images to each artist, producer, and blog post')
    console.log('4. Verify all content in your React app')
  } catch (error) {
    console.error('\n❌ Error seeding data:', error.message)
    if (error.statusCode === 401) {
      console.log('\nAuthentication failed. Please check your SANITY_TOKEN.')
    }
    process.exit(1)
  }
}

// Run the seeding function
seedData()
