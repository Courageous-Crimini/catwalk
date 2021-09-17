/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import moment from 'moment';

const Wrapper = styled.section`
height: 100%;
background: white;
margin: 40px;
`;

const ShowMoreButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? 'black' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'black')};

  font-size: 1.2em;
  margin: 1.2em;
  padding: 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

const Button = styled.button`
background: none!important;
border: none;
padding: 0!important;
font-weight: bold;
text-decoration: underline;
cursor: pointer;
font-family: Valera Round,sans-serif;
font-size: 16px
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

const Review = ({ review }) => {
  // const review_id = useState(review.review_id);
  const [helpfulness, setHelpfulness] = useState(review.helpfulness);
  const [upvoted, setUpvoted] = useState(false);
  const [reported, setReported] = useState(false);
  const handleUpvote = () => {
    if (!upvoted) {
      axios.put(`/api/reviews/${review.review_id}/helpful`)
        .then(() => {
          setUpvoted(true);
          setHelpfulness((prevState) => prevState + 1);
        })
        .catch((err) => {
          throw err;
        });
    }
  };
  const handleReport = () => {
    if (!reported) {
      axios.put(`/api/reviews/${review.review_id}/report`)
        .then(() => {
          setReported(true);
        })
        .catch((err) => {
          throw err;
        });
    }
  };

  return (
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
        && <img src={review.photos[0].url} alt="1/> */}
        </div>
        {(review.response !== null && review.response !== '')
        && <Response>{`Response: ${review.response}`}</Response>}
        <AlignLeft>
          {'Helpful? '}
          <Button onClick={handleUpvote}>
            Yes
          </Button>
          {` (${helpfulness}) `}
          {reported
            ? 'Reported'
            : (
              <Button onClick={handleReport}>
                Report
              </Button>
            )}
        </AlignLeft>
      </div>
    </Wrapper>
  );
};
export default Review;
