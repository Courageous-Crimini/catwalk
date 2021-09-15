import React from 'react';

const RelatedProducts = ({ styles }) => {
  console.log('Styles:', styles);

  const cards = styles.map((item) => {
    const id = item.product_id;
    const image = item.results[0].photos.thumbnail_url;
    // const category = ;
    const name = item.results[0].name;
    const price = item.results[0].sale_price || item.results[0].original_price;

    console.log(image);

    return (
      <div className="card" key={id}>
        <img src={image} alt="A related produce" />
        <button type="button" className="relatedBtn">&#9733;</button>
        <br />
        <span>Category</span>
        <br />
        <span>{name}</span>
        <br />
        <span>{price}</span>
      </div>
    );
  });

  return (
    <div className="carousel">
      {cards}
    </div>
  );
};

export default RelatedProducts;
