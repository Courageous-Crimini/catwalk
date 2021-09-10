import React from 'react';
import styled from 'styled-components';
import Header from './Header/Header.jsx';
import Overview from './Overview/Overview.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import QA from './QA/QA.jsx';
import Reviews from './Reviews/Reviews.jsx';

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
font-family: Valera Round, sans-serif;
`

const App = () => {
    return (
        <Container>
            <Header />
            <Overview />
            <RelatedProducts/>
            <QA/>
            <Reviews/>
        </Container>
    );
};

export default App;