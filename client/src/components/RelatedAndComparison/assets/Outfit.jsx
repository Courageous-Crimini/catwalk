/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import Images from './Images.jsx';

const Outfit = ({ yourOutfit, handleClick }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const length = yourOutfit.length;

  const prevCard = () => {
    setCurrentCard(currentCard === 0 ? 0 : currentCard - 1);
  };
  const nextCard = () => {
    setCurrentCard(currentCard === (length - 1) ? 0 : currentCard + 1);
  };

  const cards = yourOutfit.map((item) => (
    <div key={item.styleID}>
      <div className="card">
        <Images images={item.styleImages} />
        <span>{item.styleID}</span>
        <button type="button" className="actionBtn outfitBtn" onClick={() => { handleClick(item.styleID); }}>X</button>
        {/* <span className="outfitBtn">&#9733;</span> */}
        <br />
        <span>{item.category}</span>
        <br />
        <span>{item.name}</span>
        <br />
        <span>{item.originalPrice}</span>
        <br />
        <span>{item.salePrice}</span>
        <br />
        <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      </div>
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

export default Outfit;
