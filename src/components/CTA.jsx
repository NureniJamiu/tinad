import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const CTA = () => {
    const isMobile = useMediaQuery({ maxWidth: 1023 });

    return (
        <section id="cta" className="bg-gradient-to-b from-black via-neutral-900 to-black mt-8 sm:mt-12 lg:mt-16 mb-5 py-16 sm:py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <motion.div 
                    className="text-center space-y-4 mb-12 sm:mb-16 lg:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h1 className="text-yellow text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight px-4">
                        Ready to Join the Movement?
                    </h1>
                    <p className="text-white/80 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-4">
                        At TINAD, we're building the premier platform for African artists, providing the resources and support needed to succeed globally.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {/* For Talents Card */}
                    <motion.div 
                        className="group relative bg-gradient-to-br from-yellow/10 to-yellow/5 backdrop-blur-sm border border-yellow/20 rounded-3xl p-6 sm:p-8 hover:border-yellow/40 transition-all duration-300"
                        initial={
                            isMobile
                                ? { opacity: 0, y: 50 }
                                : { opacity: 0, x: -100 }
                        }
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                            duration: 0.8, 
                            delay: 0.2,
                            ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow/5 rounded-full blur-3xl"></div>
                        
                        <div className="relative space-y-6">
                            <div className="inline-block px-4 py-1.5 bg-yellow/20 rounded-full">
                                <span className="text-yellow text-sm font-semibold">For Talents</span>
                            </div>
                            
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                Partner with us as a Talent
                            </h3>
                            
                            <ul className="space-y-3 text-white/80">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-yellow flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                    </svg>
                                    <span>Passionate about music and culture</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-yellow flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                    </svg>
                                    <span>Making a global difference</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-yellow flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                    </svg>
                                    <span>Join an elite talent pool</span>
                                </li>
                            </ul>
                            
                            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                                Be part of a dynamic brand shaping the future of African entertainment on the world stage.
                            </p>
                            
                            <Link to="/contact">
                                <button className="w-full bg-yellow hover:bg-yellow/90 text-black font-semibold py-3.5 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow/20">
                                    Become a Talent
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* For Team Members Card */}
                    <motion.div 
                        className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-6 sm:p-8 hover:border-white/40 transition-all duration-300"
                        initial={
                            isMobile
                                ? { opacity: 0, y: 50 }
                                : { opacity: 0, x: 100 }
                        }
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                            duration: 0.8, 
                            delay: 0.3,
                            ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
                        
                        <div className="relative space-y-6">
                            <div className="inline-block px-4 py-1.5 bg-white/20 rounded-full">
                                <span className="text-white text-sm font-semibold">For Team Members</span>
                            </div>
                            
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                Join us in discovering talents
                            </h3>
                            
                            <ul className="space-y-3 text-white/80">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                    </svg>
                                    <span>Create promotional campaigns</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                    </svg>
                                    <span>Drive talent acquisition & management</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                    </svg>
                                    <span>Transform raw talent globally</span>
                                </li>
                            </ul>
                            
                            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                                TINAD is where raw talents are discovered, transformed, and shaped for global success.
                            </p>
                            
                            <Link to="/careers">
                                <button className="w-full bg-white hover:bg-white/90 text-black font-semibold py-3.5 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20">
                                    See Open Positions
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default CTA;