/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Button, Background, ModalContainer, Compare, CompareCard, ImageContainer } from '../styles.jsx';
import { RelatedContext } from '../Context.jsx';
import { StateContext } from '../../App.jsx';
import ImageStyles from './ImageStyles.jsx';

// import Features from './Features.jsx';

const Modal = () => {
  const state = useContext(StateContext);
  const { relatedIdx, relatedStyles } = state;

  const { modalKey, setOpenModal } = useContext(RelatedContext);
  let start;
  let finish;
  for (let i = 0; i < relatedIdx.length; i += 1) {
    const currentRelatedIdx = relatedIdx[i];
    if (modalKey === currentRelatedIdx.id) {
      start = currentRelatedIdx.begin;
      finish = currentRelatedIdx.end + 1;
    }
  }

  const cards = relatedStyles.slice(start, finish).map((item) => {
    const {index, id, category, name, description } = item;
    const { slogan, styleID, styleName, originalPrice, salePrice } = item;
    const onSale = (price) => {
      if (price) {
        return true;
      }
      return false;
    };

    return (
      <CompareCard key={styleID}>
        <ImageStyles />
        <span>&#36;{originalPrice}</span>
        {onSale(salePrice) && <span>&#36;{salePrice}</span>}
        <span>{slogan}</span>
        <span>{name}</span>
        <span>{styleName}</span>
        <span>{category}</span>
        <span>{description}</span>
        {/* <Features /> */}
      </CompareCard>
    );
  });

  return (
    <Background>
      <ModalContainer>
        <Button onClick={() => { setOpenModal(false); }}>X</Button>
        <h2>Comparing</h2>
        <Compare>
          {cards[0]}
          {cards[1]}
        </Compare>
      </ModalContainer>
    </Background>
  );
};

export default Modal;
