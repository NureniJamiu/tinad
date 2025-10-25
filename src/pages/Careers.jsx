import Banner from "@/components/Banner";
import CareerDisplayCard from "@/components/CareerDisplayCard";
import CTA from "@/components/CTA";

const openRoles = [
    {
        name: "Talent Development/ Management",
        description: "Scouting, nurturing, and representing a new generation of Afro-global artists, producers, and cultural disruptors. Connecting them with global platforms, publishing partners, and performance opportunities.",
        image: "/career1.png"
    },
    {
        name: "Creative Business Solution",
        description: "Scouting, nurturing, and representing a new generation of Afro-global artists, producers, and cultural disruptors. Connecting them with global platforms, publishing partners, and performance opportunities.",
        image: "/career2.png"
    },
    {
        name: "Cross-Continental Strategy",
        description: "Scouting, nurturing, and representing a new generation of Afro-global artists, producers, and cultural disruptors. Connecting them with global platforms, publishing partners, and performance opportunities.",
        image: "/career3.png"
    },
    {
        name: "Event Curation & Brand Activations",
        description: "Scouting, nurturing, and representing a new generation of Afro-global artists, producers, and cultural disruptors. Connecting them with global platforms, publishing partners, and performance opportunities.",
        image: "/career4.png"
    },
    {
        name: "Platform Partnerships & Products",
        description: "Scouting, nurturing, and representing a new generation of Afro-global artists, producers, and cultural disruptors. Connecting them with global platforms, publishing partners, and performance opportunities.",
        image: "/career5.png"
    },
]

const Careers = () => {
    return (
        <section className="space-y-10">
            <Banner image="/career-frame.png" text="Careers" description={"Explore the list of open positions and how we discover and grow talents globally. Your journey into the limelight starts here."} className={"bg-[#030305]"}/>

            <div className="space-y-10">
                {openRoles.map(({name, description, image}, index) => (
                    <CareerDisplayCard 
                        key={name + index} 
                        name={name} 
                        description={description} 
                        image={image}
                        reverse={index % 2 ? true : false}
                    />
                ))}
            </div>

            <CTA />
        </section>
    );
};

export default Careers;
