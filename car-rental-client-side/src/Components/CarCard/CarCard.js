import React, { useState, useRef } from 'react';
import "../CarCard/CarCard.css";
import ModalBox from '../Modal/Modal'

const CarCard = (prop) => {
    const childRef = useRef();

    const [currentCar, setCurrentCar] = useState('');
    const [galleryInterior, setGalleryInterior] = useState('');
    const [galleryExterior, setGalleryExterior] = useState('');



    const getCurrentCar = (car) => {
        setCurrentCar(car);
        setGalleryInterior(car.gallery.filter(car => car.type.includes("interior")));
        setGalleryExterior(car.gallery.filter(car => car.type.includes("exterior")));
        childRef.current.showAlert();
    }

    return (
        <div className="car-card" onClick={() => getCurrentCar(prop.onClick)}>
            <div className="car-image">
                <img src={`${prop.image}`} alt={prop.name} title={prop.name}>
                </img>
            </div>
            
            <div className="car-details">
                <span className="category">{prop.type}</span>
                <span className="star-wrapper">
                    {prop.rating ? prop.rating.map((star, key) => <span className="star" key={key}></span>) : ''}
                </span>
                <div className="car-name"><h4>{prop.name}</h4></div>
            </div>
            
            <ModalBox data={currentCar} ref={childRef} galleryInt={galleryInterior} galleryExt={galleryExterior}/>
        </div>
    )
}

export default CarCard