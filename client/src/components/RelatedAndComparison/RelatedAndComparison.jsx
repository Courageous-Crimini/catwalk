import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Main, Container } from './styles.jsx';
import RelatedProducts from './assets/RelatedProducts.jsx';
import YourOutfit from './assets/YourOutfit.jsx';
import Modal from './assets/Modal.jsx';
import { StateContext } from '../App.jsx';
import { RelatedContext } from './Context.jsx';

const RelatedAndComparison = () => {
  const [display, setDisplay] = useState([]);
  const [styles, setStyles] = useState([]);
  const [images, setImages] = useState([]);
  const [idx, setRelatedIdx] = useState([]);

  const [yourOutfit, setYourOutfit] = useState([]);
  const [modalKey, setModalKey] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const state = useContext(StateContext);

  // SET_RELATED_PRODUCTS: 'set-related-products',
  // SET_ALL_STYLES: 'set-all-styles',
  // SET_RELATED_IDX: 'set-related-index',

  // displayData: [], // array of every related product
  // styles: [], // array of every related product style
  // relatedIdx: [], // array, indexes of the first related Product in styles array
  useEffect(() => {
    axios.get(`/api/products/${state.selectedProduct}/related`)
      .then(({ data }) => data)
      .then((idResponse) => {
        const relatedProductData = idResponse.map((item) => axios.get(`/api/products/${item}`)
          .then(({ data }) => data));
        Promise.all(relatedProductData)
          .then((responseProducts) => {
            const relatedStylesData = idResponse.map((item) => axios.get(`/api/products/${item}/styles`)
              .then(({ data }) => data));
            Promise.all(relatedStylesData)
              .then((responseStyles) => {
                const displayData = [];
                const stylesData = [];
                const idxData = [];
                const imagesData = [];
                let displayFormat;
                let styleFormat;
                let imageFormat;
                let displayTracker = 0;
                let start;

                for (let i = 0; i < responseProducts.length; i += 1) {
                  start = (!start) ? 0 : displayTracker;
                  displayFormat = {
                    id: responseProducts[i].id,
                    category: responseProducts[i].category,
                    name: responseProducts[i].name,
                    styleID: responseStyles[i].results[0].style_id,
                    originalPrice: responseStyles[i].results[0].original_price,
                    salePrice: responseStyles[i].results[0].sale_price,

                    photo: responseStyles[i].results[0].photos[0].thumbnail_url,
                    url: responseStyles[i].results[0].photos[0].url,
                  };
                  displayData.push(displayFormat);

                  for (let j = 0; j < responseStyles[i].results.length; j += 1) {
                    const productsIdx = responseProducts[i];
                    const stylesIdx = responseStyles[i].results;

                    styleFormat = {
                      id: productsIdx.id,
                      category: productsIdx.category,
                      name: productsIdx.name,
                      description: productsIdx.description,
                      features: productsIdx.features,
                      slogan: productsIdx.slogan,

                      styleID: stylesIdx[j].style_id,
                      StyleName: stylesIdx[j].name,
                      originalPrice: stylesIdx[j].original_price,
                      salePrice: stylesIdx[j].sale_price,
                      skus: stylesIdx[j].skus,
                    };
                    imageFormat = {
                      id: productsIdx.id,
                      styleID: stylesIdx[j].style_id,
                      photos: stylesIdx[j].photos,
                    };
                    stylesData.push(styleFormat);
                    imagesData.push(imageFormat);
                    displayTracker += 1;
                  }
                  idxData.push({ id: responseProducts.id, begin: start, end: displayTracker - 1 });
                }
                setDisplay(displayData);
                setStyles(stylesData);
                setImages(imagesData);
                setRelatedIdx(idxData);
                // dispatch({ type: ACTIONS.SET_RELATED_PRODUCTS, payload: stylesData });
                // dispatch({ type: ACTIONS.SET_RELATED_IDX, payload: relatedIdx });
              });
          });
      });
  }, [state.selectedProduct]);

  const addOutfit = (id) => {
    let isThere = false;

    for (let i = 0; i < yourOutfit.length; i += 1) {
      if (yourOutfit.length > 0) {
        if (id === yourOutfit[i].styleID) {
          isThere = true;
          break;
        }
      }
    }
    if (!isThere) {
      for (let i = 0; i < styles.length; i += 1) {
        if (id === styles[i].styleID) {
          setYourOutfit(yourOutfit.concat(styles[i]));
          break;
        }
      }
    }
  };

  const removeOutfit = (id) => {
    for (let i = 0; i < yourOutfit.length; i += 1) {
      if (id === yourOutfit[i].styleID) {
        setYourOutfit(yourOutfit.slice(0, i).concat(yourOutfit.slice(i + 1)));
        break;
      }
    }
  };

  return (
    <RelatedContext.Provider
      id="2"
      value={{
        display, styles, images, idx,
      }}
    >
      <Container>
        {openModal && <Modal />}
        <h2>Related Products</h2>
        <RelatedProducts addOutfit={addOutfit} />
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
