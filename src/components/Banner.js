import React from "react";
import './Banner.css';
import glade from '../assets/images/logo.png';
const Banner = () => {
    return (
        <div>
            <header className="header">
                <div>
                    <div><img className="header-logo" src={glade} alt="glade foundation" /></div>
                </div>
            </header>
            <div className="banner-container">
                <h1 className="title">COVID-19 Solidarity Response Fund</h1>
                <h2 className="sub-title">Help Glade Foundation fight COVID-19</h2>
            </div>
        </div>
    )
}

export default Banner;