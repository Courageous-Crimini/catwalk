/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { ACTIONS, DispatchContext, StateContext } from '../../App.jsx';
import { RelatedContext } from '../Context.jsx';
import StarRatings from './StarRatings.jsx';
import {
  CardsContainer,
  ImageContainer,
  Description,
  RightArrow,
  LeftArrow,
  CornerBtn,
  StarBtn,
  Image,
  Card,
} from '../styles.jsx';

const RelatedProducts = ({
  addOutfit, crossPrice, onSale, showLeftArrow, showRightArrow
}) => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const { relatedDisplay } = state;
  const { setModalKey, setOpenModal } = useContext(RelatedContext);

  /* CHANGE BELOW AFTER REFACTOR ---------------------------------------------*/
  const [currentCard, setCurrentCard] = useState(0);
  const length = relatedDisplay.length - 1;

  const prev = () => {
    setCurrentCard(currentCard === 0 ? 0 : currentCard - 1);
  };
  const next = () => {
    setCurrentCard(currentCard === length ? 0 : currentCard + 1);
  };
  /* CHANGE ABOVE AFTER REFACTOR ---------------------------------------------*/
  const changeOverview = (id) => {
    dispatch({ type: ACTIONS.SET_PRODUCT, payload: id });
  };

  const cards = relatedDisplay.map((item) => {
    const {
      styleID, id, category, name, salePrice, originalPrice, photo, ratings,
    } = item;
    /* --------------------- START HERE AND ADD RATINGS --------------------- */
    return (
      <Card key={styleID}>
        <ImageContainer>
          <StarBtn color="#00CCCC" onClick={() => { addOutfit(styleID); }}>&#9733;</StarBtn>
          <CornerBtn onClick={() => { setModalKey(id); setOpenModal(true); }}>compare</CornerBtn>
          <a href="#Overview">
            <Image onClick={() => changeOverview(id)} src={photo} alt="SORRY NO IMAGE AVAILABLE" />
          </a>
          {crossPrice(originalPrice, salePrice)}
        </ImageContainer>
        <Description>
          <span>{category}</span>
          <span>{name}</span>
          {onSale(salePrice)}
          <StarRatings ratings={ratings} />
        </Description>
      </Card>
    );
  });

  return (
    <>
      <CardsContainer>
        <LeftArrow>
          {showLeftArrow(currentCard) && <FaRegArrowAltCircleLeft onClick={prev} />}
        </LeftArrow>
        <RightArrow>
          {showRightArrow(length, currentCard) && <FaRegArrowAltCircleRight onClick={next} />}
        </RightArrow>
        {cards.slice(currentCard, (currentCard + 5))}
      </CardsContainer>
    </>
  );
};

export default RelatedProducts;
