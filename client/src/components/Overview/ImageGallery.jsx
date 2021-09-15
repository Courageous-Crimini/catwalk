/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext, useReducer } from 'react';
import styled from 'styled-components';
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowUp,
} from 'react-icons/io';
// eslint-disable-next-line import/no-cycle
import { StateContext, DispatchContext } from '../App.jsx';

const Wrapper = styled.section`
height: auto;
width: auto;
background: #F3F3F3;
grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 1;
grid-row-end: 4;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const IMAGE_ACTIONS = {
  NEXT_ITEM: 'next-item',
  PREVIOUS_ITEM: 'previous-item',
  VIEW_ITEM: 'view-item',
};

const reducer = (state, action) => {
  switch (action.type) {
    case IMAGE_ACTIONS.NEXT_ITEM:
      if (state.image + 1 > state.length - 1) {
        return { ...state, image: 0 };
      }
      return { ...state, image: state.image + 1 };
    case IMAGE_ACTIONS.PREVIOUS_ITEM:
      if (state.image - 1 < 0) {
        return { ...state, image: state.length - 1 };
      }
      return { ...state, image: state.image - 1 };
    case IMAGE_ACTIONS.SET_ITEM:
      return { ...state, image: action.payload };
    case IMAGE_ACTIONS.VIEW_ITEM:
      return { ...state, clicked: !state.clicked };
    default:
      return state;
  }
};

const ImageGallery = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);

  const styleImages = state.styles.filter((style) => (
    style.style_id === state.selectedStyle.style_id
  ))[0].photos;

  const initialState = {
    currentImage: styleImages[0].url,
    clicked: false,
  };
  const [imageState, imageDispatch] = useReducer(reducer, initialState);

  if (imageState.clicked === false) {
    return (
      <Wrapper style={{
        display: 'flex',
        alignItems: 'center',
        alignContent: 'middle',
        justifyContent: 'space-evenly',
      }}
      >
        <div
          style={{
            order: '1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'middle',
            justifyContent: 'space-evenly',
            margin: '0',
            width: '15%',
            height: '85%',
          }}
        >
          <IoIosArrowUp
            style={{
              order: '1',
              cursor: 'pointer',
              fontSize: '6em',
            }}
          />
          <IoIosArrowDown
            style={{
              order: '8',
              cursor: 'pointer',
              fontSize: '6em',
            }}
          />
          {styleImages.map((photo, index) => {
            if (photo.url === styleImages[0].url) {
              return (
                <img
                  src={photo.thumbnail_url}
                  style={{
                    borderRadius: '3%',
                    order: `${index + 2}`,
                    width: '40%',
                    height: '80%',
                    margin: '5%',
                    padding: '3px',
                    borderBottom: '3px solid black',
                    cursor: 'pointer',
                  }}
                  alt="Thumbnail"
                />
              );
            }
            return (
              <img
                src={photo.thumbnail_url}
                style={{
                  borderRadius: '3%',
                  order: `${index + 2}`,
                  width: '40%',
                  height: '80%',
                  margin: '5%',
                  cursor: 'pointer',
                }}
                alt="Thumbnail"
              />
            );
          })}
        </div>
        <IoIosArrowBack
          onClick={() => { dispatch({ type: IMAGE_ACTIONS.PREVIOUS_ITEM }); }}
          style={{
            order: '2',
            cursor: 'pointer',
            zIndex: '10',
          }}
        />
        <IoIosArrowForward
          onClick={() => { dispatch({ type: IMAGE_ACTIONS.NEXT_ITEM }); }}
          style={{
            order: '4',
            cursor: 'pointer',
            zIndex: '10',
          }}
        />
        <img
          src={styleImages[0].url}
          onClick={() => { dispatch({ type: IMAGE_ACTIONS.VIEW_ITEM }); }}
          style={{
            borderRadius: '3%',
            order: '3',
            width: '45%',
            height: '90%',
            margin: '0 5%',
            cursor: 'pointer',
          }}
          alt="Style"
        />
      </Wrapper>
    );
  }
  return (
    <Wrapper
      style={{
        display: 'flex',
        alignItems: 'center',
        alignContent: 'middle',
        justifyContent: 'middle',
      }}
    >
      <img
        src={styleImages[0].url}
        style={{
          borderRadius: '3%',
          border: '1px solid grey',
          height: '100%',
          margin: '2%',
          zIndex: '10',
          cursor: 'pointer',
        }}
        onClick={() => { dispatch({ type: IMAGE_ACTIONS.VIEW_ITEM }); }}
        alt="Thumbnail"
      />
    </Wrapper>
  );
};

export default ImageGallery;
