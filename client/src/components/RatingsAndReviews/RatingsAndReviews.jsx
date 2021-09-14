/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

const Wrapper = styled.section`
background: #9EEFF6;
display: flex;
justify-content: space-between;
`;

const RatingsAndReviews = ({ id }) => {
  const [reviewsMeta, setReviewsMeta] = useState([]);
  const [reviews, setReviews] = useState([]);
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
    axios.get(`/api/reviews?product_id=${id}`)
      .then((response) => {
        setReviews(response.data);
      })
      .then(() => {
        setReviewsLoaded(true);
      });
  }, []);

  return (
    <div>
      <h2> Ratings & Reviews</h2>
      <Wrapper>
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
