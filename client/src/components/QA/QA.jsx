import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.section`
margin: 0;
height: 200px;
padding: 20em;
background: papayawhip;
text-align: center;
`;

const QA = () => {
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
                {/* {console.log('a list of questions', questions)} */}
                
                <h2> Questions & Answers </h2>
                <div className="Questions"> 
                    {
                        questions.map(question => (
                            <h4 key={question.question_id}>Q: {question.question_body}</h4>
                        ))
                    }
                </div>
            </div>  
        </Wrapper>
    )
}

export default QA;