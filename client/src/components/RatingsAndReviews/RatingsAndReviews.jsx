/* eslint-disable react/prop-types */
/* eslint-disable import/no-cycle */
import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import { DispatchContext, StateContext } from '../App.jsx';

const Wrapper = styled.section`
display: grid;
grid-template-columns: [first] 40% [second] 60%;
grid-template-rows: [row1-start] 5% [row1-end] auto [last];
grid-template-areas:

column-gap: 1%;
row-gap: 1%;
grid-line{
  border: 10px solid black;
}
width: 100%;
height: 50em;
background: #e9ecef;
padding: 5%;
justify-content: center;
`;
export const ACTIONS = {
  REVIEWS_SUCCESS: 'reviews-success',
  REVIEWSMETA_SUCCESS: 'reviewsmeta-success',
};

const initialState = {
  loaded: false,
  reviews: {},
  reviewsMeta: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: action.payload,
      };
    case ACTIONS.REVIEWSMETA_SUCCESS:
      return {
        ...state,
        reviewsMeta: action.payload,
        loaded: true,
      };
    default:
      return state;
  }
};

const RatingsAndReviews = () => {
  const productState = useContext(StateContext);
  const { selectedProduct } = productState;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get(`/api/reviews?product_id=${selectedProduct}`)
      .then((response) => {
        dispatch({ type: ACTIONS.REVIEWS_SUCCESS, payload: response.data });
        return response.data.product;
      })
      .then((id) => {
        axios.get(`/api/reviews/meta?product_id=${id}`)
          .then((response) => {
            dispatch({ type: ACTIONS.REVIEWSMETA_SUCCESS, payload: response.data });
          });
      });
  }, []);
  return (
    <div>
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <Wrapper>
            <h2> Ratings & Reviews</h2>
            <Ratings />
            <Reviews />
          </Wrapper>
        </StateContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
};

export default RatingsAndReviews;
