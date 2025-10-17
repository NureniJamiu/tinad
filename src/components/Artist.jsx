import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Artist = () => {
    const sectionRef = useRef(null);
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);

    useGSAP(() => {
        const hero = document.querySelector("#hero");
        const line1 = line1Ref.current;
        const line2 = line2Ref.current;
        const line3 = line3Ref.current;

        if (!hero) return;

        // Set initial states for text - start small and invisible
        gsap.set([line1, line2, line3], {
            scale: 0.3,
            opacity: 0
        });

        // Create timeline for synchronized animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "+=100%",
                scrub: 1,
                pin: true,
                pinSpacing: false,
                markers: false
            }
        });

        // Hero zooms and fades out
        tl.to(hero, {
            scale: 1.5,
            opacity: 0,
            ease: "none"
        }, 0);

        // Text scales up and fades in simultaneously
        tl.to([line1, line2, line3], {
            scale: 1,
            opacity: 1,
            ease: "none"
        }, 0);

    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            id="artist"
            className="fixed inset-0 w-full h-screen flex-center bg-black pointer-events-none z-5"
        >
            <div className="text-center space-y-4 md:space-y-6 px-4">
                <h2
                    ref={line1Ref}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif leading-14 xl:leading-20 tracking-tighter"
                >
                    Making Sound
                </h2>
                <h2
                    ref={line2Ref}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif leading-14 xl:leading-20 tracking-tighter"
                >
                    Making Waves
                </h2>
                <h2
                    ref={line3Ref}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif leading-14 xl:leading-20 tracking-tighter"
                >
                    Making <span className="text-[#694D29]">SoundWaves</span>
                </h2>
            </div>
        </section>
    );
};

export default Artist;
