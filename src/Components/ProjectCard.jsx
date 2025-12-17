const ProjectCard = ({ projects, onShowDetail }) => {
    return (
        <section className="project-card">
            <img onClick={() => onShowDetail(projects.id)} src={`${import.meta.env.BASE_URL}${projects.image[0]}`} alt="" />
            <h2 onClick={() => onShowDetail(projects.id)}>{projects.name}</h2>


        </section>
    );
}

export default ProjectCard;