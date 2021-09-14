import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AnswerItem from './AnswerItem.jsx';

const Wrapper = styled.section`
height: 100%;
background: white;
`;

// eslint-disable-next-line react/prop-types
const AnswersList = ({ questionId }) => {
  const [question] = useState(questionId);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    axios.get(`/api/qa/questions/${question}/answers`)
      .then(({ data }) => {
        setAnswers(data.results);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <Wrapper>
      <div>
        {
        answers.map((answer) => (
          <AnswerItem answer={answer} key={answer.answer_id} />
        ))
        }
      </div>
    </Wrapper>
  );
};

export default AnswersList;
