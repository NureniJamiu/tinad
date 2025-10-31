import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSanityData } from "../hooks/useSanityData";
import { artistDetailQuery } from "../sanity/queries";
import { getHeroImageUrl, getBiographyImageUrl } from "../sanity/imageBuilder";
import ErrorFallback from "@/components/ErrorFallback";
import TrackCard from "@/components/TrackCard";

const ArtistDetail = () => {
    const { id } = useParams();
    const { data: artist, loading, error, retry } = useSanityData(artistDetailQuery, { id });
    const [heroVisible, setHeroVisible] = useState(false);
    const [tracksError, setTracksError] = useState(null);
    const [isRetryingTracks, setIsRetryingTracks] = useState(false);

    // Get hero background image URL with optimization
    const heroImageUrl = artist?.image ? getHeroImageUrl(artist.image) : null;

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // Preload hero image for priority loading
    useEffect(() => {
        if (heroImageUrl) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = heroImageUrl;
            link.fetchPriority = 'high';
            document.head.appendChild(link);

            return () => {
                document.head.removeChild(link);
            };
        }
    }, [heroImageUrl]);

    // Trigger fade-in animation when artist data loads
    useEffect(() => {
        if (artist) {
            // Small delay to ensure DOM is ready
            const timer = setTimeout(() => {
                setHeroVisible(true);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [artist]);

    // Validate tracks data and detect errors
    useEffect(() => {
        if (artist) {
            // Check if tracks field exists but is null/undefined (potential error)
            if (artist.tracks === null || artist.tracks === undefined) {
                const errorMsg = "Unable to load tracks for this artist";
                console.error(`[ArtistDetail] Tracks loading error for artist ${id}:`, errorMsg);
                setTracksError(errorMsg);
            } else {
                // Clear any previous errors if tracks loaded successfully
                setTracksError(null);
            }
        }
    }, [artist, id]);

    // Retry loading tracks
    const retryTracks = async () => {
        setIsRetryingTracks(true);
        setTracksError(null);
        console.log(`[ArtistDetail] Retrying tracks load for artist ${id}`);
        
        try {
            // Retry the entire query (which includes tracks)
            await retry();
        } catch (err) {
            console.error(`[ArtistDetail] Retry failed for artist ${id}:`, err);
            setTracksError("Failed to reload tracks. Please try again.");
        } finally {
            setIsRetryingTracks(false);
        }
    };

    // Loading state
    if (loading) {
        return (
            <section className="min-h-screen">
                <div className="text-center py-20">
                    <p className="text-white/50 text-xl">Loading artist...</p>
                </div>
            </section>
        );
    }

    // Error state
    if (error) {
        return (
            <section className="min-h-screen">
                <ErrorFallback 
                    error={error}
                    retry={retry}
                    title="Unable to load artist"
                />
            </section>
        );
    }

    // Artist not found
    if (!artist) {
        return (
            <section className="min-h-screen">
                <ErrorFallback 
                    error="The artist you're looking for doesn't exist or has been removed."
                    title="Artist not found"
                />
            </section>
        );
    }

    // Main content
    return (
        <div className="min-h-screen bg-black">
            {/* Back Navigation Button */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
                <Link 
                    to="/artists"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-[#e7d393] transition-colors duration-300 group min-h-[44px] py-2"
                    aria-label="Back to Artists page"
                >
                    <svg 
                        className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-xs sm:text-sm font-medium uppercase tracking-wider">Back to Artists</span>
                </Link>
            </div>

            {/* Hero Section */}
            <section 
                className="relative w-full min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: heroImageUrl ? `url(${heroImageUrl})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    backgroundColor: heroImageUrl ? 'transparent' : '#1a1a1a'
                }}
                role="banner"
                aria-label={`${artist.name} artist profile hero section`}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
                
                {/* Artist name overlay */}
                <div 
                    className={`relative z-10 text-center px-4 sm:px-6 transition-all duration-1000 ${
                        heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-white drop-shadow-2xl leading-tight break-words">
                        {artist.name}
                    </h1>
                </div>
            </section>

            {/* Biography Section */}
            <section className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e7d393] uppercase mb-6 sm:mb-8">
                    Biography
                </h2>

                {artist.bio || artist.topImage || artist.bottomImage ? (
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
                        {/* Biography Text - Left Column (60%) */}
                        <div className="lg:col-span-3">
                            {artist.bio ? (
                                <div className="text-base sm:text-lg text-white leading-relaxed space-y-3 sm:space-y-4">
                                    {artist.bio.split('\n\n').map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-white/50 text-base sm:text-lg italic">
                                    No biography available for this artist yet.
                                </p>
                            )}
                        </div>

                        {/* Image Gallery - Right Column (40%) */}
                        {(artist.topImage || artist.bottomImage) && (
                            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                                {artist.topImage && (
                                    <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl">
                                        <img
                                            src={getBiographyImageUrl(artist.topImage)}
                                            alt={`${artist.name} portrait photograph`}
                                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        {/* Heart Icon Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                                            <svg
                                                className="w-12 h-12 sm:w-16 sm:h-16 text-white/30 group-hover:text-white/50 transition-colors duration-300"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                            </svg>
                                        </div>
                                    </div>
                                )}

                                {artist.bottomImage && (
                                    <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl">
                                        <img
                                            src={getBiographyImageUrl(artist.bottomImage)}
                                            alt={`${artist.name} lifestyle photograph`}
                                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        {/* Heart Icon Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                                            <svg
                                                className="w-12 h-12 sm:w-16 sm:h-16 text-white/30 group-hover:text-white/50 transition-colors duration-300"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ) : (
                    <p className="text-white/50 text-base sm:text-lg italic">
                        No biography or images available for this artist yet.
                    </p>
                )}
            </section>

            {/* Recent Tracks Section */}
            <section className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e7d393] uppercase mb-6 sm:mb-8">
                    Recent Tracks
                </h2>

                {tracksError ? (
                    // Error state for tracks
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 sm:p-8 text-center" role="alert" aria-live="polite">
                        <svg
                            className="w-10 h-10 sm:w-12 sm:h-12 text-red-400 mx-auto mb-3 sm:mb-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <p className="text-red-300 text-base sm:text-lg mb-3 sm:mb-4">{tracksError}</p>
                        <button
                            onClick={retryTracks}
                            disabled={isRetryingTracks}
                            className="px-5 py-2.5 sm:px-6 sm:py-3 bg-[#e7d393] text-black font-semibold rounded-lg hover:bg-[#d4c280] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] text-sm sm:text-base touch-manipulation"
                            aria-label="Retry loading tracks"
                        >
                            {isRetryingTracks ? 'Retrying...' : 'Retry Loading Tracks'}
                        </button>
                    </div>
                ) : artist.tracks && artist.tracks.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                        {artist.tracks.slice(0, 4).map((track) => (
                            <TrackCard
                                key={track._id}
                                title={track.title}
                                coverImage={track.coverImage}
                                releaseYear={track.releaseYear}
                                duration={track.duration}
                                spotifyLink={track.spotifyLink}
                                appleMusicLink={track.appleMusicLink}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-white/50 text-base sm:text-lg text-center py-6 sm:py-8">
                        No tracks available for this artist yet.
                    </p>
                )}
            </section>
        </div>
    );
};

export default ArtistDetail;
