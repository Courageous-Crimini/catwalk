/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import { StateContext } from '../App.jsx';

const Wrapper = styled.section`
background: #F3F3F3;
grid-column-start: 2;
grid-column-end: 3;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const maxQtyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const AddToCart = () => {
  const state = useContext(StateContext);

  const filteredSizes = state.styles.filter((style) => style.style_id === state.selectedStyle)[0];
  const [size, setSize] = useState('Select Size');
  const inStock = Object.values(filteredSizes.skus).filter((sku) => sku.size === size)[0];

  return (
    <Wrapper>
      <form
        onSubmit={(e) => { e.preventDefault(); }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          padding: '0 5%',
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          order: '1',
        }}
        >
          <select
            onChange={(e) => { setSize(e.target.value); }}
            value={size}
            style={{
              order: '1',
              fontSize: '18px',
              fontWeight: 'lighter',
              padding: '10px 5px',
              textAlign: 'center',
              width: '45%',
            }}
          >
            <option key={0}>Select Size</option>
            {Object.values(filteredSizes.skus).map((sku, index) => (
              <option key={index + 1}>{sku.size}</option>
            ))}
          </select>
          <select style={{
            order: '2',
            fontSize: '18px',
            fontWeight: 'lighter',
            padding: '10px 5px',
            textAlign: 'center',
          }}
          >
            <option value="" key="SelQty">Select Quantity</option>
            { inStock === 0
              ? (
                <option key="NoQty">OUT OF STOCK</option>
              )
              : maxQtyArr.map((int) => (
                (inStock && int <= inStock.quantity) ? (<option key={int}>{int}</option>) : null
              ))}
          </select>
        </div>
        <input
          type="submit"
          value="Add to Cart"
          style={{
            order: '2',
            fontSize: '18px',
            padding: '10px 15px',
            width: '100%',
            backgroundColor: 'white',
            border: '1px solid black',
            fontWeight: 'bold',
          }}
        />
      </form>
    </Wrapper>
  );
};

export default AddToCart;
