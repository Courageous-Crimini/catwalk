/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
background: #A4AFFF;
gridColumnStart: 2;
gridColumnEnd: 3;
`;

const StyleSelector = ({ styleDetails }) => (
  <Wrapper>
    <h3>
      Style
      {' > '}
      {styleDetails.results[0].name}
    </h3>
    <div>
      {
      styleDetails.results[0].photos.map((thumbnail, index) => (
        <img
          key={index}
          src={thumbnail.thumbnail_url}
          style={{
            borderRadius: '50%',
            display: 'inline',
            height: '60px',
            width: '60px',
            margin: '10px',
          }}
          alt="Style"
        />
      ))
      }
    </div>
  </Wrapper>
);

export default StyleSelector;
