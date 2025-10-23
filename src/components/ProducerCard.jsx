import React from "react";

const ProducerCard = ({ name, specialty, image }) => {
    return (
        <div
            // ref={ref}
            className="artist-card w-full md:w-[280px] xl:w-[460px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300 hover:border-[#e7d393] mr-4 flex-shrink-0"
        >
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">
                    {name}
                </h3>
                <p className="artist-card-genre text-sm md:text-base text-gray-300">
                    {specialty}
                </p>
            </div>
        </div>
    );
};

ProducerCard.displayName = "ProducerCard";

export default ProducerCard;
