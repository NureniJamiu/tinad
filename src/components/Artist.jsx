import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { artists } from "../constants";
import ArtistCard from "./ArtistCard";

const Artist = () => {
    const sectionRef = useRef(null);
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);
    const cardsContainerRef = useRef(null);
    const cardRefs = useRef([]);

    useGSAP(() => {
        const hero = document.querySelector("#hero");
        const line1 = line1Ref.current;
        const line2 = line2Ref.current;
        const line3 = line3Ref.current;
        const cards = cardRefs.current;

        // Comprehensive null checks for all DOM elements
        if (!hero || !line1 || !line2 || !line3 || !cards.length) {
            return;
        }

        // Create timeline for synchronized animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "+=300%",
                scrub: 1,
                pin: true,
                pinSpacing: true,
                markers: false
            }
        });

        // Set initial states for text - start small and invisible
        tl.set([line1, line2, line3], {
            scale: 0.3,
            opacity: 0
        }, 0);

        // Set initial state for cards - off-screen to the right
        tl.set(cards, {
            x: "250vw",
            opacity: 1
        }, 0);

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

        // Text slides left and fades out
        tl.to([line1, line2, line3], {
            x: "-100vw",
            opacity: 0,
            ease: "none"
        }, "+=0.2");

        // Cards slide in from right with stagger, synchronized with text slide-out
        tl.to(cards, {
            x: 0,
            stagger: 0.005,
            ease: "none"
        }, "<"); // Start at same time as text slide-out

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
                    {/* Making Sound */}
                    Meet Our Talented
                </h2>
                <h2
                    ref={line2Ref}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif leading-14 xl:leading-20 tracking-tighter"
                >
                    {/* Making Waves */}
                    Artists Shaping The
                </h2>
                <h2
                    ref={line3Ref}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif leading-14 xl:leading-20 tracking-tighter"
                >
                    {/* Making <span className="text-[#694D29]">SoundWaves</span> */}
                     Future Of <span className="text-[#694D29]">Hit Music</span>
                </h2>
            </div>

            {/* Artist Cards Container */}
            <div
                ref={cardsContainerRef}
                className="absolute top-1/2 right-0 -translate-y-1/2 flex gap-4 px-10 md:px-10"
            >
                {artists.map((artist, index) => (
                    <ArtistCard
                        key={artist.id}
                        ref={(el) => (cardRefs.current[index] = el)}
                        name={artist.name}
                        genre={artist.genre}
                        image={artist.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default Artist;
