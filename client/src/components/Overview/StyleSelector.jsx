/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
height: 33%;
background: #A4AFFF;
grid-column-start: 2;
grid-column-end: 3;
`;

const StyleSelector = () => (
  <Wrapper>
    <h3>StyleSelector</h3>
  </Wrapper>
);

export default StyleSelector;
