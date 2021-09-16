/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
height: 100%;
`;

const Input = styled.input`
  width: 92%;
  padding: 30px;
  margin: 0.5rem;
  font-size: 22px;
  color: 'palevioletred';
  background: white;
  border: 2px;
  border-color: black;
  border-style: solid;
  border-radius: 3px;
`;

const Search = ({ filterSearch }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    filterSearch(value);
  };

  return (
    <Wrapper>
      <form>
        <Input type="text" name="name" placeholder="Have a quesiton? Search for Answers..." value={value} onChange={handleChange} />
      </form>
    </Wrapper>
  );
};

export default Search;
