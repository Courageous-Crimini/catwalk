import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.section`
padding: 20em;
outline: 5px dotted #9EEFF6;
`;

var getAverageRating = function(ratingsObj) {
  var sum = 0;
  var numRatings = 0;
  for (var rating in ratingsObj) {
    sum += rating * ratingsObj[rating];
    numRatings += parseInt(ratingsObj[rating]);
  }
  if (numRatings === 0) {
    return 'No ratings';
  }
  return sum/numRatings;
}

axios.get('/api/reviews?product_id=48436')
.then(function (response) {
  console.log(response.data);
  console.log(getAverageRating(response.data.ratings))
})
.catch(function (error) {
  console.log(error);
})

const Ratings = () => (
  <div>
    <span>100% of reviews recommend this product<br></br></span>
    <span>5 stars<br></br></span>
    <span>4 stars<br></br></span>
    <span>3 stars<br></br></span>
    <span>2 stars<br></br></span>
    <span>1 stars<br></br></span>
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
class SortByDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form>
        <label>Sort on
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

const Reviews = () => {
  return (
    <Wrapper>
      <h2> Ratings & Reviews </h2>
      <Ratings />
      <SortByDropdown />
      <ReviewsList />
      <MoreReviews />
      <AddAReview />
      <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton>
    </Wrapper>
  )
};

export default Reviews;