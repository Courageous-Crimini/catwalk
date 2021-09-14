import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`

`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "black" : "white"};
  color: ${props => props.primary ? "white" : "black"};

  font-size: 1.2em;
  margin: 1.2em;
  padding: 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

const AddQuestion = () => {
  return (

      <div> 
        <Button> Add a question</Button>
      </div>

  )
};

export default AddQuestion;