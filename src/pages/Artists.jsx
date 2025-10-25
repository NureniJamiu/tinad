import ArtistDisplayCard from "@/components/ArtistDisplayCard";
import ArtistCard from "../components/ArtistCard";

const Artists = () => {
    return (
        <section>
            <div className="min-h-96">
                <img src="/artist-frame.png" alt="artists banner" className="w-full"/>
            </div>

            <div className="max-w-7xl mx-auto space-y-10 py-10">
                <ArtistDisplayCard />
                <ArtistDisplayCard name="Buju Bnxn" topImage="/buju1.png" bottomImage="/buju2.png" reverse/>
                <ArtistDisplayCard />
            </div>
        </section>
    );
};

export default Artists;
