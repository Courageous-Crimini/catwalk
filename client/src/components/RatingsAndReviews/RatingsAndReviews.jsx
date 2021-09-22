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
grid-template-columns: [first] 325px [second] auto;
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
padding: 0 50px 50px 100px;
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
      .catch((err) => {
        throw err;
      })
      .then(() => {
        setRatingsLoaded(true);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  useEffect(() => {
    axios.get(`/api/reviews?product_id=${id}&count=100&sort=helpful`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((err) => {
        throw err;
      })
      .then(() => {
        setReviewsLoaded(true);
      })
      .catch((err) => {
        throw err;
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
