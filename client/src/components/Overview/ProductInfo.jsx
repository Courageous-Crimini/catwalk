/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import { StateContext } from '../App.jsx';

const Wrapper = styled.section`
height: auto;
background: #F3F3F3;
grid-column-start: 2;
grid-column-end: 3;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
