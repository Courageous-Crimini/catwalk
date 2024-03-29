/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext, useReducer, useEffect } from 'react';
import Zoom from 'react-img-zoom';
import styled from 'styled-components';
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowUp,
} from 'react-icons/io';
// eslint-disable-next-line import/no-cycle
import { StateContext } from '../App.jsx';

const Wrapper = styled.section`
height: auto;
width: auto;
background: #F3F3F3;
grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 2;
grid-row-end: 5;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const IMAGE_ACTIONS = {
  NEXT_ITEM: 'next-item',
  PREVIOUS_ITEM: 'previous-item',
  VIEW_ITEM: 'view-item',
  SHIFT_THUMBNAILS_UP: 'shift-thumbnails-up',
  SHIFT_THUMBNAILS_DOWN: 'shift-thumbnails-down',
  UPDATE_IMAGES: 'update-images',
};

const reducer = (state, action) => {
  switch (action.type) {
    case IMAGE_ACTIONS.NEXT_ITEM:
      if (state.currentImageIndex + 1 > state.imageCollection.length - 1) {
        return { ...state, currentImageIndex: 0 };
      }
      return { ...state, currentImageIndex: state.currentImageIndex + 1 };
    case IMAGE_ACTIONS.PREVIOUS_ITEM:
      if (state.currentImageIndex - 1 < 0) {
        return { ...state, currentImageIndex: state.imageCollection.length - 1 };
      }
      return { ...state, currentImageIndex: state.currentImageIndex - 1 };
    case IMAGE_ACTIONS.SET_ITEM:
      return { ...state, currentImageIndex: action.payload };
    case IMAGE_ACTIONS.VIEW_ITEM:
      return { ...state, clicked: !state.clicked };
    case IMAGE_ACTIONS.SHIFT_THUMBNAILS_UP:
      return {
        ...state,
        imageCollection: state.imageCollection.concat(state.imageCollection).slice(1, 7),
      };
    case IMAGE_ACTIONS.SHIFT_THUMBNAILS_DOWN:
      return {
        ...state,
        imageCollection:
          state.imageCollection
            .concat(state.imageCollection)
            .slice(state.imageCollection.length - 1, (state.imageCollection.length * 2) - 1),
      };
    case IMAGE_ACTIONS.UPDATE_IMAGES:
      return {
        ...state,
        imageCollection: action.payload,
        currentImageIndex: 0,
        clicked: false,
      };
    default:
      return state;
  }
};

const initialState = {
  currentImageIndex: 0,
  imageCollection: [],
  clicked: false,
  startIndex: 0,
  endIndex: 6,
};

const ImageGallery = () => {
  const state = useContext(StateContext);

  const styleImages = state.styles.filter((style) => (
    style.style_id === state.selectedStyle
  ))[0].photos;

  const [imageState, imageDispatch] = useReducer(reducer, {
    ...initialState,
    imageCollection: styleImages,
  });

  useEffect(() => {
    imageDispatch({
      type: IMAGE_ACTIONS.UPDATE_IMAGES,
      payload: state.styles.filter((style) => style.style_id === state.selectedStyle)[0].photos,
    });
  }, [state.selectedStyle]);

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
            width: '12%',
            height: '85%',
            border: '1px solid lightgrey',
            backgroundColor: '#F6F6F6',
          }}
        >
          <IoIosArrowUp
            onClick={() => { imageDispatch({ type: IMAGE_ACTIONS.SHIFT_THUMBNAILS_UP }); }}
            style={{
              order: '1',
              cursor: 'pointer',
            }}
            data-testid="arrowU"
          />
          <IoIosArrowDown
            onClick={() => { imageDispatch({ type: IMAGE_ACTIONS.SHIFT_THUMBNAILS_DOWN }); }}
            style={{
              order: '8',
              cursor: 'pointer',
            }}
            data-testid="arrowD"
          />
          {imageState.imageCollection.map((photo, index) => {
            if (index < 6) {
              if (photo.url === imageState.imageCollection[imageState.currentImageIndex].url) {
                return (
                  <img
                    src={photo.thumbnail_url}
                    key={index}
                    onClick={() => {
                      imageDispatch({
                        type: IMAGE_ACTIONS.SET_ITEM,
                        payload: index,
                      });
                    }}
                    style={{
                      borderRadius: '25%',
                      order: `${index + 2}`,
                      width: '50%',
                      height: '11%',
                      margin: '5%',
                      padding: '3px',
                      border: '2px solid black',
                      cursor: 'pointer',
                      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
                    }}
                    alt="Thumbnail"
                  />
                );
              }
              return (
                <img
                  src={photo.thumbnail_url}
                  key={index}
                  onClick={() => {
                    imageDispatch({
                      type: IMAGE_ACTIONS.SET_ITEM,
                      payload: index,
                    });
                  }}
                  style={{
                    borderRadius: '25%',
                    order: `${index + 2}`,
                    width: '50%',
                    height: '11%',
                    margin: '5%',
                    cursor: 'pointer',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                  }}
                  alt="Thumbnail"
                />
              );
            }
            return null;
          })}
        </div>
        <IoIosArrowBack
          onClick={() => { imageDispatch({ type: IMAGE_ACTIONS.PREVIOUS_ITEM }); }}
          style={{
            order: '2',
            cursor: 'pointer',
            zIndex: '10',
          }}
          data-testid="arrowF"
        />
        <IoIosArrowForward
          onClick={() => { imageDispatch({ type: IMAGE_ACTIONS.NEXT_ITEM }); }}
          style={{
            order: '4',
            cursor: 'pointer',
            zIndex: '10',
          }}
          data-testid="arrowB"
        />
        <div
          onClick={() => { imageDispatch({ type: IMAGE_ACTIONS.VIEW_ITEM }); }}
          style={{
            order: '3',
            display: 'flex',
            width: '60%',
            height: '85%',
            cursor: 'zoom-in',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={imageState.imageCollection[imageState.currentImageIndex].url}
            // onClick={() => { imageDispatch({ type: IMAGE_ACTIONS.VIEW_ITEM }); }}
            style={{
              borderRadius: '3%',
              // order: '3',
              maxWidth: '100%',
              height: '100%',
              margin: '0 5%',
              cursor: 'zoom-in',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            }}
            alt="Main"
          />
        </div>
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
        zIndex: '0',
      }}
      onClick={() => { imageDispatch({ type: IMAGE_ACTIONS.VIEW_ITEM }); }}
      data-testid="ZoomContainer"
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          zIndex: '10',
          cursor: 'zoom-out',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <Zoom
          img={imageState.imageCollection[imageState.currentImageIndex].url}
          zoomScale={1.5}
          width={1000}
          height={600}
        />
      </div>
    </Wrapper>
  );
};

export default ImageGallery;
