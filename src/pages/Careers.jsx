import Banner from "@/components/Banner";
import CareerDisplayCard from "@/components/CareerDisplayCard";
import CTA from "@/components/CTA";
import { openRoles } from "@/constants";


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
