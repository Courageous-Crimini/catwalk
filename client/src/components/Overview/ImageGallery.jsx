/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
height: 33%;
background: #C1E8FF;
grid-column-start: 1;
grid-column-end: 2;
`;

const ImageGallery = () => (
  <Wrapper>
    <h3>ImageGallery</h3>
  </Wrapper>
);

export default ImageGallery;
