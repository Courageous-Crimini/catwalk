/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import QuestionItem from './QuestionItem.jsx';

const Wrapper = styled.section`
height: 100%;
background: white;
padding: 100px;
`;

const QuestionsList = ({ questions }) => (
  <Wrapper>
    <div>

      {
          questions.map((question) => (
            <QuestionItem question={question} key={question.question_id} />
          ))
        }
    </div>
  </Wrapper>
);

export default QuestionsList;
