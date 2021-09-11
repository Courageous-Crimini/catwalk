import React, { useState, useEffect } from 'react';
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
    const [productId, setProductId] = useState(48432);

    useEffect(() => {
        axios.get(`/api/qa/questions?product_id=${productId}`)
        .then(({data}) => {
            console.log(data);
        })
        .catch((err) => {
            console.error(err);
        })
    }, []);

    return (
        <Wrapper>
            <div> 
                <h2> Questions & Answers </h2>
            </div>  
        </Wrapper>
    )
}

export default QA;