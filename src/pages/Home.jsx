import Hero from "../components/Hero";
import Artist from "../components/Artist";
import Producer from "../components/Producer";
import NewReleases from "@/components/NewReleases";
import CTA from "@/components/CTA";

const Home = () => {
    return (
        <>
            <Hero />
            <Artist />
            <Producer />
            <NewReleases />
            <CTA />
        </>
    );
};

export default Home;
