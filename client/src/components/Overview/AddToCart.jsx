/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
height: 33%;
background: #F9FFA4;
grid-column-start: 2;
grid-column-end: 3;
`;

const AddToCart = () => (
  <Wrapper>
    <h3>AddToCart</h3>
  </Wrapper>
);

export default AddToCart;
