const Careers = () => {
    return (
        <div className="min-h-screen bg-black pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-6xl md:text-8xl font-serif text-center mb-8">
                    Join <span className="text-[#694D29]">Tinad</span>
                </h1>
                <p className="text-xl text-center text-white-100 mb-16">
                    Be part of shaping the future of music
                </p>
                
                <div className="space-y-8">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#694D29] transition-colors">
                        <h2 className="text-3xl font-serif text-[#694D29] mb-4">A&R Manager</h2>
                        <p className="text-white-100 mb-4">
                            We're looking for a passionate A&R Manager to discover and develop new talent.
                        </p>
                        <ul className="list-disc list-inside text-white-100 space-y-2 mb-6">
                            <li>Scout and sign emerging artists</li>
                            <li>Develop artist careers and creative direction</li>
                            <li>Build relationships with producers and songwriters</li>
                        </ul>
                        <button className="bg-[#694D29] text-white px-6 py-3 rounded-lg hover:bg-[#7d5a31] transition-colors">
                            Apply Now
                        </button>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#694D29] transition-colors">
                        <h2 className="text-3xl font-serif text-[#694D29] mb-4">Marketing Coordinator</h2>
                        <p className="text-white-100 mb-4">
                            Help us amplify our artists' voices and reach new audiences worldwide.
                        </p>
                        <ul className="list-disc list-inside text-white-100 space-y-2 mb-6">
                            <li>Develop and execute marketing campaigns</li>
                            <li>Manage social media presence</li>
                            <li>Coordinate with streaming platforms</li>
                        </ul>
                        <button className="bg-[#694D29] text-white px-6 py-3 rounded-lg hover:bg-[#7d5a31] transition-colors">
                            Apply Now
                        </button>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#694D29] transition-colors">
                        <h2 className="text-3xl font-serif text-[#694D29] mb-4">Audio Engineer</h2>
                        <p className="text-white-100 mb-4">
                            Join our production team and help create chart-topping hits.
                        </p>
                        <ul className="list-disc list-inside text-white-100 space-y-2 mb-6">
                            <li>Mix and master tracks to perfection</li>
                            <li>Collaborate with artists and producers</li>
                            <li>Maintain studio equipment and workflow</li>
                        </ul>
                        <button className="bg-[#694D29] text-white px-6 py-3 rounded-lg hover:bg-[#7d5a31] transition-colors">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
