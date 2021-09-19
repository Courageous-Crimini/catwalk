/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { Cards, Card, ImageContainer, InfoContainer, Button, Image, } from '../styles.jsx';
import { RelatedContext } from '../Context.jsx';

const RelatedProducts = ({ addOutfit }) => {
  const { display, setModalKey, setOpenModal } = useContext(RelatedContext);
  const [currentCard, setCurrentCard] = useState(0);
  const length = display.length - 1;

  const prevCard = () => {
    setCurrentCard(currentCard === 0 ? 0 : currentCard - 1);
  };
  const nextCard = () => {
    setCurrentCard(currentCard === length ? 0 : currentCard + 1);
  };

  const cards = display.map((item) => {
    // console.log('here is an item', item);
    const {
      styleID, id, category, name, salePrice, originalPrice, url, photo,
    } = item;

    return (
      <Card key={styleID}>
        <ImageContainer>
          <Button color="#00CCCC" onClick={() => { addOutfit(styleID); }}>&#9733;</Button>
          <Button type="button" onClick={() => { setModalKey(id); setOpenModal(true); }}>compare</Button>
          <a href={url}>
            <Image src={photo} alt="NO IMAGE AVAILABLE" />
          </a>
        </ImageContainer>

        <InfoContainer>
          <span className="item-category">{category}</span>
          <br />
          <span className="item-name">{name}</span>
          <br />
          <span>
            &#36;
            {originalPrice}
          </span>
          <br />
          <span>
            SALE &#36;
            {salePrice}
          </span>
          <br />
          <span className="card-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        </InfoContainer>
      </Card>
    );
  });

  return (
    <div>
      <FaRegArrowAltCircleLeft onClick={prevCard} />
      <FaRegArrowAltCircleRight onClick={nextCard} />
      <Cards>
        {cards.slice(currentCard, (currentCard + 5))}
      </Cards>
    </div>
  );
};

export default RelatedProducts;
