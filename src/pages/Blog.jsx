import Banner from "@/components/Banner";
import BlogDisplayCard from "@/components/BlogDisplayCard";
import CTA from "@/components/CTA";

const openRoles = [
    {
        title: "MoCreate featured Jamelle in a new release",
        image: "/career1.png"
    },
    {
        title: "Tinad partners with Wumb Store",
        image: "/career2.png"
    },
    {
        title: "Truselly performs her debut album live",
        image: "/career3.png"
    },
    {
        title: "Event Curation & Brand Activations",
        image: "/career4.png"
    },
    {
        title: "Platform Partnerships & Products",
        image: "/career5.png"
    },
]

const Blog = () => {
    return (
        <section className="space-y-5">
            <Banner image="/blog-frame.png" text="Blogs" description={"Hear about the latest happenings in TINAD. From new signings to new albums. Stay in the loop."} className={"bg-black"}/>

            <div className="space-y-20 max-w-7xl mx-auto">
                {openRoles.map(({title, description, image}, index) => (
                    <BlogDisplayCard 
                        key={title + index} 
                        title={title} 
                        description={description} 
                        image={image}
                        reverse={index % 2 ? true : false}
                    />
                ))}
            </div>

            <CTA />
        </section>
    );
};

export default Blog;
