/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import axios from 'axios';
import Review from './Review.jsx';
// eslint-disable-next-line import/no-cycle
import AddReview from './AddReview.jsx';
// eslint-disable-next-line import/no-cycle
import { StateContext } from '../App.jsx';

const Wrapper = styled.section`
height: auto;
max-width: 940px;
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 2
height: 100%;
background: white;
padding: 20px;
`;

const ListItem = styled.li`
`;

const List = styled.ul`
list-style-type: none;
padding: 0px
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

const ReviewsList = () => {
  const state = useContext(StateContext);
  const id = state.selectedProduct;
  const [curReviews, setCurReviews] = useState([]);
  const [numReviews, setNumReviews] = useState(0);
  const [currentReviews, setReviews] = useState([]);
  const [limit, setLimit] = useState(2);

  useEffect(() => {
    axios.get(`/api/reviews?product_id=${id}&count=100&sort=relevant`)
      .then((response) => {
        setCurReviews(response.data.results);
        setNumReviews(response.data.results.length);
        setReviews(response.data.results.slice(0, 2));
        setLimit(2);
      })
      .catch((err) => {
        throw err;
      });
  }, [state.selectedProduct]);

  return (
    <div className="reviewslist">
      <List>
        {currentReviews.map((review) => (
          <ListItem key={review.review_id}>
            <Review review={review} />
          </ListItem>
        ))}
      </List>
      <Row>
        {(numReviews > limit)
      && (
      <Button
        className="toggle"
        onClick={() => {
          setReviews(curReviews.slice(0, limit + 2));
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

const Reviews = () => (
  <Wrapper>
    <div>
      <SortByDropdown />
      <ReviewsList />
    </div>
  </Wrapper>
);

export default Reviews;
