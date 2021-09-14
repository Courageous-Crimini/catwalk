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

const QA = ({products}) => {
    const [productId, setProductId] = useState(48432);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get(`/api/qa/questions?product_id=${productId}`)
        .then(({data}) => {
            setQuestions(data.results)
        })
        .catch((err) => { 
            console.error(err);
        })
    }, []);

    return (
        <Wrapper>
            <div> 
                <h2> Questions & Answers </h2>
                <div className="Search">
                    <Search />
                </div>
                <div className="Questions"> 
                    <QuestionsList questions={questions}/>
                </div>
                <div>
                    <AddQuestion/>
                </div>
            </div>  
        </Wrapper>
    )
}

export default QA;