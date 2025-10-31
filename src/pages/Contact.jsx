import Banner from "@/components/Banner";
import CTA from "@/components/CTA";

const Contact = () => {
    return (
        <section className="space-y-5">
            <Banner image="/contact-frame.png" text="Contact us" description={"Our team will be in touch with you soon."} className={"bg-black"}/>

            <div className="bg-neutral-200 mt-10 sm:mt-20 lg:mt-32 mb-5">
                <div className="max-w-7xl mx-auto rounded h-full py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
                    <div className="text-center space-y-3">
                        <h1 className="text-[#694D29] text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight">Got something to share?</h1>
                        <p className="text-black max-w-4xl mx-auto text-base sm:text-lg leading-tight px-4">Our team will be in touch as soon as possible</p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-5 px-4 sm:px-8 lg:px-24 mt-10 sm:mt-16 lg:mt-20">
                        <div className="flex-1 text-black space-y-6 w-full">
                            <div className="flex items-start gap-2 sm:gap-3">
                                <div className="size-8 sm:size-10 bg-[#694D29] rounded-full flex-shrink-0"/>
                                <div className="flex flex-col">
                                    <span className="font-semibold leading-tight text-sm sm:text-base">Send us an email</span>
                                    <span className="text-sm sm:text-base break-all">contact@tinadworld.com</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2 sm:gap-3">
                                <div className="size-8 sm:size-10 bg-[#694D29] rounded-full flex-shrink-0"/>
                                <div className="flex flex-col">
                                    <span className="font-semibold leading-tight text-sm sm:text-base">Opening hours</span>
                                    <span className="text-sm sm:text-base">9:00 am - 5:00 am</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2 sm:gap-3">
                                <div className="size-8 sm:size-10 bg-[#694D29] rounded-full flex-shrink-0"/>
                                <div className="flex flex-col">
                                    <span className="font-semibold leading-tight text-sm sm:text-base">Check us on Instagram</span>
                                    <span className="text-sm sm:text-base">@tinad.global  |  @tinad.africa</span>
                                    <span className="text-sm sm:text-base">@tinad.ng  |  @wearetinad</span>
                                </div>
                            </div>

                            <div className="mt-10 sm:mt-20 lg:mt-28 space-y-4 sm:space-y-6">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <img src="/london-icon.png" alt="London flag" className="w-6 h-6 sm:w-8 sm:h-8"/>
                                    <span className="text-sm sm:text-base">London, United Kingdom</span>
                                </div>

                                <div className="flex items-center gap-2 sm:gap-3">
                                    <img src="/nigeria-icon.png" alt="Nigeria flag" className="w-6 h-6 sm:w-8 sm:h-8"/>
                                    <span className="text-sm sm:text-base">Lagos, Nigeria</span>
                                </div>
                            </div>
                        </div>

                        <form className="flex-1 bg-[#1E1E1E] h-auto rounded-xl p-4 sm:p-6 lg:p-5 w-full space-y-4">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm sm:text-base">Full name</label>
                                <input type="text" name="name" id="name" className="bg-neutral-200 text-black py-2 sm:py-3 rounded border-1 border-white px-2 text-sm sm:text-base"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm sm:text-base">Email</label>
                                <input type="email" name="email" id="email" className="bg-neutral-200 text-black py-2 sm:py-3 rounded border-1 border-white px-2 text-sm sm:text-base"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm sm:text-base">Message</label>
                                <textarea name="message" id="message" rows={6} className="bg-neutral-200 text-black py-2 sm:py-3 rounded border-1 border-white px-2 text-sm sm:text-base resize-none"></textarea>
                            </div>
            

                            <button type="submit" className="bg-[#694D29] text-neutral-300 w-full rounded-lg py-2 sm:py-3 px-6 sm:px-10 font-semibold text-base sm:text-lg mt-3 sm:mt-5 hover:bg-[#7d5a31] transition-colors">Become a Talent</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
