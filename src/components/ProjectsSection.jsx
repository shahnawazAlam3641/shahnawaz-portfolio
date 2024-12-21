import GithubIcon from "../svgs/GithubIcon";
import ArrowIcon from "../svgs/ArrowIcon";
import brainly from "../assets/brainly.png";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <div className="py-20 flex flex-col gap-8 max-w-[95%] mx-auto">
      <h1 className="font-sans font-bold text-3xl md:text-5xl text-white ">
        Projects
      </h1>
      <ProjectCard reverse={false} />
      <ProjectCard reverse={true} />
      <ProjectCard reverse={false} />
      <ProjectCard reverse={true} />
      <ProjectCard reverse={false} />
      <ProjectCard reverse={true} />
      <ProjectCard reverse={false} />
      <ProjectCard reverse={true} />
      <ProjectCard reverse={false} />
    </div>
  );
};

export default ProjectsSection;
