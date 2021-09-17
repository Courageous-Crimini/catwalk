// /* eslint-disable react/prop-types */
// /* eslint-disable prefer-destructuring */
// import React from 'react';

// const Outfit = ({ yourOutfit, handleClick }) => {
//   const cards = yourOutfit.map((item) => {
//     const id = item.id;
//     const image = item.results[0].images[0].thumbnail_url;
//     const category = item.category;
//     const name = item.name;
//     const price = item.results[0].salePrice || item.results[0].originalPrice;
//     // const priceOriginal = item.results[0].originalPrice;
//     // const priceSale = item.results[0].salePrice;

//     return (
//       <div className="card" key={id}>
//         <img src={image} alt="A related product" className="cardsImg" />
//         <button type="button" className="actionBtn outfitBtn" onClick={() => handleClick(id)}>X</button>
//         {/* <span className="outfitBtn">&#9733;</span> */}
//         <br />
//         <span>{category}</span>
//         <br />
//         <span>{name}</span>
//         <br />
//         <span>{price}</span>
//         <br />
//         <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
//       </div>
//     );
//   });

//   return (
//     <div className="cards">
//       {cards}
//     </div>
//   );
// };

// export default Outfit;



/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const Outfit = ({ yourOutfit, handleClick }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [outfitDisplay, setOutfitDisplay] = useState([]);
  const length = yourOutfit.length;

  useEffect(() => {
    const display = [];

    if (yourOutfit.length >= 1) {
      for (let i = currentCard; i < (currentCard + 5); i++) {
        if (currentCard === 0) {
          display.push(yourOutfit[i]);
        } else {
          display.push(yourOutfit[i - 1]);
        }
      }
    }
    setOutfitDisplay(display);
  }, [yourOutfit, currentCard]);

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
        {outfitDisplay.map((item, index) => (
          <div key={index}>
            <div className="card">
              {/* <Image /> */}
              {/* <img src={image} alt="A related product" className="image" /> */}
              <span>{item.styleID}</span>
              <button type="button" className="actionBtn outfitBtn" onClick={() => { handleClick(item.styleID); }}>&#9733;</button>
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
        ))}
        <div>
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSide} />
        </div>
      </div>
    </section>
  );
};

export default Outfit;
