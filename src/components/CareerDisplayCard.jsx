const CareerDisplayCard = ({
                            name="Fullstack Software Engineer", 
                            description="A curated list of talented individuals in our talent pool making waves in the industry",
                            image="/kendrick1.png",
                            reverse=false,
                        }) => {
    return (
        <div className={`relative flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-16 group ${reverse && "lg:flex-row-reverse"} cursor-pointer px-4 sm:px-6`}>
            <div className="flex-1 w-full">
               <div className={`w-full lg:w-96 space-y-2 sm:space-y-3 py-8 sm:py-16 lg:py-32 group-hover:scale-105 transition-all text-center lg:text-left ${reverse ? "lg:float-left lg:text-left" : "lg:float-right lg:text-right"}`}>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight lg:leading-14 text-[#694D29] group-hover:underline">{name}</h2>
                    <p className={`w-full lg:w-96 text-sm sm:text-base font-light leading-tight text-neutral-300 mx-auto lg:mx-0 ${reverse ? "lg:float-left" : "lg:float-right"}`}>{description}</p>
               </div>
            </div>

            <div className="flex-1 w-full">
                <div className={`w-full ${reverse && "lg:float-right"}`}>
                    <img src={image} alt={`${name} job`} className={`w-full h-auto object-cover rounded-lg lg:rounded-none group-hover:scale-105 transition-all`}/>
                </div>
            </div>
        </div>
    )
}

export default CareerDisplayCard;