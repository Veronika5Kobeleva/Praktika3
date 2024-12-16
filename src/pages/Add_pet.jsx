import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Add_p from '../components/Add_p';

const Add_pet = () => {
    return (
        <div>
            <Header/>
            <main style={{minHeight: "70vh"}}>
            <Add_p/>
            </main>
            <Footer/>
        </div>
    );
};

export default Add_pet;