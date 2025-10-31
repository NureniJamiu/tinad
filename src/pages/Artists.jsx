import { useState, useEffect } from "react";
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
                    <div className="text-center py-20">
                        <p className="text-white/50 text-xl">Loading artists...</p>
                    </div>
                )}

                {error && (
                    <ErrorFallback 
                        error={error}
                        retry={retry}
                        title="Unable to load artists"
                    />
                )}

                {!loading && !error && artists && artists.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-white/50 text-xl">No artists available</p>
                    </div>
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
                            />
                        ))}
                        
                        <Pagination 
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </>
                )}
            </div>
        </section>
    );
};

export default Artists;
