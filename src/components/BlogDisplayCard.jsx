import { Link } from 'react-router-dom';
import { getBlogImageUrl } from '../sanity/imageBuilder';

const BlogDisplayCard = ({
                            id,
                            title="Fullstack Software Engineer", 
                            description=" Praesent sollicitudin, ipsum quis semper interdum, ante nisl faucibus lorem, tempor sollicitudin lectus eros non nisi. Curabitur facilisis massa ac dui bibendum commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis est sapien. Phasellus elementum ut quam a auctor. Mauris feugiat velit lorem, sollicitudin tincidunt quam tempus quis. ",
                            image="/kendrick1.png",
                            reverse=false,
                        }) => {
    const imageUrl = getBlogImageUrl(image);
    const displayTitle = title || 'Untitled Post';
    const displayDescription = description || 'No description available';

    return (
        <Link to={`/blogs/${id}`} className={`grid grid-cols-1 lg:grid-cols-7 gap-4 sm:gap-6 lg:gap-10 cursor-pointer group ${reverse && ""} `}>
            <div className={`lg:col-span-2 ${reverse && "lg:order-3"}`}>
               <div className={`space-y-2 sm:space-y-3 group-hover:scale-105 transition-all lg:text-right`}>
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl tracking-tighter leading-tight lg:leading-14 text-[#694D29] group-hover:underline">{displayTitle}</h2>
               </div>
            </div>

            <div className={`lg:col-span-3 ${reverse && "lg:order-2"}`}>
                <div className="">
                    {imageUrl ? (
                        <img 
                            src={imageUrl} 
                            alt={`${displayTitle} blog post`} 
                            loading="lazy"
                            className={`w-full h-64 sm:h-80 lg:h-full object-cover group-hover:scale-105 transition-all rounded-lg lg:rounded-none`}
                            onError={(e) => {
                                console.error('[BlogDisplayCard] Image failed to load:', imageUrl);
                                e.target.style.display = 'none';
                            }}
                        />
                    ) : (
                        <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-[#694D29] to-black flex items-center justify-center rounded-lg lg:rounded-none">
                            <span className="text-6xl sm:text-7xl lg:text-8xl text-white/20">📝</span>
                        </div>
                    )}
                </div>
            </div>

            <div className={`lg:col-span-2 lg:self-end ${reverse && "lg:order-1"}`}>
                <p className={`text-base sm:text-lg font-light leading-tight text-neutral-300`}>{displayDescription}</p>
            </div>
        </Link>
    )
}

export default BlogDisplayCard;