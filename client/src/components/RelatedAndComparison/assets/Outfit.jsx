/* eslint-disable prefer-destructuring */
import React, { useState, useContext } from 'react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { RelatedContext } from '../Context.jsx';
import Images from './Images.jsx';
import { CardsContainer, Card, LeftArrow, RightArrow, Description } from '../styles.jsx';

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
    const { salePrice, category, name, photos, styleName } = item;

    return (
      <Card key={item.styleID}>
        <Images photos={photos} crossPrice={crossPrice} removeOutfit={removeOutfit} />
        <Description>
          <span>{category}</span>
          <span>{name}</span>
          <span>{styleName}</span>
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

export default Outfit;
