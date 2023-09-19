import React, { useEffect } from 'react';
import '../../styles/about.css';
import PortfolioProjects from '../portfolio-projects';




export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <main className="about">
            <section className='about-main'>
                <div className='about-image'>
                    <img className='head-shot' src={process.env.PUBLIC_URL + "/images/headshot.png"}></img>
                </div>
                <div className='about-description'>
                    <h3>About Me</h3>
                    <p>Hello everyone, my name is Dawson. I am a recent graduate of WSU where I studied Digital Technology and Culture. I focused on UX Design, Graphic Design, and Web Development in my studies there. I just completed a full-stack web development (JavaScript) bootcamp through UC Berkeley. Through my education, I have become a web developer with a strong foundation in UX design and graphic design. I am proficient in HTML5, CSS3, JavaScript, and react. I also am skilled in node.js, express.js, mongodb and sql. Additionally, I have some experience with php and graphql. I am more front end focused because I enjoy design and visual layout, but I am a full stack MERN developer.</p>
                </div>
            </section>


            <section id='resume'>
                <h2>Resume</h2>
                <div className='resume-line'></div>

                <div className='education'>
                    <div className="iconplusheading">
                        <img src={process.env.PUBLIC_URL + "/images/educationicon.png"} width="40px" height="23px"
                            alt="graduation cap icon symbolizing education"></img>
                        <h3>Education</h3>
                    </div>
                    <div id='education-content'>
                        <div className='education-row'>
                            <div className='education-school-icon'>
                                <img src={process.env.PUBLIC_URL + "/images/wsu-logo.png"} height="35px"
                                    alt="Washington State University logo"></img>
                                <h5>Washington State University</h5>
                            </div>
                            <p>I have a bachelors degree in Digital Technology and Culture (DTC) and a minor in communications from Washington State University. I studied UX Design, Web Development, Graphic design, and several other topics related to digital media.</p>
                        </div>
                        <div className='education-line'></div>
                        <div className='education-row'>
                            <div className='education-school-icon'>
                                <img src={process.env.PUBLIC_URL + "/images/ucb-logo.png"} height="30px"
                                    alt="University of California Berkeley logo"></img>
                                <h5>UC Berkely</h5>
                            </div>
                            <p>I took a full stack web development coding bootcamp throught the University of California Berkeley. The class focused on JavaScript and the MERN stack. It helped me become a proficient full stack developer and improve my skills a lot.</p>
                        </div>
                    </div>
                </div>
                <div className='work-experience'>
                    <div className="iconplusheading">
                        <img src={process.env.PUBLIC_URL + "/images/workicon.png"} width="33px" height="26px"
                            alt="briefcase icon symbolizing work and work experience"></img>
                        <h3>Experience</h3>
                    </div>
                    <div className='work-experience-content'>
                        <div className='work-experience-row'>
                            <div className='work-titleandicon'>
                                <img src={process.env.PUBLIC_URL + '/images/YAAANA logo.png'} height='40px'></img>
                                <h5>YAAANA</h5>
                            </div>

                            <p>I interned for the Yiddish Arts and Academics Association of North America (YAAANA) as a web developer. They are a non-profit organization who's main goal is to preserve and teach Yiddish language and culture. I helped them maintain and update their Yiddishland California website with many various updates.</p>


                            <p>My tasks varied greatly but were mostly updates. I would often create pages for events, add events to the upcoming events page, and create the weekly newsletter.</p>

                            <p>To view the site click <a href='https://yiddishlandcalifornia.org/' target='_blank'>Here.</a> To view a page I made for the Yiddishland at La Jolla Art and Wine Festival event click <a href='https://yiddishlandcalifornia.org/yiddishland-at-the-la-jolla-art-wine-festival/' target='_blank'>Here.</a> To view a newsletter I put together click <a href='https://yiddishlandcalifornia.org/yiddishland-newsletter/' target='_blank'>Here.</a></p>
                        </div>
                        <div className='work-line'></div>
                        <div className='work-experience-row'>
                            <div className='work-titleandicon'>
                                <img src={process.env.PUBLIC_URL + '/images/peaceofheartlogo.png'} height='30px'></img>
                                <h5>Peace of Heart</h5>
                            </div>

                            <p>I worked for Peace of Heart therapy doing several tasks. I designed their logo and buisness card as well as created and designed their website. I helped them use vista print to order custom pens and cards alike. It was just part time contract work so not a full time position, but still it was a good experience working for them.</p>

                            <div className='work-titleandicon'>
                                <img src={process.env.PUBLIC_URL + '/images/scholoarship-auditions.jpg'} height='25px'></img>
                                <h5>Scholarship Auditions</h5>
                            </div>
                            <p>I'm interning as a front end developer for ScholarshipAuditions.com. What we are working on is confidential until we have completed it. But I have been helping them create a website using react, css, and I also have been able to use my digital design skills to create graphics and imagery for the project as well.</p>
                        </div>
                    </div>
                </div>
                <div id='projects'>
                    <div className="iconplusheading">
                        <img src={process.env.PUBLIC_URL + "/images/projecticonblue.png"} width="33px"
                            alt="briefcase icon symbolizing work and work experience"></img>
                        <h3>Projects</h3>
                    </div>
                    <div id='projects-content'>
                        <PortfolioProjects />
                    </div>
                </div>
                <div className='skills'>
                    <div className="iconplusheading">
                        <img src={process.env.PUBLIC_URL + "/images/skillsicon.png"} width="30px" height="30px"
                            alt="wrench and pencil icon symbolizing skills"></img>
                        <h3 id="myskll">My Skills</h3>
                    </div>
                    <div id='skills-content'>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/htmlicon.png"} width='20px'></img>
                            <h6>html</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/cssicon.png"} width='20px'></img>
                            <h6>CSS</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/javascripticon.png"} width='20px'></img>
                            <h6>JavaScript</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/graphicdesignicon.png"} width='22px' height='20px'></img>
                            <h6>Graphic Design</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/uxdesignicon.png"} width='25px' height='19px'></img>
                            <h6>UX Design</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/Webdevicon.png"} width='20px' height='19px'></img>
                            <h6>Web Development</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/reacticon.png"} width='20px'></img>
                            <h6>React</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/nodeicon.png"} width='20px'></img>
                            <h6>Node</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/expressicon.png"} width='20px'></img>
                            <h6>Express</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/mongodbicon.png"} width='20px'></img>
                            <h6>MongoDB</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/sqlicon.png"} width='20px'></img>
                            <h6>sql</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/mernicon.png"} width='20px'></img>
                            <h6>MERN</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/handlebarsicon.png"} width='20px'></img>
                            <h6>Handlebars</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/sassicon.png"} width='20px'></img>
                            <h6>SASS</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/bootstrapicon.png"} width='20px'></img>
                            <h6>Bootstrap</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/jqueryicon.png"} width='20px'></img>
                            <h6>jQuery</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/phpicon.png"} width='20px'></img>
                            <h6>php</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/aiicon.png"} width='20px'></img>
                            <h6>Adobe Illustrator</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/apicon.png"} width='20px'></img>
                            <h6>Adobe Photoshop</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/indesignicon.png"} width='20px'></img>
                            <h6>Adobe In Design</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/xdicon.png"} width='20px'></img>
                            <h6>Adobe XD</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/dwicon.png"} width='20px'></img>
                            <h6>Dreamweaver</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/rwdicon.png"} width='20px'></img>
                            <h6>Responsive Design</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/wpicon.png"} width='20px'></img>
                            <h6>Wordpress</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/wixicon.png"} width='20px'></img>
                            <h6>Wix</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/accessicon.png"} width='20px'></img>
                            <h6>Accessibility</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/webpackicon.png"} width='30px'></img>
                            <h6>Web Pack</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/gqlicon.png"} width='20px'></img>
                            <h6>GraphQL</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/oopicon.png"} height='17px'></img>
                            <h6>OOP</h6>
                        </div>
                        <div className='skill-cell'>
                            <img src={process.env.PUBLIC_URL + "/images/giticon.png"} width='20px'></img>
                            <h6>Git</h6>
                        </div>

                    </div>
                </div>

            </section>
        </main>
    );
}