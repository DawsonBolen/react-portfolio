import React from 'react';


function NavBar({ currentPage, handlePageChange }) {
    return (
        <div className="main-header">
            <img className="header-logo" src='images/header-logo.png' width="150px" height="40px"></img>


            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                        href="#home"
                        onClick={() => handlePageChange('Home')}
                        //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

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
                <button className='github-button'>github</button>
            </a>
            <div className='hamburger-menu'>
                <div className='hamburger-bar'>

                </div>
                <div className='hamburger-bar'>

                </div>
                <div className='hamburger-bar'>

                </div>
            </div>
        </div>
    );
}

export default NavBar;