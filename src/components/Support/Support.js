import React, { useEffect, useState } from "react";
import './Support.css';
import './SupportMobile.css';
import { useForm } from '@formspree/react';
import glade from '../../assets/images/logo3.png';
import glade_two from "../../assets/images/logo.png";

const Support = ({ setToastrMsg, setStatus, setShowToastr }) => {
    const [state, handleSubmit] = useForm("xknyzrbo");
    const [error, setError] = useState({
        firstname: false,
        lastname: false,
        phone: false,
        address: false,
        message: false
    });
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        address: '',
        message: ''
    });
    useEffect(() => {
        if (state.succeeded) {
            setToastrMsg('Form Submitted Successfully');
            setStatus(true);
            setShowToastr(true);
            handleSubmit({ ...state, succeeded: false });
        }
    })
    const validateFxn = (e) => {
        e.preventDefault();
        let formIsValid = [];
        Object.keys(formData).forEach((key) => {
            switch (key) {
                case 'firstname':
                    if (!formData[`${key}`] || formData[`${key}`].length < 3) {
                        formIsValid.push(key);
                        setError(prev => ({ ...prev, firstname: true }))
                    }
                    break;
                case 'lastname':
                    if (!formData[`${key}`] || formData[`${key}`].length < 3) {
                        formIsValid.push(key);
                        setError(prev => ({ ...prev, lastname: true }))
                    }
                    break;
                case 'phone':
                    if (!formData[`${key}`] || (formData[`${key}`].length < 5 || formData[`${key}`].length > 11)) {
                        formIsValid.push(key);
                        setError(prev => ({ ...prev, phone: true }));
                    }
                    break;
                case 'message':
                    if (!formData[`${key}`] || formData[`${key}`].length < 10) {
                        formIsValid.push(key);
                        setError(prev => ({ ...prev, message: true }));
                    }
                    break;
                case 'address':
                    if (!formData[`${key}`] || formData[`${key}`].length < 10) {
                        formIsValid.push(key);
                        return setError(prev => ({ ...prev, address: true }));
                    }
                    break;
                default: return null;
            }
        })
        if (formIsValid.length > 0) {
            return null
        } else {
            handleSubmit(e);
        }
    }
    const setInputs = (data) => {
        let name = data.target.name;
        let value = data.target.value;

        switch (name) {
            case 'firstname':
                setFormData({ ...formData, firstname: value });
                setError({ ...error, firstname: false });
                break;
            case 'message':
                setFormData({ ...formData, message: value });
                setError({ ...error, message: false });
                break;
            case 'lastname':
                setFormData({ ...formData, lastname: value });
                setError({ ...error, lastname: false });
                break;
            case 'address':
                setFormData({ ...formData, address: value });
                setError({ ...error, address: false });
                break;
            case 'phone':
                setFormData({ ...formData, phone: value });
                setError({ ...error, phone: false });
                break;
            default: return null;
        }
    }
    const successfulSubmission = () => {
        console.log('here')
        setFormData({
            firstname: '',
            lastname: '',
            phone: '',
            address: '',
            message: ''
        });
        handleSubmit({ ...state, succeeded: false })
    }

    if (state.succeeded) {
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
                    <div className="float-support-image">
                        <div className="item">
                            <div>
                                <img src={glade} alt="glade foundation" />
                                <p>Supply your details and along with a reason for the relief fund request, We'll contact you.</p>
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
                        <h2>Request Processed, You'll be contacted!.</h2>
                    </div>
                    <form className="support-form">
                        <div className="container-width">
                            <button id='phone' type="button" placeholder="phone" onClick={successfulSubmission}>Back to form</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
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
                <div className="float-support-image">
                    <div className="item">
                        <div>
                            <img src={glade} alt="glade foundation" />
                            <p>Supply your details and along with a reason for the relief fund request, We'll contact you.</p>
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
                    <h2>Request for COVID-19 relief fund</h2>
                </div>
                <form id="support" onSubmit={validateFxn} className="support-form">
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
                        <button id='phone' type="submit" disabled={state.submitting}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Support;