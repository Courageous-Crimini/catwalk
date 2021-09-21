/* eslint-disable import/no-cycle */
/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './Header/Header.jsx';
import Overview from './Overview/Overview.jsx';
import RelatedAndComparison from './RelatedAndComparison/RelatedAndComparison.jsx';
import QA from './QA/QA.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
font-family: Valera Round, sans-serif;`;

export const ACTIONS = {
  PRODUCTS_SUCCESS: 'products-success',
  STYLES_SUCCESS: 'styles-success',
  FEATURES_SUCCESS: 'features-success',
  SET_STYLE: 'set-style',
  /* RELATED COMPARISON START ----------------------------------------------- */
  SET_DISPLAY: 'set-display',
  SET_FEATURES: 'set-features',
  SET_RELATED_IDX: 'set-related-idx',
  SET_RELATED_STYLES: 'set-related-styles',
  SET_IMAGES: 'set-images',
  /* RELATED COMPARISON END ------------------------------------------------- */
  SET_LOADED: 'set-loaded',
};

const initialState = {
  loaded: false, // boolean
  products: [], // array of objects
  selectedProduct: null, // integer
  selectedProductFeatures: [], // array
  styles: [], // array of objects
  selectedStyle: null, // now integer; was object
  /* RELATED COMPARISON START ----------------------------------------------- */
  relatedDisplay: [],
  relatedFeatures: [],
  relatedIdx: [],
  relatedStyles: [],
  relatedImages: [],
  /* RELATED COMPARISON END ------------------------------------------------- */

};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        selectedProduct: action.payload[0].id,
      };
    case ACTIONS.STYLES_SUCCESS:
      return {
        ...state,
        styles: action.payload,
        selectedStyle: action.payload[0].style_id,
      };
    case ACTIONS.SET_STYLE:
      return {
        ...state,
        selectedStyle: action.payload,
      };
    case ACTIONS.FEATURES_SUCCESS:
      return {
        ...state,
        selectedProductFeatures: action.payload,
      };
      /* RELATED COMPARISON START ------------------------------------------- */
    case ACTIONS.SET_DISPLAY:
      return {
        ...state,
        relatedDisplay: action.payload,
      };
    case ACTIONS.SET_FEATURES:
      return {
        ...state,
        relatedFeatures: action.payload,
      };
    case ACTIONS.SET_RELATED_IDX:
      return {
        ...state,
        relatedIdx: action.payload,
      };
    case ACTIONS.SET_RELATED_STYLES:
      return {
        ...state,
        relatedStyles: action.payload,
      };
    case ACTIONS.SET_IMAGES:
      return {
        ...state,
        relatedImages: action.payload,
      };
      /* RELATED COMPARISON END --------------------------------------------- */
    case ACTIONS.SET_LOADED:
      return {
        ...state,
        loaded: true,
      };
    default:
      return state;
  }
};

export const DispatchContext = React.createContext();
export const StateContext = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('/api/products')
      .then((response) => {
        dispatch({ type: ACTIONS.PRODUCTS_SUCCESS, payload: response.data });
        return response.data[0].id;
      })
      .then((id) => {
        axios.get(`/api/products/${id}/styles`)
          .then((response) => {
            dispatch({ type: ACTIONS.STYLES_SUCCESS, payload: response.data.results });
          })
          .then(() => {
            axios.get(`/api/products/${id}`)
              .then((response) => {
                dispatch({ type: ACTIONS.FEATURES_SUCCESS, payload: response.data.features });
              });
          })
          .then(() => {
            dispatch({ type: ACTIONS.SET_LOADED });
          });
      });
  }, []);
  /* RELATED COMPARISON START ----------------------------------------------- */
  useEffect(() => {
    if (state.selectedProduct) {
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
                  const featuresData = [];
                  let displayFormat;
                  let featureFormat;
                  let styleFormat;
                  let imageFormat;
                  let dataTracker = 0;
                  let start;

                  for (let i = 0; i < responseProducts.length; i += 1) {
                    start = (!start) ? dataTracker : dataTracker;
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
                    featureFormat = {
                      id: responseProducts[i].id,
                      features: responseProducts[i].features,
                    };
                    displayData.push(displayFormat);
                    featuresData.push(featureFormat);

                    for (let j = 0; j < responseStyles[i].results.length; j += 1) {
                      const productsIdx = responseProducts[i];
                      const stylesIdx = responseStyles[i].results;

                      styleFormat = {
                        index: dataTracker,
                        id: productsIdx.id,
                        category: productsIdx.category,
                        name: productsIdx.name,
                        description: productsIdx.description,
                        features: productsIdx.features,
                        slogan: productsIdx.slogan,
                        styleID: stylesIdx[j].style_id,
                        styleName: stylesIdx[j].name,
                        originalPrice: stylesIdx[j].original_price,
                        salePrice: stylesIdx[j].sale_price,
                      };
                      imageFormat = {
                        index: dataTracker,
                        id: productsIdx.id,
                        styleID: stylesIdx[j].style_id,
                        photos: stylesIdx[j].photos,
                      };
                      stylesData.push(styleFormat);
                      imagesData.push(imageFormat);
                      dataTracker += 1;
                    }
                    idxData.push({
                      id: responseProducts[i].id,
                      begin: start,
                      end: dataTracker - 1,
                    });
                  }
                  dispatch({ type: ACTIONS.SET_DISPLAY, payload: displayData });
                  dispatch({ type: ACTIONS.SET_FEATURES, payload: featuresData });
                  dispatch({ type: ACTIONS.SET_RELATED_IDX, payload: idxData });
                  dispatch({ type: ACTIONS.SET_RELATED_STYLES, payload: stylesData });
                  dispatch({ type: ACTIONS.SET_IMAGES, payload: imagesData });
                });
            });
        });
    }
  }, [state.selectedProduct]);
  /* RELATED COMPARISON END ------------------------------------------------- */

  return (
    <div>
      { state.loaded
        ? (
          <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
              <Container>
                <Header />
                <Overview />
                <RelatedAndComparison />
                <QA />
                <RatingsAndReviews />
              </Container>
            </StateContext.Provider>
          </DispatchContext.Provider>
        )
        : (
          <>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
              alt="Loading gif"
              style={{ backgroundPosition: 'center', width: '100%', height: '100%' }}
            />
          </>
        )}
    </div>
  );
};

export default App;
