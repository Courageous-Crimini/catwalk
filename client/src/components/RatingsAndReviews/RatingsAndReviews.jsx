/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Ratings from './Ratings.jsx';
// eslint-disable-next-line import/no-cycle
import Reviews from './Reviews.jsx';
// eslint-disable-next-line import/no-cycle
import { StateContext } from '../App.jsx';

const Wrapper = styled.section`
display: grid;
grid-template-columns: [first] 30% [second] 70%;
grid-template-rows: [row1-start] 10% [row1-end] auto [last];
grid-template-areas:

column-gap: 1%;
row-gap: 1%;
grid-line{
  border: 10px solid black;
}
justify-content: center;

margin: 0;
height: 100%;
padding: 100px;
background: white;
`;

const RatingsAndReviews = () => {
  const state = useContext(StateContext);
  const id = state.selectedProduct;
  const [reviewsMeta, setReviewsMeta] = useState({});
  const [reviews, setReviews] = useState({});
  const [ratingsLoaded, setRatingsLoaded] = useState(false);
  const [reviewsLoaded, setReviewsLoaded] = useState(false);
  useEffect(() => {
    axios.get(`/api/reviews/meta?product_id=${id}`)
      .then((response) => {
        setReviewsMeta(response.data);
      })
      .then(() => {
        setRatingsLoaded(true);
      });
  }, []);
  useEffect(() => {
    axios.get(`/api/reviews?product_id=${id}&count=100&sort=helpful`)
      .then((response) => {
        setReviews(response.data);
      })
      .then(() => {
        setReviewsLoaded(true);
      });
  }, []);

  return (
    <div id="RatingsAndReviews">
      <Wrapper>
        <h2> Ratings & Reviews</h2>
        {ratingsLoaded
          ? <Ratings meta={reviewsMeta} />
          : <h4>Loading...</h4>}
        {reviewsLoaded
          ? <Reviews reviews={reviews} />
          : <h4>Loading...</h4>}
      </Wrapper>
    </div>
  );
};

export default RatingsAndReviews;
