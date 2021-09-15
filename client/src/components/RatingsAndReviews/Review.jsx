/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Wrapper = styled.section`
height: 100%;
background: white;
margin: 40px;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
`;

const Response = styled.div`
background:gray;
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
      <Row>
        <AlignLeft>
          {`${review.rating} ☆☆☆☆☆`}
        </AlignLeft>
        <AlignRight>
          {(true)
            && '✓ '}
          {`${review.reviewer_name}, ${moment(review.date).format('LL')}`}
        </AlignRight>
      </Row>
      <AlignLeft style={{ fontWeight: 'bold' }}>
        {review.summary}
      </AlignLeft>
      <span>
        {review.body.slice(0, 250)}
        <br />
      </span>
      {(review.body.length > 250)
      && <ShowMore />}
      <div>
        {/* (review.photos.length !== 0)
        && <img src={review.photos[0].url} alt="1" /> */}
      </div>
      {(review.response !== null && review.response !== '')
        && <Response>{`Response: ${review.response}`}</Response>}
      <AlignLeft>
        {`Helpful? Yes ${review.helpfulness} Report`}
      </AlignLeft>
    </div>
  </Wrapper>
);

export default Review;
