import React, { useState } from "react";
import glade_two from '../../assets/images/logo.png';
import glade from '../../assets/images/logo3.png';
import './Donation.css';

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
        let formData = {firstname, lastname, email, amount, description};
        let formIsValid = [];

        Object.keys(formData).forEach((key) => {
            switch (key) {
                case 'firstname':
                    if (!formData[`${key}`] || formData[`${key}`].length < 3) {
                        setError(prev => ({ ...prev, firstname: true }));
                        return formIsValid.push(key);
                    }
                    break;
                case 'lastname':
                    if (!formData[`${key}`] || formData[`${key}`].length < 3) {
                        setError(prev => ({ ...prev, lastname: true }))
                        return formIsValid.push(key);
                    }
                    break;
                case 'email':
                    const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (!formData[`${key}`] || !emailFormat.test(formData[`${key}`])) {
                        setError(prev => ({ ...prev, email: true }));
                        return formIsValid.push(key);
                    }
                    break;
                case 'description':
                    if (!formData[`${key}`] || formData[`${key}`].length < 5) {
                        setError(prev => ({ ...prev, description: true }));
                        return formIsValid.push(key);  
                    }
                    break;
                case 'amount':
                    if (!formData[`${key}`] || formData[`${key}`] < 100 ) {
                        setError(prev => ({ ...prev, amount: true }));
                        return formIsValid.push(key);
                    }
                    break;
                default: return null;
            }
        })
        if(formIsValid?.length > 0){
            return null;
        }else{
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
                logo: 'https://res.cloudinary.com/iinintinteintegintegrintegral/image/upload/v1647461354/logo_fm0lof.png',
                onclose: function () {
                    console.log('glade modal closed')
                },
                callback: function (response) {
                    console.log(response);
                }
            });
        }
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
                            {error.firstname ? <p className="error-field">Invalid First Name</p> : null}
                        </div>
                        <div className="container-width">
                            <input className="support-input" id='lastname' name="lastname" onChange={setInputs} placeholder="Last Name" />
                            {error.lastname ? <p className="error-field">Invalid Last Name</p> : null}
                        </div>
                        <div className="container-width">
                            <input className="support-input" type="email" id='email' name="email" placeholder="Email Address" onChange={setInputs} />
                            {error.email ? <p className="error-field">Invalid Email Address</p> : null}
                        </div>
                        <div className="container-width">
                            <input className="support-input" type='number' name="amount" id='amount' placeholder="Amount: Minimum of NGN100" onChange={setInputs} />
                            {error.lastname ? <p className="error-field">Invalid Amount</p> : null}
                        </div>
                        <div className="container-width">
                            <textarea className="support-input" id='description' name="description" placeholder="Add description" onChange={setInputs}></textarea>
                            {error.description ? <p className="error-field">Invalid Description</p> : null}
                        </div>
                    </form>
                    <div className="donate-btn">
                        <button id='phone' type="submit" onClick={initiatePayment}>Donate</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donation;