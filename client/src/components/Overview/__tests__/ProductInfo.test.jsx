import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { StateContext } from '../../App.jsx';
import ProductInfo from '../ProductInfo.jsx';

test('Renders appropriate items from context on load', () => {
  render(
    <StateContext.Provider value={
      {
        products: [
          {
            id: 48432,
            campus: 'hr-sfo',
            name: 'Camo Onesie',
            slogan: 'Blend in to your crowd',
            description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
            category: 'Jackets',
            default_price: '140.00',
            created_at: '2021-09-09T19:03:37.378Z',
            updated_at: '2021-09-09T19:03:37.378Z',
          },
        ],
        selectedStyle: 293480,
        styles: [
          {
            'default?': true,
            name: 'Forest Green & Black',
            original_price: '140.00',
            sale_price: null,
            style_id: 293480,
            skus: {
              1702764: { quantity: 8, size: 'XS' },
              1702765: { quantity: 16, size: 'S' },
              1702766: { quantity: 17, size: 'M' },
              1702767: { quantity: 10, size: 'L' },
              1702768: { quantity: 15, size: 'XL' },
              1702769: { quantity: 4, size: 'XL' },
            },
          }],
      }
    }
    >
      <ProductInfo />
    </StateContext.Provider>,
  );
  setTimeout(() => {
    expect(screen.getByText('Jackets')).toBeTruthy();
    expect(screen.getByText('Camo Onesie')).toBeTruthy();
    expect(screen.getByText('$140.00')).toBeTruthy();
  }, 500);
});

test('Renders appropriate items from context on load', () => {
  render(
    <StateContext.Provider value={
        {
          products: [
            {
              id: 48432,
              campus: 'hr-sfo',
              name: 'Camo Onesie',
              slogan: 'Blend in to your crowd',
              description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
              category: 'Jackets',
              default_price: '140.00',
              created_at: '2021-09-09T19:03:37.378Z',
              updated_at: '2021-09-09T19:03:37.378Z',
            },
          ],
          selectedStyle: 293480,
          styles: [
            {
              'default?': true,
              name: 'Forest Green & Black',
              original_price: '140.00',
              sale_price: null,
              style_id: 293480,
              skus: {
                1702764: { quantity: 8, size: 'XS' },
                1702765: { quantity: 16, size: 'S' },
                1702766: { quantity: 17, size: 'M' },
                1702767: { quantity: 10, size: 'L' },
                1702768: { quantity: 15, size: 'XL' },
                1702769: { quantity: 4, size: 'XL' },
              },
            }],
        }
      }
    >
      <ProductInfo />
    </StateContext.Provider>,
  );
  setTimeout(() => {
    userEvent.click(screen.getByText('Read all reviews'));
    expect(global.window.location.pathname).toEqual('/?#RatingsAndReviews');
  }, 500);
});
