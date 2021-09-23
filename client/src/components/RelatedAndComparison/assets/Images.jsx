import React, { useState } from 'react';
import {
  Image, ImageContainer, Button, CornerBtn,
} from '../styles.jsx';

const Images = ({
  photos, crossPrice, removeOutfit, id, orig, sale, addOutfit, nextStyle,
}) => {
  const [counter, setCounter] = useState(0);
  const length = photos.length - 1;
  const next = () => {
    setCounter(counter === length ? 0 : counter + 1);
  };

  const images = photos.map((item, index) => {
    const photo = item.thumbnail_url;
    return (
      <Image key={index} onClick={next} src={photo} alt="SORRY NO IMAGE AVAILABLE" />
    );
  });

  if (removeOutfit) {
    return (
      <ImageContainer>
        <Button color="#FF0000" onClick={() => { removeOutfit(id); }}>X</Button>
        {images.slice(counter, counter + 1)}
        {crossPrice(orig, sale)}
      </ImageContainer>
    );
  }
  return (
    <ImageContainer>
      <Button color="#00CCCC" onClick={() => { addOutfit(id); }}>&#9733;</Button>
      <CornerBtn onClick={nextStyle}>styles</CornerBtn>
      {images.slice(counter, counter + 1)}
      {crossPrice(orig, sale)}
    </ImageContainer>
  );
};

export default Images;
