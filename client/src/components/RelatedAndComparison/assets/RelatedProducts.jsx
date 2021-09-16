/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React from 'react';

const RelatedProducts = ({ styles, handleClick }) => {
  const cards = styles.map((item) => {
    const id = item.id;
    const image = item.results[0].images[0].thumbnail_url;
    const category = item.category;
    const name = item.name;
    const price = item.results[0].salePrice || item.results[0].originalPrice;

    return (
      <div className="card" key={id}>
        <img src={image} alt="A related product" className="cardsImg" />
        <button type="button" className="actionBtn relatedBtn" onClick={() => { handleClick(id); }}>&#9733;</button>
        {/* <span className="relatedBtn">&#9733;</span> */}
        <br />
        <span>{category}</span>
        <br />
        <span>{name}</span>
        <br />
        <span>{price}</span>
        <br />
        <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      </div>
    );
  });

  return (
    <div className="cards">
      {cards}
    </div>
  );
};

export default RelatedProducts;
