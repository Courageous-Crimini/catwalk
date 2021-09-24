/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// eslint-disable-next-line import/no-cycle
import { ImageModal } from './ImageModal.jsx';

const ReviewImage = ({ url }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <input type="image" src={url} key={url} alt="" height="50" onClick={openModal} />
      <ImageModal url={url} showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default ReviewImage;
