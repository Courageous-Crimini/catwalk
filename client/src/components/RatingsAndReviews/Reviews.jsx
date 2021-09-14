/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
background: seagreen;
flex: 0 0 50%;
display: flex;
justify-content: flex-end;
`;

const ReviewsList = ({ reviews }) => (
  <div className="reviewslist">
    <ul>
      {reviews.map((review) => (
        <li key={review.review_id}>
          <Review review={review} />
        </li>
      ))}
    </ul>
  </div>
);

const Review = ({ review }) => (
  <div className="review">
    {console.log(review)}
    <span>
      {`${review.rating} ☆☆☆☆☆ ${review.reviewer_name} ${review.date}`}
      <br />
    </span>
    <span>
      {review.summary}
      <br />
    </span>
    <span>
      {review.body.slice(0, 250)}
      <br />
    </span>
    <ShowMore />
    <span>
      Images
      <br />
    </span>
    <span>
      Response to Review
      <br />
    </span>
    <span>
      Helpful? Yes # No # Report
      <br />
    </span>
  </div>
);

const ShowMore = () => (
  <button className="show-more-review" type="submit">Show More</button>
);

const MoreReviews = () => (
  <button className="see-more-reviews" type="submit">More Reviews</button>
);

const AddAReview = () => (
  <button className="add-a-review" type="submit">Add a Review</button>
);
class SortByDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'coconut' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <form>
        Sort on
        <select value={value} onChange={this.handleChange}>
          <option value="relevant">Relevant</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </select>
      </form>
    );
  }
}

const Reviews = ({ reviews }) => (
  <Wrapper>
    <div>
      <SortByDropdown />
      <ReviewsList reviews={reviews.results} />
      <MoreReviews />
      <AddAReview />
    </div>
  </Wrapper>
);

export default Reviews;
