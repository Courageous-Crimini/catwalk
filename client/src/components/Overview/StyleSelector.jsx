/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import { ACTIONS, StateContext, DispatchContext } from '../App.jsx';

const Wrapper = styled.section`
background: #F3F3F3;
grid-column-start: 2;
grid-column-end: 3;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
padding: 5% 5% 3% 5%;
`;

const StyleSelector = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  return (
    <Wrapper style={{
      display: 'grid',
      gridTemplateColumns: '[first] 25% [second] 25% [third] 25% [fourth] 25%',
      gridTemplateRows: '[row1-start] 15% [row1-end] 28% [row3-start] 28% [row3-end] 28% [last]',
      justifyItems: 'center',
      alignItems: 'center',
    }}
    >
      <div style={{
        marginBottom: '3%',
        gridColumnStart: '1',
        gridColumnEnd: '5',
        gridRowStart: '1',
        gridRowEnd: '2',
        justifySelf: 'start',
      }}
      >
        <h4 style={{
          margin: '0',
          fontSize: '1.25em',
          fontWeight: 'bolder',
          display: 'inline',
        }}
        >
          Style
          {' > '}
        </h4>
        <p
          style={{
            fontWeight: 'lighter',
            fontSize: '1em',
            margin: '0',
            marginLeft: '10px',
            display: 'inline',
            alignSelf: 'center',
          }}
          data-testid="StyleTitle"
        >
          {state.styles.filter((style) => style.style_id === state.selectedStyle)[0].name}
        </p>
      </div>
      {/* <div
        style={{
          gridColumnStart: '1',
          gridColumnEnd: '5',
          gridRowStart: '2',
          gridRowEnd: '4',
          height: 'auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignContent: 'center',
          marginLeft: '3%',
        }}
      > */}
      {state.styles.map((style, index) => {
        if (style.style_id === state.selectedStyle) {
          return (
            <img
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              src={style.photos[0].thumbnail_url}
              style={{
                borderRadius: '50%',
                padding: '3px',
                border: '2px solid black',
                display: 'inline',
                height: '40px',
                width: '40px',
                // margin: '15px',
                // marginBottom: '6px',
                cursor: 'pointer',
                // flex: '0 1.2 18%',
                boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
                gridColumnStart: `${index <= 3 ? index + 1
                  : index > 7
                    ? 1
                    : (index - 3)}`,
                gridColumnEnd: `${index <= 3 ? index + 2
                  : index > 7
                    ? 2
                    : (index - 2)}`,
                gridRowStart: `${index <= 3 ? 2
                  : index > 7
                    ? 4
                    : 3}`,
                gridRowEnd: `${index <= 3 ? 3
                  : index > 7
                    ? 5
                    : 4}`,
              }}
              alt="Style"
            />
          );
        }
        return (
          <img
            // eslint-disable-next-line max-len
            onClick={() => { dispatch({ type: ACTIONS.SET_STYLE, payload: style.style_id }); }}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            src={style.photos[0].thumbnail_url}
            style={{
              borderRadius: '50%',
              display: 'inline',
              height: '40px',
              width: '40px',
              // margin: '18px',
              // marginBottom: '8.5px',
              cursor: 'pointer',
              boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
              // flex: '0 1.2 18%',
              gridColumnStart: `${index <= 3 ? index + 1
                : index > 7
                  ? 1
                  : (index - 3)}`,
              gridColumnEnd: `${index <= 3 ? index + 2
                : index > 7
                  ? 2
                  : (index - 2)}`,
              gridRowStart: `${index <= 3 ? 2
                : index > 7
                  ? 4
                  : 3}`,
              gridRowEnd: `${index <= 3 ? 3
                : index > 7
                  ? 5
                  : 4}`,
            }}
            alt="Style"
          />
        );
      })}
      {/* </div> */}
    </Wrapper>
  );
};

export default StyleSelector;
