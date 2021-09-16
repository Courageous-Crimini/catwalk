/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import AnswersList from './AnswersList.jsx';

const Wrapper = styled.section`
height: 100%;
background: white;
margin: 20px;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
`;

const P = styled.p`
    margin-left: auto;
`;

const AlignRight = styled.div`
    margin-right: auto;
    padding-right: 100px;
`;

const QuestionItem = ({ question }) => (
  <Wrapper>
    <Row>
      <AlignRight>
        <h2>
          Q:
          {question.question_body}
        </h2>
      </AlignRight>
      <P>
        helpful?&nbsp;Yes
        (
        {question.question_helpfulness}
        )
        &nbsp;&nbsp;
        |&nbsp;&nbsp;Add Answer
      </P>
    </Row>
    <div className="Answers-collapsible">
      <AlignRight>
        <AnswersList questionId={question.question_id} />
      </AlignRight>
    </div>

  </Wrapper>
);

export default QuestionItem;
