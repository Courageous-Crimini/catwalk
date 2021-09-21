/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { Buttton } from '../styles.jsx';
import Images from './Images.jsx';
import RelatedContext from '../Context.jsx';

// styles, displayIdx, yourOutfit, setYourOutfit, modalkey, setModalKey, openModal, setOpenModal

const Outfit = ({ handleClick }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const { yourOutfit, openModal } = useContext(RelatedContext);
  const length = yourOutfit.length - 5;

  const prevCard = () => {
    setCurrentCard(currentCard === 0 ? 0 : currentCard - 1);
  };
  const nextCard = () => {
    setCurrentCard(currentCard === length ? 0 : currentCard + 1);
  };

  const cards = yourOutfit.map((item) => {
    const originalPrice = item.originalPrice;
    const salePrice = item.salePrice;

    return (
      <div key={item.styleID} className="card">
        <Button
          type="button"
          color="#FF0000"
          onClick={() => { handleClick(item.styleID, prevCard()); }}
        >
          X
        </Button>
        <div className="card-image">
          <Images images={item.styleImages} openModal={openModal} />
          {/* <span className="outfit">&#9733;</span> */}
        </div>
        <div className="card-description">
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
          <FaArrowAltCircleRight className={currentCard === length ? 'hide' : 'related-carousel-arrow'} onClick={nextCard} />
        </div>
      </div>
    </section>
  );
};

export default Outfit;
