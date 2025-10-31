import { MaskContainer } from "./ui/svg-mask-effect";
import { TextHoverEffect } from "./ui/text-hover-effect";

const MissionVision = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
        <div
      className="flex w-full items-center justify-center overflow-hidden px-4">
        <MaskContainer
            revealText={
            <p
                className="mx-auto max-w-7xl text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white px-4">
                Our mission is to discover, develop, and deliver Africa's brightest talents to the world, building global business ecosystems around music, culture, and originality.
            </p>
            }
            className="rounded-md border text-black text-base sm:text-lg lg:text-xl">
            Our vision is to become{" "}
            <span className="text-blue-500">Africa's most powerful cultural export platform</span> turning raw talent into
            <span className="text-blue-500">world-class creative enterprises and redefining how the world hears and engages African music and stories.</span>.
        </MaskContainer>
        </div>
    </section>
  );
}

export default MissionVision;