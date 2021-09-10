import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.section`
margin: 0;
height: 200px;
width: 70%;
background: papayawhip;
text-align: center;
`;

const QA = () => {
    return (
        <Wrapper>
            <div> 
                <h2> Questions & Answers </h2>
            </div>  
        </Wrapper>
    )
}

export default QA;