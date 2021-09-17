/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const RelatedProducts = ({ styles, handleClick }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [cardDisplay, setCardDisplay] = useState([]);
  const length = styles.length;

  useEffect(() => {
    const display = [];

    if (styles.length >= 1) {
      for (let i = currentCard; i < (currentCard + 5); i++) {
        if (currentCard === 0) {
          display.push(styles[i]);
        } else {
          display.push(styles[i - 1]);
        }
      }
    }
    setCardDisplay(display);
  }, [styles, currentCard]);

  const prevSlide = () => {
    setCurrentCard(currentCard === 0 ? 0 : currentCard - 1);
  };
  const nextSide = () => {
    setCurrentCard(currentCard === (length - 1) ? 0 : currentCard + 1);
  };

  return (
    <section className="carousel">
      <div className="container">
        <div>
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        </div>
        {cardDisplay.map((item, index) => (
          <div key={index} className={index === currentCard ? 'slide active' : 'slide'}>
            <div className="card">
              {/* <Image /> */}
              {/* <img src={image} alt="A related product" className="image" /> */}
              <span>{item.styleID}</span>
              <button type="button" className="actionBtn relatedBtn" onClick={() => { handleClick(item.styleID); }}>&#9733;</button>
              {/* <span className="relatedBtn">&#9733;</span> */}
              <br />
              <span>{item.category}</span>
              <br />
              <span>{item.name}</span>
              <br />
              <span>&#36;{item.originalPrice}</span>
              <br />
              {/* <span>&#36;{item.salePrice}</span>
              <br /> */}
              <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
          </div>
        ))}
        <div>
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSide} />
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
