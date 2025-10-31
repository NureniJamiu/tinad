// Fetch all artists with necessary fields
export const artistsQuery = `*[_type == "artist"] | order(name asc) {
  _id,
  name,
  genre,
  image,
  bio,
  socialLinks
}`

// Fetch all producers
export const producersQuery = `*[_type == "producer"] | order(name asc) {
  _id,
  name,
  specialty,
  image,
  bio
}`

// Fetch all published blogs
export const blogsQuery = `*[_type == "blog"] | order(publishedAt desc) {
  _id,
  title,
  description,
  featuredImage,
  content,
  publishedAt
}`

// Fetch single artist by ID with all images
export const artistByIdQuery = `*[_type == "artist" && _id == $id][0] {
  _id,
  name,
  genre,
  image,
  topImage,
  bottomImage,
  bio,
  socialLinks
}`

// Fetch featured artists for Artists page
export const featuredArtistsQuery = `*[_type == "artist"] | order(name asc) {
  _id,
  name,
  genre,
  image,
  topImage,
  bottomImage,
  bio,
  socialLinks
}`

// Fetch single artist with tracks for detail page
export const artistDetailQuery = `*[_type == "artist" && _id == $id][0] {
  _id,
  name,
  genre,
  image,
  topImage,
  bottomImage,
  bio,
  socialLinks,
  "tracks": tracks[]-> {
    _id,
    title,
    coverImage,
    releaseYear,
    duration,
    spotifyLink,
    appleMusicLink
  }
}`
