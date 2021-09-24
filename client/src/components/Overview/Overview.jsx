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
import Banner from './Banner.jsx';

const Wrapper = styled.section`
display: grid;
grid-template-columns: [first] 60% [second] 25%;
grid-template-rows: [row1-start] 5% [row1-end] 22% [row3-start] 30% [row3-end] 21% [row5-start] auto [last];
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
height: 46em;
background: #white;
padding: 1% 5%;
justify-content: center;
margin-bottom: 20px;
`;

const Overview = () => (
  <Wrapper>
    <Banner />
    <ImageGallery />
    <ProductInfo />
    <StyleSelector />
    <AddToCart />
    <ProductOverview />
  </Wrapper>
);

export default Overview;
