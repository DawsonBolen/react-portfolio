import React, { useState } from "react";
import '../styles/GraphicDesign.css';
import DrinkCarousel from './drink-campaign-carousel'
import DrinkCampaignGrid from './drink-campaign-grid'

function DrinkCampaignDisplay() {
    const [displayCarousel, setDisplayCarousel] = useState(true); // Separate state for carousel display
    const [displayGrid, setDisplayGrid] = useState(false);

    const activateCarousel = () => {
        setDisplayCarousel(true);
        setDisplayGrid(false);
    }

    const activateGrid = () => {
        setDisplayCarousel(false);
        setDisplayGrid(true);
    }
    return (
        <div>
            {displayCarousel ? <DrinkCarousel /> : null}
            {displayGrid ? <DrinkCampaignGrid /> : null}
            <div id="gallery-or-slider">
                <div id="slider-btn" onClick={activateCarousel}>
                    <img src={process.env.PUBLIC_URL + "/images/slider-icon.png"} height="50px"></img>
                </div>
                <div id="galery-btn" onClick={activateGrid}>
                    <img src={process.env.PUBLIC_URL + "/images/grid-icon.png"} height="50px"></img>
                </div>
            </div>
        </div>
    );

}

export default DrinkCampaignDisplay;