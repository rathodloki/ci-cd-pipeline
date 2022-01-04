import React from 'react';
import CarCard from '../CarCard/CarCard';
import Slider from "react-slick";

import { carsData } from '../../data/cars'

import "./FeaturedCars.css"

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedCars = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const featuredCars = (carsData).filter(car => car.isFeatured)

    const renderSlides = () => featuredCars.map((car, key) => (
        <CarCard
            key={key}
            name={car.name}
            rating={car.rating}
            type={car.type}
            image={car.image}
            onClick={car}
        />
    ));

    return (
        <div className="featured-cars" >
            <div className="featured-cars-container">
                <h2 className="featured-cars-title"> Featured Cars</h2>
                <Slider {...settings}>
                    {renderSlides()}
                </Slider>
            </div>
        </div >
    )
}

export default FeaturedCars