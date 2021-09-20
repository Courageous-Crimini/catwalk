import React from 'react';

const Modal = ({ closeModal }) => {
  const tim = true;
  return (
    <section className="related-modal-background">
      <div className="related-modal-container">
        <div>
          <button type="button" className="modal-button" onClick={() => { closeModal(false); }}>X</button>
        </div>
        <div className="modal-title">
          <h2>Comparing</h2>
        </div>
        <div className="modal-body">
          <p>Body</p>
        </div>
        <div className="modal-footer"></div>
        Footer
      </div>
    </section>
  );
};

export default Modal;
