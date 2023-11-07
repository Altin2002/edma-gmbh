import React from 'react';
import "./style.scss";
import close from "../../assets/images/close.svg"


// Modal for task-6 /home and task-2 /services

const Modal = (props) => {
    const {
        title, description, image, closeModal
    } = props

  return (
    <div className="modal">
        <div className="content-modal">
            <img src={close} alt="" className="close" onClick={() => closeModal()} /> 
            <img className='companyLogo' src={image} alt='' />
            <h2>{title}</h2>
            <h2>{description}</h2>
        </div>
    </div>
  )
}

export default Modal;
