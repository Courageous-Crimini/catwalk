/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Button } from '../styles.jsx';
import { RelatedContext } from '../Context.jsx';
import Images from './Images.jsx';
// import Features from './Features.jsx';

const Modal = () => {
  const { styles, modalKey, setOpenModal, idx } = useContext(RelatedContext);
  let start;
  let finish;

  for (let i = 0; i < idx.length; i += 1) {
    const currentidx = idx[i];
    if (modalKey === currentidx.id) {
      start = currentidx.begin;
      finish = currentidx.end + 1;
    }
  }
  const cards = styles.slice(start, finish).map((item) => {
    console.log(item.id);
    const { index, id, category, name, description } = styles;
    const { slogan, styleID, styleName, originalPrice, salePrice } = styles;

    return (
      <section key={styleIDs}>
        {/* <Images /> */}
        <span>{originalPrice}</span>
        <span>{salePrice}</span>
        <span>{slogan}</span>
        <span>{name}</span>
        <span>{styleName}</span>
        <span>{category}</span>
        <span>{description}</span>
        {/* <Features /> */}

      </section>
    )
  });

  return (
    <section>
      <Button onClick={() => { setOpenModal(false); }}>X</Button>
      <h2>Comparing</h2>
      {cards}
    </section>
  );
};

export default Modal;
