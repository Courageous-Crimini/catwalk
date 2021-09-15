/* eslint-disable react/prop-types */
import React from 'react';
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

const AnswerItem = ({ answer }) => (
  <Wrapper>
    <Row>
      <h3>A: </h3>
      {' '}
      <p>{answer.body}</p>
    </Row>
    <div>
      <p>
        by:
        {answer.answerer_name}
        ,
        {moment(answer.date).startOf('day').fromNow()}
        {' '}
        | Helpful? Yes (
        {answer.helpfulness}
        ) | Report
      </p>
    </div>
  </Wrapper>
);

export default AnswerItem;
