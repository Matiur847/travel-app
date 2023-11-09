import React from 'react';
import Router from '../../routes/Router';
import Header from '../Header/Header';
import '../../style/Layout.css'

const Layout = () => {
    return (
        <div className='bg'>
            <Header></Header>
            <div>
                <Router></Router>
            </div>
        </div>
    );
};

export default Layout;