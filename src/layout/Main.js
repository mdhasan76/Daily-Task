import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../page/shared/Footer';
import Header from '../page/shared/Header';

const Main = () => {
    return (
        <section>
            <Header/>
            <Outlet/>
            <Footer/>
        </section>
    );
};

export default Main;