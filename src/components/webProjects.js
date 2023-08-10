import React, { useState, useEffect } from "react";

function WebDevProjects(props) {
    const [show, setShow] = useState(false)
    const projectImageStyle = {
        backgroundImage: `url(process.env.PUBLIC_URL + ${props.project.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const toggleReadMore = () => {
        console.log("Toggling")
        setShow(!show)
    }
    useEffect(() => {
        if (!show) { return }
        console.log("This is running")
        //run a timer, and after 15 seconds, toggleReadMore()
        function selfDeletingInterval(callback, delay) {
            const intervalId = setInterval(callback, delay);

            // Set up a timeout to clear the interval after 15 seconds
            setTimeout(function () {
                clearInterval(intervalId);
                console.log("Interval has been cleared.");
                toggleReadMore()
            }, 15000); // 15 seconds in milliseconds
        }


        selfDeletingInterval(() => { }, 1000);
    }, [show])

    const renderDetails = () => {
        if (!show) {
            return <></>
        }
        return (<div className="web-projects-content">
            <div className="x-btn-container">
                <div>
                    <h4>{props.project.title}</h4>
                </div>
                <div className="x-btn">
                    <div className="bars bar-1"></div>
                    <div className="bars bar-2"> </div>
                </div>
            </div>

            <p>{props.project.description}</p>
            <a href={props.project.link}>View
                <button >Site</button></a>
        </div>)
    }


    return (

        <div className="web-project" style={projectImageStyle}>
            <div className="show-more">
                <h5>{props.project.title}</h5>

                <button data-index={props.project.id} className="read-more" onClick={toggleReadMore}>
                    {show ? " Close up" : " Read More"}
                </button>
            </div>
            {renderDetails()}

        </div>



    )
}

export default WebDevProjects;







