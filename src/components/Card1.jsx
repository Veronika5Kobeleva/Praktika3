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

import React from 'react';

function Card1(props) { 
    return (
        <div className={props.css_class}>
        <img
          src={'https://pets.сделай.site' + props.data.image}
          className="d-block m-auto w-50"
          alt={props.data.kind}        
        />
        <h2 className="text-center">{props.data.kind}</h2>
        <p className="text-center">
        {props.data.description}
        </p>
      </div>
    );
}

export default Card1;