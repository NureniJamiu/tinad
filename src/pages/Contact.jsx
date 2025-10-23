const Contact = () => {
    return (
        <div className="min-h-screen bg-black pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-6xl md:text-8xl font-serif text-center mb-8">
                    Get In <span className="text-[#694D29]">Touch</span>
                </h1>
                <p className="text-xl text-center text-white-100 mb-16">
                    Let's create something amazing together
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h3 className="text-2xl font-serif text-[#694D29] mb-4">General Inquiries</h3>
                        <p className="text-white-100 mb-2">info@tinad.com</p>
                        <p className="text-white-100">+1 (555) 123-4567</p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h3 className="text-2xl font-serif text-[#694D29] mb-4">Demo Submissions</h3>
                        <p className="text-white-100 mb-2">demos@tinad.com</p>
                        <p className="text-white-100 text-sm">Please include links to your work</p>
                    </div>
                </div>

                <form className="bg-white/5 border border-white/10 rounded-2xl p-8">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-white-100 mb-2">Name</label>
                            <input 
                                type="text"
                                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#694D29] focus:outline-none transition-colors"
                                placeholder="Your name"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-white-100 mb-2">Email</label>
                            <input 
                                type="email"
                                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#694D29] focus:outline-none transition-colors"
                                placeholder="your@email.com"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-white-100 mb-2">Message</label>
                            <textarea 
                                rows="6"
                                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#694D29] focus:outline-none transition-colors resize-none"
                                placeholder="Tell us about your project..."
                            />
                        </div>
                        
                        <button 
                            type="submit"
                            className="w-full bg-[#694D29] text-white px-6 py-4 rounded-lg hover:bg-[#7d5a31] transition-colors text-lg font-medium"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
