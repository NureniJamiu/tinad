import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const MusicWave = ({ className = '' }) => {
  const containerRef = useRef(null);
  const barRefs = useRef([]);

  // Create 7 bars
  const bars = Array.from({ length: 14 });

  useGSAP(
    () => {
      // Animate bars with staggered random scaleY values
      gsap.to(barRefs.current, {
        scaleY: 'random(0.3, 1)',
        duration: 0.5,
        ease: 'power1.inOut',
        stagger: {
          each: 0.1,
          repeat: -1,
          yoyo: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="flex items-center gap-3">
      <div className='size-8 rounded-full bg-white' />
      <div
        ref={containerRef}
        className={`flex items-end gap-1.5 ${className}`}
      >
        {bars.map((_, index) => (
          <div
            key={index}
            ref={(el) => (barRefs.current[index] = el)}
            className="w-2 h-8 bg-white rounded-full origin-bottom"
          />
        ))}
      </div>
    </div>
  );
};

export default MusicWave;
