import React, { useContext } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import { StateContext } from '../App.jsx';

const Wrapper = styled.section`
background: #F3F3F3;
grid-column-start: 2;
grid-column-end: 3;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const StyleSelector = () => {
  const state = useContext(StateContext);

  return (
    <Wrapper style={{
      display: 'grid',
      gridTemplateColumns: '[first] 25% [second] 25% [third] 25% [fourth] 25%',
      gridTemplateRows: '[row1-start] 20% [row1-end] 40% [row3-start] 40% [row3-end]',
    }}
    >
      <h3 style={{}}>
        Style
        {' > '}
        {state.selectedStyle.name}
      </h3>
      <div>
        {
        state.styles.map((style, index) => {
          if (style.style_id === state.selectedStyle.style_id) {
            return (
              <img
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                src={style.photos[0].thumbnail_url}
                style={{
                  borderRadius: '50%',
                  border: '2px solid black',
                  display: 'inline',
                  height: '60px',
                  width: '60px',
                  margin: '10px',
                  cursor: 'pointer',
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
                height: '60px',
                width: '60px',
                margin: '10px',
                cursor: 'pointer',
              }}
              alt="Style"
            />
          );
        })
        }
      </div>
    </Wrapper>
  );
};

export default StyleSelector;
