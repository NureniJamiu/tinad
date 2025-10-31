import React from "react";
import { DraggableCardBody, DraggableCardContainer } from "./ui/draggable-card";

const NewReleases = () => {
  const releases = [
    {
      title: "Last Last",
      artist: "Burna Boy",
      year: 2022,
      duration: "2:47",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2000&auto=format&fit=crop",
      className: "absolute top-10 left-[5%] sm:left-[15%] md:left-[20%] rotate-[-5deg]",
    },
    {
      title: "Essence",
      artist: "Wizkid ft. Tems",
      year: 2020,
      duration: "4:07",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2000&auto=format&fit=crop",
      className: "absolute top-40 left-[10%] sm:left-[20%] md:left-[25%] rotate-[-7deg]",
    },
    {
      title: "Calm Down",
      artist: "Rema",
      year: 2022,
      duration: "3:59",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2000&auto=format&fit=crop",
      className: "absolute top-5 left-[30%] sm:left-[35%] md:left-[40%] rotate-[8deg]",
    },
    {
      title: "Free Mind",
      artist: "Tems",
      year: 2020,
      duration: "3:42",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2000&auto=format&fit=crop",
      className: "absolute top-32 left-[45%] sm:left-[50%] md:left-[55%] rotate-[10deg]",
    },
    {
      title: "It's Plenty",
      artist: "Burna Boy",
      year: 2023,
      duration: "3:12",
      image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2000&auto=format&fit=crop",
      className: "absolute top-20 right-[25%] sm:right-[30%] md:right-[35%] rotate-[2deg]",
    },
    {
      title: "Sungba",
      artist: "Asake",
      year: 2022,
      duration: "3:18",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2000&auto=format&fit=crop",
      className: "absolute top-24 left-[35%] sm:left-[40%] md:left-[45%] rotate-[-7deg]",
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="mb-8 md:mb-12">
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
          Latest Drops
        </h2>
      </div>

      <DraggableCardContainer className="relative flex min-h-[600px] md:min-h-screen w-full items-center justify-center overflow-clip px-4">
        <p className="absolute top-1/2 mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg -translate-y-3/4 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white/20 px-4">
          Fresh sounds from the heart of Afrobeats
        </p>
        {releases.map((release, index) => (
          <DraggableCardBody key={index} className={release.className}>
            <div className="relative">
              <img
                src={release.image}
                alt={`${release.title} by ${release.artist}`}
                className="pointer-events-none relative z-10 h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg z-20" />
            </div>
            <div className="mt-3 md:mt-4 text-center space-y-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#694D29]">
                {release.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-neutral-500">
                {release.artist}
              </p>
              <p className="text-xs sm:text-sm text-neutral-400">
                {release.year} • {release.duration}
              </p>
            </div>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </section>
  );
};

export default NewReleases;