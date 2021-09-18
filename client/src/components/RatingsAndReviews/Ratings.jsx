/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
background: rgb(211, 212, 213);
height: auto;
grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 2
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
  return [sum / numRatings, numRatings];
};

// const getMaxRatings = (ratingsObj) => {
//   const ratingsArr = Object.entries(ratingsObj);
//   let maxNum = 0;
//   for (let i = 0; i < ratingsArr.length; i += 1) {
//     if (ratingsArr[i][1] > maxNum) {
//       [, maxNum] = ratingsArr[i];
//     }
//   }
//   return maxNum;
// };

const getRecommendPercent = (recObj) => {
  if (recObj.true === undefined) {
    if (recObj.false === undefined) {
      return 'None';
    }
    return 0;
  }
  const recTrue = parseInt(recObj.true, 10);
  const recFalse = parseInt(recObj.false, 10);
  return 100 * (recTrue / (recTrue + recFalse));
};

const Ratings = ({ meta }) => (
  <Wrapper>
    <div>
      <div>
        { (getAverageRating(meta.ratings) === 'No ratings')
          ? 'No ratings yet'
          : `${Math.round(getAverageRating(meta.ratings)[0] * 10) / 10} ☆☆☆☆☆`}
      </div>
      <div>
        { (getRecommendPercent(meta.recommended) === 'None')
          ? 'No recommendations yet'
          : `${Math.round(getRecommendPercent(meta.recommended))}% of reviews recommend this product`}
      </div>
      {Array.from(Array(5).keys()).map((num) => (
        <div key={5 - num}>
          {5 - num}
          {' stars '}
          <meter
            min="0"
            max={getAverageRating(meta.ratings)[1]}
            value={meta.ratings[5 - num]}
          />
          {` ${meta.ratings[5 - num]}`}
        </div>
      ))}
      {Object.entries(meta.characteristics).map((characteristic) => (
        <div key={characteristic[1].id}>
          {characteristic[0]}
          {': '}
          {characteristic[1].value}
        </div>
      ))}
    </div>
  </Wrapper>
);

export default Ratings;
