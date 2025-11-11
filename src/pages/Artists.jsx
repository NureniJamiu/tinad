import { useState, useEffect } from "react";
import { motion } from "motion/react";
import ArtistDisplayCard from "@/components/ArtistDisplayCard";
import ErrorFallback from "@/components/ErrorFallback";
import Pagination from "@/components/Pagination";
import { useSanityData } from "../hooks/useSanityData";
import { featuredArtistsQuery } from "../sanity/queries";
import Banner from "@/components/Banner";

const ITEMS_PER_PAGE = 6;

const Artists = () => {
    const { data: artists, loading, error, retry } = useSanityData(featuredArtistsQuery);
    const [currentPage, setCurrentPage] = useState(1);

    // Reset to page 1 when artists data changes
    useEffect(() => {
        setCurrentPage(1);
    }, [artists]);

    // Calculate pagination
    const totalPages = artists ? Math.ceil(artists.length / ITEMS_PER_PAGE) : 0;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentArtists = artists ? artists.slice(startIndex, endIndex) : [];

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="relative overflow-hidden">
            <Banner image="/artist-frame.png" text="Artists" description={"A curated list of talented individuals in our talent pool making waves in the industry."} className={"bg-black bg-cover"}/>

            <div className="max-w-7xl mx-auto space-y-4 lg:space-y-8 py-10 px-4 lg:px-8">
                {loading && (
                    <motion.div 
                        className="text-center py-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-col items-center gap-4">
                            <svg className="animate-spin h-12 w-12 text-yellow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <p className="text-white/70 text-xl font-medium">Loading artists...</p>
                        </div>
                    </motion.div>
                )}

                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ErrorFallback 
                            error={error}
                            retry={retry}
                            title="Unable to load artists"
                        />
                    </motion.div>
                )}

                {!loading && !error && artists && artists.length === 0 && (
                    <motion.div 
                        className="text-center py-20"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-col items-center gap-4">
                            <svg className="w-16 h-16 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <p className="text-white/50 text-xl">No artists available</p>
                        </div>
                    </motion.div>
                )}

                {!loading && !error && artists && artists.length > 0 && (
                    <>
                        {currentArtists.map((artist, index) => (
                            <ArtistDisplayCard
                                key={artist._id}
                                artistId={artist._id}
                                name={artist.name}
                                description={artist.bio || "A curated list of talented individuals in our talent pool making waves in the industry"}
                                topImage={artist.topImage}
                                bottomImage={artist.bottomImage}
                                reverse={index % 2 !== 0}
                                index={index}
                            />
                        ))}
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                        >
                            <Pagination 
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </motion.div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Artists;
