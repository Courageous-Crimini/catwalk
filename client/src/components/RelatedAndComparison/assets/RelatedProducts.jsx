/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { StateContext } from '../../App.jsx';
import { RelatedContext } from '../Context.jsx';
import { CardsContainer, Card, Button, CompareBtn, Image, ImageContainer, LeftArrow, RightArrow, Description } from '../styles.jsx';

const RelatedProducts = ({ addOutfit, crossPrice, onSale }) => {
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

  const cards = relatedDisplay.map((item) => {
    const {
      styleID, id, category, name, salePrice, originalPrice, photo,
    } = item;

    return (
      <Card key={styleID}>
        <Button color="#00CCCC" onClick={() => { addOutfit(styleID); }}>&#9733;</Button>
        <ImageContainer>
        <CompareBtn onClick={() => { setModalKey(id); setOpenModal(true); }}>compare</CompareBtn>
          <Image src={photo} alt="SORRY NO IMAGE AVAILABLE" />
        {crossPrice(originalPrice, salePrice)}
        </ImageContainer>
        <Description>
          <span>{category}</span>
          <span>{name}</span>
          {onSale(salePrice)}
          <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
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
