/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { StateContext } from '../../App.jsx';
import { RelatedContext } from '../Context.jsx';
import Images from './Images.jsx';
import { Button, Background, ModalContainer, Compare, CompareCard, ImageContainer } from '../styles.jsx';
import Features from './Features.jsx';

const Modal = ({ crossPrice, onSale }) => {
  const state = useContext(StateContext);
  const { selectedProduct, relatedIdx, relatedStyles } = state;
  const { modalKey, setOpenModal } = useContext(RelatedContext);
  const [compCounter, setCompCounter] = useState(0);
  const [prodCounter, setProdCounter] = useState(0);
  let compLength;
  let prodLength;
  let compStart;
  let prodStart;
  let compFinish;
  let prodFinish;
  for (let i = 0; i < relatedIdx.length; i += 1) {
    const currentRelatedIdx = relatedIdx[i];
    if (modalKey === currentRelatedIdx.id) {
      compStart = currentRelatedIdx.begin;
      compFinish = currentRelatedIdx.end + 1;
      compLength = compFinish - compStart;
    }
    if (selectedProduct === currentRelatedIdx.id) {
      prodStart = currentRelatedIdx.begin;
      prodFinish = currentRelatedIdx.end + 1;
      prodLength = compFinish - compStart;
    }
  }
  const nextComp = () => {
    setCompCounter(compCounter === compLength ? 0 : compCounter + 1);
  };
  const nextProd = () => {
    setProdCounter(prodCounter === prodLength ? 0 : prodCounter + 1);
  };
  const compCards = relatedStyles.slice(compStart, compFinish).map((item) => {
    const { category, name, description, photos, features } = item;
    const { slogan, styleID, styleName, originalPrice, salePrice } = item;

    return (
      <CompareCard key={styleID}>
        <Button onClick={nextComp}>styles</Button>
        <Images photos={photos} />
        {crossPrice(originalPrice, salePrice)}
        {onSale(salePrice)}
        <span>{slogan}</span>
        <span>{name}</span>
        <span>{styleName}</span>
        <span>{category}</span>
        <span>{description}</span>
        <Features features={features} />
      </CompareCard>
    );
  });
  const prodCards = relatedStyles.slice(prodStart, prodFinish).map((item) => {
    const { category, name, description, photos, features } = item;
    const { slogan, styleID, styleName, originalPrice, salePrice } = item;

    return (
      <CompareCard key={styleID}>
        <Button onClick={nextProd}>styles</Button>
        <Images photos={photos} />
        {crossPrice(originalPrice, salePrice)}
        {onSale(salePrice)}
        <span>{slogan}</span>
        <span>{name}</span>
        <span>{styleName}</span>
        <span>{category}</span>
        <span>{description}</span>
        <Features features={features} />
      </CompareCard>
    );
  });

  return (
    <Background>
      <ModalContainer>
        <Button onClick={() => { setOpenModal(false); }}>X</Button>
        <h2>Comparing</h2>
        <Compare>
          {compCards.slice(compCounter, compCounter + 1)}
          {prodCards.slice(prodCounter, prodCounter + 1)}
        </Compare>
      </ModalContainer>
    </Background>
  );
};

export default Modal;
