import React, { useEffect } from 'react';
import './ToastrMessage.css';
import success_icon from '../../assets/images/copied-successful-icon.png';
import failed_icon from '../../assets/images/txn-out-icon.png';

const ToastrMessage = ({onClose, toastrMsg, status}) => {
    useEffect(()=>{
        const timeout = setTimeout(onClose, 2000);

        return ()=>{
            clearTimeout(timeout);
        }
    },[onClose])
    return (
        <div className="ToastrMessage-container">
            <div className="referral-text">{toastrMsg}</div>
            <img className="icon" src={status? success_icon : failed_icon} alt="copied" />
        </div>
    )
}

export default ToastrMessage
