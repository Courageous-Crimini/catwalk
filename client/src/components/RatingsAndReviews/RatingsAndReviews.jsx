import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

const Wrapper = styled.section`
padding: 20em;
outline: 5px dotted #9EEFF6;
`;

const RatingsAndReviews = () => (
  <Wrapper>
    <h2> Ratings & Reviews </h2>
    <Ratings />
    <Reviews />
  </Wrapper>
);

export default RatingsAndReviews;
