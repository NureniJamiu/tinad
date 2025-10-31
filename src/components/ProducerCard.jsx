import React from "react";
import { getCardImageUrl } from '../sanity/imageBuilder';

const ProducerCard = ({ name, specialty, image }) => {
    const imageUrl = getCardImageUrl(image);
    const displayName = name || 'Unknown Producer';
    const displaySpecialty = specialty || 'Specialty not specified';

    return (
        <div
            className="artist-card w-full md:w-[280px] xl:w-[460px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300 hover:border-[#e7d393] mr-4 flex-shrink-0"
        >
            {imageUrl ? (
                <img
                    src={imageUrl}
                    alt={displayName}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                        console.error('[ProducerCard] Image failed to load:', imageUrl);
                        e.target.style.display = 'none';
                    }}
                />
            ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#694D29] to-black flex items-center justify-center">
                    <span className="text-6xl text-white/20">🎵</span>
                </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">
                    {displayName}
                </h3>
                <p className="artist-card-genre text-sm md:text-base text-gray-300">
                    {displaySpecialty}
                </p>
            </div>
        </div>
    );
};

ProducerCard.displayName = "ProducerCard";

export default ProducerCard;
