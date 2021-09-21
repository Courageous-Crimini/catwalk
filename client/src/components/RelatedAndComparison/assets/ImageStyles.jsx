/* eslint-disable arrow-body-style */
import React, { useContext, useState } from 'react';
import { StateContext } from '../../App.jsx';
import { RelatedContext } from '../Context.jsx';
import Images from './Images.jsx';
import { Button } from '../styles.jsx';

const ImageStyles = () => {
  const state = useContext(StateContext);
  const { relatedIdx, relatedImages } = state;
  const { modalKey } = useContext(RelatedContext);
  const [counter, setCounter] = useState(0);
  let length;
  let start;
  let finish;

  for (let i = 0; i < relatedIdx.length; i += 1) {
    const currentRelatedIdx = relatedIdx[i];
    if (modalKey === currentRelatedIdx.id) {
      start = currentRelatedIdx.begin;
      finish = currentRelatedIdx.end + 1;
      length = finish - start;
    }
  }
  const next = () => {
    setCounter(counter === length ? 0 : counter + 1);
  };

  const imageStyles = relatedImages.slice(start, finish).map((item) => {
    // console.log('Item in imagesStyles', item); // comment
    return (
      <Images stylePhotos={item.photos} />
    );
  });

  return (
    <>
      <Button onClick={next}>styles</Button>
      {imageStyles[counter]}
    </>
  );
};

export default ImageStyles;
