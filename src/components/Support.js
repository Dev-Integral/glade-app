import React from "react";
import './Support.css';
const Support = () => {
    return (
        <div className="support-container">
            <div className="section-one">
                <div className="circle-container">
                    <div className="cirle"></div>
                    <div className="cirle"></div>
                    <div className="cirle"></div>
                    <div className="cirle"></div>
                </div>
                <div className="circle-container">
                    <div className="cirle"></div>
                    <div className="cirle"></div>
                    <div className="cirle"></div>
                </div>
                <div className="circle-container">
                    <div className="cirle"></div>
                    <div className="cirle"></div>
                </div>
                <div className="circle-container">
                    <div className="cirle"></div>
                </div>
                <div className="rotated-and-float">
                    <div className="circle-container">
                        <div className="cirle"></div>
                        <div className="cirle"></div>
                        <div className="cirle"></div>
                        <div className="cirle"></div>
                    </div>
                    <div className="circle-container">
                        <div className="cirle"></div>
                        <div className="cirle"></div>
                        <div className="cirle"></div>
                    </div>
                    <div className="circle-container">
                        <div className="cirle"></div>
                        <div className="cirle"></div>
                    </div>
                    <div className="circle-container">
                        <div className="cirle"></div>
                    </div>
                </div>
            </div>
            <div className="section-two">
                <div>
                    <h3>Request for COVID-19 relief fund</h3>
                </div>
                <form className="support-form">
                    <div  className="container-width">
                        <label>Enter firstname</label><br/>
                        <input className="support-input" id='firstname' placeholder="First Name" />
                    </div>
                    <div  className="container-width">
                        <input className="support-input" id='lastname' placeholder="Last Name" />
                    </div>
                    <div  className="container-width">
                        <input className="support-input" id='address' placeholder="Address" />
                    </div>
                    <div  className="container-width">
                        <input className="support-input" id='phone' placeholder="phone" />
                    </div>
                    <div className="container-width">
                        <textarea className="support-input" id='message' placeholder="Reason for fund"></textarea>
                    </div>
                    <div className="container-width">
                        <button id='phone' type="button" placeholder="phone">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Support;