import React, { useState } from 'react';

const styles = {
    headerLogo: {
        width: '150px',
        height: '40px',
    }
}

function MobileNav({ currentPage, handlePageChange }) {
    const [show, showNav] = useState(false)

    const toggleShowNav = () => {
        showNav(show);
    }
    return (
        <div className="main-header">
            <img className="header-logo" style={styles.headerLogo} src={process.env.PUBLIC_URL + "/images/header-logo.png"}></img>

            {show ? (
                <div onClick={toggleShowNav} className='nav-x-btn-container'>
                    <div className='nav-x-bar'></div>
                    <div className='nav-x-bar'></div>
                </div>
            ) :
                <div onClick={toggleShowNav} className='hamburger-menu'>
                    <div className='hamburger-bar'>

                    </div>
                    <div className='hamburger-bar'>

                    </div>
                    <div className='hamburger-bar'>

                    </div>
                </div>

            }

            {show ? (

                <ul className="nav nav-tabs-mobile">
                    <li className="nav-item-mobile">
                        <a
                            href="#home"
                            onClick={() => handlePageChange('Home')}


                            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                        >
                            Home
                        </a>
                    </li>
                    <li className="nav-item-mobile">
                        <a
                            href="#about"
                            onClick={() => handlePageChange('About')}
                            //  TODO: Add a comment explaining what this logic is doing

                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                            About
                        </a>
                    </li>
                    <li className="nav-item-mobile">
                        <a
                            href="#WebDev"
                            onClick={() => handlePageChange('WebDev')}
                            //  TODO: Add a comment explaining what this logic is doing

                            className={currentPage === 'WebDev' ? 'nav-link active' : 'nav-link'}
                        >
                            Web Development
                        </a>
                    </li>
                    <li className="nav-item-mobile">
                        <a
                            href="#GraphicDesign"
                            //  TODO: Add a comment explaining what this logic is doing

                            onClick={() => handlePageChange('GraphicDesign')}
                            className={currentPage === 'GraphicDesign' ? 'nav-link active' : 'nav-link'}
                        >
                            Graphic Design
                        </a>
                    </li>
                    <li className="nav-item-mobile">
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

            ) : <></>}



        </div>
    );
}

export default MobileNav;