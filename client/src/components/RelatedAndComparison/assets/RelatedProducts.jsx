/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { StateContext } from '../../App.jsx';
import { RelatedContext } from '../Context.jsx';
import { CardsContainer, Card, Button, Image, ImageContainer } from '../styles.jsx';

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
        <Button onClick={() => { setModalKey(id); setOpenModal(true); }}>compare</Button>
        <ImageContainer>
          <Image src={photo} alt="SORRY NO IMAGE AVAILABLE" />
        </ImageContainer>
        <span>{category}</span>
        <span>{name}</span>
        {crossPrice(originalPrice, salePrice)}
        {onSale(salePrice)}
        <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      </Card>
    );
  });

  return (
    <>
      <FaRegArrowAltCircleLeft onClick={prev} />
      <FaRegArrowAltCircleRight onClick={next} />
      <CardsContainer>
        {cards.slice(currentCard, (currentCard + 5))}
      </CardsContainer>
    </>
  );
};

export default RelatedProducts;
