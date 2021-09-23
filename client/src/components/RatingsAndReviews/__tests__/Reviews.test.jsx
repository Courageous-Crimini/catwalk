import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Reviews from '../Reviews.jsx';
import { StateContext } from '../../App.jsx';
import state from '../../Overview/mockState.js';

const reviews = {
  product: '48444',
  page: 0,
  count: 5,
  results: [
    {
      review_id: 801003,
      rating: 3,
      summary: 'Unde nemo nobis.',
      recommend: true,
      response: null,
      body: 'Voluptas rem maxime aliquid perspiciatis omnis eos ex natus eveniet. Corporis nam nisi aliquid culpa ea et. Suscipit atque natus et. Sunt neque incidunt. Aliquid et non ratione omnis.',
      date: '2021-09-08T00:00:00.000Z',
      reviewer_name: 'Rodrigo.Hickle94',
      helpfulness: 29,
      photos: [
        {
          id: 1555364,
          url: 'https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
        },
      ],
    },
    {
      review_id: 801000,
      rating: 1,
      summary: 'Laudantium modi a officiis eaque dolorum.',
      recommend: false,
      response: null,
      body: 'Velit veniam similique nesciunt qui odio occaecati. Quae itaque eum qui quisquam aspernatur aliquid explicabo. Similique nihil veritatis laborum est est at harum. Voluptas sed cum. Ullam ex architecto consequatur vel amet in.',
      date: '2020-10-27T00:00:00.000Z',
      reviewer_name: 'Guadalupe_Kuhlman18',
      helpfulness: 7,
      photos: [
        {
          id: 1555370,
          url: 'https://images.unsplash.com/photo-1529108750117-bcbad8bd25dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=662&q=80',
        },
        {
          id: 1555371,
          url: 'https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
        },
      ],
    },
    {
      review_id: 801001,
      rating: 3,
      summary: 'Repellat quia ut nisi quisquam ea ut qui non.',
      recommend: true,
      response: null,
      body: 'Consequuntur non quidem rem adipisci. Voluptate in magnam et. Expedita omnis qui ab maxime praesentium commodi odit quis et. Est rerum mollitia incidunt est ratione. Vel quo occaecati. Quaerat est culpa eligendi ut ut excepturi et officia.',
      date: '2020-09-10T00:00:00.000Z',
      reviewer_name: 'Lucie.Lynch90',
      helpfulness: 4,
      photos: [
        {
          id: 1555367,
          url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          id: 1555368,
          url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
        },
        {
          id: 1555369,
          url: 'https://images.unsplash.com/photo-1554735490-80893c93b06f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
      ],
    },
    {
      review_id: 801005,
      rating: 1,
      summary: 'Voluptas ex sapiente ut.',
      recommend: false,
      response: null,
      body: 'Ad eaque reprehenderit minus velit autem neque. Explicabo aut dolores consequatur sequi quaerat ut quibusdam non. Nihil dicta quia natus. Unde mollitia molestiae praesentium dolorum. Eos voluptatem eum occaecati alias numquam. Aperiam laboriosam ut dolorem.',
      date: '2020-11-09T00:00:00.000Z',
      reviewer_name: 'Dayton_Heaney',
      helpfulness: 0,
      photos: [
        {
          id: 1555360,
          url: 'https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          id: 1555361,
          url: 'https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80',
        },
        {
          id: 1555362,
          url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
      ],
    },
    {
      review_id: 801002,
      rating: 4,
      summary: 'Ea illo est unde possimus ut illo saepe.',
      recommend: true,
      response: null,
      body: 'Culpa libero voluptas sit nihil. Quaerat minus non doloremque officia cumque velit expedita et autem. Eos neque alias sunt aliquam odit in laudantium rem necessitatibus. Quibusdam dolor facere. Quis placeat inventore repellendus amet non et ab unde accusantium. Et libero ut et est doloribus et mollitia.',
      date: '2021-07-07T00:00:00.000Z',
      reviewer_name: 'Malcolm_Kerluke',
      helpfulness: 0,
      photos: [
        {
          id: 1555365,
          url: 'https://images.unsplash.com/photo-1498168208808-4c2706938a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80',
        },
        {
          id: 1555366,
          url: 'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
      ],
    },
  ],
};

test('Renders appropriate items from context on load', () => {
  render(
    <StateContext.Provider value={state}>
      <Reviews reviews={reviews} />
    </StateContext.Provider>,
  );
  expect(screen.getByText('Sort on')).toBeTruthy();
});
