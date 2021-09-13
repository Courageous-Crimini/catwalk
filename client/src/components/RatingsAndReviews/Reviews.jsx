import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const getAverageRating = (ratingsObj) => {
  let sum = 0;
  let numRatings = 0;
  const ratingsArr = Object.entries(ratingsObj);
  for (let i = 0; i < ratingsArr.length; i += 1) {
    sum += ratingsArr[i][0] * ratingsArr[i][1];
    numRatings += parseInt(ratingsArr[i][1], 10);
  }
  if (numRatings === 0) {
    return 'No ratings';
  }
  return sum / numRatings;
};

axios.get('/api/reviews/meta?product_id=48433')
  .then((response) => {
    console.log(response.data);
    console.log(getAverageRating(response.data.ratings));
  })
  .catch((error) => {
    console.log(error);
  });

const ReviewsList = () => (
  <div className="reviewslist">
    <ul>
      <Review />
    </ul>
  </div>
);

const Review = () => (
  <li>
    <div className="reviewslist">
      <span>
        Insert Star Rating left-aligned and Review Username, Date right-aligned
        <br />
      </span>
      <span>
        Review Summary
        <br />
      </span>
      <span>
        Review Body
        <br />
      </span>
      <MoreReviews />
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
  </li>
);

const ImageWindow = () => (
  <div className="reviewslist">
    <ul>
      <li />
    </ul>
  </div>

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(`Your favorite flavor is: ${this.state.value}`);
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <label>
          Sort on
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
            <option value="relevant">Relevant</option>
          </select>
        </label>
      </form>
    );
  }
}

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const Reviews = () => (
  <div>
    <SortByDropdown />
    <ReviewsList />
    <MoreReviews />
    <AddAReview />
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
);

export default Reviews;
