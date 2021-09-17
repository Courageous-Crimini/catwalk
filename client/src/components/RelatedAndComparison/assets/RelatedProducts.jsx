/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import Images from './Images.jsx';

const RelatedProducts = ({ styles, handleClick }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const length = styles.length;

  const prevCard = () => {
    setCurrentCard(currentCard === 0 ? 0 : currentCard - 1);
  };
  const nextCard = () => {
    setCurrentCard(currentCard === (length - 1) ? 0 : currentCard + 1);
  };

  const cards = styles.map((item) => {
    const originalPrice = item.originalPrice;
    const salePrice = item.salePrice;

    return (
      <div key={item.styleID}>
        <Images images={item.styleImages} />
        <button type="button" className="relatedBtn" onClick={() => { handleClick(item.styleID); }}>&#9733;</button>
        {/* <span className="relatedBtn">&#9733;</span> */}
        <br />
        <span className="item-category">{item.category}</span>
        <br />
        <span className="item-name">{item.name}</span>
        <br />
        <span className={salePrice ? 'cross-out-price' : 'original-price'}>&#36;{originalPrice}</span>
        <br />
        <span className={salePrice ? 'sale-price' : 'hide'}>SALE &#36;{salePrice}</span>
        <br className={salePrice ? 'break' : 'hide'} />
        <span className="card-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      </div>
    );
  });

  return (
    <section className="card-carousel">
      <div className="container">
        <div>
          <FaArrowAltCircleLeft className="left-carousel-arrow" onClick={prevCard} />
        </div>
        {cards.slice(currentCard, (currentCard + 5))}
        <div>
          <FaArrowAltCircleRight className="right-carousel-arrow" onClick={nextCard} />
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
