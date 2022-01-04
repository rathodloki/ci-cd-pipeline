import React from 'react';
import "./Hero.css"
import HeroImage from "../../images/Sedan.png"

const Hero = () => {
    return (
        <div className="container">
            <div className="hero-title">
                <div className="hero-title-heading">
                    <h3>Let’s find you the perfect Car</h3>
                    <div className="hero-description">1000+ cars and trucks available now across Europe</div>
                </div>
                <div className="hero-image">
                    <img src={HeroImage} alt="Hero Sedan Car" />
                </div>
            </div>
        </div>

    )
}

export default Hero