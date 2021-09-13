import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

const Wrapper = styled.section`
background: #9EEFF6;
display: flex;
justify-content: space-between;
`;

const RatingsAndReviews = () => (
  <div>
    <h2> Ratings & Reviews</h2>
    <Wrapper>
      <Ratings />
      <Reviews />
    </Wrapper>
  </div>
);

export default RatingsAndReviews;
