import { useSanityData } from "../hooks/useSanityData";
import { producersQuery } from "../sanity/queries";
import ProducerCard from "./ProducerCard";
import ErrorFallback from "./ErrorFallback";
import { ScrollVelocityContainer, ScrollVelocityRow } from "./ui/scroll-based-velocity";

const Producer = () => {
    const { data: producers, loading, error, retry } = useSanityData(producersQuery);

    if (loading) {
        return (
            <section id="producer" className="relative pb-20">
                <div className="text-center space-y-1">
                    <h2 className="text-8xl text-[#694D29] leading-14 xl:leading-20 tracking-tighter">
                        Producers
                    </h2>
                    <p className="font-serif text-4xl leading-14 tracking-tight">Remastered. Remix. <span className="text-[#694D29]">Rhythm</span></p>
                </div>
                <div className="text-center mt-8">
                    <p className="text-white/50">Loading producers...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="producer" className="relative pb-20">
                <div className="text-center space-y-1">
                    <h2 className="text-8xl text-[#694D29] leading-14 xl:leading-20 tracking-tighter">
                        Producers
                    </h2>
                    <p className="font-serif text-4xl leading-14 tracking-tight">Remastered. Remix. <span className="text-[#694D29]">Rhythm</span></p>
                </div>
                <ErrorFallback 
                    error={error}
                    retry={retry}
                    title="Unable to load producers"
                />
            </section>
        );
    }

    if (!producers || producers.length === 0) {
        return (
            <section id="producer" className="relative pb-20">
                <div className="text-center space-y-1">
                    <h2 className="text-8xl text-[#694D29] leading-14 xl:leading-20 tracking-tighter">
                        Producers
                    </h2>
                    <p className="font-serif text-4xl leading-14 tracking-tight">Remastered. Remix. <span className="text-[#694D29]">Rhythm</span></p>
                </div>
                <div className="text-center mt-8">
                    <p className="text-white/50">No producers available</p>
                </div>
            </section>
        );
    }

    return (
        <section
            id="producer"
            className="relative pb-20"
        >
            <div className="text-center space-y-1">
                <h2
                    className="text-8xl text-[#694D29] leading-14 xl:leading-20 tracking-tighter"
                >
                    Producers
                </h2>
                <p className="font-serif text-4xl leading-14 tracking-tight">Remastered. Remix. <span className="text-[#694D29]">Rhythm</span></p>
            </div>

            {/* Producer Cards Container */}
            <div
                className="col-span-3 flex items-center gap-4 overflow-hidden"
            >
                <ScrollVelocityContainer className="w-full">
                    <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-4">
                        {producers.map((producer) => (
                            <ProducerCard
                                key={producer._id}
                                name={producer.name}
                                specialty={producer.specialty}
                                image={producer.image}
                            />
                        ))}
                    </ScrollVelocityRow>
                </ScrollVelocityContainer>
            </div>
        </section>
    );
};

export default Producer;
