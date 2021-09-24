/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { RelatedContext } from '../Context.jsx';
import { StateContext } from '../../App.jsx';
import Images from './Images.jsx';
import Features from './Features.jsx';
import StarRatings from './StarRatings.jsx';
import {
  CloseBtn, Background, ModalContainer, Compare, CompareCard, Description,
} from '../styles.jsx';

const Modal = ({ crossPrice, onSale, addOutfit }) => {
  const state = useContext(StateContext);
  const {
    relatedStyles, relatedIdx, styles, products,
    selectedProduct, selectedProductFeatures, reviewsMeta,
  } = state;
  const { modalKey, setOpenModal } = useContext(RelatedContext);
  const [compCounter, setCompCounter] = useState(0);
  const [prodCounter, setProdCounter] = useState(0);
  const selected = products.filter((item) => item.id === selectedProduct);
  const prodLength = styles.length - 1;

  let compLength;
  let compStart;
  let compFinish;
  for (let i = 0; i < relatedIdx.length; i += 1) {
    const currentRelatedIdx = relatedIdx[i];
    if (modalKey === currentRelatedIdx.id) {
      compStart = currentRelatedIdx.begin;
      compFinish = currentRelatedIdx.end + 1;
      compLength = compFinish - compStart - 1;
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
          <span>Style {compCounter + 1} of {compLength + 1}: {styleName}</span>
          <span>{name}</span>
          <span>{slogan}</span>
          <span>{category}</span>
          <span>{description}</span>
          <Features features={features} />
          <StarRatings ratings={ratings} />
        </Description>
      </CompareCard>
    );
  });

  const prodCards = styles.map((item) => {
    const { style_id, name, original_price, photos, sale_price } = item;

    return (
      <CompareCard key={style_id}>
        <Images
          crossPrice={crossPrice}
          addOutfit={addOutfit}
          orig={original_price}
          nextStyle={nextProd}
          sale={sale_price}
          photos={photos}
          id={style_id}
        />
        <Description size="65%">
          {onSale(sale_price)}
          <span>Style {prodCounter + 1} of {prodLength + 1}: {name}</span>
          <span>{selected[0].name}</span>
          <span>{selected[0].slogan}</span>
          <span>{selected[0].category}</span>
          <span>{selected[0].description}</span>
          <Features features={selectedProductFeatures} />
          <StarRatings ratings={reviewsMeta} />
        </Description>
      </CompareCard>
    );
  });

  return (
    <Background>
      <ModalContainer>
        <CloseBtn onClick={() => { setOpenModal(false); }}>X</CloseBtn>
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
