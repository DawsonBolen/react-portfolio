export default function GraphicDesign() {
    return (
        <main className="GraphicDesign">
            <section id="GD-head">
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