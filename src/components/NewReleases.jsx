import React from "react";
import { DraggableCardBody, DraggableCardContainer } from "./ui/draggable-card";
import { useSanityData } from "../hooks/useSanityData";
import { tracksQuery } from "../sanity/queries";
import { urlFor } from "../sanity/imageBuilder";

const NewReleases = () => {
  const { data: tracks, loading, error } = useSanityData(tracksQuery);

  // Position classes for the draggable cards
  const positionClasses = [
    "absolute top-10 left-[5%] md:left-[20%] rotate-[-5deg]",
    "absolute top-[280px] left-[15%] md:top-40 md:left-[25%] rotate-[-7deg]",
    "absolute top-[560px] left-[10%] md:top-5 md:left-[40%] rotate-[8deg]",
    "absolute top-[840px] left-[5%] md:top-32 md:left-[55%] rotate-[10deg]",
    "absolute top-[1120px] left-[15%] md:top-20 md:right-[35%] md:left-auto rotate-[2deg]",
    "absolute top-[1400px] left-[10%] md:top-24 md:left-[45%] rotate-[-7deg]",
  ];

  // Map tracks with position classes
  const releases = tracks?.map((track, index) => ({
    ...track,
    className: positionClasses[index % positionClasses.length],
  })) || [];

  if (loading) {
    return (
      <section className="py-12 md:py-20 mb-8 md:mb-12">
        <div className="mb-8 md:mb-12">
          <h2 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            Latest Drops
          </h2>
        </div>
        <div className="flex justify-center items-center min-h-[400px]">
          <p className="text-white/60 text-lg">Loading tracks...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 md:py-20 mb-8 md:mb-12">
        <div className="mb-8 md:mb-12">
          <h2 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            Latest Drops
          </h2>
        </div>
        <div className="flex justify-center items-center min-h-[400px]">
          <p className="text-red-400 text-lg">{error}</p>
        </div>
      </section>
    );
  }

  if (!releases || releases.length === 0) {
    return (
      <section className="py-12 md:py-20 mb-8 md:mb-12">
        <div className="mb-8 md:mb-12">
          <h2 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            Latest Drops
          </h2>
        </div>
        <div className="flex justify-center items-center min-h-[400px]">
          <p className="text-white/60 text-lg">No tracks available yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 mb-8 md:mb-12">
      <div className="mb-8 md:mb-12">
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
          Latest Drops
        </h2>
      </div>

      <DraggableCardContainer className="relative flex min-h-[1800px] md:min-h-screen w-full items-center justify-center overflow-clip px-4">
        <p className="absolute top-8 md:top-1/2 mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg md:-translate-y-3/4 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white/20 px-4">
          Fresh sounds from the heart of Afrobeats
        </p>
        {releases.map((release, index) => {
          // Skip tracks without cover images
          if (!release.coverImage) return null;

          return (
            <DraggableCardBody key={release._id || index} className={release.className}>
              <div className="relative">
                <img
                  src={urlFor(release.coverImage).width(800).height(800).url()}
                  alt={release.title}
                  className="pointer-events-none relative z-10 h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg z-20" />
              </div>
              <div className="mt-3 md:mt-4 text-center space-y-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#694D29]">
                  {release.title}
                </h3>
                {release.artist && (
                  <p className="text-sm sm:text-base md:text-lg text-neutral-500">
                    {release.artist}
                  </p>
                )}
                <p className="text-xs sm:text-sm text-neutral-400">
                  {release.releaseYear} • {release.duration}
                </p>
              </div>
            </DraggableCardBody>
          )
        })})
      </DraggableCardContainer>
    </section>
  );
};

export default NewReleases;