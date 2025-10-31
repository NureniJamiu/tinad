import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'

const builder = imageUrlBuilder(client)

/**
 * Base image URL builder
 * @param {Object} source - Sanity image reference
 * @returns {Object} Image URL builder instance
 */
export function urlFor(source) {
  return builder.image(source)
}

/**
 * Get optimized image URL for card displays (carousel cards)
 * @param {Object} source - Sanity image reference
 * @returns {string} Optimized image URL
 */
export function getCardImageUrl(source) {
  if (!source) return ''
  return builder
    .image(source)
    .width(560)
    .height(560)
    .format('webp')
    .quality(80)
    .fit('crop')
    .url()
}

/**
 * Get optimized image URL for full display images (Artists page)
 * @param {Object} source - Sanity image reference
 * @returns {string} Optimized image URL
 */
export function getDisplayImageUrl(source) {
  if (!source) return ''
  return builder
    .image(source)
    .width(800)
    .height(800)
    .format('webp')
    .quality(85)
    .fit('crop')
    .url()
}

/**
 * Get optimized image URL for blog featured images
 * @param {Object} source - Sanity image reference
 * @returns {string} Optimized image URL
 */
export function getBlogImageUrl(source) {
  if (!source) return ''
  return builder
    .image(source)
    .width(1200)
    .height(800)
    .format('webp')
    .quality(85)
    .fit('crop')
    .url()
}

/**
 * Get optimized image URL for track cover images with hotspot support
 * @param {Object} source - Sanity image reference
 * @param {number} size - Image size (default: 400)
 * @returns {string} Optimized image URL
 */
export function getTrackCoverUrl(source, size = 400) {
  if (!source) return ''
  return builder
    .image(source)
    .width(size)
    .height(size)
    .format('webp')
    .quality(85)
    .fit('crop')
    .auto('format')
    .url()
}

/**
 * Get optimized hero image URL for artist detail pages
 * @param {Object} source - Sanity image reference
 * @returns {string} Optimized image URL
 */
export function getHeroImageUrl(source) {
  if (!source) return ''
  return builder
    .image(source)
    .width(1920)
    .height(1080)
    .format('webp')
    .quality(90)
    .fit('crop')
    .auto('format')
    .url()
}

/**
 * Get optimized biography image URL with hotspot support
 * @param {Object} source - Sanity image reference
 * @returns {string} Optimized image URL
 */
export function getBiographyImageUrl(source) {
  if (!source) return ''
  return builder
    .image(source)
    .width(600)
    .height(800)
    .format('webp')
    .quality(85)
    .fit('crop')
    .auto('format')
    .url()
}

/**
 * Get optimized content image URL for blog posts
 * @param {Object} source - Sanity image reference
 * @returns {string} Optimized image URL
 */
export function getContentImageUrl(source) {
  if (!source) return ''
  return builder
    .image(source)
    .width(1000)
    .height(600)
    .format('webp')
    .quality(85)
    .auto('format')
    .url()
}
