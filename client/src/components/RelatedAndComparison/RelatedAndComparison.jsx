/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RelatedProducts from './assets/RelatedProducts.jsx';
import YourOutfit from './assets/YourOutfit.jsx';
import Modal from './assets/Modal.jsx';

const RelatedAndComparison = () => {
  const [relatedIDs, setRelatedIDs] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedProductStyles, setRelatedProductStyles] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [displayStyles, setDisplayStyles] = useState([]);
  const [yourOutfit, setYourOutfit] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios.get('/api/products/48432/related')
      .then(({ data }) => {
        setRelatedIDs(data);
      });
  }, []);

  useEffect(() => {
    const relatedProductData = relatedIDs.map((item) => axios.get(`/api/products/${item}`)
      .then(({ data }) => data));
    Promise.all(relatedProductData)
      .then((values) => {
        setRelatedProducts(values);
      });
  }, [relatedIDs]);

  useEffect(() => {
    const relatedProductStylesData = relatedIDs.map((item) => axios.get(`/api/products/${item}/styles`)
      .then(({ data }) => data));
    Promise.all(relatedProductStylesData)
      .then((values) => {
        setRelatedProductStyles(values);
      });
  }, [relatedIDs]);

  useEffect(() => {
    const display = [];
    let displayProductsFormat;

    for (let i = 0; i < relatedProducts.length; i++) {
      const productsIdx = relatedProducts[i];
      const stylesIdx = relatedProductStyles[i].results[0];

      displayProductsFormat = {
        name: productsIdx.name,
        category: productsIdx.category,
        id: stylesIdx.style_id,
        photo: stylesIdx.photos[0].thumbnail_url,
        url: stylesIdx.photos[0].url,
        originalPrice: stylesIdx.original_price,
        salePrice: stylesIdx.sale_price,
      };
      display.push(displayProductsFormat);
    }
    setDisplayProducts(display);
  }, [relatedProductStyles]);

  useEffect(() => {
    const cards = [];
    let cardFormat;

    for (let i = 0; i < relatedProducts.length; i++) {
      for (let j = 0; j < relatedProductStyles[i].results.length; j++) {
        const productsIdx = relatedProducts[i];
        const stylesIdx = relatedProductStyles[i].results;

        cardFormat = {
          name: productsIdx.name,
          category: productsIdx.category,
          description: productsIdx.description,
          features: productsIdx.features,
          slogan: productsIdx.slogan,
          id: stylesIdx[j].style_id,
          photos: stylesIdx[j].photos,
          skus: stylesIdx[j].skus,
          StyleName: stylesIdx[j].name,
          originalPrice: stylesIdx[j].original_price,
          salePrice: stylesIdx[j].sale_price,
        };
        cards.push(cardFormat);
      }
    }
    setDisplayStyles(cards);
  }, [relatedProductStyles]);

  const addOutfit = (id) => {
    let isThere = false;

    for (let i = 0; i < yourOutfit.length; i++) {
      if (yourOutfit.length > 0) {
        if (id === yourOutfit[i].styleID) {
          isThere = true;
          break;
        }
      }
    }
    if (!isThere) {
      for (let i = 0; i < displayStyles.length; i++) {
        if (id === displayStyles[i].styleID) {
          setYourOutfit(yourOutfit.concat(displayStyles[i]));
          break;
        }
      }
    }
  };

  const removeOutfit = (id) => {
    for (let i = 0; i < yourOutfit.length; i++) {
      if (id === yourOutfit[i].styleID) {
        setYourOutfit(yourOutfit.slice(0, i).concat(yourOutfit.slice(i + 1)));
        break;
      }
    }
  };

  return (
    <section id="RelatedAndComparison">
      {openModal && <Modal styles={displayStyles} closeModal={setOpenModal} />}
      <div className="related-container">
        <h2>Related Products</h2>
        <RelatedProducts
          styles={displayProducts}
          handleClick={addOutfit}
          openModal={setOpenModal}
        />
        <h2>Your Outfit</h2>
        <YourOutfit
          yourOutfit={yourOutfit}
          handleClick={removeOutfit}
          openModal={setOpenModal}
        />
      </div>
    </section>
  );
};

export default RelatedAndComparison;

/* Notes
Tests:
- check api and make sure the correct images are stores for each style
- check api and make sure the correct price for each style renders to the page
- make sure only 5 items can render to page at a time under all circumstances
*/
