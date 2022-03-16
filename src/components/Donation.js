import React, { useState } from "react";
import glade_two from '../assets/images/logo.png';
import glade from '../assets/images/logo3.png';

const Donation = () => {
    const [error, setError] = useState({})
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const setInputs = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        switch (name) {
            case 'firstname':
                setFirstname(value)
                setError({ ...error, firstname: false })
                break;
            case 'lastname':
                setLastname(value)
                setError({ ...error, lastname: false })
                break;
            case 'email':
                setEmail(value)
                setError({ ...error, email: false })
                break;
            case 'amount':
                setAmount(value)
                setError({ ...error, amount: false })
                break;
            case 'description':
                setDescription(value)
                setError({ ...error, description: false })
                break;
            default: return null;
        }
    }

    const initiatePayment = () => {
        window.initPayment({
            MID: "GP0000001",
            email: email,
            firstname: firstname,
            lastname: lastname,
            description: description,
            title: "",
            amount: amount,
            country: "NG",
            currency: "NGN",
            onclose: function () {
                console.log('glade modal closed')
            },
            callback: function (response) {
                console.log(response);
            }
        });
    }
    return (
        <div>
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
                    <div className="float-support-image">
                        <div className="item">
                            <div>
                                <img src={glade} alt="glade foundation" />
                                <p>Help Glade Foundations Fight the Effects of <b>COVID-19</b> by supporting us with funds.</p>
                            </div>
                        </div>
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
                        <div><img src={glade_two} className="glade-two" alt="glade" /></div>
                        <h2>Support us with COVID-19 relief fund</h2>
                    </div>
                    <form id="support" className="support-form">
                        <div className="container-width">
                            <input className="support-input" name="firstname" id='firstname' onChange={setInputs} placeholder="First Name" />
                            {error.firstname ? <p className="error-field">Invalid first name</p> : null}
                        </div>
                        <div className="container-width">
                            <input className="support-input" id='lastname' name="lastname" onChange={setInputs} placeholder="Last Name" />
                            {error.lastname ? <p className="error-field">Invalid last name</p> : null}
                        </div>
                        <div className="container-width">
                            <input className="support-input" id='address' name="address" placeholder="Home Address" onChange={setInputs} />
                            {error.address ? <p className="error-field">Invalid Address</p> : null}
                        </div>
                        <div className="container-width">
                            <input className="support-input" type='number' name="phone" id='phone' placeholder="phone" onChange={setInputs} />
                            {error.lastname ? <p className="error-field">Invalid phone number</p> : null}
                        </div>
                        <div className="container-width">
                            <textarea className="support-input" id='message' name="message" placeholder="Reason for fund" onChange={setInputs}></textarea>
                            {error.message ? <p className="error-field">Invalid Message</p> : null}
                        </div>
                        <div className="container-width">
                            <button id='phone' type="submit" onClick={initiatePayment}>Donate</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Donation;