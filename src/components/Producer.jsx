import { producers } from "../constants";
import ProducerCard from "./ProducerCard";
import { ScrollVelocityContainer, ScrollVelocityRow } from "./ui/scroll-based-velocity";

const Producer = () => {
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
                                key={producer.id}
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
