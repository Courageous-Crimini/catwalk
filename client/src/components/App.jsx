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
  SET_LOADED: 'set-loaded',
};

const initialState = {
  loaded: false, // boolean
  products: [], // array of objects
  selectedProduct: null, // integer
  selectedProductFeatures: [], // array
  styles: [], // array of objects
  selectedStyle: null, // now integer; was object
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
          });
        return id;
      })
      .then((id) => {
        axios.get(`/api/products/${id}`)
          .then((response) => {
            dispatch({ type: ACTIONS.FEATURES_SUCCESS, payload: response.data.features });
          });
      })
      .then(() => {
        setTimeout(() => {
          dispatch({ type: ACTIONS.SET_LOADED });
        }, 100);
      });
  }, []);

  // useEffect(() => {
  //   axios.get('/api/products')
  // }, [state.selectedStyle]);

  return (
    <div>
      { state.loaded
        ? (
          <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
              <Container>
                <Header />
                <Overview />
                {/* <RelatedAndComparison /> */}
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
