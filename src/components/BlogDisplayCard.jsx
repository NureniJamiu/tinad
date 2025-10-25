const BlogDisplayCard = ({
                            title="Fullstack Software Engineer", 
                            description=" Praesent sollicitudin, ipsum quis semper interdum, ante nisl faucibus lorem, tempor sollicitudin lectus eros non nisi. Curabitur facilisis massa ac dui bibendum commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis est sapien. Phasellus elementum ut quam a auctor. Mauris feugiat velit lorem, sollicitudin tincidunt quam tempus quis. ",
                            image="/kendrick1.png",
                            reverse=false,
                        }) => {
    return (
        <div className={`grid grid-cols-7 gap-10 cursor-pointer group ${reverse && ""} `}>
            <div className={`col-span-2 ${reverse && "order-3"}`}>
               <div className={`space-y-3 group-hover:scale-105 transition-all text-right`}>
                    <h2 className="text-6xl tracking-tighter leading-14 text-[#694D29] group-hover:underline">{title}</h2>
               </div>
            </div>

            <div className={`col-span-3 ${reverse && "order-2"}`}>
                <div className="">
                    <img src={image} alt={`${title} job`} className={`w-full h-fullgroup-hover:scale-105 transition-all`}/>
                </div>
            </div>

            <div className={`col-span-2 self-end ${reverse && "order-1"}`}>
                <p className={`text-lg font-light leading-tight text-neutral-300`}>{description}</p>
            </div>
        </div>
    )
}

export default BlogDisplayCard;