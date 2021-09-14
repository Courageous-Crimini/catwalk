/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import styled from 'styled-components';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

const Wrapper = styled.section`
height: auto;
width: auto;
background: #C1E8FF;
gridColumnStart: 1;
gridColumnEnd: 2;
gridRowStart: 1;
gridRowEnd: 4;
`;

const ACTIONS = {
  NEXT_ITEM: 'next-item',
  PREVIOUS_ITEM: 'previous-item',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.NEXT_ITEM:
      if (state.image + 1 > state.length - 1) {
        return { ...state, image: 0 };
      }
      return { ...state, image: state.image + 1 };

    case ACTIONS.PREVIOUS_ITEM:
      if (state.image - 1 < 0) {
        return { ...state, image: state.length };
      }
      return { ...state, image: state.image - 1 };
    default:
      return state;
  }
};

const ImageGallery = ({ styleDetails }) => {
  const [state, dispatch] = useReducer(reducer, {
    image: 0,
    length: styleDetails.results[0].photos.length,
  });

  return (
    <Wrapper>
      <FaArrowCircleLeft />
      <FaArrowCircleRight />
      <img
        src={styleDetails.results[0].photos[state.image].url}
        style={{
          height: '90%',
          margin: '10px',
        }}
        alt="Style"
      />
    </Wrapper>
  );
};

export default ImageGallery;
