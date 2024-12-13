import Header from '../components/Header';
import Carousel from '../components/Carousel'
import Sub from '../components/Sub';
import Footer from '../components/Footer';
import CardAnimal from '../components/CardAnimal';
import React, {useEffect, useState} from 'react';

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
    
    function Main(props) {
        let [cards, setCards]=useState([]);
        
        useEffect(()=>load(), []);
        function load(){
            fetch('https://pets.xn--80ahdri7a.site/public/api/pets')
                .then(response=>response.json())
                .then(result=>{
                    console.log(result);
                    
      setCards(result.data.orders.map((card)=><CardAnimal data={card}/>));
      debugger;
                })
        }

    return (
        <div>            
            <Header/>
            <main style={{minHeight: "70vh"}}>
            <Carousel/>
            <div
             className="d-flex flex-row flex-wrap justify-content-center"
            style={{ paddingLeft: "11%", paddingRight: "11%" }} >
            {cards}</div>
            <br />
            <Sub/> 
            </main>
            <Footer/>
        </div>
    );
};

export default Main;