/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { useContext, useReducer } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import { StateContext } from '../App.jsx';

const CART_ACTIONS = {
  SET_INVENTORY: 'set-inventory',
  SET_SKU: 'set-sku',
  SET_SIZE: 'set-size',
  SET_QUANTITY: 'set-quanity',
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.SET_INVENTORY:
      return { ...state, inventory: action.payload };
    case CART_ACTIONS.SET_SKU:
      if (state.size === 'Select Size') {
        return { ...state, sku: 'sku' };
      }
      return { ...state, sku: Object.entries(state.inventory).filter((currSku) => currSku[1].size === state.size)[0][0] };
    case CART_ACTIONS.SET_SIZE:
      return { ...state, size: action.payload };
    case CART_ACTIONS.SET_QUANTITY:
      return { ...state, quantity: action.payload };
    default:
      return { state };
  }
};

const Wrapper = styled.section`
background: #F3F3F3;
grid-column-start: 2;
grid-column-end: 3;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const maxQtyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const AddToCart = () => {
  const state = useContext(StateContext);
  const initialState = {
    inventory: state.styles.filter((style) => style.style_id === state.selectedStyle)[0].skus,
    size: 'Select Size',
    quantity: 'Select Quantity',
    sku: 'sku',
  };

  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      url: '/api/cart',
      method: 'post',
      data: {
        sku_id: Number(cartState.sku),
      },
    };
    axios.request(options)
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response.data);
      });
  };

  return (
    <Wrapper>
      <form
        onSubmit={(e) => { handleSubmit(e); }}
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
            onChange={(e) => {
              cartDispatch({ type: CART_ACTIONS.SET_SIZE, payload: e.target.value });
              cartDispatch({ type: CART_ACTIONS.SET_SKU });
              cartDispatch({ type: CART_ACTIONS.SET_QUANTITY, payload: 'Set Quantity' });
            }}
            value={cartState.size}
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
            {Object.values(cartState.inventory).map((currSku, index) => (
              <option key={index + 1}>{currSku.size}</option>
            ))}
          </select>
          <select
            onChange={(e) => { cartDispatch({ type: CART_ACTIONS.SET_QUANTITY, payload: e.target.value }); }}
            value={cartState.quantity}
            style={{
              order: '2',
              fontSize: '18px',
              fontWeight: 'lighter',
              padding: '10px 5px',
              textAlign: 'center',
            }}
          >
            <option value="" key="SelQty">Select Quantity</option>
            { cartState.sku === 'sku' || Object.entries(cartState.inventory).filter((currSku) => currSku[0] === cartState.sku)[0][1].quantity === 0
              ? (
                <option key="NoQty">OUT OF STOCK</option>
              )
              : maxQtyArr.map((int) => (
                (int <= Object.entries(cartState.inventory).filter((currSku) => currSku[0] === cartState.sku)[0][1].quantity) ? (<option key={int}>{int}</option>) : null
              ))}
          </select>
        </div>
        { cartState.quantity > 0
          ? (
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
                cursor: 'pointer',
              }}
            />
          )
          : (
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
                opacity: '40%',
              }}
            />
          )}
      </form>
    </Wrapper>
  );
};

export default AddToCart;
