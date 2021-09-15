import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Search from './Search.jsx';
import QuestionsList from './QuestionsList.jsx';
import AddQuestion from './AddQuestion.jsx';

const Wrapper = styled.section`
margin: 0;
height: 100%;
padding: 20em;
background: papayawhip;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? 'black' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'black')};

  font-size: 1.2em;
  margin: 1.2em;
  padding: 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

const Row = styled.div`
    display: flex
`;

// eslint-disable-next-line no-empty-pattern
const QA = () => {
  const [productId] = useState(48432);
  const [questions, setQuestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios.get(`/api/qa/questions?product_id=${productId}`)
      .then(({ data }) => {
        setQuestions(data.results);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (

    <Wrapper>
      <div>
        <h2> Questions and Answers </h2>
        <div className="Search">
          <Search />
        </div>
        <div className="Questions-collapsible">
          {
            isOpen && <QuestionsList questions={questions} />
          }
          <Row>
            <Button className="toggle" onClick={() => setIsOpen(!isOpen)}>
              More Answered Questions
            </Button>
            <AddQuestion />
          </Row>
        </div>
      </div>
    </Wrapper>
  );
};

export default QA;
