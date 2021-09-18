/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { RelatedContext } from '../Context.jsx';
// import Features from './Features.jsx';

// styles, displayIdx, yourOutfit, setYourOutfit, modalkey, setModalKey, openModal, setOpenModal

const Modal = () => {
  console.log('MODAL KEY', modalkey);
  const { modalkey, closeModal } = useContext(RelatedContext);

  return (
    <div className="related-modal-background">
      <div className="related-modal-container">
        <div>
          <button type="button" className="modal-button" onClick={() => { closeModal(false); }}>X</button>
        </div>
        <div className="modal-title">
          <h2>Comparing</h2>
        </div>
        <div className="modal-body">
          <p>body info</p>
        </div>
        <div className="modal-footer">
          Modal
        </div>
      </div>
    </div>
  );
};

export default Modal;
