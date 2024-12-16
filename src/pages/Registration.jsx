import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Registr from "../components/Registr"



const Registration = () => {
    return (
        <div>
            <Header/>
            <main style={{minHeight: "70vh"}}>
            <Registr/>
            </main>
            <Footer/>
        </div>
    );
};

export default Registration;