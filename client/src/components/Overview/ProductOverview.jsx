/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import { StateContext } from '../App.jsx';

const Wrapper = styled.section`
background: #F3F3F3;
grid-column-start: 1;
grid-column-end: 3;
display: grid;
grid-template-columns: subgrid;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const ProductOverview = () => {
  const state = useContext(StateContext);

  const productInfo = state.products.filter((product) => product.id === state.selectedProduct);

  return (
    <Wrapper>
      <div style={{
        gridColumnStart: '1',
        gridColumnEnd: '2',
      }}
      >
        <h2>{productInfo[0].slogan}</h2>
        <p>{productInfo[0].description}</p>
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
};

export default ProductOverview;
