/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
background: #F9FFA4;
grid-column-start: 2;
grid-column-end: 3;
`;

const AddToCart = ({ styleDetails }) => {
  const [currentSize, setCurrentSize] = useState('');
  const [currentQty, setCurrentQty] = useState('');

  return (
    <Wrapper>
      <select
        onChange={(e) => { setCurrentSize(e.target.value); }}
        style={{
          fontSize: '18px',
        }}
      >
        <option value="">Select Size</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
      <select
        onChange={(e) => { setCurrentQty(e.target.value); }}
        style={{
          fontSize: '18px',
        }}
      >
        <option value="">Select Quantity</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <br />
      <button
        type="submit"
        style={{
          fontSize: '18px',
        }}
      >
        Add to Cart
      </button>
    </Wrapper>
  );
};

export default AddToCart;
