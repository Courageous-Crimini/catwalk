/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RelatedProducts from './assets/RelatedProducts.jsx';
import YourOutfit from './assets/YourOutfit.jsx';

const RelatedAndComparison = () => {
  const [relatedIds, setRelatedIds] = useState([]);
  const [relatedStyles, setRelatedStyles] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [styles, setStyles] = useState([]);
  const [yourOutfit, setYourOutfit] = useState([]);

  useEffect(() => {
    axios.get('/api/products/48432/related')
      .then(({ data }) => {
        setRelatedIds(data);
      });
  }, []);

  useEffect(() => {
    const relatedStylesData = relatedIds.map((item) => axios.get(`/api/products/${item}/styles`)
      .then(({ data }) => {
        const relatedStylesFormat = { id: data.product_id, results: [] };
        const results = data.results;

        for (let i = 0; i < results.length; i++) {
          const resultsIdx = results[i];
          const thisIn = {
            salePrice: resultsIdx.sale_price,
            originalPrice: resultsIdx.original_price,
            images: resultsIdx.photos,
          };
          relatedStylesFormat.results.push(thisIn);
        }
        return relatedStylesFormat;
      }));
    Promise.all(relatedStylesData)
      .then((values) => {
        setRelatedStyles(values);
      });
  }, [relatedIds]);

  useEffect(() => {
    const productData = relatedIds.map((item) => axios.get(`/api/products/${item}`)
      .then(({ data }) => {
        const productDataFormat = {
          id: data.id,
          name: data.name,
          category: data.category,
        };

        return productDataFormat;
      }));
    Promise.all(productData)
      .then((values) => {
        setRelatedProducts(values);
      });
  }, [relatedStyles]);

  useEffect(() => {
    const stylesData = [];

    for (let i = 0; i < relatedIds.length; i++) {
      const thisIn = {
        id: relatedProducts[i].id,
        category: relatedProducts[i].category,
        name: relatedProducts[i].name,
        results: relatedStyles[i].results,
      };
      stylesData.push(thisIn);
    }
    setStyles(stylesData);
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
