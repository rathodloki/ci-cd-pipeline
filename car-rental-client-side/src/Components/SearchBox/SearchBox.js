import React, { useState } from 'react';
import './SearchBox.css';
import { cityData } from '../../data/cities'

const SearchBox = () => {
    const [showResults, setShowResults] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCityData, setfilteredCityData] = useState(cityData);
    const handleSearchResult = (e) => {
        const searchWordLength = e.target.value.length;
        setSearchTerm(e.target.value);
        
        /**
         * Handlling visibility of search results
         */
        searchWordLength > 0 ? setShowResults(true) : setShowResults(false);

        const filteredCity = cityData.filter((city) => {
            return city.cityName.includes(searchTerm) || city.countryName.includes(searchTerm)
        })

        /**
         * Filtering cities based on the strings
         */
        setfilteredCityData(filteredCity)

    }

    const LoadCities = () => 
        filteredCityData.map((city, key) => {
            return <div className="search-result-item" key={key}>
                        <div className="search-result-item-image">
                            <img src={city.cityImage} alt="" title="" />
                        </div>
                        <div className="search-result-item-details">
                            <p>
                                {city.cityName}, <span className="search-result-item-country">{city.countryName}</span>
                            </p>
                        </div>
                    </div>
        }
    )
    
    return (
        <div className="search-box">
            <form>
                <input type="text" value={searchTerm} className="search-box-input" onChange={(e) => handleSearchResult(e)} placeholder="City" />
                <input type="text" className="search-box-input" placeholder="Pickup location" />
                <button type="submit" className="search-box-submit">
                    Search
                </button>
                { showResults ? 
                    <div className="search-result">
                        <div className="search-result-title">
                            Search Results
                        </div>
                        <LoadCities />
                    </div>
                : null }
            </form>
        </div>
    )
}

export default SearchBox;