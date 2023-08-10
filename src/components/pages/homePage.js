import React from 'react';

const styles = {
    homePic: {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/Homelargeheaderpicture.png)`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '0',
        paddingTop: '56.25%',
    },
    webDevIcon: {
        width: '44px',
        height: '34px',
    }

};



export default function Home() {
    return (
        <main className="main-home">
            <section style={styles.homePic} className='home-image'>

            </section>
            <section id="whatido">
                <h2>My Skills</h2>
                <div className="style-line-1"></div>
                <div id="cards">
                    <div className="card">
                        <img src={process.env.PUBLIC_URL + "/images/Webdevicon.png"} width="44px" height="34px" alt="desktop computer icon"></img>
                        <h3>Web Development</h3>
                        <p>I am experienced in web design and development. I am proficient in HTML CSS and JavaScript. I'm skilled in
                            Node.js, Express.js, React.js, some sql, MongoDB, and some PHP.</p>
                        <a><button className="skill-button">Learn More</button></a>
                    </div>
                    <div className="card">
                        <img src={process.env.PUBLIC_URL + "/images/graphicdesignicon.png"} width="44px" height="28px" alt="paintbrush and pen icon"></img>
                        <h3>Graphic Design</h3>
                        <p>I love graphic design. It's something I enjoy doing and have quite a bit of experience with. I have a lot
                            of experience with Adobe Photoshop, Illustrator, In Design, and several more programs.</p>
                        <a><button className="skill-button">Learn More</button></a>
                    </div>
                    <div className="card">
                        <img src={process.env.PUBLIC_URL + "/images/uxdesignicon.png"} width="55px" height="33px"
                            alt="phone and computer icon representing ux design"></img>
                        <h3>UX Design</h3>
                        <p>In additon to my knowledge in coding, I also have experience with UX design. I've learned about UX design
                            and UX testing in several of my classes. I also have experience with Adobe XD.</p>
                        <a><button className="skill-button">Learn More</button></a>
                    </div>
                </div>
            </section>

        </main>
    );
}