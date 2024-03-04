import React, { useEffect, useState } from 'react';
import { projectsArray } from '../../projectData';
import WebDevProjects from "../webProjects"
import '../../styles/webdev.css';
const styles = {
    webHead: {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/realwebdevtop.jpg)`,
        width: '100%',
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}



export default function WebDev() {

    const [fullView, setFullView] = useState(false);
    const [projectPreview, setProjectPreview] = useState(null);

    const displayProject = (id) => {
        setFullView(true);
        setProjectPreview(id);


    }

    const exitProjectPreview = () => {
        setFullView(false);
        setProjectPreview(null);
    }


    useEffect(() => {
        // Scrolls to the top of the page when the component is mounted
        window.scrollTo(0, 0);
    }, []);
    return (
        <main className="WebDev">
            <section style={styles.webHead} id="web-dev-head">
                <h1 id="web-dev-header">WEB DEVELOPMENT</h1>
            </section>
            {fullView ? (

                <></>
            ) : (
                <section id='web-projects-intro'>
                    <div id='web-prj-ln'></div>
                    <h2>WEB PROJECTS</h2>
                </section>
            )

            }

            {fullView ? (
                <div className='project-preview-cont'>
                    <button className='exit-preview-btn' onClick={exitProjectPreview}>
                        <p>
                            Close
                        </p>

                        <div className='close-prev-cont'>
                            <div className='close-preview-bar left-bar'></div>
                            <div className='close-preview-bar right-bar'></div>
                        </div>
                    </button>
                    <div className='web-project-preview'>
                        <img className='project-preview-image' src={`${process.env.PUBLIC_URL}${projectsArray.find(project => project.id === projectPreview).image}`} alt="Preview Image" />

                        <div className='preview-2'>
                            <h3>{projectsArray.find(project => project.id === projectPreview).title}</h3>
                            <h5>{projectsArray.find(project => project.id === projectPreview).shortDescription}</h5>
                            <div className='proj-preview-line'></div>
                            <p className='project-preview-description'>{projectsArray.find(project => project.id === projectPreview).description}</p>
                            <div className='repo-site-btn-container'>

                                {projectsArray.find(project => project.id === projectPreview).link && (
                                    <a style={{ textDecoration: 'none' }} href={projectsArray.find(project => project.id === projectPreview).link} target='_blank'>
                                        <button className='repo-proj-btn'>
                                            View Site
                                        </button>
                                    </a>
                                )}

                                {projectsArray.find(project => project.id === projectPreview).repo && (
                                    <a style={{ textDecoration: 'none' }} href={projectsArray.find(project => project.id === projectPreview).repo} target='_blank'>
                                        <button className='repo-proj-btn'>
                                            View Repo
                                        </button>
                                    </a>
                                )}

                            </div>


                        </div>
                    </div>
                    <h6>Technologies Used</h6>
                    <div className='tech-used-list'>
                        {projectsArray.find(project => project.id === projectPreview)?.technologies?.map((tech, index) => (
                            <div className='tech-used-cell' key={index}>
                                <img className='tech-used-icon' src={process.env.PUBLIC_URL + tech.techIcon} alt={`Tech ${index}`} />
                                <p>{tech.techName}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <section className='web-projects-portfolio'>
                    <div className="web-projects">
                        {projectsArray.map(project => (
                            <WebDevProjects onClick={displayProject} key={project.id} project={project} />
                        ))}
                    </div>
                </section>
            )}

        </main>
    )
}

//return here