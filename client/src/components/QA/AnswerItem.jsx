/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import moment from 'moment';

const Wrapper = styled.section`
height: 100%;
background: white;
`;

const Row = styled.div`
display: flex;
align-items: center;
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

const AnswerItem = ({ answer }) => {
  const [helpful, setHelpful] = useState(answer.helpfulness);
  const [upvoted, setUpvoted] = useState(false);
  const [reported, setReported] = useState(false);

  const handleUpvote = () => {
    if (!upvoted) {
      axios.put(`api/qa/questions/${answer.answer_id}/helpful`)
        .then(() => {
          setUpvoted(true);
          setHelpful((prevState) => prevState + 1);
        })
        .catch((err) => {
          throw err;
        });
    }
  };

  const handleReport = () => {
    if (!reported) {
      axios.put(`/api/qa/questions/${answer.answer_id}/report`)
        .then(() => {
          setReported(true);
        })
        .catch((err) => {
          throw err;
        });
    }
  };
  return (
    <Wrapper>
      <Row>
        <h3>
          A:&nbsp;
        </h3>

        <p>{answer.body}</p>
      </Row>
      <div>
        <p style={{ margin: 0 }}>
          by:&nbsp;
          {answer.answerer_name}
          ,&nbsp;
          {moment(answer.date).format('LL')}
          {'Helpful? '}
          <Button onClick={handleUpvote}>
            Yes
          </Button>
          {` (${helpful}) `}
          {reported
            ? 'Reported'
            : (
              <Button onClick={handleReport}>
                Report
              </Button>
            )}
        </p>
      </div>
    </Wrapper>
  );
};

export default AnswerItem;
