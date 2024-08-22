import api from "../../../api/api";
import useAxios from "../../../hooks/useAxios";
import ProjectsComp from "../../../components/projects/projects";

const Projects = () => {
  return (
    <div className="relative h-[calc(100vh-82px)]">
      <ProjectsComp />
    </div>
  );
};

export default Projects;
