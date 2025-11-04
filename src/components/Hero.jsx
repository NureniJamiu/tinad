import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import MarqueeText from "./MarqueeText";
import RotatingDisc from "./RotatingDisc";
import MusicWave from "./MusicWave";
import { motion } from "motion/react";

const Hero = () => {

    const images = [
        "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg",
        "https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg",
        "https://images.pexels.com/photos/243989/pexels-photo-243989.jpeg",
    ];

    return (
        <section className="h-[calc(100vh-6rem)] md:h-[calc(100vh-5rem)] overflow-hidden">
            <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-5rem)] py-0 relative">
                <div
                    className="relative mx-auto flex max-w-7xl flex-col items-center justify-center">
                    <div className="px-5 py-10">
                        <h1
                            className="relative z-10 mt-10 mx-auto max-w-4xl text-center text-5xl font-bold md:text-4xl lg:text-7xl font-serif">
                            {"More than Music. More than a Label"
                                .split(" ")
                                .map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                            ease: "easeInOut",
                                        }}
                                        className="mr-2 inline-block">
                                        {word}
                                    </motion.span>
                                ))}
                        </h1>
                        <motion.p
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.3,
                                delay: 0.8,
                            }}
                            className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-300 ">
                            Creating meaningful business around African Talent. Exporting it to the Global Stage: A bridge between African Creativity and International opportunity.
                        </motion.p>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 10,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.3,
                                delay: 1.2,
                            }}
                            className="relative z-10 mt-5">
                            <div className="flex justify-center items-center mt-4 sm:mt-6 md:mt-8 px-2">
                                {images.slice(0, 2).map((image, idx) => (
                                    <motion.div
                                        key={"images" + idx}
                                        style={{
                                            rotate: Math.random() * 20 - 10,
                                        }}
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: 0,
                                            zIndex: 100,
                                        }}
                                        whileTap={{
                                            scale: 1.1,
                                            rotate: 0,
                                            zIndex: 100,
                                        }}
                                        className="rounded-lg sm:rounded-xl -mr-10 -ml-10 sm:-ml-12 sm:-mr-12 mt-2 sm:mt-4 md:-mr-4 md:ml-0 p-0.5 sm:p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden md:hidden"
                                    >
                                        <img
                                            src={image}
                                            alt="Artist image"
                                            width="500"
                                            height="500"
                                            className="rounded-md sm:rounded-lg h-52 w-52 sm:h-28 sm:w-28 object-cover shrink-0"
                                        />
                                    </motion.div>
                                ))}
                                {images.map((image, idx) => (
                                    <motion.div
                                        key={"images-full" + idx}
                                        style={{
                                            rotate: Math.random() * 20 - 10,
                                        }}
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: 0,
                                            zIndex: 100,
                                        }}
                                        whileTap={{
                                            scale: 1.1,
                                            rotate: 0,
                                            zIndex: 100,
                                        }}
                                        className="hidden md:block rounded-lg sm:rounded-xl -mr-2 sm:-mr-4 mt-2 sm:mt-4 p-0.5 sm:p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                                    >
                                        <img
                                            src={image}
                                            alt="Artist image"
                                            width="500"
                                            height="500"
                                            className="rounded-md sm:rounded-lg md:h-48 md:w-48 lg:h-80 lg:w-80 xl:h-[450px] xl:w-[450px] object-cover shrink-0"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Marquee Text - overlapping cards at bottom */}
                <div className="absolute bottom-0 sm:bottom-10 md:-bottom-2 left-0 w-full z-20">
                    <MarqueeText />
                </div>

                {/* Disc - centered at bottom */}
                <div className="absolute bottom-8 sm:bottom-10 md:-bottom-2 left-1/2 -translate-x-1/2 z-30">
                    <RotatingDisc imageSrc="/music-disc.png" />
                </div>

                {/* Wave - centered on disc at bottom */}
                <div className="absolute bg-black p-2 sm:p-3 rounded-full bottom-10 sm:bottom-10 md:-bottom-2 left-1/2 -translate-x-1/2 z-40">
                    <MusicWave />
                </div>
            </div>
        </section>
    )
}

export default Hero