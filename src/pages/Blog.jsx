const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: "The Rise of Afrobeats: A Global Phenomenon",
            date: "October 15, 2025",
            excerpt: "Exploring how Afrobeats has taken over the global music scene and what's next for the genre.",
            image: "/hero1.png"
        },
        {
            id: 2,
            title: "Behind the Scenes: Creating a Hit Record",
            date: "October 10, 2025",
            excerpt: "An inside look at the creative process behind some of our biggest releases.",
            image: "/hero2.png"
        },
        {
            id: 3,
            title: "Artist Spotlight: The New Wave",
            date: "October 5, 2025",
            excerpt: "Meet the emerging artists who are redefining the sound of modern music.",
            image: "/hero3.png"
        }
    ];

    return (
        <div className="min-h-screen bg-black pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-6xl md:text-8xl font-serif text-center mb-16">
                    Tinad <span className="text-[#694D29]">Blog</span>
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article 
                            key={post.id}
                            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#694D29] transition-colors cursor-pointer"
                        >
                            <img 
                                src={post.image} 
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <p className="text-sm text-[#694D29] mb-2">{post.date}</p>
                                <h2 className="text-2xl font-serif mb-3">{post.title}</h2>
                                <p className="text-white-100 mb-4">{post.excerpt}</p>
                                <button className="text-[#694D29] hover:underline">
                                    Read More →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
