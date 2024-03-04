import React from 'react';
import Skills from '../skills';
import AboutPreview from '../about-preview';

const styles = {
    homePic: {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/homepage-graphic-version4.jpg)`,
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



export default function Home({ handlePageChange }) {
    const currentPage = 'Home';
    return (
        <main className="main-home">
            <section style={styles.homePic} className='home-image'>

            </section>
            <section id="whatido">
                <Skills handlePageChange={handlePageChange} currentPage={currentPage} />
            </section>

            {/* <section id='about-preview-homepage'>
                <AboutPreview handlePageChange={handlePageChange} currentPage={currentPage} />
            </section> */}

        </main>
    );
}