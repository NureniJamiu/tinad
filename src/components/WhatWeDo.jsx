import { openRoles } from "@/constants";
import CareerDisplayCard from "./CareerDisplayCard";
import { motion } from "motion/react";

const WhatWeDo = () => {
    return (
        <section className="py-8 sm:py-12 lg:py-16">
            <motion.div
                className="mb-6 sm:mb-8 md:mb-12 px-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight">
                    What We Do
                </h2>
            </motion.div>
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
                {openRoles.map(({ name, description, image }, index) => (
                    <motion.div
                        key={name + index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 0.7,
                            delay: index * 0.1,
                            ease: "easeOut"
                        }}
                    >
                        <CareerDisplayCard
                            name={name}
                            description={description}
                            image={image}
                            reverse={index % 2 ? true : false}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default WhatWeDo;