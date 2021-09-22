/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { StateContext } from '../../App.jsx';
import { RelatedContext } from '../Context.jsx';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { CardsContainer, Card, Button, Image, ImageContainer } from '../styles.jsx';

const RelatedProducts = ({ addOutfit, crossPrice, onSale }) => {
  const state = useContext(StateContext);
  const { relatedDisplay } = state;
  const { setModalKey, setOpenModal } = useContext(RelatedContext);
  /* CHANGE BELOW AFTER REFACTOR ---------------------------------------------*/
  const [currentCard, setCurrentCard] = useState(0);
  const length = relatedDisplay.length - 1;

  const prev = () => {
    setCurrentCard(currentCard === 0 ? 0 : currentCard - 1);
  };
  const next = () => {
    setCurrentCard(currentCard === length ? 0 : currentCard + 1);
  };
  /* CHANGE ABOVE AFTER REFACTOR ---------------------------------------------*/

  const cards = relatedDisplay.map((item) => {
    const {
      styleID, id, category, name, salePrice, originalPrice, url, photo,
    } = item;

    return (
      <div key={item.styleID} className="card">
        <button type="button" className="relatedBtn" onClick={() => { handleClick(item.styleID); }}>&#9733;</button>
        <div className="card-image">
          <Images images={item.styleImages} openModal={openModal} />
          {/* <span className="relatedBtn">&#9733;</span> */}
        </div>
        <div className="card-description">
          <span className="item-category">{item.category}</span>
          <br />
          <span className="item-name">{item.name}</span>
          <br />
          <span className={salePrice ? 'cross-out-price' : 'original-price'}>
            &#36;
            {originalPrice}
          </span>
          <br />
          <span className={salePrice ? 'sale-price' : 'hide'}>
            SALE &#36;
            {salePrice}
          </span>
          <br className={salePrice ? 'break' : 'hide'} />
          <span className="card-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        </div>
      </div>
    );
  });

  return (
    <>
      <FaRegArrowAltCircleLeft onClick={prev} />
      <FaRegArrowAltCircleRight onClick={next} />
      <CardsContainer>
        {cards.slice(currentCard, (currentCard + 5))}
      </CardsContainer>
    </>
  );
};

export default RelatedProducts;
