import React, { useContext } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import { StateContext } from '../App.jsx';

const Wrapper = styled.section`
background: #F3F3F3;
grid-column-start: 1;
grid-column-end: 3;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
padding: 0;
margin: 0;
justify-self: center;
width: 100%;
`;

const Banner = () => {
  const state = useContext(StateContext);

  return (
    <Wrapper style={{
      display: 'grid',
    }}
    >
      <p style={{
        justifySelf: 'center',
        alignSelf: 'center',
        margin: '0',
        padding: '0',
      }}
      >
        <em>SITE-WIDE ANNOUNCEMENT MESSAGE! </em>
        {' '}
        -- SALE/DISCOUNT
        {' '}
        <strong>OFFER</strong>
        {' '}
        --
        {' '}
        <u>NEW PRODUCT HIGHLIGHT</u>
      </p>
    </Wrapper>
  );
};

export default Banner;
