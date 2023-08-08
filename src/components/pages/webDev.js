import React from 'react';
import { projectsArray, WebDevProjects } from '../webProjects';

const styles = {
    webHead: {
        backgroundImage: 'url("images/realwebdevtop.jpg")',
        width: '100%',
        height: '300px',
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}






export default function WebDev() {
    return (
        <main className="WebDev">
            <section style={styles.webHead} id="web-dev-head">
                <h1 id="web-dev-header">Web Development</h1>
            </section>
            <section className='web-projects-portfolio'>
                <div className="web-projects">
                    {projectsArray.map(project => (
                        <WebDevProjects key={project.id} project={project} />
                    ))};
                </div>
            </section>
        </main>
    );
}