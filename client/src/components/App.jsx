import React from 'react';
import GlobalStyle from '../globalStyles.jsx';
import Header from './Header/Header.jsx';
import Overview from './Overview/Overview.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import QA from './QA/QA.jsx';
import Reviews from './Reviews/Reviews.jsx';

const App = () => {
    return (
        <div>
            <Header />
            <Overview />
            <GlobalStyle />
            <QA/>
            <RelatedProducts/>
            <Reviews/>
        </div>
    )
};

export default App;