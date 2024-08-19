
import api from "../../api/api";
import useAxios from "../../hooks/useAxios";
import ProjectsComp from './../../components/projects/projects';

const Projects = () => {
  return (
    <div className="relative h-[200vh]">
      <ProjectsComp />
    </div>
  );
};

export default Projects;
