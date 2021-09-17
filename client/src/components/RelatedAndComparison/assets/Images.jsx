/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
// import Modal from './Modal.jsx';

const Images = ({ images, openModal }) => {
  // /* -------- MODAL ---------- */
  // const [openModal, setOpenModal] = useState(false);

  // /* -------- MODAL ---------- */
  const [currentImage, setCurrentImage] = useState(0);
  const length = images.length;

  const prevImg = () => {
    setCurrentImage(currentImage === 0 ? 0 : currentImage - 1);
  };
  const nextImg = () => {
    setCurrentImage(currentImage === (length - 1) ? 0 : currentImage + 1);
  };

  const displayImages = images.map((item, index) => (
    <div>
      <img
        key={index}
        src={item.thumbnail_url}
        alt="IMAGES COMMING SOON"
        className="image"
        onClick={() => { openModal(true); }}
      />
    </div>
  ));

  return (
    <section className="image-slider">
      <div className="image-container">
        <FaArrowAltCircleLeft onClick={prevImg} />
        <FaArrowAltCircleRight onClick={nextImg} />
        {displayImages[currentImage]}
      </div>
    </section>
  );
};
export default Images;
