import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSanityData } from "../hooks/useSanityData";
import { blogByIdQuery } from "../sanity/queries";
import { getHeroImageUrl, getContentImageUrl } from "../sanity/imageBuilder";
import ErrorFallback from "@/components/ErrorFallback";
import { PortableText } from '@portabletext/react';

const BlogDetail = () => {
    const { id } = useParams();
    const { data: blog, loading, error, retry } = useSanityData(blogByIdQuery, { id });
    const [heroVisible, setHeroVisible] = useState(false);

    // Get hero background image URL with optimization
    const heroImageUrl = blog?.featuredImage ? getHeroImageUrl(blog.featuredImage) : null;

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // Preload hero image for priority loading
    useEffect(() => {
        if (heroImageUrl) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = heroImageUrl;
            link.fetchPriority = 'high';
            document.head.appendChild(link);

            return () => {
                document.head.removeChild(link);
            };
        }
    }, [heroImageUrl]);

    // Trigger fade-in animation when blog data loads
    useEffect(() => {
        if (blog) {
            const timer = setTimeout(() => {
                setHeroVisible(true);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [blog]);

    // Format date
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Portable Text components for rich content rendering
    const portableTextComponents = {
        block: {
            normal: ({ children }) => <p className="text-base sm:text-lg text-white leading-relaxed mb-4">{children}</p>,
            h1: ({ children }) => <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e7d393] mt-8 mb-4">{children}</h1>,
            h2: ({ children }) => <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#e7d393] mt-6 mb-3">{children}</h2>,
            h3: ({ children }) => <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#e7d393] mt-5 mb-2">{children}</h3>,
            blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-[#e7d393] pl-4 sm:pl-6 py-2 my-6 italic text-white/80">
                    {children}
                </blockquote>
            ),
        },
        marks: {
            strong: ({ children }) => <strong className="font-bold text-[#e7d393]">{children}</strong>,
            em: ({ children }) => <em className="italic">{children}</em>,
            link: ({ value, children }) => {
                const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
                return (
                    <a
                        href={value?.href}
                        target={target}
                        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                        className="text-[#e7d393] hover:underline"
                    >
                        {children}
                    </a>
                );
            },
        },
        types: {
            image: ({ value }) => {
                const imageUrl = getContentImageUrl(value);
                return (
                    <div className="my-8 rounded-xl overflow-hidden">
                        <img
                            src={imageUrl}
                            alt={value.alt || 'Blog content image'}
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </div>
                );
            },
        },
        list: {
            bullet: ({ children }) => <ul className="list-disc list-inside space-y-2 my-4 text-white">{children}</ul>,
            number: ({ children }) => <ol className="list-decimal list-inside space-y-2 my-4 text-white">{children}</ol>,
        },
        listItem: {
            bullet: ({ children }) => <li className="text-base sm:text-lg leading-relaxed">{children}</li>,
            number: ({ children }) => <li className="text-base sm:text-lg leading-relaxed">{children}</li>,
        },
    };

    // Loading state
    if (loading) {
        return (
            <section className="min-h-screen">
                <div className="text-center py-20">
                    <p className="text-white/50 text-xl">Loading blog post...</p>
                </div>
            </section>
        );
    }

    // Error state
    if (error) {
        return (
            <section className="min-h-screen">
                <ErrorFallback
                    error={error}
                    retry={retry}
                    title="Unable to load blog post"
                />
            </section>
        );
    }

    // Blog not found
    if (!blog) {
        return (
            <section className="min-h-screen">
                <ErrorFallback
                    error="The blog post you're looking for doesn't exist or has been removed."
                    title="Blog post not found"
                />
            </section>
        );
    }

    // Main content
    return (
        <div className="min-h-screen bg-black">
            {/* Back Navigation Button */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
                <Link
                    to="/blogs"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-[#e7d393] transition-colors duration-300 group min-h-[44px] py-2"
                    aria-label="Back to Blogs page"
                >
                    <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-xs sm:text-sm font-medium uppercase tracking-wider">Back to Blogs</span>
                </Link>
            </div>

            {/* Hero Section */}
            <section
                className="relative w-full min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: heroImageUrl ? `url(${heroImageUrl})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: heroImageUrl ? 'transparent' : '#1a1a1a'
                }}
                role="banner"
                aria-label={`${blog.title} blog post hero section`}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

                {/* Blog title overlay */}
                <div
                    className={`relative z-10 text-center px-4 sm:px-6 max-w-5xl transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white drop-shadow-2xl leading-tight">
                        {blog.title}
                    </h1>
                    {blog.publishedAt && (
                        <p className="text-[#e7d393] text-sm sm:text-base md:text-lg mt-4 uppercase tracking-wider">
                            {formatDate(blog.publishedAt)}
                        </p>
                    )}
                </div>
            </section>

            {/* Blog Content Section */}
            <section className="max-w-4xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                {/* Description */}
                {blog.description && (
                    <div className="mb-8 sm:mb-12">
                        <p className="text-xl sm:text-2xl text-white/80 leading-relaxed italic border-l-4 border-[#e7d393] pl-4 sm:pl-6">
                            {blog.description}
                        </p>
                    </div>
                )}

                {/* Rich Content */}
                {blog.content && blog.content.length > 0 ? (
                    <div className="prose prose-invert prose-lg max-w-none">
                        <PortableText
                            value={blog.content}
                            components={portableTextComponents}
                        />
                    </div>
                ) : (
                    <p className="text-white/50 text-base sm:text-lg italic text-center py-8">
                        No content available for this blog post yet.
                    </p>
                )}
            </section>
        </div>
    );
};

export default BlogDetail;
