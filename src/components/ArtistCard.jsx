import React from 'react';

const ArtistCard = ({ name, genre, image }) => {

  return (
    <div
      className="artist-card w-full md:w-[380px] xl:w-[560px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300 hover:border-[#e7d393] mr-4 flex-shrink-0"
    >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-2xl font-semibold text-[#e7d393] mb-2">
          {name}
        </h3>
        <p className="text-sm text-white/70">
          {genre}
        </p>
      </div>
    </div>
  );
};

ArtistCard.displayName = 'ArtistCard';

export default ArtistCard;
