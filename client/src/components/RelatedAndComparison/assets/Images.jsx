import React, { useState, useContext } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import { RelatedContext } from '../Context.jsx';
import { Image, ImageContainer, Button, CornerBtn, LeftImageArrow, RightImageArrow } from '../styles.jsx';

const Images = ({ photos, crossPrice, removeOutfit, id, orig, sale, addOutfit, nextStyle }) => {
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

  if (removeOutfit) {
    return (
      <ImageContainer>
        <LeftImageArrow>
          <FaCaretRight onClick={next} />
        </LeftImageArrow>
        <RightImageArrow>
          <FaCaretLeft onClick={prev} />
        </RightImageArrow>
        <Button color="#FF0000" onClick={() => { removeOutfit(id); }}>X</Button>
        {images.slice(counter, counter + 1)}
        {crossPrice(orig, sale)}
      </ImageContainer>
    );
  }
  return (
    <ImageContainer>
      <LeftImageArrow>
        <FaCaretLeft onClick={prev} />
      </LeftImageArrow>
      <RightImageArrow>
        <FaCaretRight onClick={next} />
      </RightImageArrow>
      <Button color="#00CCCC" onClick={() => { addOutfit  (styleID); }}>&#9733;</Button>
      <CornerBtn onClick={nextStyle}>styles</CornerBtn>
      {images.slice(counter, counter + 1)}
      {crossPrice(orig, sale)}
    </ImageContainer>
  );
};

export default Images;
