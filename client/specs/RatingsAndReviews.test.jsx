import React from 'react';
import 'regenerator-runtime/runtime';
import {
  render, cleanup, waitFor, fireEvent, screen,
} from '@testing-library/react';
import axios from 'axios';
import App from '../src/components/App.jsx';
import RatingsAndReviews from '../src/components/RatingsAndReviews/RatingsAndReviews.jsx';

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
      case '/api/reviews/?product_id=1337':
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
jest.mock('../src/components/Header/Header.jsx', () => () => (<div>Header Placeholder</div>));
jest.mock('../src/components/Overview/Overview.jsx', () => () => (<div>Overview Placeholder</div>));
jest.mock('../src/components/RelatedAndComparison/RelatedAndComparison.jsx', () => () => (<div>RelatedAndComparison Placeholder</div>));
jest.mock('../src/components//QA/QA.jsx', () => () => (<div>QA Placeholder</div>));

// Tests
it('should load the products',
  () => axios.get('/api/products/')
    .then((products) => expect(products).toEqual(mockProductsData)));

it('should load the reviews',
  () => axios.get('/api/reviews/?product_id=1337')
    .then((reviews) => expect(reviews).toEqual(mockReviewData)));

it('should load the reviews meta',
  () => axios.get('/api/reviews/meta?product_id=1337')
    .then((reviewsMeta) => expect(reviewsMeta).toEqual(mockReviewMetaData)));

it('should load and display the selected product data', async () => {
  render(
    <App />,
  );

  axios.get('/products/reviews/?product_id=337')
    .then(async () => {
      const componentDiv = await waitFor(() => screen.getByTestId('ratings-and-reviews'));
      // const category = await waitFor(() => screen.getByTestId('show-category'));
      // const name = await waitFor(() => screen.getByTestId('show-name'));
      // const description = await waitFor(() => screen.getByTestId('show-description'));
      // expect(resolvedDiv).toHaveTextContent('Star Ratings Placeholder');
      // expect(category).toHaveTextContent('Pants');
      // expect(name).toHaveTextContent('Morning Joggers');
      // expect(description).toHaveTextContent('Whether you\'re a morning person or not. Whether you\'re gym bound or not. Everyone looks good in joggers.');
      expect(componentDiv).toHaveTextContent('Ratings And Reviews');
    });
});
