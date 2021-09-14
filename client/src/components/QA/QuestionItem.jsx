import React from 'react';
import styled from 'styled-components';
import AnswersList from './AnswersList.jsx';
const Wrapper = styled.section`
height: 100%;
background: white;
margin: 40px;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
`;

const P = styled.p`
    margin-left: auto;
`;

const AlignRight = styled.div`
    margin-right: auto;
    padding-right: 3em;
`;

const QuestionItem = ({question}) => {
    return (
        <Wrapper>
            <Row> 
                <AlignRight> <h2>Q: {question.question_body}</h2> </AlignRight>
                <P> helpful? Yes {question.question_helpfulness} | Add Answer</P>
            </Row>
            <AlignRight>
                <AnswersList questionId={question.question_id}/>
                </AlignRight>
        </Wrapper>
    )
}

export default QuestionItem;