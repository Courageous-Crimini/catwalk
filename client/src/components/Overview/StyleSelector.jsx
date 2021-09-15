/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
background: #A4AFFF;
grid-column-start: 2;
grid-column-end: 3;
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
          // eslint-disable-next-line react/no-array-index-key
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
