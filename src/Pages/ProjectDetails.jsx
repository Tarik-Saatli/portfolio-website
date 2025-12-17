import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectsData from "../data/projects.js"

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [projectList] = useState(projectsData);

    const projects = projectList.find(p => p.id === Number(id));

    if (!projects) {
        return <div>Project niet gevonden!</div>;
    }

    return (
        <section>
            <button className='projectknop' onClick={() => navigate('/projects')}>
                <p>← Projects</p>
            </button>

            <h1 className='titel-detail'>{projects.name}</h1>
            <section className='project-container'>
                <div className='text-container'>
                    <p>{projects.description}</p>
                    <a className="github" href={projects.github} target='_blank'>Link naar github</a>
                </div>
                <div className='image-container'>
                    {projects.image.map((img, index) => (
                        <img key={index} src={`${import.meta.env.BASE_URL}${img}`} alt="" />
                    ))}



                </div>
            </section>

        </section>
    );
};

export default ProjectDetails;