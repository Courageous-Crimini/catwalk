/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import { StateContext, DispatchContext } from '../App.jsx';

const Wrapper = styled.section`
background: #F3F3F3;
grid-column-start: 2;
grid-column-end: 3;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const AddToCart = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);

  const filteredSizes = state.styles.filter((style) => style.style_id === state.selectedStyle.style_id)[0];

  return (
    <Wrapper>
      <form onSubmit={(e) => { e.preventDefault(); }}>
        <select
          style={{
            fontSize: '18px',
          }}
        >
          <option value="" key={0}>Select Size</option>
          {Object.values(filteredSizes.skus).map((sku, index) => (
            <option key={index + 1}>{sku.size}</option>
          ))}
        </select>
        <select
          style={{
            fontSize: '18px',
          }}
        >
          <option value="" key="NoQty">Select Quantity</option>
          <option key="Qty1">1</option>
          <option key="Qty2">2</option>
          <option key="Qty3">3</option>
          <option key="Qty4">4</option>
          <option key="Qty5">5</option>
        </select>
        <br />
        <input
          type="submit"
          value="Add to Cart"
          style={{
            fontSize: '18px',
          }}
        />
      </form>
    </Wrapper>
  );
};

export default AddToCart;
