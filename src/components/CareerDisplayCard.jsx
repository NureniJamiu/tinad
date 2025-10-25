const CareerDisplayCard = ({
                            name="Fullstack Software Engineer", 
                            description="A curated list of talented individuals in our talent pool making waves in the industry",
                            image="/kendrick1.png",
                            reverse=false,
                        }) => {
    return (
        <div className={`relative flex items-center justify-center gap-16 group ${reverse && "flex-row-reverse"} cursor-pointer`}>
            <div className="flex-1">
               <div className={`w-96 space-y-3 py-32 group-hover:scale-105 transition-all ${reverse ? "float-left text-left" : "float-right text-right"}`}>
                    <h2 className="text-6xl tracking-tighter leading-14 text-[#694D29] group-hover:underline">{name}</h2>
                    <p className={`w-96 text-base font-light leading-tight text-neutral-300 ${reverse ? "float-left" : "float-right"}`}>{description}</p>
               </div>
            </div>

            <div className="flex-1 ">
                <div className={`${reverse && "float-right"}`}>
                    <img src={image} alt={`${name} job`} className={`group-hover:scale-105 transition-all`}/>
                </div>
            </div>
        </div>
    )
}

export default CareerDisplayCard;