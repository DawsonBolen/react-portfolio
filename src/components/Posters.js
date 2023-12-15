import React, { useState } from "react";
import '../styles/graphicDesignProjects.css';
import { posters } from "../projectData";

const PosterSection = (props) => {
    const [selectedPosterIndex, setSelectedPosterIndex] = useState(0);

    const handlePosterSelect = (index) => {
        setSelectedPosterIndex(index);
    };

    return (
        <div className="posters-container">
            <div id='posters-header'>
                <div id='posters-line'></div>
                <h2>POSTERS</h2>
                <p>I created several poster and letter sized assignments in school. They range from infographics, to letters, to creative projects. Most of them were done in either illustrator or photoshop. Press the tabs to view the various different projects.The first one is an infographic on distracted driving, the second one is a mockup letter for my college, the third is a mockup layout of a site, the fourth one is a comic I made in a graphic design class, and the last one was an infographic I made for a cultural studies class.</p>
            </div>
            <div className="posters-control">

                <div id='control-btns'>
                    {posters.map((poster, index) => (
                        <div
                            key={poster.id}
                            className="poster-button"
                            id={`poster-${poster.id}`} // Assign IDs to match the poster IDs
                            onClick={() => handlePosterSelect(index)}
                        >
                            <img className="poster-btn-img" src={process.env.PUBLIC_URL + poster.image} alt={poster.title} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="posters-content">
                <div className="posters-content-1">
                    <img src={process.env.PUBLIC_URL + posters[selectedPosterIndex].image} height="300px"></img>
                </div>
                <div className="posters-content-2">
                    <div className="poster-name">
                        <h3>{posters[selectedPosterIndex].title}</h3>
                        <div className="poster-title-line"></div>
                    </div>

                    <p>{posters[selectedPosterIndex].description}</p>
                </div>
            </div>

        </div>
    )
}

export default PosterSection;








{/* <div className="poster-button" id="Distracted-Driving">
                    <img src={process.env.PUBLIC_URL + "/project-images/infographicweb.jpg"} height='50px'></img>
                </div>
                <div className="poster-button" id="Wsu-poster">
                    <img src={process.env.PUBLIC_URL + "/project-images/wsuletterweb.jpg"} height='50px'></img>
                </div>
                < div className="poster-button" id="ski-resort">
                    <img src={process.env.PUBLIC_URL + "/project-images/skiresort.jpg"} height='50px'></img>
                </div>
                <div className="poster-button" id="poster-comic">
                    <img src={process.env.PUBLIC_URL + "/project-images/postercomicweb.jpg"} height='50px'></img>
                </div>
                <div className="poster-button" id="cultural-comparison">
                    <img src={process.env.PUBLIC_URL + "/project-images/culturalcomparrison.jpg"} height='50px'></img>
                </div> */}