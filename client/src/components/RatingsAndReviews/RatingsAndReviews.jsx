import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import Ratings from './Ratings.jsx';
// eslint-disable-next-line import/no-cycle
import Reviews from './Reviews.jsx';

const Wrapper = styled.section`
display: grid;
grid-template-columns: [first] 325px [second] auto;
grid-template-rows: [row1-start] 70px [row1-end] auto [last];
grid-template-areas:

column-gap: 1%;
row-gap: 1%;
grid-line{
  border: 10px solid black;
}
justify-content: center;

margin: 0;
height: 100%;
padding: 50px 100px;
background: white;
`;

const RatingsAndReviews = () => (
  <div id="RatingsAndReviews">
    <Wrapper>
      <h2> Ratings & Reviews</h2>
      <Ratings />
      <Reviews />
    </Wrapper>
  </div>
);

export default RatingsAndReviews;
