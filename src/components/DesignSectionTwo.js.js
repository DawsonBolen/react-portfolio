

import React from 'react'
import '../styles/graphicDesignProjects.css';



function DesignSectionTwo(props) {
    return (

        <div className='design-project-2'>
            <div className='design-title'>
                <h3>{props.project.title}</h3>
            </div>
            <img src={process.env.PUBLIC_URL + props.project.image} width='394px'></img>
            <p>{props.project.description}</p>
        </div>
    )
}




export default DesignSectionTwo;


