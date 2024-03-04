import React, { useEffect } from 'react';
import '../../styles/GraphicDesign.css';
import DrinkCampaignDisplay from '../drinkCampaign';
import DesignSectionTwo from '../DesignSectionTwo.js';
import { designProjects } from '../../projectData';
import PosterSection from '../Posters';

const styles = {
    GDhead: {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/graphicdesignheader.jpg)`,
        width: '100%',
        textAlign: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
    }
}


export default function GraphicDesign() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <main className="GraphicDesign">
            <section style={styles.GDhead} id="GD-head">
                <h1 id="GDheader">GRAPHIC DESIGN</h1>
            </section>
            <section className="drink-campaign">

                <div id="drink-campaign-description">
                    <div id="drink-camp-mobile">
                        <img id="cups-icon-mobile" src={process.env.PUBLIC_URL + "/project-images/drinkicon.png"}
                            alt="drinks icon of two cups"></img>
                        <h1 id="drink-campaign-heading-1-mobile">DRINK CAMPAIGN</h1>
                    </div>
                    <div id="drink-campaign-description-1">
                        <img id="pepsi-earth" src={process.env.PUBLIC_URL + "/project-images/2.jpg"}></img>
                    </div>
                    <div id="drink-campaign-description-2">
                        <div id="drink-camp">
                            <img id="cups-icon" src={process.env.PUBLIC_URL + "/project-images/drinkicon.png"}
                                alt="drinks icon of two cups"></img>
                            <h1 id="drink-campaign-heading-1">DRINK CAMPAIGN</h1>
                        </div>
                        <p> This is my drink campaign project. It was for a fine arts graphic design class that I Really
                            enjoyed. I created this project mostly in illustrator and In Design, but I put the templates for
                            the cans, tshirts, and the poster together in photoshop.</p>
                        <p> For this project, we were able to chose any drink company and create a concept advertisement
                            campaign. The campaign also had to be for a social cause. I chose Earth day and Pepsi. I felt
                            the Pepsi logo was perfect for an Earth Day related campaign. We were required to create the
                            design for the can on all sides of it. Additionally, we also had to create combo graphics and
                            use photoshop templates to create the can and poster. I had extra time so I also made tshirt
                            templates. </p>
                        <p> This project was a lot of fun because it combined creative freedom with a very real world
                            application of skills. I learned a lot and had fun with this one.</p>
                    </div>
                </div>
                <div className='drinkcampaign-content'>
                    <DrinkCampaignDisplay />
                </div>

            </section>
            <section>
                <div className='design-section-2'>
                    {designProjects.map(project => (
                        <DesignSectionTwo key={project.id} project={project} />
                    ))}
                </div>
            </section>
            <section className='posters'>
                <PosterSection />
            </section>
            <section id='design-section-3-cont'>
                <div id='design-section-3'>



                    <div id='design-3-title'>
                        <div id='other-work-line'></div>
                        <h2>OTHER WORK</h2>

                    </div>

                    <div className='section-3-flex'>
                        <div className='deseign-3-card'>
                            <div className='design-3-img'>
                                <img className='p3-img' src={process.env.PUBLIC_URL + '/project-images/comicpic.jpg'} ></img>
                            </div>
                            <div className='design-3-description'>
                                <h3>Web Comic</h3>
                                <div className='green-line'></div>
                                <div className='purple-line'></div>
                                <p>I made this web comic for a digital story telling class. It is just about a bunch of guys who go on an adventure. I made it using illustrator and then put it together on wix to save time. Plus this was before I really started coding. View the full story <a style={{ color: 'white' }} href='https://dawson120.wixsite.com/webcomic354' target='_blank'>Here.</a> </p>
                            </div>
                        </div>
                        <div className='deseign-3-card'>
                            <div className='design-3-img'>
                                <img className='p3-img' id="lapel" src={process.env.PUBLIC_URL + '/project-images/Lappel.jpg'}></img>
                            </div>
                            <div className='design-3-description'>
                                <h3>CD Design</h3>
                                <div className='green-line'></div>
                                <div className='purple-line'></div>
                                <p>In my digital media class in high school, we had a project where the graphic design students paired up with the video students in groups. The video students shot a music video while we had to make promotional designs and cd designs. I designed this cd in photoshop.</p>
                            </div>
                        </div>
                    </div>

                    <div className='section-3-flex'>
                        <div className='deseign-3-card'>
                            <div className='design-3-img'>
                                <img className='p3-img' src={process.env.PUBLIC_URL + '/project-images/High.jpg'}></img>
                            </div>
                            <div className='design-3-description'>
                                <h3>Anti Drug ad</h3>
                                <div className='green-line'></div>
                                <div className='purple-line'></div>
                                <p>This is also from high school. It was in my same digital media class that I took as an elective for most of my time in high school. We were tasked with making anti drug adds. Specifically against teenage Cannabis use. I made this in photoshop. The message is to get out and do other things than drugs.</p>
                            </div>
                        </div>
                        <div className='deseign-3-card'>
                            <div className='design-3-img'>
                                <img id='high' className='p3-img' src={process.env.PUBLIC_URL + '/project-images/albumcoverweb.jpg'}></img>
                            </div>
                            <div className='design-3-description'>
                                <h3>Album Cover</h3>
                                <div className='green-line'></div>
                                <div className='purple-line'></div>
                                <p>This was a project from a fine arts class I took in college. The task was to create a mockup album cover design. I leaned heavily towards illustrator for a lot of the projects in this class so I chose to make this project in photoshop and In Design.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}