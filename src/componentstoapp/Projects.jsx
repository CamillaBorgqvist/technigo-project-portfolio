import data from "../data.json"
import { Tags } from "../componentstoproject/Tags";
import { Links } from "../componentstoproject/Links";

export const Projects = () => {
    const projectList = data.projects;
    const freelanceList = data.freelance;

    return (
        <section className="project-section">
            <h2>Freelance Projects</h2>  
            <div className="freelance-project-container">
                {freelanceList.map((freelance) => (
                    <div key={freelance.id} className="projectcard">
                        <img src={freelance.image} />
                        <Tags tags={freelance.tags} />
                        <h3>{freelance.name}</h3>
                        <p>{freelance.description}</p>
                        <Links netlify={freelance.netlify} github={freelance.github} />
                    </div>       
                ))}
            </div>
            <h2>Education Projects</h2>  
            <div className="project-container">
                {projectList.map((project) => (
                    <div key={project.id} className="projectcard"> 
                        <img src={project.image} />
                        <Tags tags={project.tags} />
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <Links netlify={project.netlify} github={project.github} />
                    </div>
                ))}
            </div>
        </section>
    )
}