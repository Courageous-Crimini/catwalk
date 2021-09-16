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
      <form
        onSubmit={(e) => { e.preventDefault(); }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          padding: '0 12.5%',
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
          <select style={{
            order: '1',
            fontSize: '18px',
            fontWeight: 'lighter',
            padding: '10px 15px',
            textAlign: 'center',
            width: '45%',
          }}
          >
            <option value="" key={0}>Select Size</option>
            {Object.values(filteredSizes.skus).map((sku, index) => (
              <option key={index + 1}>{sku.size}</option>
            ))}
          </select>
          <select style={{
            order: '2',
            fontSize: '18px',
            fontWeight: 'lighter',
            padding: '10px 15px',
            textAlign: 'center',
          }}
          >
            <option value="" key="NoQty">Select Quantity</option>
            <option key="Qty1">1</option>
            <option key="Qty2">2</option>
            <option key="Qty3">3</option>
            <option key="Qty4">4</option>
            <option key="Qty5">5</option>
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
