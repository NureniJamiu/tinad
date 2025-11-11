import { motion } from "motion/react";
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
            className="relative pt-8 sm:pt-12 lg:pt-16 pb-4 sm:pb-6 lg:pb-8"
        >
            <motion.div 
                className="text-center space-y-2 sm:space-y-3 px-4 lg:mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.h2
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#694D29] leading-tight tracking-tighter font-bold"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    Artists
                </motion.h2>
                <motion.p 
                    className="font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight px-2 text-white/90"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Making Sound. Making Waves. Making <span className="text-[#694D29] font-bold">SoundWaves</span>
                </motion.p>
            </motion.div>

            {/* Artist Cards Container */}
            <motion.div
                className="col-span-3 flex items-center gap-4 overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                {loading ? (
                    <motion.div 
                        className="w-full text-center py-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-col items-center gap-4">
                            <svg className="animate-spin h-12 w-12 text-yellow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <p className="text-white/70 text-lg font-medium">Loading artists...</p>
                        </div>
                    </motion.div>
                ) : error ? (
                    <ErrorFallback 
                        error={error}
                        retry={retry}
                        title="Unable to load artists"
                        className="w-full"
                    />
                ) : !artists || artists.length === 0 ? (
                    <motion.div 
                        className="w-full text-center py-20"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-col items-center gap-4">
                            <svg className="w-16 h-16 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                            </svg>
                            <p className="text-white/50 text-lg">No artists available at the moment</p>
                        </div>
                    </motion.div>
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
            </motion.div>
        </section>
    );
};

export default Artist;
