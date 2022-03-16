import React from "react";
import ancora from "../assets/images/ancora.png";
import bhc from "../assets/images/BHC-logo.png";
import './OurPartners.css';

const OurPartners =()=>{
    return (
        <div className="partners-section">
            <h1>Our Partners</h1>
            <div>
                <img src={ancora} alt="ancora" />
                <img src={bhc} alt="bhc" />
            </div>
        </div>
    )
}

export default OurPartners;