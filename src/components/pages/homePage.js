import React from 'react';
import Skills from '../skills';

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
                <Skills />
            </section>

        </main>
    );
}