const Banner = ({ image = "/career-frame.png", text = "Careers", description, className }) => {
  return (
    <div
      className={`relative h-[250px] sm:h-[350px] lg:h-[450px] w-full bg-center bg-contain bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="text-[#694D29] text-4xl sm:text-5xl lg:text-7xl font-bold pb-2 text-center">{text}</h1>
        <p className="w-full sm:w-[28rem] lg:w-[30rem] mx-auto text-center text-sm sm:text-base px-4">{description}</p>
      </div>
    </div>
  );
};

export default Banner;
