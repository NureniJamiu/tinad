import { openRoles } from "@/constants";
import CareerDisplayCard from "./CareerDisplayCard";

const WhatWeDo = () => {
    return (
        <section className="py-8 sm:py-12 lg:py-16">
           <div className="mb-6 sm:mb-8 md:mb-12 px-4">
                <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight">
                What We Do
                </h2>
            </div>
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
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
        </section>
    )
}

export default WhatWeDo;