import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.section`
background: palevioletred;
flex: 0 0 50%;
display: flex;
justify-content: flex-start;
`;

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

const getMaxRatings = (ratingsObj) => {
  const ratingsArr = Object.entries(ratingsObj);
  let maxNum = 0;
  for (let i = 0; i < ratingsArr.length; i += 1) {
    if (ratingsArr[i][1] > maxNum) {
      [, maxNum] = ratingsArr[i];
    }
  }
  return maxNum;
};

const getRecommendPercent = (recObj) => {
  const recTrue = parseInt(recObj.true, 10);
  const recFalse = parseInt(recObj.false, 10);
  return 100 * (recTrue / (recTrue + recFalse));
};

const Ratings = ({ meta }) => (
  <Wrapper>
    <div>
      {console.log(meta)}
      <div>
        {Math.round(getAverageRating(meta.ratings) * 10) / 10}
        &#9734; &#9734; &#9734; &#9734; &#9734;
      </div>
      <div>
        {Math.round(getRecommendPercent(meta.recommended))}
        % of reviews recommend this product
      </div>
      {Array.from(Array(5).keys()).map((num) => (
        <div key={5 - num}>
          {5 - num}
          {' stars '}
          <meter
            min="0"
            max={getMaxRatings(meta.ratings)}
            value={meta.ratings[5 - num]}
          />
        </div>
      ))}
    </div>
  </Wrapper>
);

export default Ratings;
