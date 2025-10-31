
const CTA = () => {
    return (
        <section id="cta" className="bg-neutral-200 mt-10 sm:mt-20 lg:mt-32 mb-5">
            <div className="max-w-7xl mx-auto rounded h-full py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
                <div className="text-center space-y-3">
                    <h1 className="text-[#694D29] text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight px-4">Interested in Joining Our Team?</h1>
                    <p className="text-black max-w-4xl mx-auto text-base sm:text-lg leading-tight px-4">At TINAD, we strive to be the premier platform for African artists, providing them with the resources and support they need to succeed on the global stage.</p>
                </div>

                <div className="flex flex-col lg:flex-row items-stretch gap-5 mt-10 sm:mt-16 lg:mt-20">
                    <div className="flex-1 bg-[#1E1E1E] h-auto rounded-2xl sm:rounded-3xl p-4 sm:p-5">
                        <div className="bg-[#2F2F2F] rounded-2xl sm:rounded-3xl text-center p-4 sm:p-5 space-y-4 sm:space-y-5">
                            <p className="text-left text-sm sm:text-base">For Talents</p>
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Partner with <br /> us as a Talent</h3>
                            <button className="bg-white text-black w-full rounded-full py-2.5 sm:py-3 px-6 sm:px-10 font-semibold text-base sm:text-lg hover:bg-neutral-100 transition-colors">Become a Talent</button>
                        </div>

                        <ul className="my-4 sm:my-5 text-base sm:text-lg">
                            <li className="list-disc list-inside text-neutral-200 mb-2 sm:mb-3">Passionate about music</li>
                            <li className="list-disc list-inside text-neutral-200 mb-2 sm:mb-3">Promoting the culture</li>
                            <li className="list-disc list-inside text-neutral-200 mb-2 sm:mb-3">Making a difference</li>
                            <li className="list-disc list-inside text-neutral-200 mb-2 sm:mb-3">Joining a talent pool</li>
                        </ul>

                        <p className="text-neutral-200 text-base sm:text-lg leading-snug">Be a part of a dynamic and innovative talent brand that is shaping the future of African entertainment</p>
                    </div>

                    {/* right div  */}
                    <div className="flex-1 bg-[#ffffff] h-auto rounded-2xl sm:rounded-3xl p-4 sm:p-5 text-black">
                        <div className="bg-[#f2f2f2] rounded-2xl sm:rounded-3xl text-center p-4 sm:p-5 space-y-4 sm:space-y-5">
                            <p className="text-left text-sm sm:text-base">For Specs</p>
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Join us in  <br /> securing talents</h3>
                            <button className="bg-black text-white w-full rounded-full py-2.5 sm:py-3 px-6 sm:px-10 font-semibold text-base sm:text-lg hover:bg-neutral-800 transition-colors">See available positions</button>
                        </div>

                        <ul className="my-4 sm:my-5 text-base sm:text-lg">
                            <li className="list-disc list-inside text-neutral-900 mb-2 sm:mb-3">Creating promotional campaign</li>
                            <li className="list-disc list-inside text-neutral-900 mb-2 sm:mb-3">Content for talent acquisition</li>
                            <li className="list-disc list-inside text-neutral-900 mb-2 sm:mb-3">Talent Management</li>
                            <li className="list-disc list-inside text-neutral-900 mb-2 sm:mb-3">Exploring talent transformation</li>
                        </ul>

                        <p className="text-neutral-900 text-base sm:text-lg leading-snug">TINAD is the best place to explore how raw talents are tranfromed and shaped across global specs.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA;