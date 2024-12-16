import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchCom from '../components/SearchCom';


const Search = () => {
    return (
        <div>
            <Header/>
            <main style={{minHeight: "70vh"}}>
            <SearchCom/>
            </main>
            <Footer/>
        </div>
    );
};

export default Search;