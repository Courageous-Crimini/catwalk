/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Main, Container } from './styles.jsx';
import RelatedProducts from './assets/RelatedProducts.jsx';
import YourOutfit from './assets/YourOutfit.jsx';
import Modal from './assets/Modal.jsx';
import { StateContext } from '../App.jsx';
import { RelatedContext } from './Context.jsx';

const RelatedAndComparison = () => {
  const [relatedIDs, setRelatedIDs] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedStyles, setRelatedStyles] = useState([]);
  const [styles, setStyles] = useState([]);
  const [displayIdx, setDisplayIdx] = useState([]);
  const [yourOutfit, setYourOutfit] = useState([]);
  const [modalkey, setModalKey] = useState('');
  const [openModal, setOpenModal] = useState(false);
  // const { state } = useContext(StateContext);
  const state = useContext(StateContext);

  // Related IDs
  useEffect(() => {
    axios.get(`/api/products/${state.selectedProduct}/related`)
      .then(({ data }) => {
        setRelatedIDs(data);
      });
  }, []);

  // Related Products
  useEffect(() => {
    const relatedProductData = relatedIDs.map((item) => axios.get(`/api/products/${item}`)
      .then(({ data }) => data));
    Promise.all(relatedProductData)
      .then((values) => {
        setRelatedProducts(values);
      });
  }, [relatedIDs]);

  // Related Styles
  useEffect(() => {
    const relatedStylesData = relatedIDs.map((item) => axios.get(`/api/products/${item}/styles`)
      .then(({ data }) => data));
    Promise.all(relatedStylesData)
      .then((values) => {
        setRelatedStyles(values);
      });
  }, [relatedIDs]);

  // Individual Styles
  useEffect(() => {
    const stylesData = [];
    const display = [];
    let displayTracker = 0;
    let stylesFormat;

    for (let i = 0; i < relatedProducts.length; i++) {
      display.push(displayTracker);
      for (let j = 0; j < relatedStyles[i].results.length; j++) {
        const productsIdx = relatedProducts[i];
        const stylesIdx = relatedStyles[i].results;

        stylesFormat = {
          id: productsIdx.id,
          category: productsIdx.category,
          name: productsIdx.name,
          description: productsIdx.description,
          features: productsIdx.features,
          slogan: productsIdx.slogan,

          styleId: stylesIdx[j].style_id,
          StyleName: stylesIdx[j].name,
          originalPrice: stylesIdx[j].original_price,
          salePrice: stylesIdx[j].sale_price,
          skus: stylesIdx[j].skus,
          photos: stylesIdx[j].photos,
        };
        stylesData.push(stylesFormat);
        displayTracker++;
      }
    }
    setStyles(stylesData);
    setDisplayIdx(display);
  }, [relatedStyles]);

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
      for (let i = 0; i < styles.length; i++) {
        if (id === styles[i].styleID) {
          setYourOutfit(yourOutfit.concat(styles[i]));
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
    <RelatedContext.Provider id="2" value={{styles, displayIdx, yourOutfit, setYourOutfit, modalkey, setModalKey, openModal, setOpenModal,}}>
      <Container>
        {openModal && <Modal />}
        <h2>Related Products</h2>
        <RelatedProducts handleClick={addOutfit} />
        <h2>Your Outfit</h2>
        {/* <YourOutfit handleClick={removeOutfit} /> */}
      </Container>
    </RelatedContext.Provider>
  );
};

export default RelatedAndComparison;

/* Notes
Tests:
- check api and make sure the correct images are stores for each style
- check api and make sure the correct price for each style renders to the page
- make sure only 5 items can render to page at a time under all circumstances
*/
