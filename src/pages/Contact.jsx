import { useState } from "react";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";
import Banner from "@/components/Banner";
import CTA from "@/components/CTA";

const Contact = () => {
    const isMobile = useMediaQuery({ maxWidth: 1023 });
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

            <div className="bg-gradient-to-b from-neutral-100 via-neutral-200 to-neutral-100 mt-10 sm:mt-20 lg:mt-32 mb-5">
                <div className="max-w-7xl mx-auto rounded h-full py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
                    <motion.div 
                        className="text-center space-y-3"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 className="text-[#694D29] text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight">Got something to share?</h1>
                        <p className="text-black/80 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed px-4">Our team will be in touch as soon as possible</p>
                    </motion.div>

                    <div className="flex flex-col-reverse lg:flex-row items-start justify-center gap-8 lg:gap-8 px-4 sm:px-8 lg:px-24 mt-10 sm:mt-16 lg:mt-20">
                        <motion.div 
                            className="flex-1 text-black space-y-6 w-full"
                            initial={
                                isMobile
                                    ? { opacity: 0, y: 50 }
                                    : { opacity: 0, x: -50 }
                            }
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ 
                                duration: 0.8, 
                                delay: 0.2,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                        >
                            <motion.div 
                                className="flex items-start gap-3 sm:gap-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 group"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="flex items-center justify-center text-neutral-300 size-10 sm:size-12 bg-[#694D29] rounded-full flex-shrink-0 group-hover:bg-[#7d5a31] transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold leading-tight text-base sm:text-lg text-[#694D29]">Send us an email</span>
                                    <span className="text-sm sm:text-base break-all text-black/80">mail@tinadworld.com</span>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="flex items-start gap-3 sm:gap-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 group"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="flex items-center justify-center text-neutral-300 size-10 sm:size-12 bg-[#694D29] rounded-full flex-shrink-0 group-hover:bg-[#7d5a31] transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold leading-tight text-base sm:text-lg text-[#694D29]">Opening hours</span>
                                    <span className="text-sm sm:text-base text-black/80">9:00 am - 5:00 pm</span>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="flex items-start gap-3 sm:gap-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 group"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="flex items-center justify-center text-neutral-300 size-10 sm:size-12 bg-[#694D29] rounded-full flex-shrink-0 group-hover:bg-[#7d5a31] transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold leading-tight text-base sm:text-lg text-[#694D29]">Check us on Instagram</span>
                                    <span className="text-sm sm:text-base text-black/80">@wearetinad</span>
                                </div>
                            </motion.div>

                            <div className="mt-10 sm:mt-16 lg:mt-20 space-y-4 sm:space-y-5 pt-6 border-t border-black/10">
                                <motion.div 
                                    className="flex items-center gap-3 sm:gap-4 p-3 rounded-xl hover:bg-white/50 transition-all duration-300"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img src="/london-icon.png" alt="London flag" className="w-8 h-8 sm:w-10 sm:h-10" />
                                    <span className="text-sm sm:text-base font-medium">London, United Kingdom</span>
                                </motion.div>

                                <motion.div 
                                    className="flex items-center gap-3 sm:gap-4 p-3 rounded-xl hover:bg-white/50 transition-all duration-300"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img src="/nigeria-icon.png" alt="Nigeria flag" className="w-8 h-8 sm:w-10 sm:h-10" />
                                    <span className="text-sm sm:text-base font-medium">Lagos, Nigeria</span>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.form 
                            onSubmit={handleSubmit} 
                            className="flex-1 bg-gradient-to-br from-[#1E1E1E] to-[#2a2a2a] h-auto rounded-2xl p-6 sm:p-8 lg:p-8 w-full space-y-5 shadow-2xl border border-white/5"
                            initial={
                                isMobile
                                    ? { opacity: 0, y: 50 }
                                    : { opacity: 0, x: 50 }
                            }
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ 
                                duration: 0.8, 
                                delay: 0.3,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                        >
                            <div className="flex flex-col gap-2.5">
                                <label htmlFor="name" className="text-sm sm:text-base font-medium text-white/90">Full name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="bg-neutral-200 text-black py-3 sm:py-3.5 rounded-lg border-2 border-transparent focus:border-[#694D29] px-4 text-sm sm:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#694D29]/20"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <label htmlFor="email" className="text-sm sm:text-base font-medium text-white/90">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="bg-neutral-200 text-black py-3 sm:py-3.5 rounded-lg border-2 border-transparent focus:border-[#694D29] px-4 text-sm sm:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#694D29]/20"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <label htmlFor="message" className="text-sm sm:text-base font-medium text-white/90">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="bg-neutral-200 text-black py-3 sm:py-3.5 rounded-lg border-2 border-transparent focus:border-[#694D29] px-4 text-sm sm:text-base resize-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#694D29]/20"
                                    placeholder="Tell us what's on your mind..."
                                ></textarea>
                            </div>

                            {submitStatus === "success" && (
                                <motion.div 
                                    className="bg-green-600/90 text-white px-4 py-3 rounded-lg text-sm sm:text-base flex items-center gap-2"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                    </svg>
                                    Thank you! Your message has been sent successfully.
                                </motion.div>
                            )}

                            {submitStatus === "error" && (
                                <motion.div 
                                    className="bg-red-600/90 text-white px-4 py-3 rounded-lg text-sm sm:text-base flex items-center gap-2"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                                    </svg>
                                    Something went wrong. Please try again.
                                </motion.div>
                            )}

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-[#694D29] text-neutral-300 w-full rounded-full py-3.5 sm:py-4 px-6 sm:px-10 font-bold text-base sm:text-lg mt-3 sm:mt-5 hover:bg-[#7d5a31] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 hover:shadow-lg hover:shadow-[#694D29]/20"
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : "Send Message"}
                            </motion.button>

                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
