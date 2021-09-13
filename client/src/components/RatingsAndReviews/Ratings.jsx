import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.section`
background: palevioletred;
flex: 0 0 50%;
display: flex;
justify-content: flex-start;
`;

const Ratings = () => (
  <Wrapper>
    <div>
      <span>
        100% of reviews recommend this product
        <br />
      </span>
      <span>
        5 stars
        <meter id="fuel"
          min="0"
          max="5"
          value="1" />
        <br />
      </span>
      <span>
        4 stars
        <meter id="fuel"
          min="0"
          max="5"
          value="2" />
        <br />
      </span>
      <span>
        3 stars
        <meter id="fuel"
          min="0"
          max="5"
          value="4" />
        <br />
      </span>
      <span>
        2 stars
        <meter id="fuel"
          min="0"
          max="5"
          value="5" />
        <br />
      </span>
      <span>
        1 stars
        <meter id="fuel"
          min="0"
          max="5"
          value="3" />
        <br />
      </span>
    </div>
  </Wrapper>
);

export default Ratings;
