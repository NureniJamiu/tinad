import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCardImageUrl } from '../sanity/imageBuilder';

const ArtistCard = ({ id, name, genre, image }) => {
  const navigate = useNavigate();
  const imageUrl = getCardImageUrl(image);
  const displayName = name || 'Unknown Artist';
  const displayGenre = genre || 'Genre not specified';

  const handleClick = () => {
    if (id) {
      navigate(`/artists/${id}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="artist-card w-[280px] sm:w-[320px] md:w-[380px] lg:w-[480px] xl:w-[560px] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[560px] bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#e7d393] hover:scale-105 hover:shadow-2xl hover:shadow-[#e7d393]/20 mr-3 sm:mr-4 flex-shrink-0 cursor-pointer group relative"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`View ${displayName}'s profile`}
    >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={displayName}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
            onError={(e) => {
              console.error('[ArtistCard] Image failed to load:', imageUrl);
              e.target.style.display = 'none';
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#694D29] to-black flex items-center justify-center">
            <span className="text-4xl sm:text-5xl lg:text-6xl text-white/20">♪</span>
          </div>
        )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-4 sm:p-5 lg:p-6 group-hover:from-black/95 transition-all duration-500">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#e7d393] mb-1 sm:mb-2 group-hover:text-white group-hover:scale-105 transition-all duration-300 origin-left">
          {displayName}
        </h3>
        <p className="text-xs sm:text-sm lg:text-base text-white/70 group-hover:text-white/90 transition-colors duration-300 font-medium">
          {displayGenre}
        </p>
        
        {/* Hover indicator */}
        <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 lg:bottom-6 lg:right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#e7d393]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </div>
  );
};

ArtistCard.displayName = 'ArtistCard';

export default ArtistCard;
