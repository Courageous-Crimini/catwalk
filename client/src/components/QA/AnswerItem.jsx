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
        &nbsp;&nbsp;
        |&nbsp;&nbsp;Helpful? Yes (
        {answer.helpfulness}
        )&nbsp;&nbsp;|&nbsp;&nbsp; Report
      </p>
    </div>
  </Wrapper>
);

export default AnswerItem;
