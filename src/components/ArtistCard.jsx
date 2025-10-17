import React, { forwardRef } from 'react';

const ArtistCard = forwardRef(({ name, genre, image }, ref) => {
  const handleImageError = (e) => {
    e.target.src = '/hero1.png'; // Fallback to existing hero image
  };

  return (
    <div
      ref={ref}
      className="artist-card w-full md:w-[280px] h-auto md:h-[360px] xl:w-[460px] xl:h-[620px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300 hover:border-[#e7d393]"
    >
      <img
        src={image}
        alt={name}
        onError={handleImageError}
        className="w-full h-[200px] md:h-[240px] xl:h-[500px] object-cover"
      />
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-[#e7d393] mb-2">
          {name}
        </h3>
        <p className="text-sm text-white/70">
          {genre}
        </p>
      </div>
    </div>
  );
});

ArtistCard.displayName = 'ArtistCard';

export default ArtistCard;
