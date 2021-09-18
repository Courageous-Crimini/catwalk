/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const RelatedProducts = ({ styles, handleClick, openModal }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const length = styles.length - 5;

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
      <div key={id} className="card">

        <div className="image-container">
          <button type="button" className="related-btn" onClick={() => { handleClick(id); }}>&#9733;</button>
          <button type="button" className="open-modal-btn" onClick={() => { openModal(true); }}>compare</button>
          <div className="card-photo">
            <a href={url}>
              <img src={photo} alt="NO IMAGE AVAILABLE" className="related-photo" />
            </a>
          </div>
        </div>

        <div className="description-container">
          <span className="item-category">{category}</span>
          <br />
          <span className="item-name">{name}</span>
          <br />
          <span className={salePrice ? 'cross-out-price' : 'original-price'}>&#36;{originalPrice}</span>
          <br />
          <span className={salePrice ? 'sale-price' : 'hide'}>SALE &#36;{salePrice}</span>
          <br className={salePrice ? 'break' : 'hide'} />
          <span className="card-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        </div>
      </div>
    );
  });

  return (
    <section className="card-carousel">
      <div className="carousel-container">
        <div>
          <FaArrowAltCircleLeft className={currentCard ? 'related-carousel-arrow' : 'hide'} onClick={prevCard} />
        </div>
        {cards.slice(currentCard, (currentCard + 5))}
        <div>
          <FaArrowAltCircleRight className={currentCard >= length ? 'hide' : 'related-carousel-arrow'} onClick={nextCard} />
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
