/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Search from './Search.jsx';
import QuestionsList from './QuestionsList.jsx';
import AddQuestion from './AddQuestion.jsx';
import { StateContext } from '../App.jsx';

const Wrapper = styled.section`
margin: 0;
height: 100%;
padding: 200px;
background: white;
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
  // const [productId] = useState(48432);
  const state = useContext(StateContext);
  const id = state.selectedProduct;
  const [questions, setQuestions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [limit, setLimit] = useState(2);
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    axios.get(`/api/qa/questions?product_id=${id}`, { params: { count: limit } })
      .then(({ data }) => {
        setFiltered(data.results);
        setQuestions(data.results);
      })
      .catch((err) => {
        throw err;
      });
    axios.get(`/api/products/${id}`)
      .then(({ data }) => {
        setProductInfo(data);
      })
      .catch((err) => {
        throw err;
      });
  }, [limit]);

  const filterSearch = (q) => {
    const filter = filtered.filter((question) => {
      if (question.question_body.toLowerCase().includes(q)) {
        return question;
      }
    });
    setQuestions(filter);
  };

  return (
    <Wrapper>
      <div>
        <h2> Questions and Answers </h2>
        <div className="Search">
          <Search questions={questions} filterSearch={filterSearch} />
        </div>
        <div className="Questions-collapsible">
          {/* {console.log('QA.jsx', productInfo)} */}
          <QuestionsList questions={questions} productInfo={productInfo} />
          <Row>
            <Button className="toggle" onClick={() => { setLimit((prevState) => prevState + 2); }}>
              More Answered Questions
            </Button>
            <AddQuestion productInfo={productInfo} />
          </Row>
        </div>
      </div>
    </Wrapper>
  );
};

export default QA;
