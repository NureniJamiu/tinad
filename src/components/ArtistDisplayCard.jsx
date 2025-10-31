import { Link } from 'react-router-dom';
import { getDisplayImageUrl } from '../sanity/imageBuilder';

const ArtistDisplayCard = ({
                            artistId,
                            name="Kendrick Lamar", 
                            description="A curated list of talented individuals in our talent pool making waves in the industry",
                            topImage="/kendrick1.png",
                            bottomImage="/kendrick2.png",
                            reverse=false,
                        }) => {
    const topImageUrl = getDisplayImageUrl(topImage);
    const bottomImageUrl = getDisplayImageUrl(bottomImage);
    const displayName = name || 'Unknown Artist';
    const displayDescription = description || 'No description available';

    const cardContent = (
        <div className={`relative flex items-center justify-center gap-16 group ${reverse && "flex-row-reverse"}`}>
            <div className="flex-1">
               <div className={`w-96 space-y-3 py-32 ${reverse ? "float-left text-left" : "float-right text-right"}`}>
                    <h2 className="text-8xl tracking-tighter leading-20 font-semibold text-[#694D29]">{displayName}</h2>
                    <p className={`w-64 text-lg leading-tight ${reverse ? "float-left" : "float-right"}`}>{displayDescription}</p>
               </div>
            </div>

            <div className="flex-1 ">
                <div className="relative w-72">
                    {topImage && topImageUrl && (
                        <img 
                            src={topImageUrl} 
                            alt={`${displayName} - top`} 
                            loading="lazy"
                            className={`absolute -bottom-40 group-hover:-rotate-12 transition-all ${reverse ? "-right-64" : "-right-32"}`}
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
                            className={`absolute -top-36 group-hover:rotate-12 transition-all ${reverse ? "left-36" : "left-0"}`}
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
        <Link to={`/artists/${artistId}`} className="cursor-pointer">
            {cardContent}
        </Link>
    ) : (
        cardContent
    )
}

export default ArtistDisplayCard;