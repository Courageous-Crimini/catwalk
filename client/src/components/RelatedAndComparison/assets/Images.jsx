import React, { useContext, useState } from 'react';
import { StateContext } from '../../App.jsx';
import { RelatedContext } from '../Context.jsx';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import { Image } from '../styles.jsx';

const Images = ({ stylePhotos }) => {
  const [counter, setCounter] = useState(0);
  const length = stylePhotos.length;

  const prev = () => {
    setCounter(counter === 0 ? 0 : counter - 1);
  };
  const next = () => {
    setCounter(counter === length ? 0 : counter + 1);
  };

  const images = stylePhotos.map((item) => {
    // console.log('item in images', item); // comment
    const photo = item.thumbnail_url;
    const { url } = item.url;
    return (
      <a href={url}>
        <Image src={photo} alt="SORRY NO IMAGE AVAILABLE" />
      </a>
    );
  });

  return (
    <>
      <FaCaretLeft onClick={prev} />
      <FaCaretRight onClick={next} />
      {images[counter]}
      image
    </>
  );
};

export default Images;
