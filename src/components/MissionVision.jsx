import { motion } from "motion/react";

const MissionVision = () => {
  return (
    <section className="relative pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6">
            We Build
            <span className="block text-[#694D29] mt-2">Legends</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From Lagos to London, we turn raw talent into global movements.
            This is where African sound meets world stage.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* What We Stand For */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-yellow-500/50 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#694D29]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">The Mission</h3>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              To discover, develop and deliver
              Africa’s brightest talents to the
              world, building global business
              ecosystems around music, culture
              and originality
            </p>
          </motion.div>

          {/* Where We're Going */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-yellow-500/50 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#694D29]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">The Vision</h3>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
             To become Africa’s most powerful
              cultural export platform, turning raw
              talent into world-class creative
              enterprises and redefining how the world
              hears and engages African music and
              stories.
            </p>
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 sm:mt-20"
        >
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white/80 italic">
            "Not just a label. A legacy."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default MissionVision;