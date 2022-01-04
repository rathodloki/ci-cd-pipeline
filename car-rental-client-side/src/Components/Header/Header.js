import React from 'react';
import './Header.css';
import SearchBox from '../SearchBox/SearchBox';

//Images
import Logo from '../../images/logo.png';
import Home from '../../images/home.png';
import Favorites from '../../images/favorites.png';
import Profile from '../../images/profile.png';

const Header = () => {

    return (
        <header className="header">
            <div className="header-admin-block">
                <div className="header-admin-block-edit">
                    <button>Edit page</button>
                </div>
                <div className="header-admin-block-user">
                    Hello Admin!
                </div>
            </div>

            <div className="container">
                <div className="header-sections">
                    <nav className="header-navigation">
                        <ul>
                            <li>
                                <button className="header-logo">
                                    <img src={Logo} alt="Car Rental" title="Car Rental"/>
                                    <img src={Logo} alt="Car Rental" title="Car Rental" className="header-logo-transform"/>
                                </button>
                            </li>
                            <li><button className="header-navigation-link header-navigation-link-home"><img src={Home} alt="Home" title="Home" /></button></li>
                            <li><button className="header-navigation-link"><img src={Favorites} alt="My Favorites" title="My Favorites" /></button></li>
                            <li><button className="header-navigation-link"><img src={Profile} alt="My Profile" title="My Profile" /></button></li>
                        </ul>
                    </nav>
                    
                    <div className="header-search">
                        <SearchBox />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;