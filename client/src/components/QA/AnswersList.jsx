import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AnswerItem from './AnswerItem.jsx';

const Wrapper = styled.section`
height: 100%;
background: white;
`;

const LoadBtn = styled.h3`
  font-size: 1em;
  padding: 1em;
  font-style: normal;
  cursor: pointer;
`;

// eslint-disable-next-line react/prop-types
const AnswersList = ({ questionId }) => {
  const [question] = useState(questionId);
  const [answers, setAnswers] = useState([]);
  const [limit, setLimit] = useState(2);

  useEffect(() => {
    axios.get(`/api/qa/questions/${question}/answers`, { params: { count: limit } })
      .then(({ data }) => {
        // console.log('results from answerslist.jsx', data.results);
        setAnswers(data.results);
      })
      .catch((err) => {
        throw err;
      });
  }, [limit]);

  return (
    <Wrapper>
      <div>
        {
        answers.map((answer) => (
          <AnswerItem answer={answer} key={answer.answer_id} />
        ))
        }
      </div>
      <div>
        <LoadBtn onClick={() => { setLimit((prevState) => prevState + 2); }}>
          Load More Answers
        </LoadBtn>
      </div>

    </Wrapper>
  );
};

export default AnswersList;
