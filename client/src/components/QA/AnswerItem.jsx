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
                <h3>A: </h3><p>{answer.body}</p>     
            </div>
            <div> 
                <p>by: {answer.answerer_name}, {answer.date}</p>
            </div>
        </Wrapper>
    )
}

export default AnswerItem;