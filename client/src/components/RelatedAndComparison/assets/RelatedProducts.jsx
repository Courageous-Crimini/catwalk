/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { Cards, Card, ImageContainer, InfoContainer, Button, Image, } from '../styles.jsx';
import { RelatedContext } from '../Context.jsx';

const RelatedProducts = ({ handleClick }) => {
  const { styles, displayIdx, openModal, setModalKey } = useContext(RelatedContext);

  const [currentCard, setCurrentCard] = useState(0);
  const length = 4; // styles.length - 5;

  const prevCard = () => {
    setCurrentCard(currentCard === 0 ? 0 : currentCard - 1);
  };
  const nextCard = () => {
    setCurrentCard(currentCard === length ? 0 : currentCard + 1);
  };

  const cards = styles.map((item) => {
    const {
      id, photo, url, category, name, salePrice, originalPrice,
    } = item;

    return (
      <Card key={id}>
        {/* {console.log(displayIdx)} */}

        <ImageContainer>
          <Button color="#00CCCC" type="button" onClick={() => { handleClick(id); }}>&#9733;</Button>
          <Button>Style</Button>
          <Button type="button" onClick={() => { setModalKey(id); openModal(true); }}>compare</Button>
          <a href={url}>
            <Image src={photo} alt="NO IMAGE AVAILABLE" />
          </a>
        </ImageContainer>

        <InfoContainer>
          <span className="item-category">{category}</span>
          <br />
          <span className="item-name">{name}</span>
          <br />
          <span className={salePrice ? 'cross-out-price' : 'original-price'}>&#36;{originalPrice}</span>
          <br />
          <span className={salePrice ? 'sale-price' : 'hide'}>SALE &#36;{salePrice}</span>
          <br className={salePrice ? 'break' : 'hide'} />
          <span className="card-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        </InfoContainer>
      </Card>
    );
  });

  return (
    <div>
      <FaRegArrowAltCircleLeft className={currentCard ? 'related-carousel-arrow' : 'hide'} onClick={prevCard} />
      <FaRegArrowAltCircleRight className={currentCard >= length ? 'hide' : 'related-carousel-arrow'} onClick={nextCard} />
      <Cards>
        {cards.slice(currentCard, (currentCard + 5))}
      </Cards>
    </div>
  );
};

export default RelatedProducts;
