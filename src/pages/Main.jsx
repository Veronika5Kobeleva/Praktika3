import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel'
import Sub from '../components/Sub';
import Footer from '../components/Footer';
import Card6 from '../components/Card6';

const Main = () => {
    return (
        <div>
            <Header/>
            <main style={{minHeight: "70vh"}}>
            <Carousel/>
            <Card6/>
            <Sub/> 
            </main>
            <Footer/>
        </div>
    );
};

export default Main;