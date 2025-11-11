import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import MarqueeText from "./MarqueeText";
import RotatingDisc from "./RotatingDisc";
import MusicWave from "./MusicWave";
import { motion } from "motion/react";
import { useSanityData } from "../hooks/useSanityData";
import { siteSettingsQuery } from "../sanity/queries";
import { urlFor } from "../sanity/imageBuilder";

const Hero = () => {
    const { data: settings } = useSanityData(siteSettingsQuery);
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);

    // Fallback images if Sanity data is not available
    const fallbackImages = [
        "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg",
        "https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg",
        "https://images.pexels.com/photos/243989/pexels-photo-243989.jpeg",
    ];

    // Use Sanity images if available, otherwise use fallback
    const images = settings?.heroImages?.length === 3
        ? settings.heroImages.map(img => urlFor(img).width(800).height(800).url())
        : fallbackImages;

    // GSAP animations for text
    useGSAP(() => {
        if (!titleRef.current || !descRef.current) return;

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Animate title with SplitText
        const splitTitle = new SplitText(titleRef.current, { type: "words,chars" });

        tl.from(splitTitle.chars, {
            opacity: 0,
            y: 50,
            rotateX: -90,
            stagger: 0.02,
            duration: 0.8,
        }, 0.3)
            .from(descRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
            }, 0.8);

        return () => {
            splitTitle.revert();
        };
    }, { scope: heroRef });

    return (
        <section ref={heroRef} className="h-[calc(100vh-6rem)] md:h-[calc(100vh-5rem)] overflow-hidden">
            <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-5rem)] py-0 relative">
                <div
                    className="relative mx-auto flex max-w-7xl flex-col items-center justify-center">
                    <div className="px-5 py-10">
                        <h1
                            ref={titleRef}
                            className="relative z-10 mt-10 mx-auto max-w-4xl text-center text-5xl font-bold md:text-4xl lg:text-7xl font-serif">
                            More than Music. More than a Label
                        </h1>
                        <p
                            ref={descRef}
                            className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-300">
                            Creating meaningful business around African Talent. Exporting it to the Global Stage: A bridge between African Creativity and International opportunity.
                        </p>
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