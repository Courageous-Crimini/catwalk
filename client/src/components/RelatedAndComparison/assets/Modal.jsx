/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { RelatedContext } from '../Context.jsx';
import { StateContext } from '../../App.jsx';
import Images from './Images.jsx';
import Features from './Features.jsx';
import StarRatings from './StarRatings.jsx';
import {
  Button, Background, ModalContainer, Compare, CompareCard, Description,
} from '../styles.jsx';

const Modal = ({ crossPrice, onSale, addOutfit }) => {
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
    const {
      category, name, description, photos, features, ratings,
      slogan, styleID, styleName, originalPrice, salePrice,
    } = item;

    return (
      <CompareCard key={styleID}>
        <Images
          crossPrice={crossPrice}
          addOutfit={addOutfit}
          orig={originalPrice}
          nextStyle={nextComp}
          sale={salePrice}
          photos={photos}
          id={styleID}
        />
        <Description size="65%">
          {onSale(salePrice)}
          <span>{slogan}</span>
          <span>{name}</span>
          <span>{styleName}</span>
          <span>{category}</span>
          <span>{description}</span>
          <Features features={features} />
          <StarRatings ratings={ratings} />
        </Description>
      </CompareCard>
    );
  });
  const prodCards = relatedStyles.slice(prodStart, prodFinish).map((item) => {
    const {
      category, name, description, photos, features, ratings,
      slogan, styleID, styleName, originalPrice, salePrice,
    } = item;

    return (
      <CompareCard key={styleID}>
        <Images
          crossPrice={crossPrice}
          addOutfit={addOutfit}
          orig={originalPrice}
          nextStyle={nextProd}
          sale={salePrice}
          photos={photos}
          id={styleID}
        />
        <Description size="65%">
          {onSale(salePrice)}
          <span>{slogan}</span>
          <span>{name}</span>
          <span>{styleName}</span>
          <span>{category}</span>
          <span>{description}</span>
          <Features features={features} />
          <StarRatings ratings={ratings} />
        </Description>
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
