import { artists } from "../constants";
import ArtistCard from "../components/ArtistCard";

const Artists = () => {
    return (
        <div className="min-h-screen bg-black pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-6xl md:text-8xl font-serif text-center mb-16">
                    Our <span className="text-[#694D29]">Artists</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {artists.map((artist) => (
                        <ArtistCard
                            key={artist.id}
                            name={artist.name}
                            genre={artist.genre}
                            image={artist.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Artists;
