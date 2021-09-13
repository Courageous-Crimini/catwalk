/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
height: 33%;
background: #FFC1FD;
grid-column-start: 1;
grid-column-end: 3;
`;

const ProductOverview = () => (
  <Wrapper>
    <h3>ProductOverview</h3>
  </Wrapper>
);

export default ProductOverview;
