import React from 'react';
import styled from 'styled-components';
import AnswersList from './AnswersList.jsx';
const Wrapper = styled.section`
height: 100%;
background: white;
margin: 40px;
`;

const QuestionItem = ({question}) => {
    return (
        <Wrapper>
            <div> 
                <h2>Q: {question.question_body}</h2>
            </div>
            <div>
                <AnswersList questionId={question.question_id}/>
            </div>
        </Wrapper>
    )
}

export default QuestionItem;