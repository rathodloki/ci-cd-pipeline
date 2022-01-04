import React from 'react';
import CarCard from '../CarCard/CarCard';
import Slider from "react-slick";
import { carsData } from '../../data/cars'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './RecentBookings.css';

const RecentBookings = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
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

    const recentBookings = () =>
        carsData.map((car, key) => (
            <CarCard
                key={key}
                name={car.name}
                type={car.type}
                rating={car.rating}
                image={car.image}
                onClick={car}
            />
        ));

    return (
        <div className="recent-bookings" >
            <div className="recent-bookings-container">
                <h2 className="recent-bookings-title">Recent Bookings</h2>
                <Slider {...settings}>
                    {recentBookings()}
                </Slider>
            </div>
        </div >
    )
}

export default RecentBookings