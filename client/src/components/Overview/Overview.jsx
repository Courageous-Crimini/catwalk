/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import ProductOverview from './ProductOverview.jsx';
// import ACTIONS from '../App.jsx';

const Wrapper = styled.section`
display: grid;
grid-template-columns: [first] 55% [second] 35%;
grid-template-rows: [row1-start] 25% [row1-end] 25% [row3-start] 25% [row3-end] auto [last];
grid-template-areas:
    "ImageGallery ProductInfo"
    "ImageGallery StyleSelector"
    "ImageGallery AddToCart"
    "ProductOverview ProductOverview";
column-gap: 1%;
row-gap: 1%;
grid-line{
  border: 10px solid black;
}
width: 100%;
height: 50em;
background: #BAEFD5;
padding: 5%;
justify-content: center;
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

const Overview = ({ products }) => {
  const [selected, setSelected] = useState(products[0]);
  const [selectedDetails, setSelectedDetails] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get(`/api/products/${selected.id}/styles`)
      .then((response) => {
        setSelectedDetails(response.data);
      }).then(() => {
        setLoaded(true);
      });
  }, [selected]);

  return (
    loaded
      ? (
        <Wrapper>
          <ImageGallery id="ImageGallery" styleDetails={selectedDetails} />
          <ProductInfo id="ProductInfo" productInfo={selected} />
          <StyleSelector id="StyleSelector" styleDetails={selectedDetails} />
          <AddToCart id="AddToCart" styleDetails={selectedDetails} />
          <ProductOverview id="ProductOverview" productInfo={selected} />
        </Wrapper>
      )
      : <h3>Loading...</h3>
  );
};

export default Overview;
