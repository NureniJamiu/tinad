import Banner from "@/components/Banner";
import CTA from "@/components/CTA";

const Contact = () => {
    return (
        <section className="space-y-5">
            <Banner image="/contact-frame.png" text="Contact us" description={"Our team will be in touch with you soon."} className={"bg-black"}/>

            <div className="bg-neutral-200 mt-32 mb-5">
                <div className="max-w-7xl mx-auto rounded h-full py-20 px-10">
                    <div className="text-center space-y-3">
                        <h1 className="text-[#694D29] text-6xl font-semibold tracking-tight">Got something to share?</h1>
                        <p className="text-black max-w-4xl mx-auto text-lg leading-tight">Our team will be in touch as soon as possible</p>
                    </div>

                    <div className="flex items-center justify-center gap-5 px-24 mt-20">
                        <div className="flex-1 text-black space-y-6">
                            <div className="flex items-start gap-2">
                                <div className="size-10 bg-[#694D29] rounded-full"/>
                                <div className="flex flex-col">
                                    <span className="font-semibold leading-tight">Send us an email</span>
                                    <span>contact@tinadworld.com</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="size-10 bg-[#694D29] rounded-full"/>
                                <div className="flex flex-col">
                                    <span className="font-semibold leading-tight">Opening hours</span>
                                    <span>9:00 am - 5:00 am</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="size-10 bg-[#694D29] rounded-full"/>
                                <div className="flex flex-col">
                                    <span className="font-semibold leading-tight">Check us on Instagram</span>
                                    <span>@tinad.global  |  @tinad.africa</span>
                                    <span>@tinad.ng  |  @wearetinad</span>
                                </div>
                            </div>

                            <div className="mt-28 space-y-6">
                                <div className="flex items-center gap-2">
                                    <img src="/london-icon.png" alt="Nigeria flag" />
                                    <span>London, United Kingdom</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <img src="/nigeria-icon.png" alt="Nigeria flag" />
                                    <span>Lagos, Nigeria</span>
                                </div>
                            </div>
                        </div>

                        <form className="flex-1 bg-[#1E1E1E] h-auto rounded-xl p-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name">Full name</label>
                                <input type="text" name="name" id="name" className="bg-neutral-200 text-black py-3 rounded border-1 border-white px-2"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" className="bg-neutral-200 text-black py-3 rounded border-1 border-white px-2"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" rows={8} className="bg-neutral-200 text-black py-3 rounded border-1 border-white px-2"></textarea>
                            </div>
            

                            <button type="submit" className="bg-[#694D29] text-neutral-300 w-full rounded-lg py-2 px-10 font-semibold text-lg mt-5">Become a Talent</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
