# Blog Detail Page Feature

## Overview

The blog detail page provides a full-screen, immersive reading experience for individual blog posts. It follows the same design patterns as the artist detail page, maintaining visual consistency across the site.

## Features

### Hero Section
- Full-width hero image using the blog's featured image
- Dark overlay for better text readability
- Blog title prominently displayed
- Publication date in the brand's yellow accent color
- Smooth fade-in animation on page load

### Content Display
- Rich text content rendering using Portable Text
- Support for:
  - Headings (H1, H2, H3)
  - Paragraphs with proper spacing
  - Bold and italic text
  - Blockquotes with yellow accent border
  - Bulleted and numbered lists
  - Inline images with optimization
  - External and internal links
- Maximum width container for optimal reading experience
- Description displayed as an italicized lead paragraph

### Navigation
- Back button to return to blogs listing
- "View All Blog Posts" button at the bottom
- Smooth scroll to top on page load

### Image Optimization
- Hero images: 1920x1080px, WebP format, 90% quality
- Content images: 1000x600px, WebP format, 85% quality
- Lazy loading for content images
- Preloading for hero images (priority loading)

### Error Handling
- Loading state with spinner
- Error fallback with retry functionality
- 404 handling for non-existent blog posts

## Routing

The blog detail page is accessible at:
```
/blogs/:id
```

Where `:id` is the Sanity document ID of the blog post.

## Components Used

- `BlogDetail` - Main page component
- `ErrorFallback` - Error state display
- `PortableText` - Rich text content renderer from @portabletext/react

## Data Flow

1. Blog ID is extracted from URL params
2. `useSanityData` hook fetches blog data using `blogByIdQuery`
3. Content is rendered with optimized images
4. Portable Text components handle rich content formatting

## Styling

The page follows the existing design system:
- Background: Black (#000000)
- Primary accent: Yellow (#e7d393)
- Text: White with various opacity levels
- Responsive design with mobile-first approach
- Smooth transitions and hover effects

## Accessibility

- Semantic HTML structure
- ARIA labels for navigation elements
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Touch-friendly button sizes (min 44px)

## Related Files

- `src/pages/BlogDetail.jsx` - Main component
- `src/sanity/queries.js` - Blog query definitions
- `src/sanity/imageBuilder.js` - Image optimization utilities
- `src/components/BlogDisplayCard.jsx` - Blog card with link
- `src/App.jsx` - Route configuration

## Usage

Users can access individual blog posts by:
1. Clicking on any blog card in the `/blogs` page
2. Direct URL navigation to `/blogs/:id`

The page automatically handles loading states, errors, and missing content gracefully.
