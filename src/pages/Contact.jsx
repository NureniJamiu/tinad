import { useState } from "react";
import Banner from "@/components/Banner";
import CTA from "@/components/CTA";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
            formDataToSend.append("name", formData.name);
            formDataToSend.append("email", formData.email);
            formDataToSend.append("message", formData.message);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="space-y-5">
            <Banner image="/contact-frame.png" text="Contact us" description={"Our team will be in touch with you soon."} className={"bg-black"} />

            <div className="bg-neutral-200 mt-10 sm:mt-20 lg:mt-32 mb-5">
                <div className="max-w-7xl mx-auto rounded h-full py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
                    <div className="text-center space-y-3">
                        <h1 className="text-[#694D29] text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight">Got something to share?</h1>
                        <p className="text-black max-w-4xl mx-auto text-base sm:text-lg leading-tight px-4">Our team will be in touch as soon as possible</p>
                    </div>

                    <div className="flex flex-col-reverse lg:flex-row items-start justify-center gap-8 lg:gap-5 px-4 sm:px-8 lg:px-24 mt-10 sm:mt-16 lg:mt-20">
                        <div className="flex-1 text-black space-y-6 w-full">
                            <div className="flex items-start gap-2 sm:gap-3">
                                <div className="size-8 sm:size-10 bg-[#694D29] rounded-full flex-shrink-0" />
                                <div className="flex flex-col">
                                    <span className="font-semibold leading-tight text-sm sm:text-base">Send us an email</span>
                                    <span className="text-sm sm:text-base break-all">contact@tinadworld.com</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2 sm:gap-3">
                                <div className="size-8 sm:size-10 bg-[#694D29] rounded-full flex-shrink-0" />
                                <div className="flex flex-col">
                                    <span className="font-semibold leading-tight text-sm sm:text-base">Opening hours</span>
                                    <span className="text-sm sm:text-base">9:00 am - 5:00 am</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2 sm:gap-3">
                                <div className="size-8 sm:size-10 bg-[#694D29] rounded-full flex-shrink-0" />
                                <div className="flex flex-col">
                                    <span className="font-semibold leading-tight text-sm sm:text-base">Check us on Instagram</span>
                                    <span className="text-sm sm:text-base">@tinad.global  |  @tinad.africa</span>
                                    <span className="text-sm sm:text-base">@tinad.ng  |  @wearetinad</span>
                                </div>
                            </div>

                            <div className="mt-10 sm:mt-20 lg:mt-28 space-y-4 sm:space-y-6">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <img src="/london-icon.png" alt="London flag" className="w-6 h-6 sm:w-8 sm:h-8" />
                                    <span className="text-sm sm:text-base">London, United Kingdom</span>
                                </div>

                                <div className="flex items-center gap-2 sm:gap-3">
                                    <img src="/nigeria-icon.png" alt="Nigeria flag" className="w-6 h-6 sm:w-8 sm:h-8" />
                                    <span className="text-sm sm:text-base">Lagos, Nigeria</span>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="flex-1 bg-[#1E1E1E] h-auto rounded-xl p-4 sm:p-6 lg:p-5 w-full space-y-4">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm sm:text-base">Full name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="bg-neutral-200 text-black py-2 sm:py-3 rounded border-1 border-white px-2 text-sm sm:text-base"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm sm:text-base">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="bg-neutral-200 text-black py-2 sm:py-3 rounded border-1 border-white px-2 text-sm sm:text-base"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm sm:text-base">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="bg-neutral-200 text-black py-2 sm:py-3 rounded border-1 border-white px-2 text-sm sm:text-base resize-none"
                                ></textarea>
                            </div>

                            {submitStatus === "success" && (
                                <div className="bg-green-600 text-white px-4 py-2 rounded text-sm sm:text-base">
                                    Thank you! Your message has been sent successfully.
                                </div>
                            )}

                            {submitStatus === "error" && (
                                <div className="bg-red-600 text-white px-4 py-2 rounded text-sm sm:text-base">
                                    Something went wrong. Please try again.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-[#694D29] text-neutral-300 w-full rounded-lg py-2 sm:py-3 px-6 sm:px-10 font-semibold text-base sm:text-lg mt-3 sm:mt-5 hover:bg-[#7d5a31] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
