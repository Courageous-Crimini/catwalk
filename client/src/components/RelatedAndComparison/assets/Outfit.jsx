/* eslint-disable prefer-destructuring */
import React, { useState, useContext } from 'react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { RelatedContext } from '../Context.jsx';
import Images from './Images.jsx';
<<<<<<< HEAD
=======
import StarRatings from './StarRatings.jsx';
>>>>>>> 14ccd786a6c7529952725f9ddc65a35a44561c66
import {
  CardsContainer, Card, LeftArrow, RightArrow, Description,
} from '../styles.jsx';

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
          id={styleID}
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
