import GithubIcon from "../svgs/GithubIcon";
import ArrowIcon from "../svgs/ArrowIcon";
import brainly from "../assets/brainly.png";

const ProjectCard = ({ reverse, project }) => {
  return (
    <div
      className={`reveal flex ${
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
          src={project?.img}
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
            ? "rounded-b-2xl md:rounded-l-2xl md:rounded-br-none"
            : "rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none "
        } bg-[#212121] p-5`}
      >
        <div className="flex justify-between flex-wrap">
          {/* Tags */}
          <div className="flex gap-2 flex-wrap">
            {project?.tags?.map((tag, index) => {
              return (
                <p
                  key={index}
                  className=" font-semibold text-xs text-white bg-[#313131] rounded-md p-1 px-2 flex  items-center "
                >
                  {tag}
                </p>
              );
            })}
          </div>
        </div>
        {/* Project Name */}
        <h2 className=" font-bold text-2xl md:text-3xl text-white">
          {project?.name}
        </h2>
        {/* Project Desc.*/}

        <p className=" font-semibold text-base text-white ">
          {project?.description}
        </p>

        <div className="flex gap-4">
          <a
            href={project?.sourceCode}
            target="_blank"
            className="flex items-center group gap-2  font-semibold text-base md:text-lg bg-white text-[#313131] rounded-md py-1 px-2 hover:scale-95 transition-all duration-200"
          >
            Source Code
            <GithubIcon color={"black"} />
          </a>
          <a
            href={project?.liveDemo}
            target="_blank"
            className="flex items-center gap-2  font-semibold text-lg bg-white text-[#313131] rounded-md py-1 px-2 hover:scale-95 transition-all duration-200"
          >
            Live Demo
            <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
