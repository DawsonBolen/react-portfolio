import React, { useState, useEffect } from "react";

function WebDevProjects(props) {
    const [show, setShow] = useState(false)
    const projectImageStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}${props.project.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const toggleReadMore = () => {
        setShow(!show)
    }
    useEffect(() => {
        if (!show) { return }
        function selfDeletingInterval(callback, delay) {
            const intervalId = setInterval(callback, delay);


            setTimeout(function () {
                clearInterval(intervalId);
                console.log("Interval has been cleared.");
                toggleReadMore()
            }, 30000);
        }


        selfDeletingInterval(() => { }, 1000);
    }, [show])

    const renderDetails = () => {
        if (!show) {
            return <></>
        }
        return (<div className="web-projects-content">

            <p>{props.project.description}
                {
                    props.project.repo ? (
                        <span className="repo-span"><a className="repo-link" href={props.project.repo}>View Repo</a></span>
                    ) : null
                }
            </p>

            {
                props.project.link ? (
                    <a href={props.project.link} target="_blank">
                        <button className="view-site" >View Site</button></a>
                ) : null
            }


        </div>)
    }

    {/*show ? " Close" : " Read More"*/ }

    return (

        <div className="web-project">
            <div style={projectImageStyle} className="web-proj">
                <div className="show-more">
                    <h5>{props.project.title}</h5>

                    <button data-index={props.project.id} className="read-more" onClick={toggleReadMore}>

                        {show ? (

                            <div className="x-btn">
                                <div className="bars bar-1"></div>
                                <div className="bars bar-2"></div>
                            </div>

                        ) : null}
                        {show ? "Close" : "Read More"}
                    </button>
                </div>
            </div>

            {renderDetails()}

        </div>



    )
}

export default WebDevProjects;







