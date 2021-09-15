/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
height: 100%;
background: white;
margin: 40px;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
`;

const AlignRight = styled.div`
    margin-left: auto;
`;

const AlignLeft = styled.div`
    margin-right: auto;
    padding-right: 3em;
`;

const ShowMore = () => (
  <button className="show-more-review" type="submit">Show More</button>
);

const Review = ({ review }) => (
  <Wrapper>
    <div className="review">
      {console.log(review)}
      <Row>
        <AlignLeft>
          {`${review.rating} ☆☆☆☆☆`}
        </AlignLeft>
        <AlignRight>
          {`${review.reviewer_name} ${review.date}`}
        </AlignRight>
      </Row>
      <AlignLeft style={{ fontWeight: 'bold' }}>
        {review.summary}
      </AlignLeft>
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
        Helpful? Yes {review.helpfulness} No # Report
        <br />
      </span>
    </div>
  </Wrapper>
);

export default Review;
