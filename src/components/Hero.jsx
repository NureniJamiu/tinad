import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import MarqueeText from "./MarqueeText";
import RotatingDisc from "./RotatingDisc";
import MusicWave from "./MusicWave";

const Hero = () => {
    const leftCardRef = useRef(null);
    const centerCardRef = useRef(null);
    const rightCardRef = useRef(null);
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

        // INITIAL STATES SECTION
        // Set initial positions for cards
        gsap.set([leftCardRef.current, centerCardRef.current, rightCardRef.current], {
            x: 0,
            opacity: 0,
            rotation: 0,
            left: "50%",
            xPercent: -50  // Centers the cards
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

            // Cards fade in after subtitle
            .to([leftCardRef.current, centerCardRef.current, rightCardRef.current], {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            }, "+=0.1")

            // Spread the cards smoothly - responsive distance
            .to([leftCardRef.current, rightCardRef.current], {
                x: function (i) {
                    const isMobile = window.innerWidth < 640;
                    const isTablet = window.innerWidth < 1024;
                    const distance = isMobile ? 200 : isTablet ? 280 : 320;
                    return i === 0 ? -distance : distance;
                },
                y: 18,
                rotation: function (i) { return i === 0 ? -6 : 6; },
                duration: 0.7,
                ease: "power2.out"
            }, "-=0.2")

            // First line of heading splits in during card spread
            .to(splitLine1.chars, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.02,
                ease: "power2.out"
            }, "-=0.5")

            // Second line of heading splits in
            .to(splitLine2.chars, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.02,
                ease: "power2.out"
            }, "-=0.2")
    }, { scope: containerRef });

    return (
        <section id="hero" >

            <div className="body">
                {/* Top Content */}
                <div className="text-center space-y-1 md:space-y-3 pt-4 px-4">
                    <p ref={titleRef} className="font-bold text-lg sm:text-xl md:text-xl opacity-0">
                        TINAD: Amplifying African Voices on the Global Stage
                    </p>
                    <p ref={subtitleRef} className="max-w-2xl mx-auto text-sm sm:text-base md:text-sm opacity-0 px-2">
                        Creating meaningful business around African Talent. Exporting it to the Global Stage: A bridge between African Creativity and International opportunity
                    </p>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif leading-12 tracking-tighter">
                        <span ref={headingLine1Ref}>More than Music. </span>
                        <span ref={headingLine2Ref}>More than a Label.</span>
                    </h2>
                </div>

                {/* Cards Container - positioned in center with better spacing */}
                {/* <div ref={containerRef} className="absolute top-[35%] sm:top-[38%] md:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div ref={leftCardRef} className="absolute w-44 h-32 sm:w-52 sm:h-60 md:w-64 md:h-72 lg:w-72 lg:h-80 bg-white/10 rounded-lg overflow-hidden">
                        <img src="/hero4.jpg" alt="Hero 1" className="w-full h-full object-cover object-center" />
                    </div>

                    <div ref={rightCardRef} className="absolute w-44 h-32 sm:w-52 sm:h-60 md:w-64 md:h-72 lg:w-72 lg:h-80 bg-white/10 rounded-lg overflow-hidden">
                        <img src="/hero3.png" alt="Hero 3" className="w-full h-full object-cover object-center" />
                    </div>

                    <div ref={centerCardRef} className="absolute w-44 h-32 sm:w-52 sm:h-60 md:w-64 md:h-72 lg:w-72 lg:h-80 bg-white/10 rounded-lg overflow-hidden">
                        <img src="/hero2.png" alt="Hero 2" className="w-full h-full object-cover object-center" />
                    </div>
                </div> */}

                {/* Marquee Text - overlapping cards at bottom */}
                <div className="absolute bottom-0 md:bottom-0 left-0 w-full z-20">
                    <MarqueeText />
                </div>

                {/* Disc - centered at bottom */}
                <div className="absolute bottom-0 md:bottom-0 left-1/2 -translate-x-1/2 z-30">
                    <RotatingDisc imageSrc="/music-disc.png" />
                </div>

                {/* Wave - centered on disc at bottom */}
                <div className="absolute bg-black p-3 rounded-full bottom-0 md:bottom-0 left-1/2 -translate-x-1/2 z-40">
                    <MusicWave />
                </div>
            </div>

        </section>
    )
}

export default Hero