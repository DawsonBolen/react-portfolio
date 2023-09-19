import React, { useState } from 'react'
import '../styles/about.css';
import { resumeProjects } from '../projectData';

const PortfolioProjects = () => {
    const [active, setActive] = useState(0);
    const handleProjectClick = (index) => {
        setActive(index);
    };

    return (
        <div>
            <div className='project-control-panel'>
                {resumeProjects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`project-button ${index === active ? 'active-resume-btn' : ''}`}
                        onClick={() => handleProjectClick(index)} // Set the active project when the button is clicked
                    >
                        <img className='img-btn' src={process.env.PUBLIC_URL + project.image} height='20px'></img>
                        {project.title}
                    </div>

                ))}

            </div>



            <div className='resume-projects-body'>
                <div className='resume-projects-img'>
                    <img className='resume-image' src={process.env.PUBLIC_URL + resumeProjects[active].image} alt={resumeProjects[active].title}></img>
                </div>
                <div className='resume-projects-info'>
                    <h3>{resumeProjects[active].title}</h3>

                    <p>{resumeProjects[active].description}</p>

                    <div className='btns'>
                        {resumeProjects[active].link ? (
                            <a href={resumeProjects[active].link} target='_blank'>
                                <button className='site-btn'>Site</button>
                            </a>
                        ) : (
                            <></>
                        )}

                        {resumeProjects[active].repo ? (
                            <a href={resumeProjects[active].repo} target='_blank'>
                                <button className='repo-btn'>Repo</button>
                            </a>
                        ) : (
                            <></>
                        )}
                    </div>
                    <h4 className='tech-used'>Technologies Used</h4>
                    <div className='technologies-used'>
                        {Object.entries(resumeProjects[active].technologies).map(([techName, techIcon], index) => (
                            <div key={index} className='technology'>
                                <img src={process.env.PUBLIC_URL + techIcon} alt={techName} width='20px' />
                                <p>{techName}</p>
                            </div>
                        ))}
                    </div>
                </div>


            </div>



        </div>
    )
}

export default PortfolioProjects