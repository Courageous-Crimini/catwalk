/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import ProductOverview from './ProductOverview.jsx';
// import ACTIONS from '../App.jsx';

const Wrapper = styled.section`
display: inline-block;
width: 100%;
height: 30em;
background: #BAEFD5;
`;

// export const ACTIONS = {
//     SELECT_ITEM: 'select-item',
//   };
  
//   function reducer(state, action) {
//     switch (action.type) {
//       case ACTIONS.SELECT_ITEM:
//         return {
//           ...state,
//           selectedItem: action.payload,
//         };
//       default:
//         return state;
//     }
//   }

const Overview = ({ products, selected, dispatch }) => (
  <Wrapper>
    <h2> Overview </h2>
    <ImageGallery />
    <ProductInfo />
    <StyleSelector />
    <AddToCart />
    <ProductOverview />
  </Wrapper>
);

export default Overview;
