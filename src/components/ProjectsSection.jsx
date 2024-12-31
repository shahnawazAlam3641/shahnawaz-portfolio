import { ProjectsData } from "../utils/constants";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <div
      id="projects"
      className="w-[1060px] py-20 flex flex-col gap-8 max-w-[95%] mx-auto"
    >
      <h1 className="reveal  font-bold text-3xl md:text-5xl text-white ">
        Projects
      </h1>
      {ProjectsData.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            project={project}
            reverse={index / 2 == 0 ? true : false}
          />
        );
      })}
    </div>
  );
};

export default ProjectsSection;
