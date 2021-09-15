/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import ProductOverview from './ProductOverview.jsx';

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

const Overview = () => (
  <Wrapper>
    <ImageGallery />
    <ProductInfo />
    <StyleSelector />
    <AddToCart />
    <ProductOverview />
  </Wrapper>
);

export default Overview;
