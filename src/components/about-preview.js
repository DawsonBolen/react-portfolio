import React from 'react'

const AboutPreview = () => {
    return (
        <div id='about-preview-home'>
            <div>
                <h2>SOFTWARE DEVELOPER AND DESIGNER</h2>
                <h3>I AM A FULL STACK DEVELOPER WITH PASSION FOR DESIGN AS WELL</h3>
            </div>
            <div>
                <img className='head-shot-transparent' src={process.env.PUBLIC_URL + "/images/headshot-2.png"}></img>
            </div>

        </div>

    )
}

export default AboutPreview;