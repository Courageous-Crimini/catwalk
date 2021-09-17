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
      gridTemplateRows: '[row1-start] 20% [row1-end] 40% [row3-start] 40% [last]',
      justifyItems: 'center',
      alignItems: 'center',
    }}
    >
      <div style={{
        marginBottom: '2%',
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
        <p style={{
          fontWeight: 'lighter',
          fontSize: '1em',
          margin: '0',
          marginLeft: '10px',
          display: 'inline',
          alignSelf: 'center',
        }}
        >
          {state.styles.filter((style) => style.style_id === state.selectedStyle)[0].name}
        </p>
      </div>
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
                margin: '10px',
                cursor: 'pointer',
                boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
                gridColumnStart: `${index <= 3 ? index + 1 : index - 3}`,
                gridColumnEnd: `${index <= 3 ? index + 2 : index - 2}`,
                gridRowStart: `${index <= 3 ? 2 : 3}`,
                gridRowEnd: `${index <= 3 ? 3 : 4}`,
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
              margin: '10px',
              cursor: 'pointer',
              boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
              gridColumnStart: `${index <= 3 ? index + 1 : index - 3}`,
              gridColumnEnd: `${index <= 3 ? index + 2 : index - 2}`,
              gridRowStart: `${index <= 3 ? 2 : 3}`,
              gridRowEnd: `${index <= 3 ? 3 : 4}`,
            }}
            alt="Style"
          />
        );
      })}
    </Wrapper>
  );
};

export default StyleSelector;
