/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { Button } from '../styles.jsx';
import Images from './Images.jsx';
import RelatedContext from '../Context.jsx';

// styles, displayIdx, yourOutfit, setYourOutfit, modalkey, setModalKey, openModal, setOpenModal

const Outfit = ({ removeOutfit, crossPrice, onSale }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const { yourOutfit, setOpenModal, setModalKey } = useContext(RelatedContext);
  const length = yourOutfit.length - 1;

  const prev = () => {
    setCurrentCard(currentCard === 0 ? 0 : currentCard - 1);
  };
  const next = () => {
    setCurrentCard(currentCard === length ? 0 : currentCard + 1);
  };

  const cards = yourOutfit.map((item) => {
    console.log(item);

    const { id, originalPrice, salePrice, styleID, category, name, photos } = item;

    return (
      <section key={item.styleID}>
        <Button color="#FF0000" onClick={() => { removeOutfit(styleID); }}>X</Button>
        <Button onClick={() => { setModalKey(id); setOpenModal(true); }}>compare</Button>
        <Images photos={photos} />
        <span>{category}</span>
        <span>{name}</span>
        {crossPrice(originalPrice, salePrice)}
        {onSale(salePrice)}
        <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      </section>
    );
  });

  return (
    <section className="card-carousel">
      <div className="carousel-container">
        <div>
          <FaArrowAltCircleLeft className={currentCard ? 'related-carousel-arrow' : 'hide'} onClick={prev} />
        </div>
        {cards.slice(currentCard, (currentCard + 5))}
        <div>
          <FaArrowAltCircleRight className={currentCard === length ? 'hide' : 'related-carousel-arrow'} onClick={next} />
        </div>
      </div>
    </section>
  );
};

export default Outfit;
