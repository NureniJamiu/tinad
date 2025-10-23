import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import MarqueeText from "./MarqueeText";
import RotatingDisc from "./RotatingDisc";
import MusicWave from "./MusicWave";
import { motion } from "motion/react";

const Hero = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const headingLine1Ref = useRef(null);
    const headingLine2Ref = useRef(null);

    useGSAP(() => {
        // Create a timeline with default ease
        const tl = gsap.timeline({
            defaults: { ease: "power1.out" },
            onComplete: () => tl.kill() // Cleanup timeline when done
        });

        // Set initial state for text elements
        gsap.set([titleRef.current, subtitleRef.current], {
            y: 20,
            opacity: 0
        });

        // Split text for heading lines
        const splitLine1 = new SplitText(headingLine1Ref.current, { type: "chars" });
        const splitLine2 = new SplitText(headingLine2Ref.current, { type: "chars" });

        // Set initial state for heading characters
        gsap.set([splitLine1.chars, splitLine2.chars], {
            opacity: 0,
            y: 30
        });

        // Title Animation
        tl.to(titleRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.3
        })
            // Subtitle Animation
            .to(subtitleRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.3
            }, "-=0.1")
            // First line of heading splits in
            .to(splitLine1.chars, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.02,
                ease: "power2.out"
            }, "+=0.1")
            // Second line of heading splits in
            .to(splitLine2.chars, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.02,
                ease: "power2.out"
            }, "-=0.2")
    }, { scope: containerRef });

    const images = [
        "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg",
        "https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg",
        "https://images.pexels.com/photos/243989/pexels-photo-243989.jpeg",
    ];

    return (
        <section id="hero" >
            <div ref={containerRef} className="h-[calc(100vh-5rem)] py-0">
                {/* Top Content */}
                <div className="flex flex-col text-center space-y-1 xl:space-y-3 md:space-y-3 px-4 ">
                    <p ref={titleRef} className="font-bold text-lg sm:text-xl md:text-xl xl:text-2xl opacity-0">
                        TINAD: Amplifying African Voices on the Global Stage
                    </p>
                    <p ref={subtitleRef} className="max-w-2xl mx-auto text-sm sm:text-base md:text-sm xl:text-base opacity-0 px-2">
                       Exporting it to the Global Stage: A bridge between African Creativity and International opportunity
                    </p>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl xl:leading-28 font-serif leading-12 tracking-tighter">
                        <span ref={headingLine1Ref}>More than Music. </span>
                        <span ref={headingLine2Ref}>More than a Label.</span>
                    </h2>
                </div>
                <div className="flex justify-center items-center mt-6">
                    {images.map((image, idx) => (
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
                            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                        >
                            <img
                                src={image}
                                alt="bali images"
                                width="500"
                                height="500"
                                className="rounded-lg h-20 w-20 md:h-64 md:w-64 object-cover shrink-0"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Marquee Text - overlapping cards at bottom */}
                <div className="absolute bottom-0 md:bottom-20 left-0 w-full z-20">
                    <MarqueeText />
                </div>

                {/* Disc - centered at bottom */}
                <div className="absolute bottom-0 md:bottom-20 left-1/2 -translate-x-1/2 z-30">
                    <RotatingDisc imageSrc="/music-disc.png" />
                </div>

                {/* Wave - centered on disc at bottom */}
                <div className="absolute bg-black p-3 rounded-full bottom-0 md:bottom-20 left-1/2 -translate-x-1/2 z-40">
                    <MusicWave />
                </div>
            </div>
        </section>
    )
}

export default Hero