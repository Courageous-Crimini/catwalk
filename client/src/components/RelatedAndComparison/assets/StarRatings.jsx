import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { getAverageRating, generateStars } from '../../RatingsAndReviews/Ratings.jsx';
import { Stars } from '../styles.jsx';

const StarRatings = ({ ratings }) => {
  const ratingsArr = Object.values(ratings);
  let total = 0;

  for (let i = 0; i < ratingsArr.length; i += 1) {
    const currIdx = Number(ratingsArr[i]);
    if (i === 0) {
      total += currIdx;
    } else if (i === 1) {
      total += (currIdx * 2);
    } else if (i === 2) {
      total += (currIdx * 3);
    } else if (i === 4) {
      total += (currIdx * 4);
    } else {
      total += (currIdx * 5);
    }
  }
  const starRating = total / 5;
  const stars = [100, 80, 60, 40, 20].map((item) => {
    if (starRating > item - 15 && starRating < item - 5) {
      return (
        <FaStarHalfAlt />
      );
    }
    return (
      <FaStar />
    );
  });

  return (
    <Stars>
      {generateStars(getAverageRating(ratings)[0], 17, 16)}
    </Stars>
  );
};

// import React from 'react';
// import { Stars } from '../styles.jsx';


// const StarRatings = ({ ratings }) => (
//   <Stars>
//     {generateStars(getAverageRating(ratings)[0], 17, 16)}
//   </Stars>
// );

// export default StarRatings;


export default StarRatings;
