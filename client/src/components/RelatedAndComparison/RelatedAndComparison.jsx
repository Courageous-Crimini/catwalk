import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.section`
padding: 20em;
background: #DF9EF6;
`;

const RelatedAndComparison= () => {
    return (
        <Wrapper>
            <h2> Related Products </h2>
            <h2>Your Outfits</h2>
        </Wrapper>
    )
};

export default RelatedAndComparison;