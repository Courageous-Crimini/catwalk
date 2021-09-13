/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
height: auto;
width: auto;
background: #C1E8FF;
grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 1;
grid-row-end: 4;
`;

const ImageGallery = ({ styleDetails }) => (
  <Wrapper>
    <img
      src={styleDetails.results[0].photos[0].url}
      style={{
        height: '90%',
        margin: '10px',
      }}
      alt="Style"
    />
  </Wrapper>
);

export default ImageGallery;
