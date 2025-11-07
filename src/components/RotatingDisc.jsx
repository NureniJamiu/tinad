import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMusic } from '../context/MusicContext';

const RotatingDisc = ({ 
  imageSrc = '/music-disc.png', 
  speed = 10, 
  size = 'w-32 h-32 max-md:w-20 max-md:h-20',
  className = '' 
}) => {
  const discRef = useRef(null);
  const animationRef = useRef(null);
  const { isPlaying } = useMusic();

  useGSAP(() => {
    if (!discRef.current) return;

    animationRef.current = gsap.to(discRef.current, {
      rotation: 360,
      duration: speed,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      animationRef.current?.kill();
    };
  }, { scope: discRef });

  useEffect(() => {
    if (animationRef.current) {
      if (isPlaying) {
        animationRef.current.play();
      } else {
        animationRef.current.pause();
      }
    }
  }, [isPlaying]);

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
