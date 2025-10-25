const Banner = ({ image = "/career-frame.png", text = "Careers", description, className }) => {
  return (
    <div
      className={`relative h-[450px] w-full bg-center bg-contain bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-[#694D29] text-7xl font-bold pb-2">{text}</h1>
        <p className="w-[30rem] mx-auto text-center">{description}</p>
      </div>
    </div>
  );
};

export default Banner;
