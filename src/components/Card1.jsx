/*{
    "data": {
        "id": 6,
        "kind": "Кенгуру",
        "description": "Кенгуру из Бразилии, любит прыгать, ласковая",
        "image": "/storage/images/06vZ5JD5SiY9scNCLx6NRku8f7t85CvBbSmbGObu.png"
    },
    "css_class": "carousel-item"
}*/

import React from 'react';

function Card1(props) {   
    
    return (
        <div className={props.css_class}>
        <img
          src={'https://pets.сделай.site' + props.data.image}
          className="d-block m-auto"
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