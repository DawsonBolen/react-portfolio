import React from 'react'

function Skills({ handlePageChange, currentPage }) {
    return (
        <div>
            <h2 className='barlow-bold'>My Skills</h2>
            <div className="style-line-1"></div>
            <div id="cards">
                <div className="card">
                    <img src={process.env.PUBLIC_URL + "/images/webdev-icon-white.png"} width="44px" height="34px" alt="desktop computer icon"></img>
                    <h3>Web Development</h3>
                    <p>I am experienced in web design and development. I am proficient in HTML CSS, JavaScript, Node, Express, React, sql, MongoDB, graphQL, some PHP, and several other skills listed on my about page.</p>

                    <a
                        href="#WebDev"
                        onClick={() => handlePageChange('WebDev')}
                        className={currentPage === 'WebDev' ? 'nav-link active' : 'nav-link'}
                    >
                        <button className="skill-button">Learn More</button>
                    </a>
                </div>
                <div className="card">
                    <img src={process.env.PUBLIC_URL + "/images/graphicdesignicon2.png"} width="44px" height="28px" alt="paintbrush and pen icon"></img>
                    <h3>Graphic Design</h3>
                    <p>I love graphic design. It's something I enjoy doing and have quite a bit of experience with. I have a lot
                        of experience with Adobe Photoshop, Illustrator, In Design, and several more programs.</p>
                    <a
                        href="#GraphicDesign"
                        onClick={() => handlePageChange('GraphicDesign')}
                        className={currentPage === 'GraphicDesign' ? 'nav-link active' : 'nav-link'}
                    >
                        <button className="skill-button">Learn More</button>
                    </a>
                </div>
                <div className="card">
                    <img src={process.env.PUBLIC_URL + "/images/uxdesignicon2.png"} width="55px" height="33px"
                        alt="phone and computer icon representing ux design"></img>
                    <h3>UX Design</h3>
                    <p>In additon to my knowledge in coding, I also have experience with UX design. I've learned about UX design
                        and UX testing in several of my classes. I also have experience with Adobe XD.</p>

                    <a
                        href="#WebDev"
                        onClick={() => handlePageChange('WebDev')}
                        className={currentPage === 'WebDev' ? 'nav-link active' : 'nav-link'}
                    >
                        <button style={{ zIndex: '50' }} className="skill-button">Learn More</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Skills;