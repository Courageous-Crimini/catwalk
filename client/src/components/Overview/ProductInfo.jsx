/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import { StateContext } from '../App.jsx';

const Wrapper = styled.section`
height: auto;
background: #F3F3F3;
grid-column-start: 2;
grid-column-end: 3;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
padding: 3% 5%;
`;

const ProductInfo = () => {
  const state = useContext(StateContext);

  const productInfo = state.products.filter((product) => product.id === state.selectedProduct)[0];
  const styleInfo = state.styles.filter((style) => style.style_id === state.selectedStyle)[0];

  if (styleInfo.sale_price) {
    return (
      <Wrapper style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        alignContent: 'center',
        justifyContent: 'space-evenly',
      }}
      >
        <span style={{
          order: '1',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'space-between',
        }}
        >
          <p style={{ fontSize: '1.25em', margin: '0', marginRight: '10%' }}>
            &#9734; &#9734; &#9734; &#9734; &#9734;
          </p>
          <p style={{ margin: '0' }}><u>Read all reviews</u></p>
        </span>
        <p style={{
          order: '2',
          margin: '0',
          fontWeight: 'lighter',
        }}
        >
          {productInfo.category}
        </p>
        <h4 style={{
          order: '3',
          margin: '0',
          fontSize: '1.75em',
          fontWeight: 'bolder',
        }}
        >
          {productInfo.name}
        </h4>
        <p style={{
          order: '4',
          margin: '0',
          fontSize: '1.25em',
        }}
        >
          <span>
            <p style={{ display: 'inline', textDecoration: 'line-through' }}>{`$${styleInfo.original_price}`}</p>
            <p style={{ marginLeft: '10px', display: 'inline', color: 'green' }}>
              {styleInfo.sale_price ? `SALE: $${styleInfo.sale_price}` : ''}
            </p>
          </span>
        </p>
      </Wrapper>
    );
  }
  return (
    <Wrapper style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      alignContent: 'center',
      justifyContent: 'space-evenly',
    }}
    >
      <span style={{
        order: '1',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
      }}
      >
        <p style={{ fontSize: '1.25em', margin: '0', marginRight: '10%' }}>
          &#9734; &#9734; &#9734; &#9734; &#9734;
        </p>
        <p style={{ margin: '0' }}><u>Read all reviews</u></p>
      </span>
      <p style={{
        order: '2',
        margin: '0',
        fontWeight: 'lighter',
      }}
      >
        {productInfo.category}
      </p>
      <h4 style={{
        order: '3',
        margin: '0',
        fontSize: '1.75em',
        fontWeight: 'bolder',
      }}
      >
        {productInfo.name}
      </h4>
      <p style={{
        order: '4',
        margin: '0',
        fontSize: '1.25em',
      }}
      >
        {`$${styleInfo.original_price}`}
      </p>
    </Wrapper>
  );
};

export default ProductInfo;
