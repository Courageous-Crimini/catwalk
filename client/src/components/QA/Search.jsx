import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
height: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 2em;
  margin: 1em;
  font-size: 1em;
  color: ${props => props.inputColor || "palevioletred"};
  background: white;
  border: 1px;
  border-color: black;
  border-style: solid;
  border-radius: 3px;
`;

const Search = () => (
  <Wrapper>
    <form>
        <Input type="text" name="name" placeholder="Have a quesiton? Search for Answers..." />
    </form>
  </Wrapper>
);

export default Search;