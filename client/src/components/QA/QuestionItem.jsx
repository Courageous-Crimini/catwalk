/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import AnswersList from './AnswersList.jsx';

const Wrapper = styled.section`
height: 100%;
background: white;
margin: 40px;
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
    padding-right: 3em;
`;

const H2 = styled.h2`
  /* Adapt the colors based on primary prop */

  font-size: 1.1em;
  padding: 1em;
`;

const QuestionItem = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Row>
        <AlignRight>
          {' '}
          <h2>
            Q:
            {question.question_body}
          </h2>
          {' '}
        </AlignRight>
        <P>
          {' '}
          helpful? Yes
          (
          {question.question_helpfulness}
          )
          {' '}
          | Add Answer
        </P>
      </Row>
      <div className="Answers-collapsible">
        <AlignRight>
          {
                        isOpen && <AnswersList questionId={question.question_id} />
                    }
          <H2 onClick={() => setIsOpen(!isOpen)}>
            Load More Answers
          </H2>
        </AlignRight>
      </div>

    </Wrapper>
  );
};

export default QuestionItem;
