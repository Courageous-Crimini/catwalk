/* eslint-disable react/prop-types */
import React from 'react';
import Images from './Images.jsx';
// import Features from './Features.jsx';

const Modal = ({ modalkey, closeModal, styles, products }) => {
  console.log('MODAL KEY', modalkey);

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
