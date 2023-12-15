

import React from 'react'
import '../styles/graphicDesignProjects.css';



function DesignSectionTwo(props) {
    return (

        <div className='design-project-2'>
            <img className='project-2-images' src={process.env.PUBLIC_URL + props.project.image}></img>
            <div className='prj-2-btm'>
                <h3>{props.project.title}</h3>
                <div className='prj-2-ine' />
                <p>{props.project.description}</p>
            </div>

        </div>
    )
}




export default DesignSectionTwo;


