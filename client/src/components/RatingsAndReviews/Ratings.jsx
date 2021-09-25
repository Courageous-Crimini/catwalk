/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import { StateContext } from '../App.jsx';

const Wrapper = styled.section`
height: auto;
grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 2
height: 100%;
background: white;
padding: 20px;
`;

const CharTitle = styled.span`
font-weight: bold;
`;

const CharacteristicBar = styled.div`
background-color: rgb(233, 236, 239);
width: 100%
`;

const Indicator = styled.div`
margin-left: ${(props) => props.distance};
`;

const RatingNumber = styled.span`
font-size: 2.6em;
`;

const AlignRight = styled.div`
float: right;
font-size: 0.8em;
text-align: right;
width: 33%;
`;

const AlignMiddle = styled.div`
float: left;
font-size: 0.8em;
text-align: center;
width: 33%;
`;

const AlignLeft = styled.div`
float: left;
font-size: 0.8em;
width: 33%;
`;

export const getAverageRating = (ratingsObj) => {
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

export const generateStar = (rating, width, height, index) => {
  let size = 1;
  if (rating < 0.125) {
    size = 0;
  } else if (rating < 0.375) {
    size = 0.35;
  } else if (rating < 0.625) {
    size = 0.5;
  } else if (rating < 0.875) {
    size = 0.65;
  }
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 32"
      width={width}
      height={height}
      preserveAspectRatio="xMidYMin slice"
      key={index}
    >
      <defs>
        <linearGradient id={`grad-${size}`}>
          <stop offset={size} stopColor="gold" />
          <stop offset={size} stopColor="grey" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,
           31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,
           12.118l11.547-1.2L16.026,0.6L20.388,10.918z"
        fill={`url(#grad-${size})`}
        strokeWidth="1"
        stroke="black"
      />
    </svg>
  );
};

export const generateStars = (rating, width, height) => {
  const starsArray = [];
  let num = rating;
  for (let i = 0; i < 5; i += 1) {
    if (num >= 1) {
      starsArray.push(1);
    } else if (num < 0) {
      starsArray.push(0);
    } else {
      starsArray.push(rating % 1);
    }
    num -= 1;
  }
  return starsArray.map((size, index) => generateStar(size, width, height, index));
};

const CharMarkers = {
  Size: ['Too Small', 'Perfect', 'Too Wide'],
  Width: ['Too Narrow', 'Perfect', 'Too Wide'],
  Comfort: ['Uncomfortable', 'Ok', 'Perfect'],
  Quality: ['Poor', 'Expected', 'Perfect'],
  Length: ['Runs Short', 'Perfect', 'Runs Long'],
  Fit: ['Runs Tight', 'Perfect', 'Runs Long'],
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

export const getRecommendPercent = (recObj) => {
  if (recObj.true === undefined) {
    if (recObj.false === undefined) {
      return 'None';
    }
    return 0;
  }
  const recTrue = parseInt(recObj.true, 10);
  const recFalse = parseInt(recObj.false, 10) || 0;
  return 100 * (recTrue / (recTrue + recFalse));
};

const Ratings = () => {
  const state = useContext(StateContext);
  const meta = state.reviewsMeta;

  return (
    <Wrapper>
      <div>
        <div>
          { (getAverageRating(meta.ratings) === 'No ratings')
            ? 'No ratings yet'
            : (
              <RatingNumber>
                {`${Math.round(getAverageRating(meta.ratings)[0] * 10) / 10} `}
                {generateStars(getAverageRating(meta.ratings)[0], 34, 32)}
              </RatingNumber>
            )}
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
            {` ${meta.ratings[5 - num] || 0}`}
          </div>
        ))}
        {Object.entries(meta.characteristics).map((characteristic) => {
          if (characteristic[1].value !== null) {
            return (
              <div key={characteristic[1].id}>
                <div>
                  <CharTitle>{`${characteristic[0]}: `}</CharTitle>
                  <CharacteristicBar>
                    <Indicator distance={`${String((Number(characteristic[1].value) / 5) * 94)}%`}>
                      ▼
                    </Indicator>
                    {/*
              <Indicator distance={'94%'}>
                ▼
              </Indicator>
              */}
                  </CharacteristicBar>
                  <AlignLeft>
                    {CharMarkers[characteristic[0]][0]}
                  </AlignLeft>
                  <AlignMiddle>
                    {CharMarkers[characteristic[0]][1]}
                  </AlignMiddle>
                  <AlignRight>
                    {CharMarkers[characteristic[0]][2]}
                  </AlignRight>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </Wrapper>
  );
};

export default Ratings;
