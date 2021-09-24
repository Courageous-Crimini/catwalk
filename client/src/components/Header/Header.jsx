import React from 'react';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';

const Wrapper = styled.section`
display: grid;
grid-template-columns: [first] 8% [second] 77% [third] 15%;
grid-template-rows: [row1-start] 100% [row1-end];
padding: 0;
background: white;
color: black;
width: 100%;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
justify-items: start;
`;

const Header = () => (
  <Wrapper id="Overview">
    <img
      src="./logo.png"
      alt="logo"
      style={{
        height: '50px',
        width: '50px',
        alignSelf: 'center',
        justifySelf: 'center',
      }}
    />
    <em>
      <h1 style={{
        alignSelf: 'center',
      }}
      >
        {' '}
        COURAGEOUS CRIMINI CLOTHING Co.
      </h1>
    </em>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'end',
      alignItems: 'center',
    }}
    >
      <BiSearch />
      <input
        type="search"
        placeholder="Search..."
        style={{
          height: '33.3%',
        }}
      />
    </div>
  </Wrapper>
);

export default Header;
