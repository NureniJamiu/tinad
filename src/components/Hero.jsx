import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Hero = () => {
    const leftCardRef = useRef(null);
    const centerCardRef = useRef(null);
    const rightCardRef = useRef(null);
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const mainHeadingRef = useRef(null);

    useGSAP(() => {

        
        // Create a timeline with default ease
        const tl = gsap.timeline({ 
            defaults: { ease: "power1.out"},
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
        // Increase y value for longer slide-in distance
        gsap.set([titleRef.current, subtitleRef.current], {
            y: 20,  // Adjust this number to change starting position
            opacity: 0
        });

        // Set initial state for main heading
        gsap.set(mainHeadingRef.current, {
            opacity: 0,
            scale: 0.9,
            y: 20
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
        
        // Main heading with bounce effect
        .to(mainHeadingRef.current, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power1.inOut"
        })

        // Cards fade in immediately after heading
        .to([leftCardRef.current, centerCardRef.current, rightCardRef.current], {
            opacity: 1,
            duration: 0.4,
            ease: "power1.inOut",
            scrub: true
        })
        
        // Spread the cards with smoother, slower movement
        .to([leftCardRef.current, rightCardRef.current], {
            x: function(i) { return i === 0 ? -320 : 320; },
            y: 18,
            rotation: function(i) { return i === 0 ? -6 : 6; },
            duration: 0.6,
            ease: "power4.inOut" // Using power4 for smoother acceleration/deceleration
        }, "-=0.1");        // Delay after fade-in
                            // Increase number for longer pause
                            // Decrease for shorter pause
    }, {scope: containerRef});

  return (
    <section id="hero" >

        <div className="body">
            <div className="">
                <div className="text-center space-y-4">
                    <p ref={titleRef} className="font-bold text-3xl opacity-0">
                        TINAD: Amplifying African Voices on the Global Stage
                    </p>
                    <p ref={subtitleRef} className="max-w-3xl mx-auto text-lg opacity-0">
                        Creating meaningful business around African Talent. Exporting it to the Global Stage: A bridge between African Creativity and International opportunity
                    </p>

                    <h2 ref={mainHeadingRef} className="text-7xl font-serif leading-14">
                        More than Music. More than a Label.
                    </h2>
                </div>

                <div ref={containerRef} className="mt-5 relative h-96 flex items-center justify-center">
                    <div ref={leftCardRef} className="absolute w-72 h-80 bg-white/10 rounded-lg overflow-hidden">
                        <img src="/hero4.jpg" alt="Hero 1" className="w-full h-full object-cover object-center" />
                    </div>

                    <div ref={rightCardRef} className="absolute w-72 h-80 bg-white/10 rounded-lg overflow-hidden">
                        <img src="/hero3.png" alt="Hero 3" className="w-full h-full object-cover object-center" />
                    </div>

                    <div ref={centerCardRef} className="absolute w-72 h-80 bg-white/10 rounded-lg overflow-hidden">
                        <img src="/hero2.png" alt="Hero 2" className="w-full h-full object-cover object-center" />
                    </div>

                </div>

                {/* <div className="relative flex overflow-hidden whitespace-nowrap">
                    <h2 className="animate-marquee inline-block text-[#694D29] text-[190px] font-serif tracking-tighter pr-8">This is Not a Drill</h2>
                    <h2 className="animate-marquee inline-block text-[#694D29] text-[190px] font-serif tracking-tighter pr-8" aria-hidden="true">This is Not a Drill</h2>
                </div> */}
            </div>

        </div>
        
    </section>
  )
}

export default Hero