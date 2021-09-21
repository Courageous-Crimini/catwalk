/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import { Image } from '../styles.jsx';

const Images = ({ photos }) => {
  const [counter, setCounter] = useState(0);
  const length = photos.length;

  const prev = () => {
    setCounter(counter === 0 ? 0 : counter - 1);
  };
  const next = () => {
    setCounter(counter === length ? 0 : counter + 1);
  };

  const images = photos.map((item, index) => {
    const photo = item.thumbnail_url;
    return (
      <Image key={index} src={photo} alt="NO IMAGE AVAILABLE" />
    );
  });

  return (
    <>
      <FaCaretLeft onClick={prev} />
      <FaCaretRight onClick={next} />
      {images[counter]}
    </>
  );
};

export default Images;
