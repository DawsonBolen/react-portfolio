import React from 'react';

const styles = {
    headerLogo: {
        width: '55px',
    }
}

function NavBar({ currentPage, handlePageChange }) {
    return (
        <div className="main-header">
            <img className="header-logo" style={styles.headerLogo} src={process.env.PUBLIC_URL + "/images/header-logo.png"}></img>


            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                        href="#home"
                        onClick={() => handlePageChange('Home')}


                        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    >
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        //  TODO: Add a comment explaining what this logic is doing

                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#WebDev"
                        onClick={() => handlePageChange('WebDev')}
                        //  TODO: Add a comment explaining what this logic is doing

                        className={currentPage === 'WebDev' ? 'nav-link active' : 'nav-link'}
                    >
                        Web Development
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#GraphicDesign"
                        //  TODO: Add a comment explaining what this logic is doing

                        onClick={() => handlePageChange('GraphicDesign')}
                        className={currentPage === 'GraphicDesign' ? 'nav-link active' : 'nav-link'}
                    >
                        Graphic Design
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"
                        //  TODO: Add a comment explaining what this logic is doing

                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
            </ul>
            <a href="https://github.com/DawsonBolen" target='_blank'>
                <button className='github-button'>GitHub</button>
            </a>
        </div>
    );
}

export default NavBar;