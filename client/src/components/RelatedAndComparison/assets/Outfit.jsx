/* eslint-disable prefer-destructuring */
import React, { useState, useContext } from 'react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { RelatedContext } from '../Context.jsx';
import Images from './Images.jsx';
import StarRatings from './StarRatings.jsx';
import {
  CardsContainer, Card, LeftArrow, RightArrow, Description,
} from '../styles.jsx';

const Outfit = ({ removeOutfit, crossPrice, onSale, showLeftArrow, showRightArrow }) => {
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
    const {
      salePrice, category, name, photos, styleName, styleID, originalPrice, ratings,
    } = item;

    return (
      <Card key={item.styleID}>
        <Images
          photos={photos}
          crossPrice={crossPrice}
          removeOutfit={removeOutfit}
          sale={salePrice}
          orig={originalPrice}
          styleID={styleID}
        />
        <Description>
          <span>{category}</span>
          <span>{name}</span>
          <span>{styleName}</span>
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

export default Outfit;
