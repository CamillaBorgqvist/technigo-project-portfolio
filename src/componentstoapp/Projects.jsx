import data from "../data.json"
import { ProjectImage } from "../componentstoproject/ProjectImage";
import { Tags } from "../componentstoproject/Tags";
import { ProjectName } from "../componentstoproject/ProjectName";
import { Description } from "../componentstoproject/Description";
import { Links } from "../componentstoproject/Links";
import React, {useRef} from "react"


export const Projects = () => {
    const projectList = data.projects;
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="project-section">
            <h1>Projects</h1>  
            
            <div className="carousel-wrapper">
                
                <div className="project-container" ref={scrollRef}>
                    {projectList.map((project) => (
                        <div key={project.id} className="projectcard"> 
                            <ProjectImage image={project.image} />
                            <Tags tags={project.tags} />
                            <ProjectName name={project.name} />
                            <Description description={project.description} />
                            <Links netlify={project.netlify} github={project.github} />
                        </div>
                    ))}
                </div>

                <div className="arrow-button-container">
                    <button className="scroll-arrow left" onClick={() => scroll('left')}>⬅</button>
                    <button className="scroll-arrow right" onClick={() => scroll('right')}>➡</button>
                </div>
            
            </div>
        </section>
    )
}