import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoadingScreen = ({ onComplete }) => {
  const containerRef = useRef(null);
  const charsRef = useRef([]);

  useEffect(() => {
    const chars = charsRef.current;
    const tl = gsap.timeline({
      onComplete: () => {
        // Animate out the entire loading screen
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: onComplete
        });
      }
    });

    // Animate each character in sequence with rotation and opacity
    tl.from(chars, {
      opacity: 0,
      y: 50,
      rotationX: -90,
      stagger: 0.1,
      duration: 0.6,
      ease: 'back.out(1.7)'
    });
    
    // Hold for a moment to ensure minimum display time
    tl.to({}, { duration: 0.5 });

    return () => tl.kill();
  }, [onComplete]);

  const text = 'TINAD';

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      style={{ pointerEvents: 'all' }}
    >
      <div className="flex gap-2">
        {text.split('').map((char, index) => (
          <span
            key={index}
            ref={(el) => (charsRef.current[index] = el)}
            className="text-8xl font-bold text-[#e7d393]"
            style={{ display: 'inline-block' }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
