import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import RecentBookings from './RecentBookings/RecentBookings';
import FeaturedCars from './FeaturedCars/FeaturedCars';

const Home = () =>{ 
    return (
        <div className="Home">
            <Header />
            <Hero />
            <RecentBookings />
            <FeaturedCars />
        </div>
    )
}

export default Home