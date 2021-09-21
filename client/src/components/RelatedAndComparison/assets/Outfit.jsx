/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { RelatedContext } from '../Context.jsx';
import Images from './Images.jsx';
import { CardsContainer, Card, Button, ImageContainer, LeftArrow, RightArrow } from '../styles.jsx';

const Outfit = ({ removeOutfit, crossPrice, onSale }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const { yourOutfit } = useContext(RelatedContext);
  const length = yourOutfit.length - 1;

  const prev = () => {
    setCurrentCard(currentCard === 0 ? 0 : currentCard - 1);
  };
  const next = () => {
    setCurrentCard(currentCard === length ? 0 : currentCard + 1);
  };

  const cards = yourOutfit.map((item) => {
    console.log(item);

    const { id, originalPrice, salePrice, styleID, category, name, photos } = item;

    return (
      <Card key={item.styleID}>
        <Button color="#FF0000" onClick={() => { removeOutfit(styleID); }}>X</Button>
        <ImageContainer>
          <Images photos={photos} />
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

export default Outfit;
