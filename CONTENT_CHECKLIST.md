# Sanity Content Population Checklist

Use this checklist to track your progress while populating Sanity Studio with content.

## Setup

- [ ] Sanity Studio is running (`cd studio && pnpm dev`)
- [ ] Can access Studio at http://localhost:3333
- [ ] Logged into Sanity account

## Artists (Minimum 8)

- [ ] 1. Burna Boy (Afrobeats) - with image, bio, social links
- [ ] 2. Wizkid (Afrobeats) - with image, bio, social links
- [ ] 3. Tems (R&B/Soul) - with image, bio, social links
- [ ] 4. Rema (Afrorave) - with image, bio, social links
- [ ] 5. Asake (Afro-fusion) - with image, bio, social links
- [ ] 6. Ayra Starr (Afropop) - with image, bio, social links
- [ ] 7. Omah Lay (Afro-fusion) - with image, bio, social links
- [ ] 8. Fireboy DML (Afropop/R&B) - with image, bio, social links

### Optional Artist Fields
- [ ] Added Top Display Images for featured artists
- [ ] Added Bottom Display Images for featured artists

## Producers (Minimum 6)

- [ ] 1. Sarz (Afrobeats) - with image and bio
- [ ] 2. Pheelz (Afropop) - with image and bio
- [ ] 3. Rexxie (Afropop) - with image and bio
- [ ] 4. Tempoe (Amapiano) - with image and bio
- [ ] 5. Killertunes (Afrobeats) - with image and bio
- [ ] 6. Kel P (Afro-fusion) - with image and bio

## Blog Posts (Minimum 5)

- [ ] 1. "The Rise of Afrobeats: How African Music Conquered the World"
  - [ ] Title, description, featured image
  - [ ] Rich text content with headings and paragraphs
  - [ ] Published date set

- [ ] 2. "Behind the Scenes: A Day in the Life at Tinad Records"
  - [ ] Title, description, featured image
  - [ ] Rich text content with headings and paragraphs
  - [ ] Published date set

- [ ] 3. "New Release Alert: Breaking Down the Latest Afrobeats Anthems"
  - [ ] Title, description, featured image
  - [ ] Rich text content with headings and paragraphs
  - [ ] Published date set

- [ ] 4. "The Art of Music Production: Interview with Our Top Producers"
  - [ ] Title, description, featured image
  - [ ] Rich text content with headings and paragraphs
  - [ ] Published date set

- [ ] 5. "Tinad Records Announces New Artist Signings for 2025"
  - [ ] Title, description, featured image
  - [ ] Rich text content with headings and paragraphs
  - [ ] Published date set

## Image Optimization

- [ ] All images are under 2MB
- [ ] Profile images are square format (800x800px minimum)
- [ ] Display images are landscape (1200x800px minimum)
- [ ] Blog featured images are 1200x630px
- [ ] Images are high quality and professional

## Verification in React App

### Start the app
- [ ] Run `pnpm dev` in root directory
- [ ] App loads without errors

### Home Page
- [ ] Artist carousel displays all 8+ artists
- [ ] Artist images load correctly
- [ ] Artist names and genres display
- [ ] ScrollVelocity animation works
- [ ] Producer section displays all 6+ producers
- [ ] Producer images load correctly
- [ ] Producer names and specialties display

### Artists Page
- [ ] Navigate to /artists
- [ ] Detailed artist displays show
- [ ] Top and bottom images load (if added)
- [ ] Alternating layout pattern works
- [ ] All GSAP animations work

### Blog Page
- [ ] Navigate to /blogs
- [ ] All 5+ blog posts display
- [ ] Posts are in reverse chronological order
- [ ] Featured images load correctly
- [ ] Descriptions display properly
- [ ] Alternating card layout works
- [ ] Hover effects work

### Loading States
- [ ] Loading animation displays on first load
- [ ] "TINAD" text animates character by character
- [ ] Minimum display time is respected
- [ ] Loading overlay fades out smoothly
- [ ] Content appears after loading completes

### Error Handling
- [ ] No console errors
- [ ] No missing image errors
- [ ] No API errors
- [ ] No empty states showing (unless intentional)

## Performance Check

- [ ] Images load quickly from Sanity CDN
- [ ] No slow API requests (check Network tab)
- [ ] Page transitions are smooth
- [ ] Animations run at 60fps
- [ ] No layout shifts during loading

## Final Verification

- [ ] All content is published (not drafts) in Sanity Studio
- [ ] All required fields are filled
- [ ] All images are uploaded and optimized
- [ ] Content displays correctly across all pages
- [ ] No broken images or missing data
- [ ] Mobile responsive design works
- [ ] Desktop layout works

## Optional Enhancements

- [ ] Added more than minimum required entries
- [ ] Used high-quality, consistent images
- [ ] Wrote detailed, engaging biographies
- [ ] Added inline images to blog posts
- [ ] Added links within blog content
- [ ] Tested on multiple browsers
- [ ] Tested on mobile devices

---

## Notes

Use this space to track any issues or observations:

```
[Add your notes here]
```

---

## Completion

Once all checkboxes are marked:
- [ ] Task 13 is complete
- [ ] Ready to move to Task 14 (CORS configuration)
- [ ] Ready to move to Task 15 (Documentation)

**Date Completed:** _______________
