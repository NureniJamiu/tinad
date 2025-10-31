import { useSanityData } from "../hooks/useSanityData";
import { artistsQuery } from "../sanity/queries";
import ArtistCard from "./ArtistCard";
import ErrorFallback from "./ErrorFallback";
import { ScrollVelocityContainer, ScrollVelocityRow } from "./ui/scroll-based-velocity";

const Artist = () => {
    const { data: artists, loading, error, retry } = useSanityData(artistsQuery);

    return (
        <section
            id="artist"
            className="relative pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16"
        >
            <div className="text-center space-y-2 sm:space-y-3 px-4 mb-6 sm:mb-8">
                <h2
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#694D29] leading-tight tracking-tighter"
                >
                    Artists
                </h2>
                <p className="font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight px-2">Making Sound. Making Waves. Making <span className="text-[#694D29]">SoundWaves</span></p>
            </div>

            {/* Artist Cards Container */}
            <div
                className="col-span-3 flex items-center gap-4 overflow-hidden"
            >
                {loading ? (
                    <div className="w-full text-center py-20">
                        <p className="text-white/50 text-lg">Loading artists...</p>
                    </div>
                ) : error ? (
                    <ErrorFallback 
                        error={error}
                        retry={retry}
                        title="Unable to load artists"
                        className="w-full"
                    />
                ) : !artists || artists.length === 0 ? (
                    <div className="w-full text-center py-20">
                        <p className="text-white/50 text-lg">No artists available at the moment</p>
                    </div>
                ) : (
                    <ScrollVelocityContainer className="w-full h-auto">
                        <ScrollVelocityRow baseVelocity={6} direction={1} className="py-4 sm:py-6">
                            {artists.map((artist) => (
                                <ArtistCard
                                    key={artist._id}
                                    id={artist._id}
                                    name={artist.name}
                                    genre={artist.genre}
                                    image={artist.image}
                                />
                            ))}
                        </ScrollVelocityRow>
                    </ScrollVelocityContainer>
                )}
            </div>
        </section>
    );
};

export default Artist;
