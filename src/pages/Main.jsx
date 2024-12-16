import Header from '../components/Header';
import Carousel from '../components/Carousel'
import Sub from '../components/Sub';
import Footer from '../components/Footer';
import CardAnimal from '../components/CardAnimal';
import React, {useEffect, useState} from 'react';

    
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
            <style
  dangerouslySetInnerHTML={{
    __html:
      "\n            .hh{\n              background-color:  rgb(173, 49, 223);\n              color: aliceblue;\n              text-align: center;\n            }\n        "
  }}
/>    
         
            <Header/>
            <main style={{minHeight: "70vh"}}>
            <Carousel/>

<h2 className="hh">Карточки потерянных животных</h2>
  <br />
  <br />
   
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