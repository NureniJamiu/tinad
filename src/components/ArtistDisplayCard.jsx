import { Link } from 'react-router-dom';
import { getDisplayImageUrl } from '../sanity/imageBuilder';

const ArtistDisplayCard = ({
    artistId,
    name = "Kendrick Lamar",
    description = "A curated list of talented individuals in our talent pool making waves in the industry",
    topImage = "/kendrick1.png",
    bottomImage = "/kendrick2.png",
    reverse = false,
}) => {
    const topImageUrl = getDisplayImageUrl(topImage);
    const bottomImageUrl = getDisplayImageUrl(bottomImage);
    const displayName = name || 'Unknown Artist';
    const displayDescription = description || 'No description available';

    const cardContent = (
        <div className={`relative flex flex-col lg:flex-row items-center lg:justify-center gap-8 group py-16 lg:py-24 ${reverse ? "lg:flex-row-reverse" : ""}`}>
            {/* Text Content */}
            <div className={`flex-1 w-full lg:w-auto px-4 lg:px-0 ${!reverse ? "lg:-mr-[30rem] lg:ml-20" : "xl:ml-16"}`}>
                <div className={`max-w-full lg:max-w-md xl:max-w-lg space-y-3 lg:space-y-4 ${reverse ? "lg:text-left" : "lg:text-right"} text-center`}>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-tight font-semibold text-[#694D29] group-hover:underline transition-all">
                        {displayName}
                    </h2>
                    <p className={`max-w-full sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-sm text-base sm:text-lg leading-tight mx-auto ${reverse ? "lg:mx-0" : "lg:ml-auto lg:mr-0"}`}>
                        {displayDescription}
                    </p>
                </div>
            </div>

            {/* Images Container */}
            <div className="flex-1 w-full lg:w-auto flex justify-center items-center">
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[480px]">
                    {topImage && topImageUrl && (
                        <img
                            src={topImageUrl}
                            alt={`${displayName} - top`}
                            loading="lazy"
                            className={`absolute w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 h-auto object-cover rounded-lg shadow-2xl group-hover:-rotate-12 transition-all duration-300 ${reverse
                                ? "bottom-0 sm:bottom-4 md:bottom-8 lg:bottom-12 -right-4 sm:-right-8 md:-right-12 lg:-right-16 xl:-right-20"
                                : "bottom-0 sm:bottom-4 md:bottom-8 lg:bottom-12 -right-2 sm:-right-4 md:-right-8 lg:-right-12 xl:-right-16"
                                }`}
                            onError={(e) => {
                                console.error('[ArtistDisplayCard] Top image failed to load:', topImageUrl);
                                e.target.style.display = 'none';
                            }}
                        />
                    )}
                    {bottomImage && bottomImageUrl && (
                        <img
                            src={bottomImageUrl}
                            alt={`${displayName} - bottom`}
                            loading="lazy"
                            className={`absolute w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 h-auto object-cover rounded-lg shadow-2xl group-hover:rotate-12 transition-all duration-300 ${reverse
                                ? "top-0 sm:top-4 md:top-8 lg:top-12 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20"
                                : "top-0 sm:top-4 md:top-8 lg:top-12 left-0 sm:left-2 md:left-4 lg:left-8 xl:left-12"
                                }`}
                            onError={(e) => {
                                console.error('[ArtistDisplayCard] Bottom image failed to load:', bottomImageUrl);
                                e.target.style.display = 'none';
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );

    return artistId ? (
        <Link to={`/artists/${artistId}`} className="block cursor-pointer">
            {cardContent}
        </Link>
    ) : (
        <div className="block">
            {cardContent}
        </div>
    )
}

export default ArtistDisplayCard;