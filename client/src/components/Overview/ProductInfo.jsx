/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { StateContext } from '../App.jsx';

const Wrapper = styled.section`
height: auto;
background: #FFC1FD;
grid-column-start: 2;
grid-column-end: 3;
`;

const ProductInfo = () => {
  const state = useContext(StateContext);

  const productInfo = state.products.filter((product) => product.id === state.selectedProduct);

  return (
    <Wrapper>
      <p>&#9734; &#9734; &#9734; &#9734; &#9734;</p>
      <p><u>Read all reviews</u></p>
      <p>{productInfo[0].category}</p>
      <h3>{productInfo[0].name}</h3>
      <p>
        $
        {productInfo[0].default_price}
      </p>
    </Wrapper>
  );
};

export default ProductInfo;
