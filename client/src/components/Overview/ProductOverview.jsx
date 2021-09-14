/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
background: #FA607C;
grid-column-start: 1;
grid-column-end: 3;
display: grid;
grid-template-columns: subgrid;
`;

const ProductOverview = ({ productInfo }) => (
  <Wrapper>
    <div style={{
      gridColumnStart: '1',
      gridColumnEnd: '2',
    }}
    >
      <h2>{productInfo.slogan}</h2>
      <p>{productInfo.description}</p>
    </div>
    <div style={{
      gridColumnStart: '2',
      gridColumnEnd: '3',
    }}
    >
      <ul style={{
        borderLeft: '3px solid black',
        listStyleType: 'none',
      }}
      >
        <li>&#10003; GMO and Pesticide Free</li>
        <li>&#10003; Made with 100% Synthetic Materials</li>
        <li>&#10003; #1 Item of Choice by MadeUpFoundation</li>
        <li>&#10003; As seen in Style Magazine</li>
      </ul>
    </div>
  </Wrapper>
);

export default ProductOverview;
