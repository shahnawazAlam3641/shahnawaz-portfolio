import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <div className="w-[1060px] py-20 flex flex-col gap-8 max-w-[95%] mx-auto">
      <h1 className="reveal  font-bold text-3xl md:text-5xl text-white ">
        Projects
      </h1>
      <ProjectCard reverse={false} />
      <ProjectCard reverse={true} />
    </div>
  );
};

export default ProjectsSection;
