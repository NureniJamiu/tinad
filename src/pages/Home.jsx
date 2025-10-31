import Hero from "../components/Hero";
import Artist from "../components/Artist";
import Producer from "../components/Producer";
import NewReleases from "@/components/NewReleases";
import CTA from "@/components/CTA";
import MissionVision from "@/components/MissionVision";
import WhatWeDo from "@/components/WhatWeDo";

const Home = () => {
    return (
        <>
            <Hero />
            <Artist />
            {/* <Producer /> */}
            <MissionVision />
            <WhatWeDo />
            <NewReleases />
            <CTA />
        </>
    );
};

export default Home;
