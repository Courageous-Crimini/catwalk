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
                <h3>A: {answer.body}</h3>
            </div>
        </Wrapper>
    )
}

export default AnswerItem;