import { useState } from "react";
import ProjectCard from "../Components/projectcard";
import projectsData from "../data/projects.js"
import { useNavigate } from "react-router-dom";

const Projects = () => {
    const [project, setProjectList] = useState(projectsData);
    const navigate = useNavigate();

const goToDetail = (id) => {
    navigate(`/projects/${id}`);
}
    return (
        <section className="project">
            <h1>PROJECTS</h1>

            <section className="projects-container">
                {project.map((project) => (
                    <ProjectCard
                        key={project.id}
                        projects={project}
                        onShowDetail={goToDetail} />
                ))}

            </section>
        </section>
    );
}

export default Projects;