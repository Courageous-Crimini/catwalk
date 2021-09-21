import React, { useState, useContext } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import { RelatedContext } from '../Context.jsx';
import { Image, ImageContainer, Button } from '../styles.jsx';

const Images = ({ photos, crossPrice, removeOutfit, id, orig, sale }) => {
  const [counter, setCounter] = useState(0);
  const length = photos.length - 1;

  const prev = () => {
    setCounter(counter === 0 ? 0 : counter - 1);
  };
  const next = () => {
    setCounter(counter === length ? 0 : counter + 1);
  };

  const images = photos.map((item, index) => {
    const photo = item.thumbnail_url;
    return (
      <Image key={index} src={photo} alt="SORRY NO IMAGE AVAILABLE" />
    );
  });

  return (
    <ImageContainer>
      <FaCaretLeft onClick={prev} />
      <FaCaretRight onClick={next} />
      <Button color="#FF0000" onClick={() => { removeOutfit(id); }}>X</Button>
      {images.slice(counter, counter + 1)}
      {crossPrice(orig, sale)}
    </ImageContainer>
  );
};

export default Images;
