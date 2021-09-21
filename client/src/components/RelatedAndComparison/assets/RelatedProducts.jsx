/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { StateContext } from '../../App.jsx';
import { RelatedContext } from '../Context.jsx';

import {
  CardsContainer, Card, Button, Image, ImageContainer,
} from '../styles.jsx';

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
        <span>
          &#36;
          {originalPrice}
        </span>
        <span>
          SALE &#36;
          {salePrice}
        </span>
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
