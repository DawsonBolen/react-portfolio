import React, { useEffect } from 'react';
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
    useEffect(() => {
        // Scrolls to the top of the page when the component is mounted
        window.scrollTo(0, 0);
    }, []);
    return (
        <main className="WebDev">
            <section style={styles.webHead} id="web-dev-head">
                <h1 id="web-dev-header">Web Development</h1>
            </section>
            <section className='web-projects-portfolio'>
                <div className="web-projects">
                    {projectsArray.map(project => (
                        <WebDevProjects key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </main>
    )
}