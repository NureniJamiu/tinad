import { artists } from "../constants";
import ArtistCard from "./ArtistCard";
import { ScrollVelocityContainer, ScrollVelocityRow } from "./ui/scroll-based-velocity";

const Artist = () => {
    return (
        <section
            id="artist"
            className="relative py-20"
        >
            <div className="text-center space-y-1">
                <h2
                    className="text-8xl text-[#694D29] leading-14 xl:leading-20 tracking-tighter"
                >
                    Artists
                </h2>
                <p className="font-serif text-4xl leading-14 tracking-tight">Making Sound. Making Waves. Making <span className="text-[#694D29]">SoundWaves</span></p>
            </div>

            {/* Artist Cards Container */}
            <div
                className="col-span-3 flex items-center gap-4 overflow-hidden"
            >
                <ScrollVelocityContainer className="w-full">
                    <ScrollVelocityRow baseVelocity={6} direction={1} className="py-4">
                        {artists.map((artist) => (
                            <ArtistCard
                                key={artist.id}
                                name={artist.name}
                                genre={artist.genre}
                                image={artist.image}
                            />
                        ))}
                    </ScrollVelocityRow>
                </ScrollVelocityContainer>
            </div>
        </section>
    );
};

export default Artist;
