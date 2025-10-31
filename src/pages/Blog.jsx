import { useState, useEffect } from "react";
import Banner from "@/components/Banner";
import BlogDisplayCard from "@/components/BlogDisplayCard";
import CTA from "@/components/CTA";
import ErrorFallback from "@/components/ErrorFallback";
import Pagination from "@/components/Pagination";
import { useSanityData } from "@/hooks/useSanityData";
import { blogsQuery } from "@/sanity/queries";

const ITEMS_PER_PAGE = 6;

const Blog = () => {
    const { data: blogs, loading, error, retry } = useSanityData(blogsQuery);
    const [currentPage, setCurrentPage] = useState(1);

    // Reset to page 1 when blogs data changes
    useEffect(() => {
        setCurrentPage(1);
    }, [blogs]);

    // Calculate pagination
    const totalPages = blogs ? Math.ceil(blogs.length / ITEMS_PER_PAGE) : 0;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentBlogs = blogs ? blogs.slice(startIndex, endIndex) : [];

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="space-y-5">
            <Banner image="/blog-frame.png" text="Blogs" description={"Hear about the latest happenings in TINAD. From new signings to new albums. Stay in the loop."} className={"bg-black"}/>

            <div className="space-y-20 max-w-7xl mx-auto min-h-[400px]">
                {loading && (
                    <div className="text-center py-20">
                        <p className="text-white/50 text-xl">Loading blog posts...</p>
                    </div>
                )}

                {error && (
                    <ErrorFallback 
                        error={error}
                        retry={retry}
                        title="Unable to load blog posts"
                    />
                )}

                {!loading && !error && (!blogs || blogs.length === 0) && (
                    <div className="text-center py-20">
                        <p className="text-white/50 text-xl">No blog posts available yet</p>
                        <p className="text-white/30 mt-2">Check back soon for updates!</p>
                    </div>
                )}

                {!loading && !error && blogs && blogs.length > 0 && (
                    <>
                        {currentBlogs.map((blog, index) => (
                            <BlogDisplayCard 
                                key={blog._id} 
                                title={blog.title} 
                                description={blog.description} 
                                image={blog.featuredImage}
                                reverse={index % 2 ? true : false}
                            />
                        ))}
                        
                        <Pagination 
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </>
                )}
            </div>

            <CTA />
        </section>
    );
};

export default Blog;
