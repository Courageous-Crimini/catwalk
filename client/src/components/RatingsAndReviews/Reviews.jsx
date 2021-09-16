/* eslint-disable react/prop-types */
/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import styled from 'styled-components';
import Review from './Review.jsx';
import { StateContext } from '../App.jsx';

const Wrapper = styled.section`
background: rgb(201, 202, 203);
height: auto;
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 2
`;

const ReviewsList = () => {
  const state = useContext(StateContext);
  const { reviews } = state;

  return (
    <div className="reviewslist">
      <ul>
        {reviews.results.map((review) => (
          <li key={review.review_id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};

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
        {'Sort on '}
        <select value={value} onChange={this.handleChange}>
          <option value="relevant">Relevant</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </select>
      </form>
    );
  }
}

const Reviews = () => (
  <Wrapper>
    <div>
      <SortByDropdown />
      <ReviewsList />
      <MoreReviews />
      <AddAReview />
    </div>
  </Wrapper>
);

export default Reviews;
