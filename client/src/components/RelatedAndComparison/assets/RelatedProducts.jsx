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

  const cards = styles.map((item) => (
    <div key={item.styleID} className="card">
      <Images images={item.styleImages} />
      <button type="button" className="actionBtn relatedBtn" onClick={() => { handleClick(item.styleID); }}>&#9733;</button>
      {/* <span className="relatedBtn">&#9733;</span> */}
      <br />
      <span>{item.category}</span>
      <br />
      <span>{item.name}</span>
      <br />
      <span>&#36;{item.originalPrice}</span>
      <br />
      <span>&#36;{item.salePrice}</span>
      <br />
      <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
    </div>
  ));

  return (
    <section className="card-carousel">
      <div className="container">
        <div>
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevCard} />
        </div>
        {cards.slice(currentCard, (currentCard + 5))}
        <div>
          <FaArrowAltCircleRight className="right-arrow" onClick={nextCard} />
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
