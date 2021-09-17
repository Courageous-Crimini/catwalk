import React, { useContext } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import { StateContext } from '../App.jsx';

const Wrapper = styled.section`
background: #F3F3F3;
grid-column-start: 2;
grid-column-end: 3;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
padding: 5% 5% 3% 5%;
`;

const StyleSelector = () => {
  const state = useContext(StateContext);

  return (
    <Wrapper style={{
      display: 'grid',
      gridTemplateColumns: '[first] 25% [second] 25% [third] 25% [fourth] 25%',
      gridTemplateRows: '[row1-start] 20% [row1-end] 40% [row3-start] 40% [last]',
      justifyItems: 'center',
      alignItems: 'center',
    }}
    >
      <h4 style={{
        margin: '0',
        marginBottom: '1%',
        fontSize: '1.25em',
        fontWeight: 'bolder',
        gridColumnStart: '1',
        gridColumnEnd: '5',
        gridRowStart: '1',
        gridRowEnd: '2',
        justifySelf: 'start',
      }}
      >
        Style
        {' > '}
        {state.selectedStyle.name}
      </h4>
      {state.styles.map((style, index) => {
        if (style.style_id === state.selectedStyle.style_id) {
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
