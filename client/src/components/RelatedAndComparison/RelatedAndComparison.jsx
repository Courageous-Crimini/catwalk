/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RelatedProducts from './assets/RelatedProducts.jsx';
import YourOutfit from './assets/YourOutfit.jsx';

const RelatedAndComparison = () => {
  const [relatedIDs, setRelatedIDs] = useState([]);
  const [relatedStyles, setRelatedStyles] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [styles, setStyles] = useState([]);
  const [yourOutfit, setYourOutfit] = useState([]);

  useEffect(() => {
    axios.get('/api/products/48432/related')
      .then(({ data }) => {
        setRelatedIDs(data);
      });
  }, []);

  useEffect(() => {
    const relatedStylesData = relatedIDs.map((item) => axios.get(`/api/products/${item}/styles`)
      .then(({ data }) => data));
    Promise.all(relatedStylesData)
      .then((values) => {
        setRelatedStyles(values);
      });
  }, [relatedIDs]);

  useEffect(() => {
    const relatedProductData = relatedIDs.map((item) => axios.get(`/api/products/${item}`)
      .then(({ data }) => data));
    Promise.all(relatedProductData)
      .then((values) => {
        setRelatedProducts(values);
      });
  }, [relatedIDs]);

  useEffect(() => {
    const cards = [];
    let thisIn;
    // console.log('relatedStyles', relatedStyles[0].results.photos);

    for (let i = 0; i < relatedProducts.length; i++) {
      for (let j = 0; j < relatedStyles[i].results.length; j++) {
        const relatedPIdx = relatedProducts[i];
        const relatedSIdx = relatedStyles[i].results;
        thisIn = {
          productID: relatedPIdx.id,
          name: relatedPIdx.name,
          category: relatedPIdx.category,
          styleID: relatedSIdx[j].style_id,
          styleName: relatedSIdx[j].name,
          styleImages: relatedSIdx[j].photos,
          salePrice: relatedSIdx[j].sale_price,
          originalPrice: relatedSIdx[j].original_price,
        };
        cards.push(thisIn);
      }
    }
    setStyles(cards);
  }, [relatedProducts]);

  const addOutfit = (id) => {
    let isThere = false;

    for (let i = 0; i < yourOutfit.length; i++) {
      if (yourOutfit.length > 0) {
        if (id === yourOutfit[i].id) {
          isThere = true;
          break;
        }
      }
    }
    if (!isThere) {
      for (let i = 0; i < styles.length; i++) {
        if (id === styles[i].id) {
          setYourOutfit(yourOutfit.concat(styles[i]));
          break;
        }
      }
    }
  };

  const removeOutfit = (id) => {
    for (let i = 0; i < yourOutfit.length; i++) {
      if (id === yourOutfit[i].id) {
        setYourOutfit(yourOutfit.slice(0, i).concat(yourOutfit.slice(i + 1)));
        break;
      }
    }
  };

  return (
    <div id="RelatedAndComparison">
      <h2>Related Products</h2>
      <RelatedProducts
        styles={styles}
        handleClick={addOutfit}
      />
      <h2>Your Outfit</h2>
      <YourOutfit
        yourOutfit={yourOutfit}
        handleClick={removeOutfit}
      />
    </div>
  );
};

export default RelatedAndComparison;
