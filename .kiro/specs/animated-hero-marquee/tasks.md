# Implementation Plan

- [x] 1. Create MarqueeText component with GSAP horizontal scrolling animation





  - Create `src/components/MarqueeText.jsx` file
  - Implement component with props interface (text, speed, className)
  - Set up useGSAP hook with containerRef for animation scope
  - Render multiple text instances (2-3) to ensure seamless looping
  - Implement GSAP animation using xPercent: -100 with infinite repeat and linear easing
  - Apply Tailwind styling: font-serif, text color #694D29, overflow-hidden container, whitespace-nowrap
  - Add responsive font sizing (190px desktop, 80px mobile using Tailwind breakpoints)
  - Ensure proper cleanup of GSAP animation on unmount
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 4.1, 5.1, 5.5, 6.3_

- [x] 2. Create RotatingDisc component with continuous clockwise rotation





  - Create `src/components/RotatingDisc.jsx` file
  - Implement component with props interface (imageSrc, speed, size, className)
  - Set up useGSAP hook with discRef for animation target
  - Implement GSAP rotation animation (rotation: 360, infinite repeat, linear easing)
  - Add image loading error handling with onError callback
  - Apply responsive sizing using Tailwind classes (w-32 h-32 desktop, w-20 h-20 mobile)
  - Set transform-origin to center for smooth rotation
  - Ensure proper cleanup of GSAP animation on unmount
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 4.2, 5.2, 5.5, 6.4_

- [x] 3. Create MusicWave component with animated bar visualization





  - Create `src/components/MusicWave.jsx` file
  - Implement component with className prop
  - Create 7 bar elements using Array.from and map
  - Set up useGSAP hook with refs array for bar elements
  - Implement GSAP staggered animation (scaleY with random values, yoyo, infinite repeat)
  - Style bars as vertical rectangles with rounded corners using Tailwind
  - Apply flex layout with appropriate gap between bars
  - Use yellow (#e7d393) or white color for bars
  - Ensure proper cleanup of GSAP animation on unmount
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 4.3, 5.3, 5.5, 6.4_

- [x] 4. Integrate animated components into Hero component





  - Import MarqueeText, RotatingDisc, and MusicWave components into Hero.jsx
  - Add marquee section below existing image cards with appropriate margin (mt-12)
  - Render MarqueeText component with default props
  - Create container for disc and wave with flex layout and spacing
  - Render RotatingDisc component with imageSrc="/music-disc.png"
  - Render MusicWave component next to disc
  - Apply responsive layout adjustments for mobile/tablet/desktop
  - Ensure proper z-index layering with existing Hero elements
  - Test that new animations don't interfere with existing Hero animations
  - _Requirements: 5.4, 6.1, 6.2, 6.4, 6.5_

- [ ]* 5. Add accessibility and performance optimizations
  - Implement prefers-reduced-motion media query check
  - Add conditional logic to disable or slow animations when motion is reduced
  - Add aria-hidden="true" to decorative animated elements
  - Apply will-change: transform CSS property to animated elements for performance
  - Verify animations maintain 60fps on various devices
  - Test keyboard navigation is not affected by animations
  - _Requirements: 4.5_

- [ ]* 6. Add responsive breakpoint testing and refinements
  - Test marquee text sizing and scrolling on mobile (< 768px)
  - Test disc and wave sizing and positioning on tablet (768px-1919px)
  - Test full layout on desktop (1920px+)
  - Adjust spacing and sizing as needed for optimal visual hierarchy
  - Verify all elements remain visible within viewport without scrolling
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_
