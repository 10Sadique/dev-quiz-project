import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <ScrollRestoration />
            <Footer />
        </div>
    );
};

export default Main;
