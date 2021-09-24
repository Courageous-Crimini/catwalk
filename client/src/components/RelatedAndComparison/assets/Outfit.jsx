import React, { useState, useContext } from 'react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { RelatedContext } from '../Context.jsx';
import StarRatings from './StarRatings.jsx';
import Images from './Images.jsx';
import {
  CardsContainer, Card, LeftArrow, RightArrow, Description,
} from '../styles.jsx';

const Outfit = ({
  showRightArrow, showLeftArrow, removeOutfit, crossPrice, onSale,
}) => {
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
      styleID, category, name, styleName, originalPrice, salePrice, photos, ratings,
    } = item;

    return (
      <Card key={item.styleID}>
        <Images
          removeOutfit={removeOutfit}
          crossPrice={crossPrice}
          orig={originalPrice}
          styleID={styleID}
          sale={salePrice}
          photos={photos}
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
