/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
height: auto;
background: #FFC1FD;
grid-column-start: 2;
grid-column-end: 3;
`;

const ProductInfo = ({ productInfo }) => (
  <Wrapper>
    <p>&#9734; &#9734; &#9734; &#9734; &#9734;</p>
    <p><u>Read all reviews</u></p>
    <p>{productInfo.category}</p>
    <h3>{productInfo.name}</h3>
    <p>
      $
      {productInfo.default_price}
    </p>
  </Wrapper>
);

export default ProductInfo;
