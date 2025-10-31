import React from 'react';
import { getCardImageUrl } from '../sanity/imageBuilder';

const ArtistCard = ({ name, genre, image }) => {
  const imageUrl = getCardImageUrl(image);
  const displayName = name || 'Unknown Artist';
  const displayGenre = genre || 'Genre not specified';

  return (
    <div
      className="artist-card w-full md:w-[380px] xl:w-[560px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300 hover:border-[#e7d393] mr-4 flex-shrink-0"
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
            <span className="text-6xl text-white/20">♪</span>
          </div>
        )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-2xl font-semibold text-[#e7d393] mb-2">
          {displayName}
        </h3>
        <p className="text-sm text-white/70">
          {displayGenre}
        </p>
      </div>
    </div>
  );
};

ArtistCard.displayName = 'ArtistCard';

export default ArtistCard;
