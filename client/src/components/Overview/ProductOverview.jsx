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
    <Wrapper style={{
      display: 'flex',
      padding: '0 0 0 3%',
      flexDirection: 'row',
      alignItems: 'center',
    }}
    >
      <div style={{
        gridColumnStart: '1',
        gridColumnEnd: '2',
        order: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '69%',
      }}
      >
        <h2 style={{ margin: '0' }}>{productInfo[0].slogan}</h2>
        <p style={{ width: '90%' }}>{productInfo[0].description}</p>
      </div>
      <div style={{
        gridColumnStart: '2',
        gridColumnEnd: '3',
        columnGap: '0',
        justifySelf: 'start',
        order: '2',
        margin: '0',
      }}
      >
        <ul style={{
          borderLeft: '3px solid black',
          listStyleType: 'none',
          margin: '0',
          paddingLeft: '1%',
          width: '100%',
        }}
        >
          {state.selectedProductFeatures.map((feature, index) => (
            <li
              key={`Feature${index + 1}`}
              style={{ padding: '1.5% 0 1.5% 20px' }}
            >
              &#10003;
              <strong>
                {` ${feature.feature}: `}
              </strong>
              {`${feature.value}`}
            </li>
          ))}
          <li style={{ padding: '1.5% 0 1.5% 20px' }}>&#10003; GMO and Pesticide Free</li>
          <li style={{ padding: '1.5% 0 1.5% 20px' }}>&#10003; Made with 100% Synthetic Materials</li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default ProductOverview;
