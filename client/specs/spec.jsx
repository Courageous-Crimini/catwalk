import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/components/App.jsx';

describe('Header', () => {
  it('Should render header to page', () => {
    render(<App />);
    const headerID = document.getElementById('header');
    expect(headerID).toBeTruthy();
  });
});

describe('Overview', () => {
  it('Should render all subcomponents to the page to page', () => {
    render(<App />);
    const imageGalleryId = document.getElementById('ImageGallery');
    expect(imageGalleryId).toBeTruthy();
  });
  it('Should render all subcomponents to the page to page', () => {
    render(<App />);
    const productInfoId = document.getElementById('ProductInfo');
    expect(productInfoId).toBeTruthy();
  });
  it('Should render all subcomponents to the page to page', () => {
    render(<App />);
    const styleSelectorId = document.getElementById('StyleSelector');
    expect(styleSelectorId).toBeTruthy();
  });
  it('Should render all subcomponents to the page to page', () => {
    render(<App />);
    const addToCartId = document.getElementById('AddToCart');
    expect(addToCartId).toBeTruthy();
  });
  it('Should render all subcomponents to the page to page', () => {
    render(<App />);
    const productOverviewId = document.getElementById('ProductOverview');
    expect(productOverviewId).toBeTruthy();
  });
  it('Should render 7 images to the Image Gallery component', () => {
    render(<App />);
    const images = document.images();
    expect(images.length).toBe(7);
  });
});

describe('Ratings and Reviews', () => {
  // it('Should...', () => {});
  // it('Should...', () => {});
});

describe('Questions and Answers', () => {
  // it('Should...', () => {});
  // it('Should...', () => {});
});

describe('Related Items And Comparison', () => {
  // it('Should...', () => {});
  // it('Should...', () => {});
});
