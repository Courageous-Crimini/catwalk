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
padding: 3%;
`;

const ProductInfo = () => {
  const state = useContext(StateContext);

  const productInfo = state.products.filter((product) => product.id === state.selectedProduct);

  return (
    <Wrapper style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      alignContent: 'center',
      justifyContent: 'space-evenly',
      gap: '1px',
    }}
    >
      <span style={{
        order: '1',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        margin: '0 5%',
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
        marginLeft: '5%',
        fontWeight: 'lighter',
      }}
      >
        {productInfo[0].category}
      </p>
      <h4 style={{
        order: '3',
        margin: '0',
        marginLeft: '5%',
        fontSize: '1.75em',
        fontWeight: 'bolder',
      }}
      >
        {productInfo[0].name}
      </h4>
      <p style={{
        order: '4',
        margin: '0',
        marginLeft: '5%',
        fontSize: '1.25em',
      }}
      >
        $
        {productInfo[0].default_price}
      </p>
    </Wrapper>
  );
};

export default ProductInfo;
