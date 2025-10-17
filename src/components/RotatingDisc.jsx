import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const RotatingDisc = ({ 
  imageSrc = '/music-disc.png', 
  speed = 10, 
  size = 'w-32 h-32 max-md:w-20 max-md:h-20',
  className = '' 
}) => {
  const discRef = useRef(null);

  useGSAP(() => {
    if (!discRef.current) return;

    const animation = gsap.to(discRef.current, {
      rotation: 360,
      duration: speed,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      animation.kill();
    };
  }, { scope: discRef });

  const handleImageError = (e) => {
    console.error('Failed to load disc image:', imageSrc);
    e.target.style.display = 'none';
  };

  return (
    <div className={`${size} ${className}`}>
      <img
        ref={discRef}
        src={imageSrc}
        alt="Rotating music disc"
        className="w-full h-full object-contain"
        style={{ transformOrigin: 'center' }}
        onError={handleImageError}
      />
    </div>
  );
};

export default RotatingDisc;
