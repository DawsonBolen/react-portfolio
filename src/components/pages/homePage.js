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
        <main style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg.png)` }} className="main-home">
            <div id='home-content'>
                <h1>Checkout My new Portfolio</h1>

                <p>It may still be under construction but it is near complete, I will no longer be using this site</p>

                <a href='https://www.dawsonbolen.com/' target='_blank'>
                    <button>Click Here</button>
                </a>

            </div>


        </main>
    );
}