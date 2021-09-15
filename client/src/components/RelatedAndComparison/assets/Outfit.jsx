import React from 'react';

const Outfit = ({ yourOutfit, handleRemoveClick }) => {
  const cards = yourOutfit.map((item) => {
    const id = item.id;
    const image = item.results[0].images[0].thumbnail_url;
    const category = item.category;
    const name = item.name;
    const price = item.results[0].salePrice || item.results[0].originalPrice;

    return (
      <div className="card" key={id}>
        <img src={image} alt="A related product" />
        <button type="button" className="actionBtn outfitBtn" onClick={() => handleRemoveClick(id)}>X</button>
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

export default Outfit;
