import React from 'react';
import { Modal, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import close from "../../assets/images/close.svg"
import "./style.scss"

//modal for architecture

const ArchitectureModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
      <Modal open={isOpen} onClose={onClose}>
      <div className="project-modal">
        <div className="modal-content">
          <Typography variant="h4">{project.name}</Typography>
          <Carousel>
            {project.images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Project Img ${index}`} />
              </div>
            ))}
          </Carousel>
          <Typography className='description' variant="body1">{project.description}</Typography>
          <img src={close} alt="" className="close" onClick={onClose} /> 

        </div>
      </div>
    </Modal>
  );
};

export default ArchitectureModal;
