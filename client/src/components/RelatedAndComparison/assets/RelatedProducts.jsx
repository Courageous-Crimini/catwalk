/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { StateContext } from '../../App.jsx';
import { RelatedContext } from '../Context.jsx';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { CardsContainer, Card, Button, Image, ImageContainer } from '../styles.jsx';

const RelatedProducts = ({ addOutfit }) => {
  const state = useContext(StateContext);
  const { relatedDisplay } = state;
  const { setModalKey, setOpenModal } = useContext(RelatedContext);
  /* CHANGE BELOW AFTER REFACTOR ---------------------------------------------*/
  const [currentCard, setCurrentCard] = useState(0);
  const length = relatedDisplay.length - 1;

  const prevCard = () => {
    setCurrentCard(currentCard === 0 ? 0 : currentCard - 1);
  };
  const nextCard = () => {
    setCurrentCard(currentCard === length ? 0 : currentCard + 1);
  };
  /* CHANGE ABOVE AFTER REFACTOR ---------------------------------------------*/
  const onSale = (price) => price ? <span style={{ color: 'red' }}>SALE &#36;{price}</span> : null;
  const crossPrice = (origPrice, newPrice) => newPrice ? <span style={{ textdDecoration: 'line-through' }}>&#36;{origPrice}</span> : <span>&#36;{origPrice}</span>

  const cards = relatedDisplay.map((item) => {
    const {
      styleID, id, category, name, salePrice, originalPrice, url, photo,
    } = item;

    return (
      <Card key={styleID}>
        <Button color="#00CCCC" onClick={() => { addOutfit(styleID); }}>&#9733;</Button>
        <Button type="button" onClick={() => { setModalKey(id); setOpenModal(true); }}>compare</Button>
        <ImageContainer>
          <a href={url}>
            <Image src={photo} alt="SORRY NO IMAGE AVAILABLE" />
          </a>
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
      <FaRegArrowAltCircleLeft onClick={prevCard} />
      <CardsContainer>
        {cards.slice(currentCard, (currentCard + 5))}
      </CardsContainer>
      <FaRegArrowAltCircleRight onClick={nextCard} />
    </>
  );
};

export default RelatedProducts;
