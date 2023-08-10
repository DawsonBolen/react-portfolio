import React from 'react';





export default function About() {
    return (
        <main className="about">
            <section className='about-main'>
                <div className='about-image'>
                    <img src={process.env.PUBLIC_URL + "images/gradpicwring.png"} width="300px"></img>
                </div>
                <div className='about-description'>
                    <h3>About Me</h3>
                    <p>My name is Dawson Bolen. I studied Digital Technology and Culture (DTC) with a minor in communications at
                        Washington State University. I have a background in graphic design and digital media dating back to high
                        school. I love using the adobe creative apps such as photoshop, Illustrator, and In Design. I also have
                        experience creating webpages as I've created this one from scratch. I am knowledgable in html5, CSS3, and
                        JavaScript. I have experience creating webpages for various organizations, most notably YAAANA who I
                        interned for as a web developer. I would say that my skills and expeerience creating webpages, editing
                        images and creating graphics is something that sets me apart as a front end developer.</p>
                </div>
            </section>

            <section className='about-skills'>

                <div id="skills-and-education">
                    <div className="skills-card">
                        <div className="iconplusheading">
                            <img src="images/educationicon.png" width="40px" height="23px"
                                alt="graduation cap icon symbolizing education"></img>
                            <h3>Education</h3>
                        </div>
                        <p>-Washington State University</p>
                        <p>-UC Berkely</p>
                    </div>
                    <div className="skills-card">
                        <div className="iconplusheading">
                            <img src="images/workicon.png" width="33px" height="26px"
                                alt="briefcase icon symbolizing work and work experience"></img>
                            <h3>Experience</h3>
                        </div>
                        <p>-(YAAANA) Web Developer</p>
                    </div>
                    <div className="skills-card">
                        <div className="iconplusheading">
                            <img src="images/skillsicon.png" width="30px" height="30px"
                                alt="wrench and pencil icon symbolizing skills"></img>
                            <h3 id="myskll">My Skills</h3>
                        </div>
                        <p>-Graphic Design -Web Development -UX Design</p>
                        <p>-html5 -CSS3 -JavaScript -PHP -Ajax</p>

                    </div>
                    <div className="skills-card">
                        <div className="iconplusheading">
                            <img src="images/skillsicon.png" width="30px" height="30px" alt="the same wrench and pencil icon"></img>
                            <h3 id="morskills">More Skills</h3>
                        </div>
                        <p>-Adobe Illustrator -Adobe Photoshop -Adobe XD</p>
                        <p>-Adobe In Design -Strategic Communications</p>
                    </div>

                </div>
            </section>
        </main>
    );
}