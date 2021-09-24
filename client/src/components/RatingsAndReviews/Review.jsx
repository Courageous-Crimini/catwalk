/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import moment from 'moment';
import ReviewImage from './ReviewImage.jsx';

const Wrapper = styled.section`
height: 100%;
background: white;
margin: 40px;
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

const genAllStars = (rating) => {
  let stars = '';
  for (let i = 1; i <= 5; i += 1) {
    if (rating < i) {
      stars += '☆';
    } else {
      stars += '★';
    }
  }
  return stars;
};

const Review = ({ review }) => {
  // const review_id = useState(review.review_id);
  const [helpfulness, setHelpfulness] = useState(review.helpfulness);
  const [body, setBody] = useState((review.body).slice(0, 250));
  const [upvoted, setUpvoted] = useState(false);
  const [reported, setReported] = useState(false);
  const [showMore, setShowMore] = useState(review.body.length > 250);
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
  const handleShowMore = () => {
    if (showMore) {
      setBody(review.body);
      setShowMore(false);
    }
  };

  return (
    <Wrapper>
      <div className="review">
        <Row>
          <AlignLeft>
            {`${review.rating} `}
            {genAllStars(review.rating)}
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
          {body}
          <br />
        </span>
        {(showMore)
      && (
      <Button
        className="toggle"
        onClick={handleShowMore}
      >
        Show More
      </Button>
      )}
        <div>
          {(review.photos.length !== 0)
        && (review.photos.map((photo) => (
          <>
            <ReviewImage url={photo.url} />
          </>
        ))) }
        </div>
        {(review.recommend) && <div>✓ I recommend this product</div>}
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
