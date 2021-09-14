import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
background: seagreen;
flex: 0 0 50%;
display: flex;
justify-content: flex-end;
`;

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

const Reviews = (props) => (
  <Wrapper>
    <div>
      {console.log('data', props)}
      <SortByDropdown />
      <ReviewsList />
      <MoreReviews />
      <AddAReview />
    </div>
  </Wrapper>
);

export default Reviews;
