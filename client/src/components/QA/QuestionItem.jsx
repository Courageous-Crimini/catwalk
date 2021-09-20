/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
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
background: none!important;
border: none;
padding: 0!important;
font-weight: bold;
text-decoration: underline;
cursor: pointer;
font-family: Valera Round,sans-serif;
font-size: 16px
`;

const QuestionItem = ({ question, productInfo }) => {
  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);
  const [upvoted, setUpvoted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleUpvote = () => {
    if (!upvoted) {
      axios.put(`/api/qa/questions/${question.question_id}/helpful`)
        .then(() => {
          setUpvoted(true);
          setHelpfulness((prevState) => prevState + 1);
        })
        .catch((err) => {
          throw err;
        });
    }
  };

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
          {'Helpful? '}
          <Button onClick={handleUpvote}>
            Yes
          </Button>
          {` (${helpfulness}) `}
          {' | '}
          <Button onClick={openModal}> Add Answer </Button>
          <Modal showModal={showModal} setShowModal={setShowModal} questionId={question.question_id} productInfo={productInfo} />
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
