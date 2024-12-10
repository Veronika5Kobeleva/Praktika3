import React from 'react';
import Header from '../components/Header';
import LichKab from '../components/LichKab'
import ChangeAdress from '../components/ChangeAdress';
import ChangeNumber from '../components/ChangeNumber';
import DobCard2 from '../components/DobCard2';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div>
            <Header/>
            <main style={{minHeight: "70vh"}}>
            <LichKab/>
            <ChangeAdress/>
            <ChangeNumber/> 
            <DobCard2/>
            </main>
            <Footer/>
        </div>
    );
};

export default Main;