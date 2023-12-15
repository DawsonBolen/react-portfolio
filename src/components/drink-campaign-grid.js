import React from "react";
import '../styles/drinkCampaignGrid.css';

export default function DrinkCampaignGrid() {
    return (
        <div id='drink-grid-container'>
            <div id="drink-campaign-main">
                <div className="drink-card long" id="photo1">
                    <img id="first-photo" src={process.env.PUBLIC_URL + "/project-images/1.jpg"}
                        alt="design of large poster with can design and two polar bear cubs. One of the cubs is handing a pepsi to the other cub"></img>
                </div>
                <div className="drink-card square" id="photo2">
                    <img className="twohundred" src={process.env.PUBLIC_URL + "/project-images/2.jpg"}
                        alt="the design of the front of the can"></img>
                </div>
                <div className="drink-card square" id="photo3">
                    <img className="twohundred" src={process.env.PUBLIC_URL + "/project-images/3.jpg"}
                        alt="the design of the back of the can"></img>
                </div>
                <div className="drink-card square" id="photo4">
                    <img id="fourth-photo" src={process.env.PUBLIC_URL + "/project-images/4.jpg"}
                        alt="the design of the side of the can"></img>
                </div>

                <div className="drink-card square" id="photo6">
                    <img className="twohundred" src={process.env.PUBLIC_URL + "/project-images/6.png"}
                        alt="special combo graphic of the two cubs but this time on a bottle cap icon"></img>
                </div>
                <div className="drink-card square" id="photo7">
                    <img className="twohundred" src={process.env.PUBLIC_URL + "/project-images/7.png"}
                        alt="another bottle cap icon but this one also includes the mother polar bear"></img>
                </div>
                <div className="drink-card square" id="photo8">
                    <img className="twohundred" src={process.env.PUBLIC_URL + "/project-images/8.jpg"}
                        alt="front of the can edited onto an actual can mockup"></img>
                </div>
                <div className="drink-card square" id="photo9">
                    <img className="twohundred" src={process.env.PUBLIC_URL + "/project-images/9.jpg"}
                        alt="another can mockup but this one is the back of the can"></img>
                </div>
                <div className="drink-card square" id="photo10">
                    <img className="twohundred" src={process.env.PUBLIC_URL + "/project-images/10.jpg"}
                        alt="another mockup of the side of the can."></img>
                </div>
                <div className="drink-card square" id="photo11">
                    <img className="twohundred" src={process.env.PUBLIC_URL + "/project-images/11.jpg"} alt="t-shirt mockup design"></img>
                </div>
                <div className="drink-card square" id="photo12">
                    <img className="twohundred" src={process.env.PUBLIC_URL + "/project-images/12.jpg"}
                        alt="t-shirt mockup design. this one is of the back of the t-shirt"></img>
                </div>
                <div className="drink-card small-rectangle" id="photo5">
                    <img id="fifth-photo" src={process.env.PUBLIC_URL + "/project-images/5.jpg"}
                        alt="combo graphic of the two polar bear cubs"></img>
                </div>
                <div className="drink-card big" id="photo13">
                    <img id="thirteenth-photo" src={process.env.PUBLIC_URL + "/project-images/poster.jpg"}
                        alt="mockup of that can in a poster design displayed on a city street"></img>
                </div>
            </div>
        </div>
    )
}