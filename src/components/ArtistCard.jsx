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
      className="artist-card w-[280px] sm:w-[320px] md:w-[380px] lg:w-[480px] xl:w-[560px] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[560px] bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#e7d393] hover:scale-105 mr-3 sm:mr-4 flex-shrink-0 cursor-pointer group relative"
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
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5 lg:p-6">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#e7d393] mb-1 sm:mb-2 group-hover:text-white transition-colors duration-300">
          {displayName}
        </h3>
        <p className="text-xs sm:text-sm lg:text-base text-white/70 group-hover:text-white/90 transition-colors duration-300">
          {displayGenre}
        </p>
      </div>
    </div>
  );
};

ArtistCard.displayName = 'ArtistCard';

export default ArtistCard;
