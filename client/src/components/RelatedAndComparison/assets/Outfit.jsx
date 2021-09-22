/* eslint-disable prefer-destructuring */
import React, { useState, useContext } from 'react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { RelatedContext } from '../Context.jsx';
import Images from './Images.jsx';
<<<<<<< HEAD
import { CardsContainer, Card, Button, Image, ImageContainer } from '../styles.jsx';

// styles, displayIdx, yourOutfit, setYourOutfit, modalkey, setModalKey, openModal, setOpenModal
=======
import { CardsContainer, Card, LeftArrow, RightArrow, Description } from '../styles.jsx';
>>>>>>> 0d5dcbe4f4d1db65230283aa5693f100a6de99f3

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
    const { salePrice, category, name, photos, styleName, styleID, originalPrice} = item;

    return (
      <Card key={item.styleID}>
<<<<<<< HEAD
        <Button color="#FF0000" onClick={() => { removeOutfit(styleID); }}>X</Button>
        <Button onClick={() => { setModalKey(id); setOpenModal(true); }}>compare</Button>
        <ImageContainer>
          <Images photos={photos} />
        </ImageContainer>
        <span>{category}</span>
        <span>{name}</span>
        {crossPrice(originalPrice, salePrice)}
        {onSale(salePrice)}
        <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
=======
        <Images
          photos={photos}
          crossPrice={crossPrice}
          removeOutfit={removeOutfit}
          sale={salePrice}
          orig={originalPrice}
          id={styleID} />
        <Description>
          <span>{category}</span>
          <span>{name}</span>
          <span>{styleName}</span>
          {onSale(salePrice)}
          <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        </Description>
>>>>>>> 0d5dcbe4f4d1db65230283aa5693f100a6de99f3
      </Card>
    );
  });

  return (
    <>
<<<<<<< HEAD
      <FaRegArrowAltCircleLeft onClick={prev} />
      <FaRegArrowAltCircleRight onClick={next} />
      <CardsContainer>
=======
      <CardsContainer>
        <LeftArrow>
          <FaRegArrowAltCircleLeft onClick={prev} />
        </LeftArrow>
        <RightArrow>
          <FaRegArrowAltCircleRight onClick={next} />
        </RightArrow>
>>>>>>> 0d5dcbe4f4d1db65230283aa5693f100a6de99f3
        {cards.slice(currentCard, (currentCard + 5))}
      </CardsContainer>
    </>
  );
};

export default Outfit;
