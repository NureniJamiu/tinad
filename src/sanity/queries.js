// Fetch all artists with necessary fields
export const artistsQuery = `*[_type == "artist"] | order(name asc) {
  _id,
  name,
  genre,
  "image": image.asset->url,
  bio,
  socialLinks
}`

// Fetch all producers
export const producersQuery = `*[_type == "producer"] | order(name asc) {
  _id,
  name,
  specialty,
  "image": image.asset->url,
  bio
}`

// Fetch all published blogs
export const blogsQuery = `*[_type == "blog"] | order(publishedAt desc) {
  _id,
  title,
  description,
  "image": featuredImage.asset->url,
  content,
  publishedAt
}`

// Fetch single artist by ID with all images
export const artistByIdQuery = `*[_type == "artist" && _id == $id][0] {
  _id,
  name,
  genre,
  "image": image.asset->url,
  "topImage": topImage.asset->url,
  "bottomImage": bottomImage.asset->url,
  bio,
  socialLinks
}`

// Fetch featured artists for Artists page
export const featuredArtistsQuery = `*[_type == "artist"] | order(name asc) {
  _id,
  name,
  genre,
  "image": image.asset->url,
  "topImage": topImage.asset->url,
  "bottomImage": bottomImage.asset->url,
  bio,
  socialLinks
}`
