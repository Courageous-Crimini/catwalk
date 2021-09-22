import React from 'react';

const StarRatings = ({ ratings }) => {
  const ratingsArr = Object.values(ratings);
  const reducer = (prevVal, currVal) => Number(prevVal) + Number(currVal);
  const totalRatings = ratingsArr.reduce(reducer);
  const avgPerStar = ratingsArr.map((item) => (item / totalRatings));
  const total = avgPerStar.reduce(reducer) / 5;

  console.log(total * 100);

  return (
    <>
      Ratings
    </>
  );
};

export default StarRatings;
