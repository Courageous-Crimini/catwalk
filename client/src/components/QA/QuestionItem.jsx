/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import AnswersList from './AnswersList.jsx';
import { Modal } from './AddAnswerModal.jsx';

const Wrapper = styled.section`
height: 100%;
background: white;
margin: 20px;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
`;

const H5 = styled.h5`
    margin-left: auto;
`;

const AlignRight = styled.div`
    margin-right: auto;
    padding-right: 100px;
`;

const Button = styled.button`
  background: white;
  color: black;
  font-weight: bold;
  font-size: 1em;
  border: none;

`;

const QuestionItem = ({ question }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Wrapper>
      <Row>
        <AlignRight>
          <h2>
            Q:
            {question.question_body}
          </h2>
        </AlignRight>
        <H5>
          helpful?&nbsp;Yes
          (
          {question.question_helpfulness}
          )
          &nbsp;
          |&nbsp;&nbsp;
          <Button onClick={openModal}> Add Answer </Button>
          <Modal showModal={showModal} setShowModal={setShowModal} questionId={question.question_id} />
        </H5>
      </Row>
      <div className="Answers-collapsible">
        <AlignRight>
          <AnswersList questionId={question.question_id} />
        </AlignRight>
      </div>

    </Wrapper>
  );
};

export default QuestionItem;
