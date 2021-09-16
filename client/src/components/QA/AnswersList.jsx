import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AnswerItem from './AnswerItem.jsx';

const Wrapper = styled.section`
height: 100%;
background: white;
`;

const H2 = styled.h2`
  /* Adapt the colors based on primary prop */

  font-size: 1.1em;
  padding: 1em;
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
        <H2 onClick={() => { setLimit((prevState) => prevState + 2); }}>
          Load More Answers
        </H2>
      </div>

    </Wrapper>
  );
};

export default AnswersList;
