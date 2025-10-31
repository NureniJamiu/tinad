import { getBlogImageUrl } from '../sanity/imageBuilder';

const BlogDisplayCard = ({
                            title="Fullstack Software Engineer", 
                            description=" Praesent sollicitudin, ipsum quis semper interdum, ante nisl faucibus lorem, tempor sollicitudin lectus eros non nisi. Curabitur facilisis massa ac dui bibendum commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis est sapien. Phasellus elementum ut quam a auctor. Mauris feugiat velit lorem, sollicitudin tincidunt quam tempus quis. ",
                            image="/kendrick1.png",
                            reverse=false,
                        }) => {
    const imageUrl = getBlogImageUrl(image);
    const displayTitle = title || 'Untitled Post';
    const displayDescription = description || 'No description available';

    return (
        <div className={`grid grid-cols-7 gap-10 cursor-pointer group ${reverse && ""} `}>
            <div className={`col-span-2 ${reverse && "order-3"}`}>
               <div className={`space-y-3 group-hover:scale-105 transition-all text-right`}>
                    <h2 className="text-6xl tracking-tighter leading-14 text-[#694D29] group-hover:underline">{displayTitle}</h2>
               </div>
            </div>

            <div className={`col-span-3 ${reverse && "order-2"}`}>
                <div className="">
                    {imageUrl ? (
                        <img 
                            src={imageUrl} 
                            alt={`${displayTitle} blog post`} 
                            loading="lazy"
                            className={`w-full h-full group-hover:scale-105 transition-all`}
                            onError={(e) => {
                                console.error('[BlogDisplayCard] Image failed to load:', imageUrl);
                                e.target.style.display = 'none';
                            }}
                        />
                    ) : (
                        <div className="w-full h-96 bg-gradient-to-br from-[#694D29] to-black flex items-center justify-center">
                            <span className="text-8xl text-white/20">📝</span>
                        </div>
                    )}
                </div>
            </div>

            <div className={`col-span-2 self-end ${reverse && "order-1"}`}>
                <p className={`text-lg font-light leading-tight text-neutral-300`}>{displayDescription}</p>
            </div>
        </div>
    )
}

export default BlogDisplayCard;