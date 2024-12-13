import TwitterIcon from "../svgs/TwitterIcon";
import LinkedinIcon from "../svgs/LinkedinIcon";
import InstagramIcon from "../svgs/InstagramIcon";

const Hero = () => {
  return (
    <div className="max-w-full mt-24 flex flex-col gap-1 ">
      <p className="text-center font-sans font-semibold text-xl md:text-2xl text-[#ffffffcc]">
        Shahnawaz Alam,
      </p>
      <h1 className="text-center font-sans font-bold text-3xl md:text-7xl text-white">
        FULLSTACK DEVELOPER
      </h1>

      <div className="flex gap-10 mx-auto mt-8">
        <button className="text-[#1d2128] bg-white rounded-lg py-2 px-4 hover:scale-95 transition-all duration-300 font-sans text-lg">
          Hire Me
        </button>
        <button className="text-[#1d2128] bg-white rounded-lg py-2 px-4 hover:scale-95 transition-all duration-300 font-sans text-lg">
          Download CV
        </button>
      </div>

      <div className="flex  flex-col-reverse md:flex-row items-center gap-8 justify-between mt-56">
        <div className="flex gap-5 items-center">
          <p className="text-xs text-white font-sans font-bold">SAY HELLO,</p>
          <div className=" bg-[#212121] p-2 rounded-full hover:scale-95 transition-all duration-200">
            <LinkedinIcon />
          </div>
          <div className=" bg-[#212121] p-2 rounded-full hover:scale-95 transition-all duration-200">
            <TwitterIcon />
          </div>
          <div className=" bg-[#212121] p-2 rounded-full hover:scale-95 transition-all duration-200">
            <InstagramIcon />
          </div>
        </div>

        <p className="text-sm text-white font-sans font-semibold max-w-72 text-center md:text-start">
          Hi, I'm Shahnawaz Alam, a web developer passionate about crafting
          user-friendly and visually appealing web applications. Based in
          Kolkata, India.
        </p>
      </div>
    </div>
  );
};

export default Hero;
