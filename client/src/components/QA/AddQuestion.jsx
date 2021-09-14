import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
height: 100%;
background: white;
padding: 100px;
`;

const AddQuestion = () => {
  return (
    <Wrapper>
      <div> 
        <button> Add a question</button>
      </div>
    </Wrapper>
  )
};

export default AddQuestion;