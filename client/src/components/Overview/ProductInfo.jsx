/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
height: 33%;
background: #FFC1FD;
grid-column-start: 2;
grid-column-end: 3;
`;

const ProductInfo = () => (
  <Wrapper>
    <h3>ProductInfo</h3>
  </Wrapper>
);

export default ProductInfo;
