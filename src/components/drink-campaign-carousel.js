import React, { useState, useCallback } from "react";
import '../styles/imageSlider.css';

const styles = {
    nextButton: {
        backgroundImage: `url(${process.env.PUBLIC_URL}/slider-images/arrow-right.png`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    },
    prevButton: {
        backgroundImage: `url(${process.env.PUBLIC_URL}/slider-images/arrow-left.png`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    },
}

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
        image: '/slider-images/5.jpg'
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

    const totalSlides = slides.length;

    return (
        <div id="campaign-slider">
            <div className="carousel" data-carousel>
                <button onClick={prevSlide} className="carousel-button prev" data-carousel-button="prev">
                    <div style={styles.prevButton} className="prev-button-style"></div>
                    {console.log("Next slide clicked")}
                    {console.log("Current slide:", currentSlide)}
                </button>
                <button onClick={nextSlide} className="carousel-button next" data-carousel-button="next">
                    <div style={styles.nextButton} className="next-button-style"></div>
                </button>
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
    );
}





export default DrinkCarousel;