import GithubIcon from "../svgs/GithubIcon";
import ArrowIcon from "../svgs/ArrowIcon";
import brainly from "../assets/brainly.png";

const ProjectCard = ({ reverse }) => {
  return (
    <div
      className={` flex ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }  rounded-2xl gap-1  flex-col hover:border-white hover:border hover:-translate-y-3 hover:shadow-white hover:shadow-hard transition-all duration-200`}
    >
      <div
        className={`p-3 max-w-1/2 min-w-1/2 bg-[#212121] flex justify-center items-center ${
          reverse
            ? "rounded-tr-2xl rounded-tl-2xl md:rounded-tr-2xl md:rounded-br-2xl md:rounded-tl-none"
            : "rounded-tr-2xl rounded-tl-2xl md:rounded-l-2xl md:rounded-tr-none"
        }`}
      >
        <img
          src={brainly}
          className={`${
            reverse
              ? "rounded-tr-2xl rounded-tl-2xl md:rounded-tr-2xl md:rounded-br-2xl md:rounded-tl-none"
              : "rounded-tr-xl rounded-tl-xl md:rounded-l-xl md:rounded-tr-none"
          } w-full h-full object-cover`}
        />
      </div>
      <div
        className={`flex flex-col gap-4 ${
          reverse
            ? "rounded-b-2xl md:rounded-l-2xl"
            : "rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none "
        } bg-[#212121] p-5`}
      >
        <div className="flex justify-between flex-wrap">
          {/* Tags */}
          <div className="flex gap-2 flex-wrap">
            <p className="font-sans font-semibold text-sm text-white bg-[#313131] rounded-md p-1 px-2 flex  items-center ">
              MongoDB
            </p>
            <p className="font-sans font-semibold text-sm text-white bg-[#313131] rounded-md p-1 px-2 flex items-center">
              MongoDB
            </p>
            <p className="font-sans font-semibold text-sm text-white bg-[#313131] rounded-md p-1 px-2 flex  items-center">
              MongoDB
            </p>
            <p className="font-sans font-semibold text-sm text-white bg-[#313131] rounded-md p-1 px-2 flex items-center">
              MongoDB
            </p>
          </div>
          {/* Buttons */}
          {/* <div className="flex gap-4">
              <button className="flex items-center group gap-2 font-sans font-semibold text-lg bg-white text-[#313131] rounded-md py-1 px-2 hover:scale-95 transition-all duration-200">
                Source Code
                <GithubIcon />
              </button>
              <button className="flex items-center gap-2 font-sans font-semibold text-lg bg-white text-[#313131] rounded-md py-1 px-2 hover:scale-95 transition-all duration-200">
                Live Demo
                <ArrowIcon />
              </button>
            </div> */}
        </div>
        {/* Project Name */}
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-white">
          Brainly - Your Second Brain
        </h2>
        {/* Project Desc.*/}
        <p className="font-sans font-semibold text-base text-white">
          I am a passionate MERN stack developer with expertise in building
          dynamic and scalable web applications. With a strong foundation in
          React, Node.js, Express, and MongoDB.
        </p>

        {/* Numbers */}
        {/* <div className="flex flex-row mt-5 gap-10">
            <div className="w-1/2">
              <h3 className="font-sans font-bold text-2xl md:text-3xl text-white">
                50%
              </h3>
              <p className="font-sans font-semibold text-sm text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                accusamus quasi
              </p>
            </div>

            <div className="w-1/2">
              <h3 className="font-sans font-bold text-2xl md:text-3xl text-white">
                30%
              </h3>
              <p className="font-sans font-semibold text-sm text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                accusamus quasi
              </p>
            </div>
          </div> */}

        <div className="flex gap-4">
          <button className="flex items-center group gap-2 font-sans font-semibold text-base md:text-lg bg-white text-[#313131] rounded-md py-1 px-2 hover:scale-95 transition-all duration-200">
            Source Code
            <GithubIcon />
          </button>
          <button className="flex items-center gap-2 font-sans font-semibold text-lg bg-white text-[#313131] rounded-md py-1 px-2 hover:scale-95 transition-all duration-200">
            Live Demo
            <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
