/* eslint-disable react/prop-types */
import React, { useState /* , useEffect, useContext */ } from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import Review from './Review.jsx';
// eslint-disable-next-line import/no-cycle
import AddReview from './AddReview.jsx';

const Wrapper = styled.section`
background: rgb(201, 202, 203);
height: auto;
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 2
`;

const Row = styled.div`
    display: flex;
    align-items: center;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? 'black' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'black')};

  font-size: 1.2em;
  margin: 1.2em;
  padding: 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

const ReviewsList = ({ reviews }) => {
  const numReviews = reviews.length;
  // const state = useContext(StateContext);
  // const id = state.selectedProduct;
  const [currentReviews, setReviews] = useState(reviews.slice(0, 2));
  const [limit, setLimit] = useState(2);

  //  useEffect(() => {
  //    axios.get(`/api/reviews?product_id=${id}&count=${limit}&sort=helpful`)
  //      .then(({ data }) => {
  //        setReviews(data.results);
  //      })
  //      .catch((err) => {
  //        throw err;
  //      });
  //  }, [limit]);

  return (
    <div className="reviewslist">
      <ul>
        {currentReviews.map((review) => (
          <li key={review.review_id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
      <Row>
        {(numReviews > limit)
      && (
      <Button
        className="toggle"
        onClick={() => {
          setReviews(reviews.slice(0, limit + 2));
          setLimit((prevState) => prevState + 2);
        }}
      >
        More Reviews
      </Button>
      )}
        <AddReview />
      </Row>
    </div>
  );
};

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

const Reviews = ({ reviews }) => (
  <Wrapper>
    <div>
      <SortByDropdown />
      <ReviewsList reviews={reviews.results} />
    </div>
  </Wrapper>
);

export default Reviews;
