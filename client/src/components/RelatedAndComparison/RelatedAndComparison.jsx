import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RelatedProducts from './assets/RelatedProducts.jsx';
// import YourOutfit from './assets/YourOutfit.jsx';

const RelatedAndComparison = ({ products }) => {
  const [relatedIds, setRelatedIds] = useState([]);
  const [styles, setStyle] = useState([]);

  // const [yourOutfit, setYourOutfit] = useState([]);

  useEffect(() => {
    axios.get('/api/products/48432/related')
      .then(({ data }) => {
        setRelatedIds(data);
      });
  }, []);
  useEffect(() => {
    const stylesData = relatedIds.map((item) => axios.get(`/api/products/${item}/styles`)
      .then(({ data }) => data));
    Promise.all(stylesData)
      .then((values) => {
        setStyle(values);
      });
  }, [relatedIds]);

  return (
    <div id="RelatedAndComparison">
      {console.log(styles)}
      <h2>Related Products</h2>
      <ul>
        <RelatedProducts styles={styles} products={products} />
      </ul>
      <h2>Your Outfit</h2>
      {/* <YourOutfit /> */}
    </div>
  );
};

export default RelatedAndComparison;
