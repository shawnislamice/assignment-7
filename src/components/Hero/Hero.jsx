
const Hero = () => {
  return (
    <div className="font-lexend  banner-section rounded-2xl flex flex-col justify-center items-center md:h-[600px] p-4 md:p-0 m-2 md:m-0 relative ">
      <h1 className="text-white md:text-5xl text-center font-bold md:pt-0 pt-3 my-0 ">
        Discover an exceptional cooking <br /> class tailored for you!
      </h1>
      <p className="text-white py-5 md:py-0 text-center md:w-2/3 font-lexend md:my-6 leading-6">
        Welcome to our culinary corner! Whether you are a seasoned chef or a
        kitchen newbie, our site is your go-to destination for all things food.
        From mouthwatering recipes to handy cooking tips and tricks, we have got
        you covered
      </p>
      <div className="flex justify-center items-center md:gap-6 gap-3 md:py-0 py-3">
        <button className=" duration-300 hover:bg-[#F00] btn rounded-full border-none outline-none  text-[#150B2B] bg-[#0BE58A] px-6">
          Explore Now
        </button>
        <button className=" duration-300 hover:bg-[#F00] hover:outline-none hover:border-none  btn btn-outline text-white rounded-full our-feedback-btn  px-6 ">
          Our Feedback
        </button>
      </div>
    </div>
  );
};

export default Hero;
