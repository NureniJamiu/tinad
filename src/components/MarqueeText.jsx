import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const MarqueeText = ({
  text = "This is Not a Drill",
  speed = 20,
  className = ""
}) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const textElements = containerRef.current.querySelectorAll('.marquee-text');

    gsap.to(textElements, {
      xPercent: -100,
      duration: speed,
      ease: "none",
      repeat: -1,
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap ${className}`}
    >
      <div className="inline-flex leading-42">
        <span className="marquee-text tracking-tighter font-serif text-[80px] md:text-[220px] inline-block pr-20" style={{ color: '#694D29' }}>
          {text}
        </span>
        <span className="marquee-text tracking-tighter font-serif text-[80px] md:text-[220px] inline-block pr-20" style={{ color: '#694D29' }}>
          {text}
        </span>
        <span className="marquee-text tracking-tighter font-serif text-[80px] md:text-[220px] inline-block pr-20" style={{ color: '#694D29' }}>
          {text}
        </span>
      </div>
    </div>
  );
};

export default MarqueeText;
