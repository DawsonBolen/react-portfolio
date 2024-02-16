import React, { useState, useEffect } from "react";
import '../styles/webdev.css';

function WebDevProjects(props, onclick) {
    const [show, setShow] = useState(false)
    const projectImageStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}${props.project.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };
    const toggleReadMore = () => {
        setShow(!show)
    }


    return (

        <div className="web-project">
            <div style={projectImageStyle} className="web-proj">
                <div className="show-more">
                    <h5>{props.project.title}</h5>

                    <button data-index={props.project.id} className="read-more" onClick={() => props.onClick(props.project.id, props.project.category)}>

                        Read More
                    </button>

                </div>
            </div>



        </div>



    )
}

export default WebDevProjects;






// come back here for read more functionallity 4
