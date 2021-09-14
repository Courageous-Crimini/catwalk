import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
height: 100%;
background: white;
`;

const AnswerItem = ({answer}) => {
    return (
        <Wrapper>
            <div> 
                {console.log(answer)}
                <h3>A: {answer.body}</h3>
                
            </div>
            <div> 
                <h5>by: {answer.answerer_name}, {answer.date}</h5>
            </div>
        </Wrapper>
    )
}

export default AnswerItem;