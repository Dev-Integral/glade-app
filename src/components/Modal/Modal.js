import React from 'react'
import ReactDom from 'react-dom';

import './Modal.css'

const Modal = ({open, onClose, children}) => {
    if(!open) return null;
    return ReactDom.createPortal ( 
        <>
            <div onClick={onClose} className="modal-overlay"/>
            <div className="modal-container">
                {children}
            </div>
        </>,
        document.getElementById('modal-portal')
    )
}

export default Modal
