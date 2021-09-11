import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.section`
padding: 20em;
outline: 5px dotted #9EEFF6;
`;

const Reviews = () => {
  return (
    <Wrapper>
      <h2> Ratings & Reviews </h2>
      <Ratings />
      <ReviewsList />
      <MoreReviews />
      <AddAReview />
    </Wrapper>
  )
};

const Ratings = () => (
  <div>
    <div>
      <span>100% of reviews recommend this product<br></br></span>
      <span>5 stars<br></br></span>
      <span>4 stars<br></br></span>
      <span>3 stars<br></br></span>
      <span>2 stars<br></br></span>
      <span>1 stars<br></br></span>
    </div>
  </div>
)

const ReviewsList = () => (
  <div className="reviewslist">
    <ul>
      <Review />
    </ul>
  </div>
)

const Review = () => (
  <li>
    <div className="reviewslist">
      <span>Insert Star Rating left-aligned and Review Username, Date right-aligned<br></br></span>
      <span>Review Summary<br></br></span>
      <span>Review Body<br></br></span>
      <MoreReviews />
      <span>Images<br></br></span>
      <span>Response to Review<br></br></span>
      <span>Helpful? Yes # No # Report<br></br></span>
    </div>
  </li>
)

const ImageWindow = () => (
  <div className="reviewslist">
    <ul>
      <li></li>
    </ul>
  </div>

)

const MoreReviews = () => (
  <button className="see-more-reviews" type="submit">More Reviews</button>
)

const AddAReview = () => (
  <button className="add-a-review" type="submit">Add a Review</button>
)

export default Reviews;