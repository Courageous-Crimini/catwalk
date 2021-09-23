/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import StarRatings from './StarRatings.jsx';
import { StateContext } from '../../App.jsx';
import { RelatedContext } from '../Context.jsx';
import {
  CardsContainer,
  ImageContainer,
  Description,
  RightArrow,
  LeftArrow,
  CornerBtn,
  Button,
  Image,
  Card,
} from '../styles.jsx';

const RelatedProducts = ({ addOutfit, crossPrice, onSale }) => {
  const state = useContext(StateContext);
  const { relatedDisplay } = state;
  const { setModalKey, setOpenModal } = useContext(RelatedContext);

  // console.log('RelatedProducts', relatedDisplay.ratings);
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

  const cards = relatedDisplay.map((item) => {
    const {
      styleID, id, category, name, salePrice, originalPrice, photo, ratings,
    } = item;
    /* --------------------- START HERE AND ADD RATINGS --------------------- */
    return (
      <Card key={styleID}>
        <ImageContainer>
          <Button color="#00CCCC" onClick={() => { addOutfit(styleID); }}>&#9733;</Button>
          <CornerBtn onClick={() => { setModalKey(id); setOpenModal(true); }}>compare</CornerBtn>
          <Image src={photo} alt="SORRY NO IMAGE AVAILABLE" />
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
          <FaRegArrowAltCircleLeft onClick={prev} />
        </LeftArrow>
        <RightArrow>
          <FaRegArrowAltCircleRight onClick={next} />
        </RightArrow>
        {cards.slice(currentCard, (currentCard + 5))}
      </CardsContainer>
    </>
  );
};

export default RelatedProducts;
