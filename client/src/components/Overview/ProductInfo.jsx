/* eslint-disable no-unused-vars */
import axios from 'axios';
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import { StateContext } from '../App.jsx';
import { getAverageRating, generateStars } from '../RatingsAndReviews/Ratings.jsx';

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
  // eslint-disable-next-line max-len
  // const productInfo = state.products.filter((product) => product.id === state.selectedProduct)[0];
  const productInfo = state.selectedProductInfo;
  const styleInfo = state.styles.filter((style) => style.style_id === state.selectedStyle)[0];

  return (

    <Wrapper style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      alignContent: 'center',
      justifyContent: 'space-between',
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
        <p style={{
          fontSize: '1.25em',
          margin: '4px 10% 0 0',
        }}
        >
          {generateStars(getAverageRating(state.reviewsMeta.ratings)[0], 17, 16)}
        </p>
        <p style={{ margin: '0' }}><a href="#RatingsAndReviews" style={{ color: 'black' }}>Read all reviews</a></p>
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
      <div style={{
        order: '4',
        margin: '0',
        fontSize: '1.25em',
      }}
      >
        { styleInfo.sale_price
          ? (
            <span>
              <p style={{
                margin: '0',
                display: 'inline',
                color: 'red',
              }}
              >
                {`$${styleInfo.sale_price}`}
              </p>
              <p style={{
                margin: '0',
                display: 'inline',
                marginLeft: '10px',
                textDecoration: 'line-through',
              }}
              >
                {`$${styleInfo.original_price}`}
              </p>
            </span>
          )
          : (
            <p style={{ margin: '0' }}>{`$${styleInfo.original_price}`}</p>
          )}
      </div>
    </Wrapper>
  );
};

export default ProductInfo;
