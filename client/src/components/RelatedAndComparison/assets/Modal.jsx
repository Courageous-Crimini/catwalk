/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Button } from '../styles.jsx';
import { RelatedContext } from '../Context.jsx';
// import Features from './Features.jsx';

// styles, displayIdx, yourOutfit, setYourOutfit, modalkey, setModalKey, openModal, setOpenModal

const Modal = () => {
  const { modalKey, setOpenModal, allStyles } = useContext(RelatedContext);
  // console.log('MODAL KEY', modalKey);
  const currentProduct = {

  }

  compare


  return (
    <div className="related-modal-background">
      <div className="related-modal-container">
        <div>
          <Button onClick={() => { setOpenModal(false); }}>X</Button>
        </div>
        <div className="modal-title">
          <h2>Comparing</h2>
        </div>
        <div className="modal-body">

        </div>
        <div className="modal-footer">
          Modal
        </div>
      </div>
    </div>
  );
};

export default Modal;
