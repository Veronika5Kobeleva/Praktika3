import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel'
import Sub from '../components/Sub';
import Footer from '../components/Footer';
import Card6 from '../components/Card6';
import Card1 from '../components/Card1';

const Main = () => {

    // var props = {
    //     "data": {
    //         "id": 6,
    //         "kind": "Кенгуру",
    //         "description": "Кенгуру из Бразилии, любит прыгать, ласковая",
    //         "image": "https://placecats.com/millie/500/300"
    //     },
    //     "css_class": "carousel-item"
    // };
    // var props = {
    //     "data": {
    //         "id": 5,
    //         "kind": "Крокодил",
    //         "description": "Крокодил зеленый, любит людей.",
    //         "image": "https://placecats.com/neo_banana/500/300"
    //     },
    //     "css_class": "carousel-item"
    // };
    // var props = {
    //     "data": {
    //         "id": 4,
    //         "kind": "Зебра",
    //         "description": "Зебра полосатая, высокая. ",
    //         "image": "https://placecats.com/neo_2/500/300"
    //     },
    //     "css_class": "carousel-item"
    // };
    

    return (
        <div>            
            <Header/>
            <main style={{minHeight: "70vh"}}>
            <Carousel/>
            {/* <Card6/> */}
            <Sub/> 
            </main>

            {/* <Card1 {...props} />  */}

            <Footer/>
        </div>
    );
};

export default Main;