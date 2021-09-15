import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RelatedProducts from './assets/RelatedProducts.jsx';
// import YourOutfit from './assets/YourOutfit.jsx';

const RelatedAndComparison = () => {
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
      .then(({ data }) => {
        // get images
        console.log('Here is the data', data);
        return data;
      }));
    Promise.all(stylesData)
      .then((values) => {
        console.log('Here are the values in RC', values);
        setStyle(values);
      });
  }, [relatedIds]);

  return (
    <div id="RelatedAndComparison">
      <h2>Related Products</h2>
      <ul>
        <RelatedProducts styles={styles} />
      </ul>
      <h2>Your Outfit</h2>
      {/* <YourOutfit /> */}
    </div>
  );
};

export default RelatedAndComparison;
