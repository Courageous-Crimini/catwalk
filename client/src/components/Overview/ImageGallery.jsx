/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import styled from 'styled-components';
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowUp,
} from 'react-icons/io';

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

export const ACTIONS = {
  NEXT_ITEM: 'next-item',
  PREVIOUS_ITEM: 'previous-item',
  SET_ITEM: 'set-item',
  VIEW_ITEM: 'view-item',
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
        return { ...state, image: state.length - 1 };
      }
      return { ...state, image: state.image - 1 };
    case ACTIONS.SET_ITEM:
      return { ...state, image: action.payload };
    case ACTIONS.VIEW_ITEM:
      return { ...state, clicked: !state.clicked };
    default:
      return state;
  }
};

const ImageGallery = ({ styleDetails }) => {
  const [state, dispatch] = useReducer(reducer, {
    image: 0,
    length: styleDetails.results[0].photos.length,
    clicked: false,
  });

  if (state.clicked === false) {
    return (
      <Wrapper style={{
        display: 'flex',
        alignItems: 'center',
        alignContent: 'middle',
        justifyContent: 'space-evenly',
      }}
      >
        <div
          dispatch={dispatch}
          photos={styleDetails.results[0].photos}
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
          {styleDetails.results[0].photos.map((photo, index) => {
            if (index === state.image) {
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
                  }}
                  onClick={() => { dispatch({ type: ACTIONS.SET_ITEM, payload: index }); }}
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
                }}
                onClick={() => { dispatch({ type: ACTIONS.SET_ITEM, payload: index }); }}
                alt="Thumbnail"
              />
            );
          })}
        </div>
        <IoIosArrowBack
          onClick={() => { dispatch({ type: ACTIONS.PREVIOUS_ITEM }); }}
          style={{
            order: '2',
            cursor: 'pointer',
            zIndex: '10',
          }}
        />
        <IoIosArrowForward
          onClick={() => { dispatch({ type: ACTIONS.NEXT_ITEM }); }}
          style={{
            order: '4',
            cursor: 'pointer',
            zIndex: '10',
          }}
        />
        <img
          src={styleDetails.results[0].photos[state.image].url}
          onClick={() => { dispatch({ type: ACTIONS.VIEW_ITEM }); }}
          style={{
            borderRadius: '3%',
            order: '3',
            width: '45%',
            height: '90%',
            margin: '0 5%',
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
        src={styleDetails.results[0].photos[state.image].url}
        style={{
          borderRadius: '3%',
          border: '1px solid grey',
          height: '100%',
          margin: '2%',
          zIndex: '10',
        }}
        onClick={() => { dispatch({ type: ACTIONS.VIEW_ITEM }); }}
        alt="Thumbnail"
      />
    </Wrapper>
  );
};

export default ImageGallery;
