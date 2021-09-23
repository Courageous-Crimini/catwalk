import React from 'react';
import { cleanup } from '@testing-library/react';
import axios from 'axios';
import {
  getAverageRating, generateStar, generateStars, getRecommendPercent,
} from '../Ratings.jsx';

const mockProductsData = [
  {
    id: 420,
    campus: 'hr-sfo',
    name: 'Heir Force Ones',
    slogan: 'A sneaker dynasty',
    description: "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
    category: 'Kicks',
    default_price: '99.00',
    created_at: '2021-09-09T19:03:37.378Z',
    updated_at: '2021-09-09T19:03:37.378Z',
  },
  {
    id: 1337,
    campus: 'hr-sfo',
    name: 'Pumped Up Kicks',
    slogan: 'Faster than a just about anything',
    description: 'The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.',
    category: 'Kicks',
    default_price: '89.00',
    created_at: '2021-09-09T19:03:37.378Z',
    updated_at: '2021-09-09T19:03:37.378Z',
  },
  {
    id: 6464,
    campus: 'hr-sfo',
    name: 'Blues Suede Shoes',
    slogan: '2019 Stanley Cup Limited Edition',
    description: 'Touch down in the land of the Delta Blues in the middle of the pouring rain',
    category: 'Dress Shoes',
    default_price: '120.00',
    created_at: '2021-09-09T19:03:37.378Z',
    updated_at: '2021-09-09T19:03:37.378Z',
  },
];

const mockReviewData = {
  product: '1337',
  page: 0,
  count: 5,
  results: [
    {
      review_id: 800960,
      rating: 5,
      summary: 'Ye is good at everything',
      recommend: true,
      response: '',
      body: 'I mortgaged my house to pay for these',
      date: '2018-12-13T00:00:00.000Z',
      reviewer_name: 'yecrazy',
      helpfulness: 23,
      photos: [],
    },
  ],
};

const mockReviewMetaData = {
  product_id: '48438',
  ratings: {
    1: '1',
    5: '1',
  },
  recommended: {
    false: '1',
    true: '1',
  },
  characteristics: {
    Size: {
      id: 162531,
      value: '2.5000000000000000',
    },
    Width: {
      id: 162532,
      value: '4.5000000000000000',
    },
    Comfort: {
      id: 162533,
      value: '5.0000000000000000',
    },
    Quality: {
      id: 162534,
      value: '3.5000000000000000',
    },
  },
};

beforeAll(() => {
  axios.get.mockImplementation((url) => {
    switch (url) {
      case '/api/products/':
        return Promise.resolve(mockProductsData);
      case '/api/reviews?product_id=1337':
        return Promise.resolve(mockReviewData);
      case '/api/reviews/meta?product_id=1337':
        return Promise.resolve(mockReviewMetaData);
      default:
        return Promise.reject(new Error('Error'));
    }
  });
});

afterEach(cleanup);

jest.mock('axios');
jest.mock('../../Header/Header.jsx', () => () => (<div>Header Placeholder</div>));
jest.mock('../../Overview/Overview.jsx', () => () => (<div>Overview Placeholder</div>));
jest.mock('../../RelatedAndComparison/RelatedAndComparison.jsx', () => () => (<div>RelatedAndComparison Placeholder</div>));
jest.mock('../../QA/QA.jsx', () => () => (<div>QA Placeholder</div>));

// Tests
it('should load the products',
  () => axios.get('/api/products/')
    .then((products) => expect(products).toEqual(mockProductsData)));

it('should load the reviews',
  () => axios.get('/api/reviews?product_id=1337')
    .then((reviews) => expect(reviews).toEqual(mockReviewData)));

it('should load the reviews meta',
  () => axios.get('/api/reviews/meta?product_id=1337')
    .then((reviewsMeta) => expect(reviewsMeta).toEqual(mockReviewMetaData)));

// it('should load and display the ratings and reviews', async () => {
//   render(
//     <RatingsAndReviews />,
//   );
//
//   //axios.get('/products/reviews?product_id=1337')
//   //  .then(async () => {
//   //  const componentDiv = await waitFor(() => screen.getByTestId('ratings-and-reviews'));
//   //  const ratingsDiv = await waitFor(() => screen.getByTestId('ratings'));
//   //  const reviewsDiv = await waitFor(() => screen.getByTestId('reviews'));
//   //  expect(componentDiv).toHaveTextContent('Ratings And Reviews');
//   //  expect(ratingsDiv).toHaveTextContent('');
//   //  expect(reviewsDiv).toHaveTextContent('');
//   //  });
// });
//

// it('should get average rating', () => {
//  expect(getAverageRating(mockReviewMetaData)).toEqual(3);
// });

it('should get average rating', () => {
  expect((mockReviewMetaData.product_id)).toEqual('48438');
  expect(getAverageRating(mockReviewMetaData.ratings)).toEqual([3, 2]);
});

it('should get no ratings if no ratings', () => {
  expect((getAverageRating({}))).toEqual('No ratings');
});

it('should check a single star is generated properly', () => {
  expect(generateStar(0.6, 34, 32, 2)).toEqual(
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 32"
      width={34}
      height={32}
      preserveAspectRatio="xMidYMin slice"
      key="2"
    >
      <defs>
        <linearGradient id="grad-0.5">
          <stop offset={0.5} stopColor="gold" />
          <stop offset={0.5} stopColor="grey" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,
         31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,
         12.118l11.547-1.2L16.026,0.6L20.388,10.918z"
        fill="url(#grad-0.5)"
        strokeWidth="1"
        stroke="black"
      />
    </svg>,
  );
  expect(generateStar(0.2, 34, 32, 4)).toEqual(
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 32"
      width={34}
      height={32}
      preserveAspectRatio="xMidYMin slice"
      key="4"
    >
      <defs>
        <linearGradient id="grad-0.35">
          <stop offset={0.35} stopColor="gold" />
          <stop offset={0.35} stopColor="grey" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,
         31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,
         12.118l11.547-1.2L16.026,0.6L20.388,10.918z"
        fill="url(#grad-0.35)"
        strokeWidth="1"
        stroke="black"
      />
    </svg>,
  );
  expect(generateStar(0.1, 34, 32, 3)).toEqual(
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 32"
      width={34}
      height={32}
      preserveAspectRatio="xMidYMin slice"
      key="3"
    >
      <defs>
        <linearGradient id="grad-0">
          <stop offset={0} stopColor="gold" />
          <stop offset={0} stopColor="grey" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,
         31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,
         12.118l11.547-1.2L16.026,0.6L20.388,10.918z"
        fill="url(#grad-0)"
        strokeWidth="1"
        stroke="black"
      />
    </svg>,
  );
});

it('should check stars are generated properly', () => {
  expect(generateStars(3.8, 34, 32)).toEqual(
    [1, 1, 1, 0.8, 0].map((size, index) => generateStar(size, 34, 32, index)),
  );
});

it('should check percentages are calculated properly', () => {
  expect(getRecommendPercent(mockReviewMetaData.recommended)).toEqual(50);
  expect(getRecommendPercent({ true: 21, false: 29 })).toEqual(42);
  expect(getRecommendPercent({ true: 3 })).toEqual(100);
  expect(getRecommendPercent({ false: 4 })).toEqual(0);
  expect(getRecommendPercent({})).toEqual('None');
});
