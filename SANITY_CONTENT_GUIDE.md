# Sanity Studio Content Population Guide

This guide will help you populate your Sanity Studio with initial content for the Tinad music label website.

## Prerequisites

1. Ensure Sanity Studio is running:
   ```bash
   cd studio
   pnpm dev
   ```
2. Access the Studio at `http://localhost:3333` (or the URL shown in terminal)
3. Log in with your Sanity account

## Content Requirements

### Artists (Minimum 8 entries)

For each artist, you'll need to create an entry with the following fields:

**Required Fields:**
- **Name**: Artist's full name
- **Genre**: Music genre (e.g., Afrobeats, R&B/Soul, Afrorave, Hip-Hop)
- **Profile Image**: Main artist photo (recommended: 800x800px, square format)

**Optional Fields:**
- **Top Display Image**: Large hero image for Artists page (recommended: 1200x800px)
- **Bottom Display Image**: Secondary image for Artists page (recommended: 1200x800px)
- **Biography**: Artist background and story (2-3 paragraphs)
- **Social Links**: Instagram, Twitter, Spotify URLs

**Suggested Artists to Create:**

1. **Burna Boy**
   - Genre: Afrobeats
   - Bio: Grammy-winning Nigerian artist known for blending Afrobeats with dancehall, reggae, and pop
   - Social: Add relevant links

2. **Wizkid**
   - Genre: Afrobeats
   - Bio: International superstar and pioneer of Afrobeats globally
   - Social: Add relevant links

3. **Tems**
   - Genre: R&B/Soul
   - Bio: Rising star known for her soulful voice and international collaborations
   - Social: Add relevant links

4. **Rema**
   - Genre: Afrorave
   - Bio: Young innovator creating a new sound called Afrorave
   - Social: Add relevant links

5. **Asake**
   - Genre: Afro-fusion
   - Bio: Fast-rising artist blending Amapiano with Afrobeats
   - Social: Add relevant links

6. **Ayra Starr**
   - Genre: Afropop
   - Bio: Young sensation bringing fresh energy to Afropop
   - Social: Add relevant links

7. **Omah Lay**
   - Genre: Afro-fusion
   - Bio: Melodic artist known for introspective lyrics
   - Social: Add relevant links

8. **Fireboy DML**
   - Genre: Afropop/R&B
   - Bio: Versatile artist with a unique blend of Afropop and R&B
   - Social: Add relevant links

### Blog Posts (Minimum 5 entries)

For each blog post, create an entry with:

**Required Fields:**
- **Title**: Engaging headline (max 100 characters)
- **Description**: Brief summary (2-3 sentences)
- **Featured Image**: Eye-catching image (recommended: 1200x630px)
- **Content**: Rich text with paragraphs, headings, and optional images
- **Published At**: Date and time of publication

**Suggested Blog Topics:**

1. **"The Rise of Afrobeats: How African Music Conquered the World"**
   - Description: Exploring the global phenomenon of Afrobeats and its impact on international music charts
   - Content: Discuss history, key artists, breakthrough moments, and future trends
   - Published: Recent date

2. **"Behind the Scenes: A Day in the Life at Tinad Records"**
   - Description: An exclusive look at what goes on behind the scenes at our label
   - Content: Studio sessions, artist meetings, production process
   - Published: 1 week ago

3. **"New Release Alert: [Artist Name] Drops Highly Anticipated Album"**
   - Description: Breaking down the latest release from one of our artists
   - Content: Album review, standout tracks, production credits
   - Published: 2 weeks ago

4. **"The Art of Music Production: Interview with Our Top Producers"**
   - Description: Insights from the producers shaping the sound of modern African music
   - Content: Q&A format, production tips, favorite projects
   - Published: 3 weeks ago

5. **"Tinad Records Announces New Artist Signings for 2025"**
   - Description: Exciting news about fresh talent joining the Tinad family
   - Content: Artist introductions, what to expect, upcoming releases
   - Published: 1 month ago

### Producers (Minimum 6 entries)

For each producer, create an entry with:

**Required Fields:**
- **Name**: Producer's name or alias
- **Specialty**: Production style/genre
- **Profile Image**: Professional photo (recommended: 800x800px)

**Optional Fields:**
- **Biography**: Background, notable works, production style (2-3 paragraphs)

**Suggested Producers to Create:**

1. **Sarz**
   - Specialty: Afrobeats
   - Bio: Legendary producer behind countless hits, known for his signature sound

2. **Pheelz**
   - Specialty: Afropop
   - Bio: Multi-talented producer and artist, creating chart-topping productions

3. **Rexxie**
   - Specialty: Afropop
   - Bio: Grammy-nominated producer known for the "Zanku" sound

4. **Tempoe**
   - Specialty: Amapiano
   - Bio: Rising producer bringing South African Amapiano vibes to West Africa

5. **Killertunes**
   - Specialty: Afrobeats
   - Bio: Versatile producer working with top-tier African artists

6. **Kel P**
   - Specialty: Afro-fusion
   - Bio: Innovative producer blending traditional African sounds with modern production

## Image Guidelines

### Where to Find Images

1. **Free Stock Photos:**
   - Unsplash (https://unsplash.com) - Search for "musician", "artist", "concert"
   - Pexels (https://pexels.com) - High-quality free images
   - Pixabay (https://pixabay.com) - Free images and videos

2. **Image Requirements:**
   - Format: JPG or PNG
   - Profile images: Square format (800x800px minimum)
   - Display images: Landscape format (1200x800px minimum)
   - Blog images: 1200x630px (optimal for social sharing)
   - File size: Under 2MB for faster loading

3. **Optimization Tips:**
   - Use high-quality images but compress before uploading
   - Ensure images are well-lit and professional
   - Crop to focus on the subject
   - Maintain consistent style across all images

## Step-by-Step Content Creation

### Creating an Artist Entry

1. In Sanity Studio, click "Artist" in the sidebar
2. Click "Create new Artist"
3. Fill in the required fields:
   - Enter the artist name
   - Enter the genre
   - Click "Upload" for Profile Image and select an image
4. Fill in optional fields:
   - Upload Top Display Image and Bottom Display Image
   - Write a compelling biography
   - Add social media links (full URLs)
5. Click "Publish" in the bottom right

### Creating a Blog Post

1. Click "Blog Post" in the sidebar
2. Click "Create new Blog Post"
3. Fill in the required fields:
   - Enter an engaging title
   - Write a brief description
   - Upload a featured image
   - Add content using the rich text editor:
     - Use headings (H2, H3) for structure
     - Write multiple paragraphs
     - Add images inline if desired
     - Include links where relevant
   - Set the Published At date
4. Click "Publish"

### Creating a Producer Entry

1. Click "Producer" in the sidebar
2. Click "Create new Producer"
3. Fill in the required fields:
   - Enter the producer name
   - Enter their specialty
   - Upload a profile image
4. Add a biography (optional but recommended)
5. Click "Publish"

## Verification Checklist

After populating content, verify everything displays correctly:

### In Sanity Studio:
- [ ] All 8+ artists are published and visible
- [ ] All 5+ blog posts are published and visible
- [ ] All 6+ producers are published and visible
- [ ] All images are uploaded and display correctly
- [ ] No required fields are missing

### In the React App:
1. Start the development server: `pnpm dev`
2. Check each section:
   - [ ] Home page Artist carousel displays all artists
   - [ ] Artists page shows detailed artist displays
   - [ ] Blog page shows all blog posts in correct order
   - [ ] Producer section displays all producers
   - [ ] All images load correctly from Sanity CDN
   - [ ] No console errors related to missing data
   - [ ] Loading states work properly
   - [ ] No empty states are showing (unless intentional)

## Troubleshooting

### Images Not Displaying
- Check that images are published in Sanity Studio
- Verify CORS settings in Sanity dashboard
- Check browser console for errors
- Ensure image URLs are being generated correctly

### Content Not Appearing
- Verify content is published (not just saved as draft)
- Check that the dataset matches in both Studio and React app
- Refresh the React app after publishing content
- Check browser console for API errors

### Slow Loading
- Optimize image sizes before uploading
- Use Sanity's image CDN parameters for resizing
- Check network tab for slow requests

## Next Steps

After completing this task:
1. Move on to Task 14: Configure CORS and deployment settings
2. Create documentation for content management (Task 15)
3. Test the entire application end-to-end

## Tips for Success

- **Be Consistent**: Use similar image styles and quality across all content
- **Write Engaging Content**: Blog posts should be informative and well-written
- **Use Real Data**: If possible, use actual artist/producer information
- **Test Frequently**: Check the React app after adding each piece of content
- **Save Drafts**: Use Sanity's draft feature to save work in progress
- **Preview Content**: Use Sanity's preview feature before publishing

---

**Need Help?** 
- Sanity Documentation: https://www.sanity.io/docs
- Sanity Community: https://www.sanity.io/community
