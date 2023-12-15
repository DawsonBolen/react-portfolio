import React, { useState, useCallback } from "react";
import '../styles/imageSlider.css';


const slides = [
    {
        id: 1,
        image: '/project-images/poster.jpg'
    },
    {
        id: 2,
        image: '/slider-images/1.jpg'
    },
    {
        id: 3,
        image: '/slider-images/second-slide.jpg'
    },
    {
        id: 4,
        image: '/slider-images/third-slide.jpg'
    },
    {
        id: 5,
        image: '/slider-images/fourth-slide.jpg'
    },
    {
        id: 6,
        image: '/project-images/5-v2.jpg'
    },
    {
        id: 7,
        image: '/slider-images/sixth-slide.jpg'
    }
]

function DrinkCarousel() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    }, []);

    const slideIconClick = (index) => {
        setCurrentSlide(index)
    }

    const totalSlides = slides.length;

    return (
        <div>
            <div id="campaign-slider">
                <div className="carousel" data-carousel>
                    <div onClick={prevSlide} className="carousel-button prev btn-background-circle" data-carousel-button="prev">
                        <svg
                            className="svg-next-prev svgprev"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.32 159.47">
                            <defs>
                            </defs>
                            <path className="svg-btn prev-btn" d="M328.48,293.49h0a12.74,12.74,0,0,0-5.35-10.38l-23-16.4-54.68-39a1.5,1.5,0,0,1,0-2.44l54.68-39,23-16.41a12.74,12.74,0,0,0,5.34-10.37h0a12.74,12.74,0,0,0-20.13-10.37l-44.19,31.5L214.57,216a12.89,12.89,0,0,0,0,21l49.59,35.35,44.18,31.5A12.74,12.74,0,0,0,328.48,293.49Z" transform="translate(-209.16 -146.77)" /></svg>
                    </div>
                    <div onClick={nextSlide} className="carousel-button next btn-background-circle" data-carousel-button="next">
                        <svg className="svg-next-prev svgnext"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 119.32 159.47">
                            <defs>

                            </defs>
                            <path className="svg-btn next-btn" d="M209.16,293.49h0a12.75,12.75,0,0,1,5.34-10.38l23-16.4,54.68-39a1.5,1.5,0,0,0,0-2.44l-54.68-39-23-16.41a12.74,12.74,0,0,1-5.34-10.37h0a12.74,12.74,0,0,1,20.13-10.37l44.19,31.5L323.07,216a12.89,12.89,0,0,1,0,21l-49.59,35.35-44.19,31.5A12.74,12.74,0,0,1,209.16,293.49Z" transform="translate(-209.16 -146.77)" />
                        </svg>
                    </div>
                    <ul data-slides>
                        {slides.map((slide, index) => (

                            <li
                                className={`slide ${currentSlide === index ? "active" : ""}`}
                                key={slide.id}
                            >
                                <img
                                    src={process.env.PUBLIC_URL + slide.image}
                                    alt={`Slide ${slide.id}`}
                                />
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
            <div id='slide-icons'>
                {slides.map((slide, index) => (
                    <div
                        onClick={() => slideIconClick(index)}
                        className={`slide-icon ${currentSlide === index ? "active-slide-icon" : ""}`}
                        key={slide.id}
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${slide.image})` }}
                    >

                    </div>
                ))}


            </div>
        </div>
    );
}




export default DrinkCarousel;