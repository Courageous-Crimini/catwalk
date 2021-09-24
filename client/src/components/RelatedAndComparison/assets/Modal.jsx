/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { ACTIONS, DispatchContext, StateContext } from '../../App.jsx';
import { RelatedContext } from '../Context.jsx';
import StarRatings from './StarRatings.jsx';
import Features from './Features.jsx';
import Images from './Images.jsx';
import {
  Background, ModalContainer, CompareCard, Compare, Description, OverviewBtn, CloseBtn,
} from '../styles.jsx';

const Modal = ({ crossPrice, onSale, addOutfit }) => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const {
    selectedProductInfo, styles, reviewsMeta, relatedStyles, relatedIdx,
  } = state;
  const { modalKey, setOpenModal } = useContext(RelatedContext);
  const [compCounter, setCompCounter] = useState(0);
  const [prodCounter, setProdCounter] = useState(0);
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
  const changeOverview = () => {
    dispatch({ type: ACTIONS.SET_PRODUCT, payload: modalKey });
    setOpenModal(false);
  };

  const nextComp = () => {
    setCompCounter(compCounter === compLength ? 0 : compCounter + 1);
  };
  const nextProd = () => {
    setProdCounter(prodCounter === prodLength ? 0 : prodCounter + 1);
  };
  const compCards = relatedStyles.slice(compStart, compFinish).map((item) => {
    const {
      id, category, name, description, photos, features, ratings,
      slogan, styleID, styleName, originalPrice, salePrice,
    } = item;

    return (
      <CompareCard key={styleID}>
        <span>{name} &#40;{category}&#41;</span>
        <Images
          crossPrice={crossPrice}
          addOutfit={addOutfit}
          orig={originalPrice}
          nextStyle={nextComp}
          styleID={styleID}
          sale={salePrice}
          photos={photos}
          id={id}
        />
        <Description size="65%">
          {onSale(salePrice)}
          <span>{slogan}</span>
          <span>Style {compCounter + 1} of {compLength + 1}: {styleName}</span>
          <span>{description}</span>
          <Features features={features} />
          <StarRatings ratings={ratings} />
        </Description>
      </CompareCard>
    );
  });

  const prodCards = styles.map((item) => {
    const {
      style_id, name, original_price, sale_price, photos,
    } = item;

    return (
      <CompareCard key={style_id}>
        <span>{selectedProductInfo.name} &#40;{selectedProductInfo.category}&#41;</span>
        <Images
          id={selectedProductInfo.id}
          crossPrice={crossPrice}
          addOutfit={addOutfit}
          orig={original_price}
          nextStyle={nextProd}
          styleID={style_id}
          sale={sale_price}
          photos={photos}
        />
        <Description size="65%">
          {onSale(sale_price)}
          <span>Style {prodCounter + 1} of {prodLength + 1}: {name}</span>
          <span>{selectedProductInfo.slogan}</span>
          <span>{selectedProductInfo.description}</span>
          <Features features={selectedProductInfo.features} />
          <StarRatings ratings={reviewsMeta} />
        </Description>
      </CompareCard>
    );
  });

  return (
    <Background className="compare-modal">
      <ModalContainer>
        <CloseBtn onClick={() => { setOpenModal(false); }}>X</CloseBtn>
        <h2>Comparing</h2>
        <a href="#Overview">
          <OverviewBtn onClick={changeOverview}>VIEW PRODUCT</OverviewBtn>
        </a>
        <Compare>
          {compCards.slice(compCounter, compCounter + 1)}
          {prodCards.slice(prodCounter, prodCounter + 1)}
        </Compare>
      </ModalContainer>
    </Background>
  );
};

export default Modal;
