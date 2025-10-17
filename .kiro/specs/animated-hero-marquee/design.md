# Design Document

## Overview

This design implements an animated marquee section for the Hero component featuring three continuously animated elements: horizontally scrolling text, a rotating music disc, and an animated music wave visualization. The implementation leverages GSAP for high-performance animations and follows a component-based architecture for maintainability.

## Architecture

### Component Structure

```
Hero (existing)
├── MarqueeText (new)
├── RotatingDisc (new)
└── MusicWave (new)
```

### Technology Stack

- **Animation Library**: GSAP with useGSAP hook
- **Framework**: React 19.1.1
- **Styling**: Tailwind CSS with custom utilities
- **Assets**: Static images (music-disc.png, music-wave.png)

### File Organization

```
src/
├── components/
│   ├── Hero.jsx (modified)
│   ├── MarqueeText.jsx (new)
│   ├── RotatingDisc.jsx (new)
│   └── MusicWave.jsx (new)
└── index.css (modified - add marquee utilities if needed)
```

## Components and Interfaces

### 1. MarqueeText Component

**Purpose**: Renders continuously scrolling text that loops seamlessly.

**Props Interface**:
```javascript
{
  text: string,           // The text to display (default: "This is Not a Drill")
  speed: number,          // Duration in seconds for one complete cycle (default: 20)
  className?: string      // Additional CSS classes
}
```

**Implementation Approach**:
- Use GSAP's `gsap.to()` with infinite repeat
- Render multiple instances of the text to ensure seamless looping
- Calculate the width dynamically to determine when to loop
- Use `xPercent` for smooth, resolution-independent animation

**Animation Logic**:
```javascript
// Animate from 0% to -100% of container width
gsap.to(textRef.current, {
  xPercent: -100,
  duration: speed,
  ease: "none",
  repeat: -1
});
```

**Styling**:
- Font: Instrument Serif (--font-serif)
- Size: 190px on desktop, responsive on mobile
- Color: #694D29 (brown/gold tone matching design)
- Overflow: hidden on container
- Whitespace: nowrap

### 2. RotatingDisc Component

**Purpose**: Displays a music disc that rotates continuously clockwise.

**Props Interface**:
```javascript
{
  imageSrc: string,       // Path to disc image (default: "/music-disc.png")
  speed: number,          // Rotation duration in seconds (default: 10)
  size?: string,          // Tailwind size class (default: "w-32 h-32")
  className?: string      // Additional CSS classes
}
```

**Implementation Approach**:
- Use GSAP's rotation property with infinite repeat
- Apply transform-origin center for smooth rotation
- Use linear easing for constant speed

**Animation Logic**:
```javascript
gsap.to(discRef.current, {
  rotation: 360,
  duration: speed,
  ease: "none",
  repeat: -1
});
```

**Styling**:
- Display: block with defined width/height
- Transform-origin: center
- Image rendering: smooth

### 3. MusicWave Component

**Purpose**: Creates an animated music wave visualization.

**Props Interface**:
```javascript
{
  className?: string      // Additional CSS classes
}
```

**Implementation Approach**:

Since the static music-wave.png image cannot be animated effectively, we'll use one of these alternatives:

**Option A: CSS-Based Wave Animation (Recommended)**
- Create multiple div elements styled as bars
- Use GSAP to animate their height/scale in a staggered pattern
- Simulate audio wave visualization

**Option B: SVG Wave Animation**
- Create an SVG with wave paths
- Animate the path's d attribute or use transforms
- More complex but offers precise control

**Option C: Canvas-Based Animation**
- Use HTML5 Canvas for real-time wave rendering
- Most performant for complex animations
- Overkill for this use case

**Recommended: Option A - CSS Bars**

```javascript
// Create 5-7 bars with staggered animation
const bars = Array.from({ length: 7 });

gsap.to(barRefs.current, {
  scaleY: "random(0.3, 1)",
  duration: 0.5,
  ease: "power1.inOut",
  stagger: {
    each: 0.1,
    repeat: -1,
    yoyo: true
  }
});
```

**Styling**:
- Bars: Vertical rectangles with rounded corners
- Color: White or yellow (#e7d393)
- Layout: Flex row with gap
- Height: Variable based on animation

## Data Models

### Animation Configuration

```javascript
const ANIMATION_CONFIG = {
  marquee: {
    speed: 20,              // seconds per cycle
    text: "This is Not a Drill",
    fontSize: {
      desktop: "190px",
      mobile: "80px"
    },
    color: "#694D29"
  },
  disc: {
    speed: 10,              // seconds per rotation
    size: {
      desktop: "w-32 h-32",
      mobile: "w-20 h-20"
    }
  },
  wave: {
    barCount: 7,
    animationSpeed: 0.5,
    minScale: 0.3,
    maxScale: 1
  }
};
```

## Layout and Positioning

### Hero Section Structure

```
┌─────────────────────────────────────────────┐
│  Title & Subtitle (existing)                │
│  Heading (existing)                         │
│  Image Cards (existing)                     │
├─────────────────────────────────────────────┤
│  ┌───────────────────────────────────────┐  │
│  │ "This is Not a Drill" → → → → → →    │  │ Marquee
│  └───────────────────────────────────────┘  │
│                                             │
│  ┌──────┐              ┌─────────┐         │
│  │ Disc │              │ ▂▄▆█▆▄▂ │         │ Disc + Wave
│  │  ⟳   │              │  Wave   │         │
│  └──────┘              └─────────┘         │
└─────────────────────────────────────────────┘
```

### Positioning Strategy

**Marquee Section**:
- Position: relative
- Width: 100vw (full viewport)
- Overflow: hidden
- Margin: mt-12 (below image cards)

**Disc and Wave Container**:
- Position: relative or flex
- Layout: Flex row with justify-between or specific positioning
- Gap: Appropriate spacing between elements
- Margin: mt-8 (below marquee)

## Error Handling

### Image Loading

```javascript
// Handle missing images gracefully
const [imageLoaded, setImageLoaded] = useState(false);

<img 
  src={imageSrc}
  onLoad={() => setImageLoaded(true)}
  onError={(e) => {
    console.error('Failed to load image:', imageSrc);
    e.target.style.display = 'none';
  }}
/>
```

### Animation Cleanup

```javascript
// Proper GSAP cleanup in useGSAP
useGSAP(() => {
  const animation = gsap.to(...);
  
  return () => {
    animation.kill(); // Cleanup on unmount
  };
}, { scope: containerRef });
```

### Performance Considerations

- Use `will-change: transform` for animated elements
- Limit the number of animated elements
- Use `ease: "none"` for continuous animations (no easing calculations)
- Avoid animating properties that trigger layout recalculation

## Testing Strategy

### Visual Testing

1. **Marquee Text**:
   - Verify text scrolls smoothly from right to left
   - Check for seamless looping (no gaps or jumps)
   - Test on different screen sizes
   - Verify font size and color match design

2. **Rotating Disc**:
   - Verify clockwise rotation
   - Check rotation speed is consistent
   - Ensure image loads correctly
   - Test on different screen sizes

3. **Music Wave**:
   - Verify wave animation creates visual movement
   - Check animation loops smoothly
   - Ensure bars/elements are visible
   - Test synchronization with other animations

### Responsive Testing

- Desktop (1920px+): Full-size elements, 190px text
- Tablet (768px-1919px): Medium-size elements, scaled text
- Mobile (< 768px): Compact elements, 80px text

### Performance Testing

- Monitor FPS during animations (should maintain 60fps)
- Check memory usage over time (no leaks)
- Test on lower-end devices
- Verify animations don't block main thread

### Integration Testing

- Verify components integrate correctly into Hero
- Check that new animations don't interfere with existing Hero animations
- Test scroll behavior with new elements
- Verify proper cleanup when navigating away

## Accessibility Considerations

### Motion Preferences

```javascript
// Respect prefers-reduced-motion
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (prefersReducedMotion) {
  // Disable or slow down animations
  gsap.globalTimeline.timeScale(0.5);
}
```

### Semantic HTML

- Use appropriate semantic elements (div for decorative animations)
- Add `aria-hidden="true"` to decorative animated elements
- Ensure text content is accessible to screen readers

### Keyboard Navigation

- Animated elements should not interfere with keyboard navigation
- Ensure focus indicators remain visible

## Design Decisions and Rationales

### 1. Component-Based Architecture

**Decision**: Create separate components for each animated element.

**Rationale**: 
- Improves code maintainability and reusability
- Allows independent testing of each animation
- Follows React best practices
- Makes it easier to adjust individual animations

### 2. GSAP for All Animations

**Decision**: Use GSAP instead of CSS animations or other libraries.

**Rationale**:
- Consistency with existing codebase
- Better performance for complex animations
- More precise control over timing and easing
- Easier cleanup and lifecycle management

### 3. CSS Bars for Wave Animation

**Decision**: Use CSS-based bars instead of the static image or canvas.

**Rationale**:
- Static image cannot be animated effectively
- CSS bars are simpler to implement than canvas
- Good performance with GSAP
- Easier to customize colors and styling
- Maintains visual effect without complexity

### 4. Multiple Text Instances for Marquee

**Decision**: Render multiple instances of the marquee text.

**Rationale**:
- Ensures seamless looping without gaps
- Simpler than calculating exact positioning
- Works across all screen sizes
- Common pattern for marquee implementations

### 5. Infinite Repeat with Linear Easing

**Decision**: Use `repeat: -1` and `ease: "none"` for continuous animations.

**Rationale**:
- Creates truly continuous motion
- Linear easing prevents speed variations
- Matches expected behavior for mechanical rotation and scrolling
- Better performance (no easing calculations)
