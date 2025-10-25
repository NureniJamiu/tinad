const ArtistDisplayCard = ({
                            name="Kendrick Lamar", 
                            description="A curated list of talented individuals in our talent pool making waves in the industry",
                            topImage="/kendrick1.png",
                            bottomImage="/kendrick2.png",
                            reverse=false,
                        }) => {
    return (
        <div className={`relative flex items-center justify-center gap-16 group ${reverse && "flex-row-reverse"}`}>
            <div className="flex-1">
               <div className={`w-96 space-y-3 py-32 ${reverse ? "float-left text-left" : "float-right text-right"}`}>
                    <h2 className="text-8xl tracking-tighter leading-20 font-semibold text-[#694D29]">{name}</h2>
                    <p className={`w-64 text-lg leading-tight ${reverse ? "float-left" : "float-right"}`}>{description}</p>
               </div>
            </div>

            {/* <div className="flex-1 ">
                <div className="relative w-72">
                    <img src={topImage} alt="Kendrick Lamar" className="absolute -right-36 -bottom-40"/>
                    <img src={bottomImage} alt="Kendrick Lamar" className="absolute left-0 -top-36"/>
                </div>
            </div> */}

            <div className="flex-1 ">
                <div className="relative w-72">
                    <img src={topImage} alt="Kendrick Lamar" className={`absolute -bottom-40 group-hover:-rotate-12 transition-all ${reverse ? "-right-64" : "-right-32"}`}/>
                    <img src={bottomImage} alt="Kendrick Lamar" className={`absolute -top-36 group-hover:rotate-12 transition-all ${reverse ? "left-36" : "left-0"}`}/>
                </div>
            </div>
        </div>
    )
}

export default ArtistDisplayCard;