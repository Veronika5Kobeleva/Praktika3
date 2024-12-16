import React from 'react';
import Header from '../components/Header';
import Auth from '../components/Auth';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div>
            <Header/>
            <main style={{minHeight: "70vh"}}>
            <Auth/>
            </main>
            <Footer/>
        </div>
    );
};

export default Main;