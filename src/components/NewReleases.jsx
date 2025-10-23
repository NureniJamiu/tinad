import { producers } from "@/constants";
import { Marquee } from "./ui/marquee";
import ProducerCard from "./ProducerCard";

const NewReleases = () => {
    return (
        <section id="new-releases" className="relative max-h-screen overflow-hidden max-w-7xl mx-auto">
            <div className="text-center space-y-1">
                <h2
                    className="text-8xl text-[#694D29] leading-14 xl:leading-20 tracking-tighter"
                >
                    New Releases
                </h2>
                <p className="font-serif text-4xl leading-14 tracking-tight">Ready. Set. <span className="text-[#694D29]">Launch</span></p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-20">
                <div className="col-span-1">
                    <Marquee reverse vertical>
                        {producers.map((producer) => (
                            <ProducerCard
                                key={producer.id}
                                name={producer.name}
                                specialty={producer.specialty}
                                image={producer.image}
                            />
                        ))}
                    </Marquee>                
                </div>

                {/* USE ACETERNITY UI DRAGGABLE CARDS FOR THIS SECTION  */}
                <div className="col-span-2 grid grid-cols-2">
                    <div className="">
                        <Marquee vertical>
                            {producers.map((producer) => (
                                <ProducerCard
                                    key={producer.id}
                                    name={producer.name}
                                    specialty={producer.specialty}
                                    image={producer.image}
                                />
                            ))}
                        </Marquee>
                    </div>
                    <div>
                        <Marquee reverse vertical>
                            {producers.map((producer) => (
                                <ProducerCard
                                    key={producer.id}
                                    name={producer.name}
                                    specialty={producer.specialty}
                                    image={producer.image}
                                />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewReleases;